"use client";

import { useState } from "react";

const PROJECTS = [
  {
    id: "travel_planner",
    label: "TRAVEL_PLANNER",
    title: "Gamified Travel Itinerary Planner",
    status: "ONLINE",
    statusColor: "bg-emerald-500",
    description:
      "A full-stack travel planning platform that generates trip itineraries and gamifies task completion with points and leaderboards.",
    frontend: ["React", "Next.js", "Tailwind CSS", "Axios", "TypeScript"],
    backend: ["Node.js", "Express.js", "REST APIs", "Socket.IO"],
    database: ["MongoDB Atlas"],
    deployment: ["Vercel", "Render (Chat Server)"],
    github: "https://github.com/Bhumika-Meena/Travel-Planner",
    live: "https://travel-planner-liard-ten.vercel.app/"
  },
  {
    id: "event_portal",
    label: "EVENT_MANAGEMENT_PORTAL",
    title: "Event & Club Management Portal",
    status: "DEPLOYED",
    statusColor: "bg-dusty-rose",
    description:
      "Full-stack university event management platform with role-based dashboards for admins, club managers, and students.",
    frontend: ["Next.js", "Tailwind CSS"],
    backend: ["Node.js", "Express.js", "REST APIs"],
    database: ["PostgreSQL", "Prisma ORM"],
    deployment: ["AWS", "Render"],
    github: "https://github.com/Bhumika-Meena/Event-Club-Management",
    live: "https://event-club-management.vercel.app/"
  }
];

const SYSTEM_MODULES = [
  { key: "frontend", title: "FRONTEND", icon: "desktop_windows", code: "0x4F1", metricLabel: "MEMORY_LOAD", metricValue: "100%", width: "w-full" },
  { key: "backend", title: "BACKEND", icon: "memory", code: "0x2A9", metricLabel: "RUNTIME_STATUS", metricValue: "ACTIVE", width: "w-4/5" },
  { key: "database", title: "DATABSE", icon: "storage", code: "0x9E2", metricLabel: "STORAGE_USED", metricValue: "CLOUD_DB", width: "w-1/3" },
  { key: "deployment", title: "TOOLS", icon: "cloud_upload", code: "0x7C4", metricLabel: "CLUSTER_UP", metricValue: "100%", width: "w-full" }
];

export function Projects() {

  const [activeProject, setActiveProject] = useState(PROJECTS[0].id);
  const project = PROJECTS.find(p => p.id === activeProject);

  return (

    <section id="projects" className="relative min-h-screen pt-24 pb-32">

      <div className="absolute inset-0 pointer-events-none canvas-grid" />

      <div className="relative mx-auto max-w-6xl px-6 sm:px-8 lg:px-12">

        {/* HEADER */}

        <div className="mb-8">

          <h1 className="font-mono text-2xl font-bold uppercase tracking-tight text-charcoal sm:text-3xl">
          DEPLOYMENTS.LOG
          </h1>

          <div className="mt-2 flex items-center gap-3">

            <span className="rounded-lg bg-blush/80 px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-wider text-charcoal/80">
              v4.2.0-STABLE
            </span>

            <span className="flex items-center gap-2 font-mono text-[10px] uppercase text-charcoal/60">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              STATUS: VERIFIED
            </span>

          </div>

        </div>


        <div className="grid gap-6 lg:grid-cols-[240px_1fr]">


          {/* SIDEBAR */}

          <aside className="rounded-2xl bg-blush/70 p-5 skeuo-shadow">

            <h3 className="mb-4 font-mono text-[9px] font-bold uppercase tracking-[0.28em] text-charcoal/50">
              PROJECT_DIRECTORY
            </h3>

            <ul className="space-y-1 font-mono text-[11px]">

              <li className="flex items-center gap-2 text-charcoal/70">
                <span className="material-symbols-outlined text-[16px]">folder_open</span>
                PROJECTS
              </li>

              <div className="ml-6 space-y-1 border-l border-charcoal/10 pl-3">

                {PROJECTS.map(p => (
                  <li key={p.id}>
                    <button
                      onClick={() => setActiveProject(p.id)}
                      className={`flex w-full items-center gap-2 rounded-md px-2 py-1 text-left transition-all duration-200 ${activeProject === p.id
                          ? "bg-dusty-rose/80 text-white"
                          : "text-charcoal/70 hover:bg-white/70"
                        }`}
                    >
                      <span className="material-symbols-outlined text-[14px]">description</span>
                      <span className="truncate">{p.label}</span>
                    </button>
                  </li>
                ))}

              </div>

            </ul>

            {/* REGISTRY HEALTH */}

            <div className="mt-8">

              <h3 className="mb-3 font-mono text-[9px] font-bold uppercase tracking-[0.28em] text-charcoal/50">
                REGISTRY HEALTH
              </h3>

              <div className="mb-2 flex justify-between font-mono text-[10px] text-charcoal/70">
                <span>UPTIME</span>
                <span className="font-semibold text-charcoal">99.998%</span>
              </div>

              <div className="flex gap-0.5 overflow-hidden rounded-md">
                {[1, 2, 3, 4, 5, 6].map(i => (
                  <div
                    key={i}
                    className={`h-2 flex-1 rounded-sm ${i <= 5 ? "bg-dusty-rose/80" : "bg-blush"
                      }`}
                  />
                ))}
              </div>

            </div>

          </aside>


          {/* RIGHT PANEL */}

          <div className="rounded-2xl bg-white/95 p-6 skeuo-shadow">

            <div className="mb-6 flex items-center justify-between">

              <h2 className="font-mono text-lg font-bold uppercase tracking-tight text-charcoal">
                PROJECT_REGISTRY.INV
              </h2>

              <div className="flex items-center gap-2 font-mono text-[10px] uppercase text-charcoal/60">
                <span className={`h-2 w-2 rounded-full ${project.statusColor}`} />
                SYSTEM: {project.status}
              </div>

            </div>


            {/* SYSTEM MODULE CARDS */}

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

              {SYSTEM_MODULES.map(module => (
                <SystemCard
                  key={module.key}
                  icon={module.icon}
                  title={module.title}
                  items={project[module.key]}
                  code={module.code}
                  metricLabel={module.metricLabel}
                  metricValue={module.metricValue}
                  width={module.width}
                />
              ))}

            </div>


            {/* DESCRIPTION */}

            <div className="relative mt-8 rounded-2xl border border-charcoal/5 bg-blush/40 p-8 shadow-sm">

              <span className="material-symbols-outlined absolute right-6 top-6 text-5xl text-dusty-rose/30 rotate-12">
                description
              </span>

              <h3 className="mb-4 font-mono text-lg font-bold text-charcoal">
                PROJECT_DESCRIPTION
              </h3>

              <p className="text-charcoal/70 leading-relaxed mb-6 max-w-3xl">
                {project.description}
              </p>

              <div className="flex gap-4">

                <a
                  href={project.github}
                  target="_blank"
                  className="flex items-center gap-2 rounded-lg bg-charcoal px-4 py-2 font-mono text-[11px] text-white hover:bg-charcoal/90"
                >
                  <span className="material-symbols-outlined text-[16px]">code</span>
                  VIEW_GITHUB
                </a>

                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    className="flex items-center gap-2 rounded-lg border border-dusty-rose px-4 py-2 font-mono text-[11px] text-dusty-rose hover:bg-dusty-rose hover:text-white"
                  >
                    <span className="material-symbols-outlined text-[16px]">rocket_launch</span>
                    LIVE_PROJECT
                  </a>
                )}

              </div>

            </div>

          </div>

        </div>


        {/* FOOTER */}

        

      </div>

    </section>

  );

}


function SystemCard({ icon, title, items, code, metricLabel, metricValue, width }) {

  return (

    <div className="rounded-2xl border border-charcoal/5 bg-white p-5 shadow-sm">

      <div className="mb-4 flex items-center justify-between">

        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blush/60">
          <span className="material-symbols-outlined text-dusty-rose">{icon}</span>
        </div>

        <span className="font-mono text-[10px] text-charcoal/40">{code}</span>

      </div>

      <h3 className="mb-3 font-mono text-[11px] font-bold uppercase tracking-wider text-charcoal/60">
        {title}
      </h3>

      <div className="flex flex-wrap gap-2 mb-4">

        {items.map(tech => (
          <span
            key={tech}
            className="rounded-md bg-blush/60 px-2 py-1 font-mono text-[10px] text-dusty-rose"
          >
            {tech}
          </span>
        ))}

      </div>

      <div className="flex justify-between font-mono text-[10px] text-charcoal/60 mb-1">
        <span>{metricLabel}</span>
        <span>{metricValue}</span>
      </div>

      <div className="h-1.5 rounded-full bg-charcoal/10">
        <div className={`h-full rounded-full bg-dusty-rose ${width}`} />
      </div>

    </div>

  );

}