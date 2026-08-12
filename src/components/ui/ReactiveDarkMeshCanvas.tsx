import React, { useEffect, useRef } from 'react';

interface CalibrationSpark {
  x: number;
  y: number;
  radius: number;
  maxRadius: number;
  alpha: number;
}

const REAL_CV_LOGS = [
  '>>> torch.cuda.is_available() -> True [CUDA 12.1 // GPU_0]',
  '>>> model = YOLOv7_p6(num_classes=9, pretrained=True)',
  '>>> tensor([[[0.9621, 0.0412, 0.0018], [0.8842, 0.1120, 0.0038]]], device="cuda:0")',
  '>>> ONNX_RUNTIME_SESSION // FP16_QUANTIZED // INFERENCE_LATENCY: 14.2ms',
  '>>> MPVE_PIPELINE // FVR -> GSVE -> TCVL // OCR_ACCURACY: +23pp',
  '>>> RAG_RETRIEVAL // VECTOR_DB: FAISS // COSINE_SIMILARITY: 0.9412',
  '>>> OLLAMA_LLAMA3_2 // AGENTIC_WORKFLOW // TOKENS_PER_SEC: 48.6',
  '>>> KG_oT_GRAPH // NODES: 1420 // EDGES: 8940 // REASONING: OPTIMAL',
  '>>> FASTAPI_ENDPOINT // POST /api/v1/predict_prescription -> 200 OK',
  '>>> DOCKER_CONTAINER // HEALTH_CHECK: PASSING // CPU_LOAD: 12.4%',
  '>>> HYBRID_OR_MODEL // LP + MIP + SIMULATION // COST_REDUCTION: 18.5%',
  '>>> TESSERACT_OCR_ENGINE // PRESCRIPTION_PARSER // STATUS: ONLINE'
];

export const ReactiveDarkMeshCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -1000, y: -1000, targetX: -1000, targetY: -1000 });
  const sparksRef = useRef<CalibrationSpark[]>([]);
  const scrollRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);
    let logOffset = 0;

    // Feature 3: 3D Wireframe Sphere Geometry Nodes
    const sphereRadius = Math.min(width, height) * 0.38;
    const nodeCount = 60;
    const nodes: { x: number; y: number; z: number }[] = [];
    for (let i = 0; i < nodeCount; i++) {
      const phi = Math.acos(-1 + (2 * i) / nodeCount);
      const theta = Math.sqrt(nodeCount * Math.PI) * phi;
      nodes.push({
        x: sphereRadius * Math.cos(theta) * Math.sin(phi),
        y: sphereRadius * Math.sin(theta) * Math.sin(phi),
        z: sphereRadius * Math.cos(phi)
      });
    }

    let rotX = 0;
    let rotY = 0;

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.targetX = e.clientX;
      mouseRef.current.targetY = e.clientY;
    };

    const handleScroll = () => {
      scrollRef.current = window.scrollY;
    };

    // Feature 1 Polish: Click System Calibration Spark (#FFF700)
    const handleClick = (e: MouseEvent) => {
      sparksRef.current.push({
        x: e.clientX,
        y: e.clientY,
        radius: 2,
        maxRadius: 40,
        alpha: 1.0
      });
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('click', handleClick);

    const render = () => {
      // Smooth lerp mouse coordinates
      mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.12;
      mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.12;

      const mX = mouseRef.current.x;
      const mY = mouseRef.current.y;

      ctx.clearRect(0, 0, width, height);

      // ════════ FEATURE 3: ABSTRACT 3D DATA NODE WIREFRAME ════════
      rotY += 0.002 + (mX - width / 2) * 0.00001;
      rotX = scrollRef.current * 0.001 + (mY - height / 2) * 0.00001;

      ctx.save();
      ctx.translate(width / 2, height / 2);
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.035)';
      ctx.fillStyle = 'rgba(255, 255, 255, 0.04)';
      ctx.lineWidth = 0.8;

      const projectedNodes: { x: number; y: number }[] = [];
      nodes.forEach(node => {
        // Rotate Y
        const x1 = node.x * Math.cos(rotY) + node.z * Math.sin(rotY);
        const z1 = -node.x * Math.sin(rotY) + node.z * Math.cos(rotY);
        // Rotate X
        const y2 = node.y * Math.cos(rotX) - z1 * Math.sin(rotX);
        const z2 = node.y * Math.sin(rotX) + z1 * Math.cos(rotX);

        const fov = 600;
        const scale = fov / (fov + z2 + 400);
        const pX = x1 * scale;
        const pY = y2 * scale;
        projectedNodes.push({ x: pX, y: pY });

        ctx.beginPath();
        ctx.arc(pX, pY, 1.2 * scale, 0, Math.PI * 2);
        ctx.fill();
      });

      // Connect near nodes with wireframe lines
      for (let i = 0; i < projectedNodes.length; i++) {
        for (let j = i + 1; j < projectedNodes.length; j++) {
          const dx = projectedNodes[i].x - projectedNodes[j].x;
          const dy = projectedNodes[i].y - projectedNodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 110) {
            ctx.beginPath();
            ctx.moveTo(projectedNodes[i].x, projectedNodes[i].y);
            ctx.lineTo(projectedNodes[j].x, projectedNodes[j].y);
            ctx.stroke();
          }
        }
      }
      ctx.restore();

      // ════════ FEATURE 1: COMPUTER VISION DOT-MATRIX GRID (opacity: 0.03) ════════
      ctx.fillStyle = 'rgba(255, 255, 255, 0.03)';
      const dotSpacing = 32;
      for (let x = dotSpacing / 2; x < width; x += dotSpacing) {
        for (let y = dotSpacing / 2; y < height; y += dotSpacing) {
          ctx.fillRect(x, y, 1.2, 1.2);
        }
      }

      // ════════ FEATURE 2: GHOST TERMINAL LOG (KINETIC TYPOGRAPHY) ════════
      logOffset += 0.4;
      if (logOffset > height) logOffset = 0;

      ctx.save();
      // Mask text to be invisible except inside cursor radial spotlight
      if (mX >= 0 && mY >= 0) {
        ctx.beginPath();
        ctx.arc(mX, mY, 260, 0, Math.PI * 2);
        ctx.clip();
      } else {
        ctx.beginPath();
        ctx.arc(-1000, -1000, 0, 0, Math.PI * 2);
        ctx.clip();
      }

      ctx.font = '10px "Space Grotesk", monospace';
      ctx.fillStyle = 'rgba(255, 255, 255, 0.35)';
      const logX = width * 0.5 - 240;
      const lineHeight = 28;

      for (let i = -10; i < Math.ceil(height / lineHeight) + 10; i++) {
        const logIndex = Math.abs(i) % REAL_CV_LOGS.length;
        const textY = (i * lineHeight + logOffset) % (height + 200) - 100;
        ctx.fillText(REAL_CV_LOGS[logIndex], logX, textY);
      }
      ctx.restore();

      // ════════ FEATURE 1 INTERACTION: CV TRACKING RETICLE & BOUNDING BOX ════════
      if (mX >= 0 && mY >= 0) {
        const boxW = 120;
        const boxH = 90;
        const bX = mX - boxW / 2;
        const bY = mY - boxH / 2;

        ctx.strokeStyle = 'rgba(255, 255, 255, 0.35)';
        ctx.lineWidth = 1;
        ctx.setLineDash([4, 4]);

        // Draw bounding box
        ctx.strokeRect(bX, bY, boxW, boxH);
        ctx.setLineDash([]);

        // Corner reticle ticks
        const tickLen = 8;
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.8)';
        // Top-left
        ctx.beginPath(); ctx.moveTo(bX, bY + tickLen); ctx.lineTo(bX, bY); ctx.lineTo(bX + tickLen, bY); ctx.stroke();
        // Top-right
        ctx.beginPath(); ctx.moveTo(bX + boxW - tickLen, bY); ctx.lineTo(bX + boxW, bY); ctx.lineTo(bX + boxW, bY + tickLen); ctx.stroke();
        // Bottom-left
        ctx.beginPath(); ctx.moveTo(bX, bY + boxH - tickLen); ctx.lineTo(bX, bY + boxH); ctx.lineTo(bX + tickLen, bY + boxH); ctx.stroke();
        // Bottom-right
        ctx.beginPath(); ctx.moveTo(bX + boxW - tickLen, bY + boxH); ctx.lineTo(bX + boxW, bY + boxH); ctx.lineTo(bX + boxW, bY + boxH - tickLen); ctx.stroke();

        // Center crosshair dot
        ctx.fillStyle = '#FFFFFF';
        ctx.fillRect(mX - 1, mY - 1, 2, 2);

        // Model metadata label
        ctx.font = '8px monospace';
        ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
        ctx.fillText('[ CV_DET // YOLOv8: 0.964 ]', bX, bY - 6);
      }

      // ════════ FEATURE 1 POLISH: LEMON-YELLOW (#FFF700) CALIBRATION SPARK ════════
      sparksRef.current = sparksRef.current.filter(spark => spark.alpha > 0.02);
      sparksRef.current.forEach(spark => {
        spark.radius += (spark.maxRadius - spark.radius) * 0.2;
        spark.alpha *= 0.88;

        ctx.strokeStyle = `rgba(255, 247, 0, ${spark.alpha})`;
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.arc(spark.x, spark.y, spark.radius, 0, Math.PI * 2);
        ctx.stroke();

        // Inner cross spark
        const cLen = spark.radius * 0.4;
        ctx.beginPath();
        ctx.moveTo(spark.x - cLen, spark.y); ctx.lineTo(spark.x + cLen, spark.y);
        ctx.moveTo(spark.x, spark.y - cLen); ctx.lineTo(spark.x, spark.y + cLen);
        ctx.stroke();

        // Text tag
        ctx.font = '8px monospace';
        ctx.fillStyle = `rgba(255, 247, 0, ${spark.alpha})`;
        ctx.fillText('[ CALIBRATED ]', spark.x + 8, spark.y - 8);
      });

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('click', handleClick);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        inset: 0,
        pointerEvents: 'none',
        zIndex: 1
      }}
    />
  );
};

export default ReactiveDarkMeshCanvas;
