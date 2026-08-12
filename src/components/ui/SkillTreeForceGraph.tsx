import React, { useEffect, useRef, useState, useCallback, useMemo } from 'react';
import * as d3 from 'd3-force';

export interface SkillNodeData extends d3.SimulationNodeDatum {
  id: string;
  label: string;
  slug: string;
  cluster: 'mlai' | 'fullstack' | 'backend' | 'others';
  clusterName: string;
  rank: string;
  mastery: string;
  deployments: string;
  radius: number;
  color: string;
  x?: number;
  y?: number;
  vx?: number;
  vy?: number;
  fx?: number | null;
  fy?: number | null;
}

export interface SkillLinkData extends d3.SimulationLinkDatum<SkillNodeData> {
  source: string | SkillNodeData;
  target: string | SkillNodeData;
}

const SKILL_NODES_RAW: Omit<SkillNodeData, 'x' | 'y' | 'vx' | 'vy' | 'fx' | 'fy'>[] = [
  // 1. ML / AI & GenAI (S-RANK)
  { id: 'python', label: 'Python', slug: 'python', cluster: 'mlai' as const, clusterName: 'ML / AI & GENAI', rank: 'S-RANK', mastery: '95%', deployments: 'FastAPI Microservices, ML Training, Pipeline Architecture', color: '#FFFFFF', radius: 46 },
  { id: 'pytorch', label: 'PyTorch', slug: 'pytorch', cluster: 'mlai' as const, clusterName: 'ML / AI & GENAI', rank: 'S-RANK', mastery: '94%', deployments: 'Custom CNNs, Healthcare AI, Tensor Optimization', color: '#FFFFFF', radius: 44 },
  { id: 'yolo', label: 'YOLOv7/v8', slug: 'yolo', cluster: 'mlai' as const, clusterName: 'ML / AI & GENAI', rank: 'S-RANK', mastery: '92%', deployments: 'GRAZPEDWRI-DX Pediatric Fracture Detection', color: '#FFFFFF', radius: 40 },
  { id: 'opencv', label: 'OpenCV', slug: 'opencv', cluster: 'mlai' as const, clusterName: 'ML / AI & GENAI', rank: 'S-RANK', mastery: '91%', deployments: 'MPVE Framework, Medical Image Preprocessing', color: '#FFFFFF', radius: 40 },
  { id: 'onnx', label: 'ONNX Runtime', slug: 'onnx', cluster: 'mlai' as const, clusterName: 'ML / AI & GENAI', rank: 'S-RANK', mastery: '92%', deployments: '2-3x CPU Inference Acceleration on HF Spaces', color: '#FFFFFF', radius: 42 },
  { id: 'ollama', label: 'Ollama (Llama 3.2)', slug: 'ollama', cluster: 'mlai' as const, clusterName: 'ML / AI & GENAI', rank: 'S-RANK', mastery: '90%', deployments: 'Local LLM Inference, Agentic RAG, KG-oT Graphs', color: '#FFFFFF', radius: 44 },
  { id: 'gemini', label: 'Gemini 1.5 Flash', slug: 'gemini', cluster: 'mlai' as const, clusterName: 'ML / AI & GENAI', rank: 'S-RANK', mastery: '93%', deployments: 'Multimodal Vision-Language Analysis & RAG Pipelines', color: '#FFFFFF', radius: 42 },
  { id: 'openai', label: 'OpenAI API', slug: 'openai', cluster: 'mlai' as const, clusterName: 'ML / AI & GENAI', rank: 'S-RANK', mastery: '92%', deployments: 'GPT-4o Function Calling & Structured JSON Output', color: '#FFFFFF', radius: 40 },
  { id: 'rag', label: 'RAG Pipelines', slug: 'rag', cluster: 'mlai' as const, clusterName: 'ML / AI & GENAI', rank: 'S-RANK', mastery: '91%', deployments: 'Vector DB Search, Chunking, Hybrid Retrieval', color: '#FFFFFF', radius: 40 },
  { id: 'kgot', label: 'Knowledge Graph', slug: 'kgot', cluster: 'mlai' as const, clusterName: 'ML / AI & GENAI', rank: 'S-RANK', mastery: '89%', deployments: 'KG-oT Graph Networks & GNN Multi-hop Reasoning', color: '#FFFFFF', radius: 38 },
  { id: 'langchain', label: 'LangChain', slug: 'langchain', cluster: 'mlai' as const, clusterName: 'ML / AI & GENAI', rank: 'S-RANK', mastery: '89%', deployments: 'Multi-Agent Chains, Tool-Calling, Vector Memory', color: '#FFFFFF', radius: 40 },
  { id: 'scikitlearn', label: 'Scikit-Learn', slug: 'scikitlearn', cluster: 'mlai' as const, clusterName: 'ML / AI & GENAI', rank: 'A-RANK', mastery: '88%', deployments: 'Classification, Regression, Feature Pipelines', color: '#FFFFFF', radius: 38 },
  { id: 'numpy', label: 'NumPy & Pandas', slug: 'numpy', cluster: 'mlai' as const, clusterName: 'ML / AI & GENAI', rank: 'S-RANK', mastery: '95%', deployments: 'Matrix Computation, Data Extraction & Cleaning', color: '#FFFFFF', radius: 38 },
  { id: 'tesseract', label: 'Tesseract OCR', slug: 'tesseract', cluster: 'mlai' as const, clusterName: 'ML / AI & GENAI', rank: 'A-RANK', mastery: '87%', deployments: 'Document Layout Analysis, Bounding Box Extraction', color: '#FFFFFF', radius: 38 },

  // 2. Full-Stack Development (A-RANK)
  { id: 'react', label: 'React.js', slug: 'react', cluster: 'fullstack' as const, clusterName: 'FULL-STACK DEVELOPMENT', rank: 'A-RANK', mastery: '90%', deployments: 'SPA Dashboards, Custom Hooks, State Architecture', color: '#FFFFFF', radius: 44 },
  { id: 'nextjs', label: 'Next.js', slug: 'nextdotjs', cluster: 'fullstack' as const, clusterName: 'FULL-STACK DEVELOPMENT', rank: 'A-RANK', mastery: '88%', deployments: 'SSR Pages, App Router, Static Optimization', color: '#FFFFFF', radius: 42 },
  { id: 'typescript', label: 'TypeScript', slug: 'typescript', cluster: 'fullstack' as const, clusterName: 'FULL-STACK DEVELOPMENT', rank: 'A-RANK', mastery: '89%', deployments: 'Strict Type-Safe Interfaces, Generics, TSX Architecture', color: '#FFFFFF', radius: 42 },
  { id: 'javascript', label: 'JavaScript', slug: 'javascript', cluster: 'fullstack' as const, clusterName: 'FULL-STACK DEVELOPMENT', rank: 'A-RANK', mastery: '92%', deployments: 'ES6+ Engine, DOM Manipulation, Web Workers, Canvas 2D', color: '#FFFFFF', radius: 40 },
  { id: 'tailwind', label: 'Tailwind CSS', slug: 'tailwindcss', cluster: 'fullstack' as const, clusterName: 'FULL-STACK DEVELOPMENT', rank: 'A-RANK', mastery: '92%', deployments: 'Custom Utility Systems, Glassmorphism, Dark Themes', color: '#FFFFFF', radius: 40 },
  { id: 'graphql', label: 'GraphQL', slug: 'graphql', cluster: 'fullstack' as const, clusterName: 'FULL-STACK DEVELOPMENT', rank: 'B-RANK', mastery: '83%', deployments: 'Flexible API Queries, Apollo Server, Schema Resolvers', color: '#FFFFFF', radius: 38 },

  // 3. DB & Backend (A-RANK / S-RANK)
  { id: 'fastapi', label: 'FastAPI', slug: 'fastapi', cluster: 'backend' as const, clusterName: 'DB & BACKEND', rank: 'S-RANK', mastery: '91%', deployments: 'Async REST Endpoints, High-throughput API Architecture', color: '#FFFFFF', radius: 44 },
  { id: 'nodejs', label: 'Node.js', slug: 'nodedotjs', cluster: 'backend' as const, clusterName: 'DB & BACKEND', rank: 'A-RANK', mastery: '88%', deployments: 'Express.js Servers, Socket.IO WebSockets', color: '#FFFFFF', radius: 40 },
  { id: 'mongodb', label: 'MongoDB', slug: 'mongodb', cluster: 'backend' as const, clusterName: 'DB & BACKEND', rank: 'A-RANK', mastery: '87%', deployments: 'Vartalaab Chat Schemas, Mongoose ODM, NoSQL', color: '#FFFFFF', radius: 40 },
  { id: 'postgres', label: 'PostgreSQL', slug: 'postgres', cluster: 'backend' as const, clusterName: 'DB & BACKEND', rank: 'A-RANK', mastery: '86%', deployments: 'Relational Schemas, SQLAlchemy ORM, Indexing', color: '#FFFFFF', radius: 40 },
  { id: 'sqlalchemy', label: 'SQLAlchemy', slug: 'sqlalchemy', cluster: 'backend' as const, clusterName: 'DB & BACKEND', rank: 'A-RANK', mastery: '86%', deployments: 'Python Relational ORM & Async Engine', color: '#FFFFFF', radius: 38 },
  { id: 'pydantic', label: 'Pydantic', slug: 'pydantic', cluster: 'backend' as const, clusterName: 'DB & BACKEND', rank: 'A-RANK', mastery: '90%', deployments: 'Data Validation, Settings Management & Schema Parsing', color: '#FFFFFF', radius: 38 },
  { id: 'jwt', label: 'JWT & OAuth2', slug: 'jwt', cluster: 'backend' as const, clusterName: 'DB & BACKEND', rank: 'A-RANK', mastery: '88%', deployments: 'Secure Authentication, Tokens & Role RBAC', color: '#FFFFFF', radius: 38 },
  { id: 'websockets', label: 'WebSockets', slug: 'websockets', cluster: 'backend' as const, clusterName: 'DB & BACKEND', rank: 'A-RANK', mastery: '87%', deployments: 'Real-time Socket.IO Chat & Live Telemetry Streams', color: '#FFFFFF', radius: 38 },
  { id: 'redis', label: 'Redis Cache', slug: 'redis', cluster: 'backend' as const, clusterName: 'DB & BACKEND', rank: 'A-RANK', mastery: '85%', deployments: 'Pub/Sub Messaging, Session Store, Rate Limiting', color: '#FFFFFF', radius: 38 },
  { id: 'n8n', label: 'n8n Workflows', slug: 'n8n', cluster: 'backend' as const, clusterName: 'DB & BACKEND', rank: 'S-RANK', mastery: '90%', deployments: 'Automated Webhooks, Make.com, Multi-Node Workflows', color: '#FFFFFF', radius: 38 },

  // 4. Others (DevOps, Mobile & Languages)
  { id: 'docker', label: 'Docker', slug: 'docker', cluster: 'others' as const, clusterName: 'DEVOPS, MOBILE & OTHER', rank: 'B-RANK', mastery: '82%', deployments: 'Containerized Deployment, Multi-Stage Builds', color: '#FFFFFF', radius: 40 },
  { id: 'aws', label: 'AWS', slug: 'aws', cluster: 'others' as const, clusterName: 'DEVOPS, MOBILE & OTHER', rank: 'B-RANK', mastery: '82%', deployments: 'S3 Storage, EC2 Instances & Cloud Infrastructure', color: '#FFFFFF', radius: 38 },
  { id: 'huggingface', label: 'HF Spaces', slug: 'huggingface', cluster: 'others' as const, clusterName: 'DEVOPS, MOBILE & OTHER', rank: 'B-RANK', mastery: '88%', deployments: 'Model Hosting, Gradio Demos & Inference APIs', color: '#FFFFFF', radius: 40 },
  { id: 'vercel', label: 'Vercel / Render', slug: 'vercel', cluster: 'others' as const, clusterName: 'DEVOPS, MOBILE & OTHER', rank: 'B-RANK', mastery: '85%', deployments: 'Continuous Serverless Hosting & Edge Deployments', color: '#FFFFFF', radius: 38 },
  { id: 'git', label: 'Git & GitHub', slug: 'git', cluster: 'others' as const, clusterName: 'DEVOPS, MOBILE & OTHER', rank: 'B-RANK', mastery: '88%', deployments: 'Version Control, Branching Workflows & CI/CD Pipelines', color: '#FFFFFF', radius: 38 },
  { id: 'kotlin', label: 'Kotlin', slug: 'kotlin', cluster: 'others' as const, clusterName: 'DEVOPS, MOBILE & OTHER', rank: 'B-RANK', mastery: '80%', deployments: 'Native Android Studio Applications (MVVM)', color: '#FFFFFF', radius: 40 },
  { id: 'reactnative', label: 'React Native', slug: 'reactnative', cluster: 'others' as const, clusterName: 'DEVOPS, MOBILE & OTHER', rank: 'B-RANK', mastery: '80%', deployments: 'Cross-Platform Mobile Dashboards & Hooks', color: '#FFFFFF', radius: 38 },
  { id: 'java', label: 'Java', slug: 'java', cluster: 'others' as const, clusterName: 'DEVOPS, MOBILE & OTHER', rank: 'B-RANK', mastery: '82%', deployments: 'Object-Oriented Architecture & Android SDK', color: '#FFFFFF', radius: 38 },
  { id: 'clang', label: 'C Language', slug: 'c', cluster: 'others' as const, clusterName: 'DEVOPS, MOBILE & OTHER', rank: 'B-RANK', mastery: '78%', deployments: 'Low-Level System Memory & Data Structures', color: '#FFFFFF', radius: 36 }
];

const SKILL_LINKS_RAW: { source: string; target: string }[] = [
  // ML/AI links
  { source: 'python', target: 'pytorch' },
  { source: 'pytorch', target: 'yolo' },
  { source: 'pytorch', target: 'opencv' },
  { source: 'pytorch', target: 'onnx' },
  { source: 'python', target: 'scikitlearn' },
  { source: 'python', target: 'numpy' },
  { source: 'scikitlearn', target: 'numpy' },
  { source: 'opencv', target: 'tesseract' },
  { source: 'opencv', target: 'yolo' },
  { source: 'ollama', target: 'gemini' },
  { source: 'gemini', target: 'openai' },
  { source: 'gemini', target: 'rag' },
  { source: 'ollama', target: 'langchain' },
  { source: 'langchain', target: 'rag' },
  { source: 'rag', target: 'kgot' },

  // Full-Stack links
  { source: 'react', target: 'nextjs' },
  { source: 'react', target: 'typescript' },
  { source: 'react', target: 'tailwind' },
  { source: 'typescript', target: 'javascript' },
  { source: 'react', target: 'javascript' },
  { source: 'nextjs', target: 'typescript' },
  { source: 'fastapi', target: 'react' },
  { source: 'nodejs', target: 'javascript' },

  // DB & Backend links
  { source: 'fastapi', target: 'pydantic' },
  { source: 'fastapi', target: 'sqlalchemy' },
  { source: 'sqlalchemy', target: 'postgres' },
  { source: 'fastapi', target: 'redis' },
  { source: 'nodejs', target: 'mongodb' },
  { source: 'nodejs', target: 'websockets' },
  { source: 'fastapi', target: 'jwt' },
  { source: 'mongodb', target: 'postgres' },
  { source: 'python', target: 'n8n' },
  { source: 'n8n', target: 'fastapi' },

  // Others links
  { source: 'docker', target: 'huggingface' },
  { source: 'docker', target: 'aws' },
  { source: 'vercel', target: 'nextjs' },
  { source: 'git', target: 'docker' },
  { source: 'kotlin', target: 'java' },
  { source: 'reactnative', target: 'react' },
  { source: 'clang', target: 'java' },

  // Cross-Domain Bridges
  { source: 'python', target: 'ollama' },
  { source: 'python', target: 'fastapi' },
  { source: 'langchain', target: 'fastapi' },
  { source: 'docker', target: 'onnx' },
  { source: 'react', target: 'graphql' }
];

// ════════ FIXED TERMINAL HUD COMPONENT ════════
interface TerminalHUDProps {
  node: SkillNodeData | null;
}

export const TerminalHUD: React.FC<TerminalHUDProps> = ({ node }) => {
  const [displayedText, setDisplayedText] = useState({
    target: '',
    domain: '',
    competency: '',
    deployments: ''
  });
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    if (!node) {
      setDisplayedText({ target: '', domain: '', competency: '', deployments: '' });
      setIsTyping(false);
      return;
    }

    const fullTarget = node.label.toUpperCase();
    const fullDomain = node.clusterName;
    const fullCompetency = `${node.rank} [${node.mastery}]`;
    const fullDeployments = node.deployments;

    setDisplayedText({ target: '', domain: '', competency: '', deployments: '' });
    setIsTyping(true);

    let charStep = 0;
    const totalChars = fullTarget.length + fullDomain.length + fullCompetency.length + fullDeployments.length;

    const timer = setInterval(() => {
      charStep += 3;

      const targetProgress = Math.min(charStep, fullTarget.length);
      const targetChunk = fullTarget.slice(0, targetProgress);

      const domainProgress = Math.max(0, charStep - fullTarget.length);
      const domainChunk = fullDomain.slice(0, Math.min(domainProgress, fullDomain.length));

      const compProgress = Math.max(0, domainProgress - fullDomain.length);
      const compChunk = fullCompetency.slice(0, Math.min(compProgress, fullCompetency.length));

      const depProgress = Math.max(0, compProgress - fullCompetency.length);
      const depChunk = fullDeployments.slice(0, Math.min(depProgress, fullDeployments.length));

      setDisplayedText({
        target: targetChunk,
        domain: domainChunk,
        competency: compChunk,
        deployments: depChunk
      });

      if (charStep >= totalChars + 6) {
        setIsTyping(false);
        clearInterval(timer);
      }
    }, 14);

    return () => clearInterval(timer);
  }, [node?.id, node?.label, node?.clusterName, node?.rank, node?.mastery, node?.deployments]);

  return (
    <div
      className="terminal-hud-container"
      style={{
        position: 'absolute',
        bottom: '16px',
        right: '16px',
        width: '360px',
        maxWidth: 'calc(100% - 32px)',
        backgroundColor: '#0A0A0A',
        border: '1px solid #1A1A1A',
        borderRadius: '0px',
        padding: '16px 18px',
        fontFamily: 'var(--font-body, "JetBrains Mono", monospace)',
        fontSize: '11px',
        lineHeight: '1.6',
        color: '#FFFFFF',
        zIndex: 20,
        boxShadow: '0 20px 40px rgba(0, 0, 0, 0.95)',
        pointerEvents: 'none',
        transition: 'all 0.2s ease-out'
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          borderBottom: '1px solid #1A1A1A',
          paddingBottom: '8px',
          marginBottom: '12px',
          fontSize: '10px',
          letterSpacing: '1px'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#FFFFFF', fontWeight: 600 }}>
          <span
            style={{
              width: '6px',
              height: '6px',
              borderRadius: '0px',
              backgroundColor: isTyping ? '#FFFFFF' : '#888888',
              boxShadow: isTyping ? '0 0 8px rgba(255, 255, 255, 0.8)' : 'none',
              animation: isTyping ? 'pulseGlow 1.5s infinite alternate' : 'none'
            }}
          />
          // TERMINAL HUD INSPECTOR
        </div>
        <span style={{ color: '#888888', fontSize: '9px' }}>
          {isTyping ? 'SCANNING...' : node ? 'SYSTEM_ONLINE' : 'STANDBY'}
        </span>
      </div>

      {node ? (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
          <div style={{ color: '#FFFFFF', fontWeight: 700, fontSize: '12px', letterSpacing: '0.5px' }}>
            &gt; TARGET LOGGED: <span style={{ color: '#FFFFFF' }}>{displayedText.target}</span>
          </div>

          <div style={{ color: '#888888', fontSize: '11px' }}>
            &gt; DOMAIN: <span style={{ color: '#FFFFFF' }}>{displayedText.domain}</span>
          </div>

          <div style={{ color: '#888888', fontSize: '11px' }}>
            &gt; COMPETENCY:{' '}
            <span style={{ color: '#FFFFFF', fontWeight: 700 }}>
              {displayedText.competency}
            </span>
          </div>

          <div style={{ color: '#888888', marginTop: '2px', fontSize: '10.5px' }}>
            &gt; DEPLOYMENTS:
          </div>
          <div
            style={{
              color: '#FFFFFF',
              fontSize: '11px',
              paddingLeft: '10px',
              borderLeft: '2px solid #333333',
              minHeight: '32px',
              whiteSpace: 'normal',
              wordBreak: 'break-word',
              lineHeight: '1.5'
            }}
          >
            {displayedText.deployments}
            {isTyping && <span style={{ color: '#FFFFFF', animation: 'blink 0.5s infinite' }}>█</span>}
          </div>
        </div>
      ) : (
        <div style={{ color: '#888888', fontStyle: 'italic', padding: '8px 0' }}>
          &gt; HOVER OR CLICK ANY SKILL NODE TO SCAN TECHNICAL READOUT...
        </div>
      )}
    </div>
  );
};


// ════════ MAIN FORCE GRAPH COMPONENT ════════
export const SkillTreeForceGraph: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const [selectedNode, setSelectedNode] = useState<SkillNodeData | null>(null);
  const [hoveredNodeId, setHoveredNodeId] = useState<string | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [zoomScale, setZoomScale] = useState<number>(1.0);

  const hoveredNodeIdRef = useRef<string | null>(null);
  const selectedNodeRef = useRef<SkillNodeData | null>(null);
  const activeFilterRef = useRef<string>('all');
  const zoomScaleRef = useRef<number>(1.0);

  const nodesRef = useRef<SkillNodeData[]>([]);
  const linksRef = useRef<SkillLinkData[]>([]);
  const simulationRef = useRef<d3.Simulation<SkillNodeData, SkillLinkData> | null>(null);
  const draggedNodeRef = useRef<SkillNodeData | null>(null);
  const clickPulseMapRef = useRef<Map<string, number>>(new Map());

  useEffect(() => {
    hoveredNodeIdRef.current = hoveredNodeId;
  }, [hoveredNodeId]);

  useEffect(() => {
    selectedNodeRef.current = selectedNode;
  }, [selectedNode]);

  useEffect(() => {
    activeFilterRef.current = activeFilter;
  }, [activeFilter]);

  useEffect(() => {
    zoomScaleRef.current = zoomScale;
  }, [zoomScale]);

  const initGraph = useCallback((width: number, height: number) => {
    const isMobile = width < 768;

    // 4 Cluster Centers: ML/AI, Full-Stack, DB & Backend, Others
    const clusterCenters = isMobile
      ? {
          mlai: { x: width * 0.5, y: height * 0.20 },
          fullstack: { x: width * 0.5, y: height * 0.42 },
          backend: { x: width * 0.5, y: height * 0.64 },
          others: { x: width * 0.5, y: height * 0.84 }
        }
      : {
          // Top Row: ML/AI (Left) & Full-Stack (Right)
          mlai: { x: width * 0.25, y: height * 0.35 },
          fullstack: { x: width * 0.75, y: height * 0.35 },
          // Bottom Row: DB & Backend (Left) & Others (Right)
          backend: { x: width * 0.25, y: height * 0.68 },
          others: { x: width * 0.70, y: height * 0.68 }
        };

    const nodes: SkillNodeData[] = SKILL_NODES_RAW.map(n => {
      const center = clusterCenters[n.cluster];
      const radius = isMobile ? n.radius * 0.78 : n.radius;
      return {
        ...n,
        radius,
        x: center.x + (Math.random() - 0.5) * 80,
        y: center.y + (Math.random() - 0.5) * 80
      };
    });

    const links: SkillLinkData[] = SKILL_LINKS_RAW.map(l => ({ ...l }));

    nodesRef.current = nodes;
    linksRef.current = links;

    const defaultNode = nodes.find(n => n.id === 'pytorch') || nodes[0];
    setSelectedNode(defaultNode);
    selectedNodeRef.current = defaultNode;

    // HUD Exclusion force
    const hudExclusionForce = () => {
      const hudLeft = isMobile ? 0 : width - 390;
      const hudTop = height - 190;

      nodes.forEach(node => {
        if (node.x !== undefined && node.y !== undefined) {
          if (node.x > hudLeft - node.radius && node.y > hudTop - node.radius) {
            const pushLeft = (hudLeft - node.radius) - node.x;
            const pushUp = (hudTop - node.radius) - node.y;

            if (Math.abs(pushLeft) < Math.abs(pushUp)) {
              node.vx = (node.vx || 0) + pushLeft * 0.15;
            } else {
              node.vy = (node.vy || 0) + pushUp * 0.15;
            }
          }
        }
      });
    };

    const simulation = d3.forceSimulation<SkillNodeData, SkillLinkData>(nodes)
      .alphaDecay(0.02)
      .velocityDecay(0.55)
      .force('charge', d3.forceManyBody<SkillNodeData>().strength(-190))
      .force(
        'collide',
        d3.forceCollide<SkillNodeData>()
          .radius(d => d.radius + 16)
          .iterations(3)
      )
      .force(
        'link',
        d3.forceLink<SkillNodeData, SkillLinkData>(links)
          .id(d => d.id)
          .distance(isMobile ? 85 : 115)
          .strength(0.35)
      )
      .force('x', d3.forceX<SkillNodeData>(d => clusterCenters[d.cluster].x).strength(0.14))
      .force('y', d3.forceY<SkillNodeData>(d => clusterCenters[d.cluster].y).strength(0.14))
      .force('hudExclusion', hudExclusionForce);

    simulationRef.current = simulation;
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let width = (canvas.width = container.clientWidth);
    let height = (canvas.height = container.clientHeight);

    initGraph(width, height);

    const handleResize = () => {
      if (!container || !canvas) return;
      width = canvas.width = container.clientWidth;
      height = canvas.height = container.clientHeight;
      initGraph(width, height);
    };

    window.addEventListener('resize', handleResize);

    // ════════ RENDER LOOP ════════
    const render = () => {
      ctx.clearRect(0, 0, width, height);

      const nodes = nodesRef.current;
      const links = linksRef.current;
      const sim = simulationRef.current;

      if (sim) sim.tick();

      const isMobile = width < 768;
      const hudLeft = isMobile ? 0 : width - 390;
      const hudTop = height - 190;

      nodes.forEach(node => {
        if (node === draggedNodeRef.current) return;
        const pad = node.radius + 14;

        if (node.x !== undefined) node.x = Math.max(pad, Math.min(width - pad, node.x));
        if (node.y !== undefined) node.y = Math.max(pad, Math.min(height - pad, node.y));

        if (node.x !== undefined && node.y !== undefined) {
          if (node.x > hudLeft - node.radius && node.y > hudTop - node.radius) {
            node.x = hudLeft - node.radius - 4;
            node.y = Math.min(node.y, hudTop - node.radius - 4);
          }
        }
      });

      const activeHoveredId = hoveredNodeIdRef.current;
      const activeSelectedNode = selectedNodeRef.current;
      const filter = activeFilterRef.current;
      const scale = zoomScaleRef.current;

      const activeNodeId = activeHoveredId || activeSelectedNode?.id || null;

      const connectedNodeIds = new Set<string>();
      if (activeNodeId) {
        connectedNodeIds.add(activeNodeId);
        links.forEach(l => {
          const sourceId = typeof l.source === 'object' ? l.source.id : l.source;
          const targetId = typeof l.target === 'object' ? l.target.id : l.target;
          if (sourceId === activeNodeId) connectedNodeIds.add(targetId);
          if (targetId === activeNodeId) connectedNodeIds.add(sourceId);
        });
      }

      ctx.save();

      if (scale !== 1.0) {
        ctx.translate(width / 2, height / 2);
        ctx.scale(scale, scale);
        ctx.translate(-width / 2, -height / 2);
      }

      const animTime = performance.now() * 0.0012;
      const now = performance.now();

      // 1. Draw Links & Animated Data Flow Particles
      links.forEach(l => {
        const sourceNode = l.source as SkillNodeData;
        const targetNode = l.target as SkillNodeData;
        if (!sourceNode || !targetNode || sourceNode.x === undefined || targetNode.x === undefined) return;

        const isFilterActive =
          filter === 'all' || sourceNode.cluster === filter || targetNode.cluster === filter;

        const isConnectedToActive =
          activeNodeId !== null && (sourceNode.id === activeNodeId || targetNode.id === activeNodeId);

        ctx.save();

        if (isConnectedToActive && isFilterActive) {
          ctx.strokeStyle = '#FFFFFF';
          ctx.globalAlpha = 0.85;
          ctx.lineWidth = 1.8;
          ctx.shadowColor = '#FFFFFF';
          ctx.shadowBlur = 8;

          ctx.beginPath();
          ctx.moveTo(sourceNode.x!, sourceNode.y!);
          ctx.lineTo(targetNode.x!, targetNode.y!);
          ctx.stroke();

          const sx = sourceNode.x!;
          const sy = sourceNode.y!;
          const tx = targetNode.x!;
          const ty = targetNode.y!;

          const pCount = 3;
          for (let p = 0; p < pCount; p++) {
            const progress = (animTime * 0.85 + p / pCount) % 1;
            const px = sx + (tx - sx) * progress;
            const py = sy + (ty - sy) * progress;

            ctx.beginPath();
            ctx.arc(px, py, 3.5, 0, Math.PI * 2);
            ctx.fillStyle = '#FFFFFF';
            ctx.shadowColor = '#FFFFFF';
            ctx.shadowBlur = 10;
            ctx.fill();
          }
        } else {
          ctx.strokeStyle = '#FFFFFF';
          ctx.globalAlpha = isFilterActive ? (activeNodeId ? 0.03 : 0.05) : 0.01;
          ctx.lineWidth = 1;

          ctx.beginPath();
          ctx.moveTo(sourceNode.x!, sourceNode.y!);
          ctx.lineTo(targetNode.x!, targetNode.y!);
          ctx.stroke();
        }

        ctx.restore();
      });

      // 2. Draw 4 Domain Cluster Header Labels on Canvas
      const domainLabels = isMobile
        ? [
            { cluster: 'mlai', label: '// ML / AI & GENAI', x: width * 0.5, y: height * 0.05 },
            { cluster: 'fullstack', label: '// FULL-STACK DEVELOPMENT', x: width * 0.5, y: height * 0.27 },
            { cluster: 'backend', label: '// DB & BACKEND', x: width * 0.5, y: height * 0.49 },
            { cluster: 'others', label: '// DEVOPS, MOBILE & OTHER', x: width * 0.5, y: height * 0.71 }
          ]
        : [
            // Row 1
            { cluster: 'mlai', label: '// ML / AI & GENAI', x: width * 0.25, y: height * 0.08 },
            { cluster: 'fullstack', label: '// FULL-STACK DEVELOPMENT', x: width * 0.75, y: height * 0.08 },
            // Row 2
            { cluster: 'backend', label: '// DB & BACKEND', x: width * 0.25, y: height * 0.50 },
            { cluster: 'others', label: '// DEVOPS, MOBILE & OTHER', x: width * 0.70, y: height * 0.50 }
          ];

      ctx.font = '700 11px var(--font-body, "JetBrains Mono", monospace)';
      ctx.textAlign = 'center';
      domainLabels.forEach(d => {
        const isFilterActive = filter === 'all' || filter === d.cluster;
        ctx.fillStyle = '#888888';
        ctx.globalAlpha = isFilterActive ? 0.45 : 0.08;
        ctx.fillText(d.label, d.x, d.y);
      });
      ctx.globalAlpha = 1;

      // 3. Draw Skill Nodes
      nodes.forEach(node => {
        if (node.x === undefined || node.y === undefined) return;

        const isHovered = activeHoveredId === node.id;
        const isSelected = activeSelectedNode?.id === node.id;
        const isConnected = connectedNodeIds.has(node.id);
        const matchesFilter = filter === 'all' || node.cluster === filter;

        let opacity = 0.95;
        if (!matchesFilter) {
          opacity = 0.15;
        } else if (activeNodeId) {
          if (isHovered || isSelected) opacity = 1.0;
          else if (isConnected) opacity = 0.85;
          else opacity = 0.35;
        }

        ctx.save();
        ctx.globalAlpha = opacity;

        const currentRadius = isHovered || isSelected ? node.radius + 5 : node.radius;

        // Interactive Click Pulse Ring
        const pulseStart = clickPulseMapRef.current.get(node.id);
        if (pulseStart) {
          const elapsed = now - pulseStart;
          if (elapsed < 600) {
            const shockRadius = currentRadius + (elapsed / 600) * 35;
            const shockAlpha = (1 - elapsed / 600) * 0.7;
            ctx.beginPath();
            ctx.arc(node.x, node.y, shockRadius, 0, Math.PI * 2);
            ctx.strokeStyle = '#FFFFFF';
            ctx.lineWidth = 1.5;
            ctx.globalAlpha = shockAlpha;
            ctx.stroke();
          } else {
            clickPulseMapRef.current.delete(node.id);
          }
        }

        ctx.globalAlpha = opacity;

        // Outer Glow Ring for Active Hovered/Selected Node
        if (isHovered || isSelected) {
          ctx.beginPath();
          ctx.arc(node.x, node.y, currentRadius + 8, 0, Math.PI * 2);
          ctx.strokeStyle = '#FFFFFF';
          ctx.lineWidth = 2;
          ctx.shadowColor = '#FFFFFF';
          ctx.shadowBlur = 18;
          ctx.stroke();
        }

        // Dark surface node body (#0A0A0A)
        ctx.beginPath();
        ctx.arc(node.x, node.y, currentRadius, 0, Math.PI * 2);
        ctx.fillStyle = '#0A0A0A';
        ctx.fill();

        ctx.strokeStyle = isHovered || isSelected ? '#FFFFFF' : isConnected ? '#666666' : '#1A1A1A';
        ctx.lineWidth = isHovered || isSelected ? 2 : 1;
        ctx.stroke();

        // Node Skill Name Typography
        ctx.font = '700 12.5px var(--font-display, "Space Grotesk", sans-serif)';
        ctx.fillStyle = matchesFilter ? '#FFFFFF' : '#888888';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.shadowColor = '#000000';
        ctx.shadowBlur = 6;
        ctx.fillText(node.label, node.x, node.y - 4);

        // Rank Sub-label
        ctx.font = '700 9px var(--font-body, "JetBrains Mono", monospace)';
        ctx.fillStyle = isHovered || isSelected ? '#FFFFFF' : '#888888';
        ctx.fillText(node.rank, node.x, node.y + 11);

        ctx.restore();
      });

      ctx.restore();

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animId);
      if (simulationRef.current) simulationRef.current.stop();
    };
  }, [initGraph]);

  // ════════ MOUSE INTERACTION HANDLERS ════════
  const getNodeAtPos = (clientX: number, clientY: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return null;
    const rect = canvas.getBoundingClientRect();
    const scale = zoomScaleRef.current;

    let x = clientX - rect.left;
    let y = clientY - rect.top;

    if (scale !== 1.0) {
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      x = (x - centerX) / scale + centerX;
      y = (y - centerY) / scale + centerY;
    }

    return (
      nodesRef.current.find(n => {
        if (n.x === undefined || n.y === undefined) return false;
        const dx = n.x - x;
        const dy = n.y - y;
        return Math.sqrt(dx * dx + dy * dy) <= n.radius + 8;
      }) || null
    );
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    const node = getNodeAtPos(e.clientX, e.clientY);
    if (node && simulationRef.current) {
      draggedNodeRef.current = node;
      setSelectedNode(node);
      selectedNodeRef.current = node;

      clickPulseMapRef.current.set(node.id, performance.now());

      node.fx = node.x;
      node.fy = node.y;
      simulationRef.current.alphaTarget(0.25).restart();
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    let x = e.clientX - rect.left;
    let y = e.clientY - rect.top;
    const scale = zoomScaleRef.current;

    if (scale !== 1.0) {
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      x = (x - centerX) / scale + centerX;
      y = (y - centerY) / scale + centerY;
    }

    if (draggedNodeRef.current && simulationRef.current) {
      draggedNodeRef.current.fx = x;
      draggedNodeRef.current.fy = y;
    } else {
      const hovered = getNodeAtPos(e.clientX, e.clientY);
      const newHoveredId = hovered ? hovered.id : null;
      if (newHoveredId !== hoveredNodeIdRef.current) {
        setHoveredNodeId(newHoveredId);
        hoveredNodeIdRef.current = newHoveredId;
      }
      if (hovered && hovered.id !== selectedNodeRef.current?.id) {
        setSelectedNode(hovered);
        selectedNodeRef.current = hovered;
      }
    }
  };

  const handleMouseUp = () => {
    if (draggedNodeRef.current && simulationRef.current) {
      draggedNodeRef.current.fx = null;
      draggedNodeRef.current.fy = null;
      draggedNodeRef.current = null;
      simulationRef.current.alphaTarget(0);
    }
  };

  const handleShufflePhysics = () => {
    if (simulationRef.current) {
      simulationRef.current.alpha(0.6).restart();
    }
  };

  const activeInspectedNode = useMemo(() => {
    if (hoveredNodeId) {
      return nodesRef.current.find(n => n.id === hoveredNodeId) || selectedNode;
    }
    return selectedNode;
  }, [hoveredNodeId, selectedNode]);

  return (
    <div
      ref={containerRef}
      style={{
        position: 'relative',
        width: '100%',
        height: '650px',
        backgroundColor: '#000000',
        border: '1px solid #1A1A1A',
        borderRadius: '0px',
        overflow: 'hidden',
        cursor: draggedNodeRef.current ? 'grabbing' : hoveredNodeId ? 'pointer' : 'default',
        boxShadow: '0 20px 50px rgba(0, 0, 0, 0.95)'
      }}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      {/* 4 Filter Tabs: ALL, ML/AI, FULL-STACK, DB & BACKEND, OTHERS */}
      <div
        style={{
          position: 'absolute',
          top: '14px',
          left: '16px',
          zIndex: 20,
          display: 'flex',
          gap: '6px',
          flexWrap: 'wrap',
          maxWidth: 'calc(100% - 240px)'
        }}
      >
        {[
          { key: 'all', label: '[ ALL ]' },
          { key: 'mlai', label: '[ ML/AI ]' },
          { key: 'fullstack', label: '[ FULL-STACK ]' },
          { key: 'backend', label: '[ DB & BACKEND ]' },
          { key: 'others', label: '[ OTHERS ]' }
        ].map(filter => {
          const isActive = activeFilter === filter.key;
          return (
            <button
              key={filter.key}
              onClick={() => setActiveFilter(filter.key)}
              style={{
                backgroundColor: '#0A0A0A',
                color: isActive ? '#FFFFFF' : '#888888',
                border: '1px solid',
                borderColor: isActive ? '#FFFFFF' : '#1A1A1A',
                borderRadius: '0px',
                padding: '5px 10px',
                fontSize: '10px',
                fontFamily: 'var(--font-body, "JetBrains Mono", monospace)',
                fontWeight: 600,
                letterSpacing: '0.5px',
                cursor: 'pointer',
                transition: 'all 0.15s ease',
                boxShadow: isActive ? '0 0 10px rgba(255, 255, 255, 0.15)' : 'none'
              }}
            >
              {filter.label}
            </button>
          );
        })}
      </div>

      {/* Action Bar (Top Right) */}
      <div
        style={{
          position: 'absolute',
          top: '14px',
          right: '16px',
          zIndex: 20,
          display: 'flex',
          gap: '6px'
        }}
      >
        <button
          onClick={() => setZoomScale(z => Math.min(1.4, z + 0.15))}
          title="Zoom In"
          style={{
            backgroundColor: '#0A0A0A',
            color: '#FFFFFF',
            border: '1px solid #1A1A1A',
            borderRadius: '0px',
            padding: '5px 9px',
            fontSize: '11px',
            fontFamily: 'var(--font-body, "JetBrains Mono", monospace)',
            cursor: 'pointer'
          }}
        >
          [ + ]
        </button>
        <button
          onClick={() => setZoomScale(z => Math.max(0.7, z - 0.15))}
          title="Zoom Out"
          style={{
            backgroundColor: '#0A0A0A',
            color: '#FFFFFF',
            border: '1px solid #1A1A1A',
            borderRadius: '0px',
            padding: '5px 9px',
            fontSize: '11px',
            fontFamily: 'var(--font-body, "JetBrains Mono", monospace)',
            cursor: 'pointer'
          }}
        >
          [ - ]
        </button>
        <button
          onClick={() => setZoomScale(1.0)}
          title="Reset Zoom"
          style={{
            backgroundColor: '#0A0A0A',
            color: '#888888',
            border: '1px solid #1A1A1A',
            borderRadius: '0px',
            padding: '5px 9px',
            fontSize: '10px',
            fontFamily: 'var(--font-body, "JetBrains Mono", monospace)',
            cursor: 'pointer'
          }}
        >
          [ RESET ]
        </button>
        <button
          onClick={handleShufflePhysics}
          title="Re-ignite Physics Engine"
          style={{
            backgroundColor: '#0A0A0A',
            color: '#FFFFFF',
            border: '1px solid #1A1A1A',
            borderRadius: '0px',
            padding: '5px 10px',
            fontSize: '10px',
            fontFamily: 'var(--font-body, "JetBrains Mono", monospace)',
            fontWeight: 600,
            letterSpacing: '0.5px',
            cursor: 'pointer'
          }}
        >
          [ RE-SIMULATE ]
        </button>
      </div>

      {/* Background Grid */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage:
            'linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
          pointerEvents: 'none'
        }}
      />

      {/* Main Interactive Canvas */}
      <canvas ref={canvasRef} style={{ width: '100%', height: '100%', display: 'block' }} />

      {/* Fixed Terminal HUD Component */}
      <TerminalHUD node={activeInspectedNode} />

      <style>
        {`
          @keyframes pulseGlow {
            0% { opacity: 0.5; }
            100% { opacity: 1; }
          }
          @keyframes blink {
            0%, 100% { opacity: 1; }
            50% { opacity: 0; }
          }
        `}
      </style>
    </div>
  );
};

export default SkillTreeForceGraph;
