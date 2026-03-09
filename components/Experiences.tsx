"use client";

const experiences = [
  {
    id: "NODE_01",
    period: "JUN 2025 — AUG 2025",
    title: "HyperDigital",
    company: "Full Stack Web Development Intern",
    status: "PRODUCTION_BUILD",
    statusColor: "text-green-400",
    techStatus: "LIVE_PRODUCTION",
    techBadges: ["Node", "Express", "Mongo"],
    icon: "work",
    logs: [
      "Developed backend modules for a Lead Management System using Node.js and Express.",
      "Implemented authentication and role-based access control.",
      "Built scalable REST APIs for managing leads and workflows.",
      "Improved backend architecture for secure data handling."
    ]
  },
  {
    id: "NODE_02",
    period: "JUN 2024 — JUL 2024",
    title: "Diginiq TechLabs",
    company: "Full Stack Web Development Intern", 
    status: "SYSTEM_DEPLOYED",
    statusColor: "text-green-400",
    techStatus: "DEPLOYED",
    techBadges: ["Node", "Express", "Mongo"],
    icon: "work_history",
    logs: [
      "Developed backend APIs for a restaurant web application.",
      "Integrated MongoDB for scalable database storage.",
      "Implemented backend logic using Node.js and Express.",
      "Collaborated using Git and GitHub for version-controlled development."
    ]
  }
];

export function Experiences() {
  return (
    <section id="experience" className="relative min-h-screen pt-24 pb-32">
      <div className="absolute inset-0 pointer-events-none canvas-grid" />

      <div className="relative mx-auto max-w-4xl px-6 sm:px-12 lg:px-24">

        <div className="mb-16">
          <h2 className="mb-2 font-mono text-[10px] font-bold uppercase tracking-[0.3em] text-dusty-rose">
            Engineering Timeline
          </h2>
          <h1 className="font-display text-4xl font-bold tracking-tight text-charcoal">
            Experience
          </h1>
        </div>

        <div className="absolute left-14 top-32 bottom-0 w-1 timeline-line opacity-20" />

        <div className="relative space-y-12">
          {experiences.map((exp) => (
            <div key={exp.id} className="rack-node group">

              <div className="flex gap-8 sm:gap-12">

                {/* Timeline Icon */}
                <div className="relative z-10">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-charcoal skeuo-shadow">
                    <span className="material-symbols-outlined text-3xl text-dusty-rose">
                      {exp.icon}
                    </span>
                  </div>
                </div>

                {/* Card */}
                <div className="flex-1 min-w-0">
                  <div className="rack-3d rounded-2xl border border-charcoal/5 bg-white p-1 skeuo-shadow">

                    <div className="rounded-[14px] bg-charcoal p-6 text-white">

                      {/* Header */}
                      <div className="mb-4 flex flex-wrap items-start justify-between gap-4">

                        <div>
                          <div className="mb-1 font-mono text-[10px] text-dusty-rose">
                            {exp.id} // {exp.period}
                          </div>

                          <h3 className="text-xl font-bold tracking-tight">
                            {exp.title}
                          </h3>

                          <p className="text-sm text-white/40">
                            {exp.company}
                          </p>
                        </div>

                        <div className={`rounded-md border border-white/10 bg-white/5 px-3 py-1 font-mono text-[10px] ${exp.statusColor}`}>
                          {exp.status}
                        </div>

                      </div>

                      {/* Tech badges */}
                      <div className="flex flex-wrap items-center gap-4">

                        <div className="flex -space-x-2">
                          {exp.techBadges.map((badge) => (
                            <div
                              key={badge}
                              className="flex h-8 w-8 items-center justify-center overflow-hidden rounded-full border-2 border-charcoal bg-white/10 text-[8px] font-bold"
                            >
                              {badge}
                            </div>
                          ))}
                        </div>

                        <div className="h-8 w-px bg-white/10" />

                        <div className="flex flex-col justify-center">
                          <span className="text-[8px] uppercase tracking-widest text-white/40">
                            Status
                          </span>

                          <span className="font-mono text-[10px]">
                            {exp.techStatus}
                          </span>
                        </div>

                      </div>

                      {/* Hover Drawer */}
                      <div className="rack-drawer">

                        <div className="space-y-4 border-t border-white/10 pt-6">

                          <h4 className="font-mono text-[10px] font-bold uppercase tracking-widest text-white/40">
                            Deployment_Logs
                          </h4>

                          <ul className="space-y-2 font-mono text-[11px] text-white/70">
                            {exp.logs.map((log, i) => (
                              <li key={i} className="flex gap-3">
                                <span className="text-dusty-rose">&gt;</span>
                                {log}
                              </li>
                            ))}
                          </ul>

                        </div>

                      </div>

                    </div>
                  </div>
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}