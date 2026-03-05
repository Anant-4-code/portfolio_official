export type Project = {
  id: string;
  title: string;
  subtitle?: string;
  problem: string;
  solution: string;
  impact: string;
  tech: string[];
  badges?: string[];
  links?: { label: string; href: string }[];
  previewUrl?: string;
  heroImage?: string; // CSS background image string
  category: "fullstack" | "mobile" | "research" | "creative";
};

export const engineeringProjects: Project[] = [
  {
    id: "vartalaab",
    title: "Vartalaab – Real-time Chat",
    subtitle: "Instant messaging + secure sessions",
    problem:
      "Legacy communication tools struggled with latency, stability and cohesive authentication.",
    solution:
      "Architected a MERN-based WebSocket system with JWT auth, room-based routing and observability hooks.",
    impact:
      "Reduced perceived latency by ~60% and delivered predictable, debuggable real-time behaviour.",
    tech: ["React", "Node.js", "WebSockets", "MongoDB", "JWT", "Docker"],
    badges: ["Socket.io", "MERN"],
    links: [
      { label: "GitHub", href: "https://github.com/Anant-4-code/vartalaab" },
      { label: "View Deployment", href: "https://vartalaab-seven.vercel.app/" }
    ],
    previewUrl: "https://vartalaab-seven.vercel.app/",
    heroImage:
      "radial-gradient(circle at 20% 10%, rgba(77,174,145,0.35), transparent 55%), radial-gradient(circle at 80% 90%, rgba(59,130,246,0.25), transparent 55%), linear-gradient(180deg, rgba(2,6,23,0.15), rgba(2,6,23,0.85))",
    category: "fullstack"
  },
  {
    id: "ops-dashboard",
    title: "WeatherWise – Predictive Dashboard",
    subtitle: "Real-time + ML signals under load",
    problem:
      "Stakeholders lacked a single view of metrics across services and environments.",
    solution:
      "Designed a modular dashboard with role-based access, time-series visualisation and alert surface.",
    impact:
      "Improved incident triage speed and turned scattered logs into a coherent operational picture.",
    tech: ["Next.js", "TypeScript", "PostgreSQL", "Redis", "Tailwind CSS"],
    badges: ["Next.js", "Python AI"],
    links: [
      { label: "GitHub", href: "https://github.com/Anant-4-code/Weather_app" },
      { label: "View Deployment", href: "https://anant-4-code.github.io/Weather_app/" }
    ],
    previewUrl: "https://anant-4-code.github.io/Weather_app/",
    heroImage:
      "radial-gradient(circle at 20% 10%, rgba(59,130,246,0.28), transparent 60%), radial-gradient(circle at 70% 85%, rgba(77,174,145,0.25), transparent 55%), linear-gradient(180deg, rgba(2,6,23,0.15), rgba(2,6,23,0.85))",
    category: "fullstack"
  }
  ,
  {
    id: "memory-flip",
    title: "Memory Flip",
    subtitle: "Card matching game + progressive difficulty",
    problem:
      "Most memory games feel repetitive and lack progression, feedback and a polished mobile-first UI.",
    solution:
      "Built a responsive matching game with smooth flip animations, progressive levels and localStorage-based progress tracking.",
    impact:
      "Delivered an offline-friendly browser game with replayable randomized decks and saved high-level progression.",
    tech: ["HTML5", "CSS3", "JavaScript", "Tailwind CSS"],
    badges: ["Game", "Web"],
    links: [
      { label: "GitHub", href: "https://github.com/Anant-4-code/Memory-flip" },
      {
        label: "View Deployment",
        href: "https://anant-4-code.github.io/Memory-flip/"
      }
    ],
    previewUrl: "https://anant-4-code.github.io/Memory-flip/",
    heroImage:
      "radial-gradient(circle at 25% 20%, rgba(168,85,247,0.28), transparent 55%), radial-gradient(circle at 75% 85%, rgba(34,197,94,0.22), transparent 55%), linear-gradient(180deg, rgba(2,6,23,0.15), rgba(2,6,23,0.85))",
    category: "fullstack"
  }
  ,
  {
    id: "skillgenie",
    title: "SkillGenie — AI Career Advisor",
    subtitle: "AI roadmaps + market insights",
    problem:
      "Career planning and upskilling are often generic, disconnected from real market demand and hard to personalize.",
    solution:
      "Built an AI-first platform powered by Google Gemini that generates personalized learning roadmaps, skill-gap analysis and career guidance with a modern dashboard experience.",
    impact:
      "Enabled fast, personalized career planning with adaptive roadmaps and AI mentor-style assistance in a single workflow.",
    tech: ["React", "Node.js", "Tailwind CSS", "Gemini AI"],
    badges: ["Gemini AI", "Full Stack"],
    links: [
      { label: "GitHub", href: "https://github.com/Anant-4-code/SkillGuieni" },
      {
        label: "View Deployment",
        href: "https://skillgenie-frontend.vercel.app/"
      }
    ],
    previewUrl: "https://skillgenie-frontend.vercel.app/",
    heroImage:
      "radial-gradient(circle at 20% 15%, rgba(236,72,153,0.26), transparent 55%), radial-gradient(circle at 80% 85%, rgba(59,130,246,0.22), transparent 55%), linear-gradient(180deg, rgba(2,6,23,0.15), rgba(2,6,23,0.86))",
    category: "fullstack"
  }
];

export const mobileProjects: Project[] = [
  {
    id: "calcitron",
    title: "Calcitron",
    problem:
      "Users needed a reliable scientific calculator with graphing and a predictable offline-first experience.",
    solution:
      "Built in Kotlin with a custom parsing engine, MVVM structure, and Room persistence for history and functions.",
    impact:
      "Delivered a fast, offline-capable tool with stable state handling and testable logic boundaries.",
    tech: ["Kotlin", "MVVM", "Coroutines", "Room"],
    badges: ["Kotlin Native"],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/Anant-4-code/Calcitron-Digital-ELE-Converter"
      },
      {
        label: "Download APK",
        href: "https://github.com/Anant-4-code/Calcitron-Digital-ELE-Converter/releases/download/calcitron/Calcitron.apk"
      }
    ],
    heroImage:
      "radial-gradient(circle at 30% 15%, rgba(77,174,145,0.25), transparent 55%), radial-gradient(circle at 80% 90%, rgba(148,163,184,0.18), transparent 55%), linear-gradient(180deg, rgba(2,6,23,0.1), rgba(2,6,23,0.9))",
    category: "mobile"
  },
  {
    id: "quiz-master",
    title: "Quiz Master",
    problem:
      "Timed learning apps often feel static and fail to keep users engaged through progress feedback.",
    solution:
      "Implemented real-time sync with Firebase, dynamic UI animations, and a clean Material 3 surface system.",
    impact:
      "Improved session completion by making progress and feedback feel immediate and consistent.",
    tech: ["Kotlin", "Firebase", "Material 3"],
    badges: ["Firebase", "Material 3"],
    links: [{ label: "View Source", href: "#" }],
    heroImage:
      "radial-gradient(circle at 25% 10%, rgba(59,130,246,0.25), transparent 55%), radial-gradient(circle at 75% 85%, rgba(77,174,145,0.2), transparent 55%), linear-gradient(180deg, rgba(2,6,23,0.1), rgba(2,6,23,0.9))",
    category: "mobile"
  }
];

