module.exports = [
"[project]/components/ui/Section.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Section",
    ()=>Section
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
"use client";
;
;
function Section({ id, children, className }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].section, {
        id: id,
        initial: {
            opacity: 0,
            y: 30
        },
        whileInView: {
            opacity: 1,
            y: 0
        },
        viewport: {
            once: true,
            amount: 0.2
        },
        transition: {
            duration: 0.4,
            ease: [
                0.4,
                0,
                0.2,
                1
            ]
        },
        className: `px-4 py-16 sm:px-6 md:py-20 lg:px-8 lg:py-28 ${className ?? ""}`,
        children: children
    }, void 0, false, {
        fileName: "[project]/components/ui/Section.tsx",
        lineNumber: 14,
        columnNumber: 5
    }, this);
}
}),
"[project]/data/projects.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "engineeringProjects",
    ()=>engineeringProjects,
    "mobileProjects",
    ()=>mobileProjects
]);
const engineeringProjects = [
    {
        id: "vartalaab",
        title: "Vartalaab – Real-time Chat",
        subtitle: "Instant messaging + secure sessions",
        problem: "Legacy communication tools struggled with latency, stability and cohesive authentication.",
        solution: "Architected a MERN-based WebSocket system with JWT auth, room-based routing and observability hooks.",
        impact: "Reduced perceived latency by ~60% and delivered predictable, debuggable real-time behaviour.",
        tech: [
            "React",
            "Node.js",
            "WebSockets",
            "MongoDB",
            "JWT",
            "Docker"
        ],
        badges: [
            "Socket.io",
            "MERN"
        ],
        links: [
            {
                label: "GitHub",
                href: "#"
            },
            {
                label: "View Deployment",
                href: "#"
            }
        ],
        heroImage: "radial-gradient(circle at 20% 10%, rgba(77,174,145,0.35), transparent 55%), radial-gradient(circle at 80% 90%, rgba(59,130,246,0.25), transparent 55%), linear-gradient(180deg, rgba(2,6,23,0.15), rgba(2,6,23,0.85))",
        category: "fullstack"
    },
    {
        id: "ops-dashboard",
        title: "WeatherWise – Predictive Dashboard",
        subtitle: "Real-time + ML signals under load",
        problem: "Stakeholders lacked a single view of metrics across services and environments.",
        solution: "Designed a modular dashboard with role-based access, time-series visualisation and alert surface.",
        impact: "Improved incident triage speed and turned scattered logs into a coherent operational picture.",
        tech: [
            "Next.js",
            "TypeScript",
            "PostgreSQL",
            "Redis",
            "Tailwind CSS"
        ],
        badges: [
            "Next.js",
            "Python AI"
        ],
        links: [
            {
                label: "GitHub",
                href: "#"
            },
            {
                label: "Live Demo",
                href: "#"
            }
        ],
        heroImage: "radial-gradient(circle at 20% 10%, rgba(59,130,246,0.28), transparent 60%), radial-gradient(circle at 70% 85%, rgba(77,174,145,0.25), transparent 55%), linear-gradient(180deg, rgba(2,6,23,0.15), rgba(2,6,23,0.85))",
        category: "fullstack"
    }
];
const mobileProjects = [
    {
        id: "calcitron",
        title: "Calcitron",
        problem: "Users needed a reliable scientific calculator with graphing and a predictable offline-first experience.",
        solution: "Built in Kotlin with a custom parsing engine, MVVM structure, and Room persistence for history and functions.",
        impact: "Delivered a fast, offline-capable tool with stable state handling and testable logic boundaries.",
        tech: [
            "Kotlin",
            "MVVM",
            "Coroutines",
            "Room"
        ],
        badges: [
            "Kotlin Native"
        ],
        links: [
            {
                label: "View Source",
                href: "#"
            }
        ],
        heroImage: "radial-gradient(circle at 30% 15%, rgba(77,174,145,0.25), transparent 55%), radial-gradient(circle at 80% 90%, rgba(148,163,184,0.18), transparent 55%), linear-gradient(180deg, rgba(2,6,23,0.1), rgba(2,6,23,0.9))",
        category: "mobile"
    },
    {
        id: "quiz-master",
        title: "Quiz Master",
        problem: "Timed learning apps often feel static and fail to keep users engaged through progress feedback.",
        solution: "Implemented real-time sync with Firebase, dynamic UI animations, and a clean Material 3 surface system.",
        impact: "Improved session completion by making progress and feedback feel immediate and consistent.",
        tech: [
            "Kotlin",
            "Firebase",
            "Material 3"
        ],
        badges: [
            "Firebase",
            "Material 3"
        ],
        links: [
            {
                label: "View Source",
                href: "#"
            }
        ],
        heroImage: "radial-gradient(circle at 25% 10%, rgba(59,130,246,0.25), transparent 55%), radial-gradient(circle at 75% 85%, rgba(77,174,145,0.2), transparent 55%), linear-gradient(180deg, rgba(2,6,23,0.1), rgba(2,6,23,0.9))",
        category: "mobile"
    }
];
}),
"[project]/components/ui/TechTag.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TechTag",
    ()=>TechTag
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
function TechTag({ label }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: "tech-pill",
        "data-cursor": "card",
        children: label
    }, void 0, false, {
        fileName: "[project]/components/ui/TechTag.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/sections/engineering/FullStackSection.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FullStackSection",
    ()=>FullStackSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Section$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/Section.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$projects$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/projects.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$TechTag$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/TechTag.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
function FullStackSection() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Section$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Section"], {
        id: "fullstack",
        className: "pt-10 md:pt-14",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-7 flex items-center gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex h-11 w-11 items-center justify-center rounded-xl border border-emerald-400/25 bg-emerald-500/10 text-emerald-200",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-lg font-semibold",
                            children: "⟠"
                        }, void 0, false, {
                            fileName: "[project]/components/sections/engineering/FullStackSection.tsx",
                            lineNumber: 12,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/sections/engineering/FullStackSection.tsx",
                        lineNumber: 11,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-2xl font-semibold tracking-tight text-slate-50",
                        children: "Full Stack Projects"
                    }, void 0, false, {
                        fileName: "[project]/components/sections/engineering/FullStackSection.tsx",
                        lineNumber: 14,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/sections/engineering/FullStackSection.tsx",
                lineNumber: 10,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 gap-6 lg:grid-cols-2",
                children: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$projects$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["engineeringProjects"].map((project)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                        className: "group relative flex flex-col overflow-hidden rounded-2xl border border-slate-800/80 bg-slate-950/35 shadow-2xl transition-all duration-350 ease-lab-ease hover:border-emerald-400/40 glow-border",
                        "data-cursor": "card",
                        onMouseMove: (event)=>{
                            const target = event.currentTarget;
                            const rect = target.getBoundingClientRect();
                            const x = (event.clientX - rect.left) / rect.width * 100;
                            const y = (event.clientY - rect.top) / rect.height * 100;
                            target.style.setProperty("--spotlight-x", `${x}%`);
                            target.style.setProperty("--spotlight-y", `${y}%`);
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "spotlight-mask"
                            }, void 0, false, {
                                fileName: "[project]/components/sections/engineering/FullStackSection.tsx",
                                lineNumber: 34,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative h-48 w-full overflow-hidden",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute inset-0 z-10 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"
                                    }, void 0, false, {
                                        fileName: "[project]/components/sections/engineering/FullStackSection.tsx",
                                        lineNumber: 37,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "h-full w-full transition-transform duration-450 ease-lab-ease group-hover:scale-[1.03]",
                                        style: {
                                            backgroundImage: project.heroImage ?? undefined
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/components/sections/engineering/FullStackSection.tsx",
                                        lineNumber: 38,
                                        columnNumber: 15
                                    }, this),
                                    project.badges?.length ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute right-4 top-4 z-20 flex gap-2",
                                        children: project.badges.slice(0, 2).map((b)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "rounded-md border border-white/10 bg-black/40 px-2 py-1 text-[0.68rem] font-medium tracking-wide text-slate-100 backdrop-blur-md",
                                                children: b
                                            }, b, false, {
                                                fileName: "[project]/components/sections/engineering/FullStackSection.tsx",
                                                lineNumber: 48,
                                                columnNumber: 21
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/components/sections/engineering/FullStackSection.tsx",
                                        lineNumber: 46,
                                        columnNumber: 17
                                    }, this) : null
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/sections/engineering/FullStackSection.tsx",
                                lineNumber: 36,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-1 flex-col p-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mb-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-lg font-semibold text-slate-50 transition-colors duration-250 ease-lab-ease group-hover:text-emerald-200",
                                                children: project.title
                                            }, void 0, false, {
                                                fileName: "[project]/components/sections/engineering/FullStackSection.tsx",
                                                lineNumber: 61,
                                                columnNumber: 17
                                            }, this),
                                            project.subtitle ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "mt-1 text-[0.82rem] text-slate-400",
                                                children: project.subtitle
                                            }, void 0, false, {
                                                fileName: "[project]/components/sections/engineering/FullStackSection.tsx",
                                                lineNumber: 65,
                                                columnNumber: 19
                                            }, this) : null,
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "problem-box mt-4 rounded-xl p-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-emerald-200/70",
                                                        children: "Problem Statement"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/sections/engineering/FullStackSection.tsx",
                                                        lineNumber: 71,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "mt-1 text-[0.82rem] leading-relaxed text-slate-200/90",
                                                        children: project.problem
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/sections/engineering/FullStackSection.tsx",
                                                        lineNumber: 74,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/sections/engineering/FullStackSection.tsx",
                                                lineNumber: 70,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "mt-4 text-sm leading-relaxed text-slate-400",
                                                children: project.solution
                                            }, void 0, false, {
                                                fileName: "[project]/components/sections/engineering/FullStackSection.tsx",
                                                lineNumber: 79,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/sections/engineering/FullStackSection.tsx",
                                        lineNumber: 60,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-auto border-t border-white/5 pt-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-wrap gap-1.5",
                                                children: project.tech.slice(0, 6).map((tech)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$TechTag$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TechTag"], {
                                                        label: tech
                                                    }, tech, false, {
                                                        fileName: "[project]/components/sections/engineering/FullStackSection.tsx",
                                                        lineNumber: 87,
                                                        columnNumber: 21
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/components/sections/engineering/FullStackSection.tsx",
                                                lineNumber: 85,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-4 flex items-center justify-between text-sm",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-4",
                                                        children: (project.links ?? []).slice(0, 1).map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                href: link.href,
                                                                className: "text-slate-400 transition-colors duration-250 ease-lab-ease hover:text-slate-100",
                                                                "data-cursor": "link",
                                                                children: link.label
                                                            }, link.label, false, {
                                                                fileName: "[project]/components/sections/engineering/FullStackSection.tsx",
                                                                lineNumber: 94,
                                                                columnNumber: 23
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/sections/engineering/FullStackSection.tsx",
                                                        lineNumber: 92,
                                                        columnNumber: 19
                                                    }, this),
                                                    (project.links ?? []).slice(1, 2).map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                            href: link.href,
                                                            className: "inline-flex items-center gap-1 font-medium text-emerald-200 transition-colors duration-250 ease-lab-ease hover:text-emerald-100",
                                                            "data-cursor": "link",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    children: link.label
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/sections/engineering/FullStackSection.tsx",
                                                                    lineNumber: 111,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-base leading-none",
                                                                    children: "↗"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/sections/engineering/FullStackSection.tsx",
                                                                    lineNumber: 112,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, link.label, true, {
                                                            fileName: "[project]/components/sections/engineering/FullStackSection.tsx",
                                                            lineNumber: 105,
                                                            columnNumber: 21
                                                        }, this))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/sections/engineering/FullStackSection.tsx",
                                                lineNumber: 91,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/sections/engineering/FullStackSection.tsx",
                                        lineNumber: 84,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/sections/engineering/FullStackSection.tsx",
                                lineNumber: 59,
                                columnNumber: 13
                            }, this)
                        ]
                    }, project.id, true, {
                        fileName: "[project]/components/sections/engineering/FullStackSection.tsx",
                        lineNumber: 21,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/sections/engineering/FullStackSection.tsx",
                lineNumber: 19,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/sections/engineering/FullStackSection.tsx",
        lineNumber: 9,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/ui/ProgressRing.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProgressRing",
    ()=>ProgressRing
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/utils/use-in-view.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
;
function ProgressRing({ size = 120, strokeWidth = 8, progress, label, caption }) {
    const center = size / 2;
    const radius = center - strokeWidth;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference * (1 - progress / 100);
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const inView = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useInView"])(ref, {
        once: true,
        margin: "-80px"
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "glass-surface card-hover flex flex-col items-center gap-3 rounded-2xl p-5",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        width: size,
                        height: size,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                cx: center,
                                cy: center,
                                r: radius,
                                stroke: "rgba(30,64,175,0.6)",
                                strokeWidth: strokeWidth,
                                fill: "transparent"
                            }, void 0, false, {
                                fileName: "[project]/components/ui/ProgressRing.tsx",
                                lineNumber: 32,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].circle, {
                                ref: ref,
                                cx: center,
                                cy: center,
                                r: radius,
                                stroke: "url(#progress-gradient)",
                                strokeWidth: strokeWidth,
                                fill: "transparent",
                                strokeDasharray: circumference,
                                strokeDashoffset: circumference,
                                animate: inView ? {
                                    strokeDashoffset: offset
                                } : undefined,
                                transition: {
                                    duration: 1.5,
                                    ease: [
                                        0.16,
                                        1,
                                        0.3,
                                        1
                                    ]
                                },
                                strokeLinecap: "round"
                            }, void 0, false, {
                                fileName: "[project]/components/ui/ProgressRing.tsx",
                                lineNumber: 40,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                                    id: "progress-gradient",
                                    x1: "0%",
                                    y1: "0%",
                                    x2: "100%",
                                    y2: "100%",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                            offset: "0%",
                                            stopColor: "#4DAE91"
                                        }, void 0, false, {
                                            fileName: "[project]/components/ui/ProgressRing.tsx",
                                            lineNumber: 59,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                            offset: "100%",
                                            stopColor: "#A5F3C6"
                                        }, void 0, false, {
                                            fileName: "[project]/components/ui/ProgressRing.tsx",
                                            lineNumber: 60,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/ui/ProgressRing.tsx",
                                    lineNumber: 58,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/ui/ProgressRing.tsx",
                                lineNumber: 57,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ui/ProgressRing.tsx",
                        lineNumber: 31,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "pointer-events-none absolute inset-0 flex items-center justify-center text-sm font-semibold text-emerald-100",
                        children: [
                            Math.round(progress),
                            "%"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ui/ProgressRing.tsx",
                        lineNumber: 64,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ui/ProgressRing.tsx",
                lineNumber: 30,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-xs font-medium uppercase tracking-[0.18em] text-slate-400",
                children: label
            }, void 0, false, {
                fileName: "[project]/components/ui/ProgressRing.tsx",
                lineNumber: 68,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-[0.74rem] text-slate-400",
                children: caption
            }, void 0, false, {
                fileName: "[project]/components/ui/ProgressRing.tsx",
                lineNumber: 71,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/ui/ProgressRing.tsx",
        lineNumber: 29,
        columnNumber: 5
    }, this);
}
}),
"[project]/node_modules/framer-motion/dist/es/render/dom/viewport/index.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "inView",
    ()=>inView
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/motion-dom/dist/es/index.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$resolve$2d$elements$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/motion-dom/dist/es/utils/resolve-elements.mjs [app-ssr] (ecmascript)");
;
const thresholds = {
    some: 0,
    all: 1
};
function inView(elementOrSelector, onStart, { root, margin: rootMargin, amount = "some" } = {}) {
    const elements = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$resolve$2d$elements$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["resolveElements"])(elementOrSelector);
    const activeIntersections = new WeakMap();
    const onIntersectionChange = (entries)=>{
        entries.forEach((entry)=>{
            const onEnd = activeIntersections.get(entry.target);
            /**
             * If there's no change to the intersection, we don't need to
             * do anything here.
             */ if (entry.isIntersecting === Boolean(onEnd)) return;
            if (entry.isIntersecting) {
                const newOnEnd = onStart(entry);
                if (typeof newOnEnd === "function") {
                    activeIntersections.set(entry.target, newOnEnd);
                } else {
                    observer.unobserve(entry.target);
                }
            } else if (typeof onEnd === "function") {
                onEnd(entry);
                activeIntersections.delete(entry.target);
            }
        });
    };
    const observer = new IntersectionObserver(onIntersectionChange, {
        root,
        rootMargin,
        threshold: typeof amount === "number" ? amount : thresholds[amount]
    });
    elements.forEach((element)=>observer.observe(element));
    return ()=>observer.disconnect();
}
;
}),
"[project]/node_modules/framer-motion/dist/es/utils/use-in-view.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useInView",
    ()=>useInView
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$viewport$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/dom/viewport/index.mjs [app-ssr] (ecmascript)");
;
;
function useInView(ref, { root, margin, amount, once = false } = {}) {
    const [isInView, setInView] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!ref.current || once && isInView) return;
        const onEnter = ()=>{
            setInView(true);
            return once ? undefined : ()=>setInView(false);
        };
        const options = {
            root: root && root.current || undefined,
            margin,
            amount
        };
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$viewport$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["inView"])(ref.current, onEnter, options);
    }, [
        root,
        ref,
        margin,
        once,
        amount
    ]);
    return isInView;
}
;
}),
];

//# sourceMappingURL=_4c6061d3._.js.map