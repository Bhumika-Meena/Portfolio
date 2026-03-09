'use client';

import { SectionWrapper } from "./SectionWrapper";

export function About() {
  return (
    <SectionWrapper
      id="about"
      className="bg-background-light"
      containerClassName="max-w-7xl mx-auto flex justify-center"
    >


      <div className="flex justify-center">
        <article className="w-full max-w-5xl rounded-2xl bg-white/90 p-1 skeuo-shadow">
          <div className="rounded-[18px] bg-white">
            <div className="flex items-center justify-between px-6 py-4">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-charcoal/40">
                  description
                </span>
                <div className="font-mono text-[10px] font-bold uppercase tracking-[0.28em] text-charcoal/50">
                  README.MD — DEVELOPER_MANIFESTO
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-charcoal/10" />
                <span className="h-2 w-2 rounded-full bg-charcoal/10" />
                <span className="h-2 w-2 rounded-full bg-charcoal/10" />
              </div>
            </div>

            <div className="px-6 pb-6 pt-1">
              <h2 className="mb-4 font-mono text-3xl font-bold tracking-tight text-charcoal sm:text-4xl">
                <span className="text-sky-600">#</span> Bhumika.init()
              </h2>

              <div className="mb-6 flex gap-4 rounded-2xl bg-blush/60 p-5">
                <div className="w-1 rounded-full bg-dusty-rose" />
                <p className="font-mono text-[12px] leading-relaxed text-charcoal/70">
                  &quot;Building modern web applications where creativity meets clean engineering.&quot;
                </p>
              </div>

              <div className="space-y-8">
                <section className="max-w-none">
                    <h3 className="mb-2 font-mono text-[10px] font-bold uppercase tracking-[0.24em] text-charcoal/50">
                      ## SYSTEM BACKGROUND
                    </h3>
                    <p className="text-[15px] leading-relaxed text-charcoal/70">
                    A Full-Stack Developer passionate about building scalable web applications and interactive digital experiences. I specialize in modern technologies including React, Next.js, Node.js, and MongoDB. My focus is on combining efficient backend systems with aesthetic UI design.
                    </p>
                  </section>

                  <section className="grid gap-6 sm:grid-cols-2">
                    <div>
                      <h3 className="mb-2 font-mono text-[10px] font-bold uppercase tracking-[0.24em] text-charcoal/50">
                        ## CORE DIRECTIVES
                      </h3>
                      <ul className="space-y-2 text-sm text-charcoal/70">
                        <li className="flex items-start gap-2">
                          <span className="mt-1 h-1.5 w-1.5 rounded-full bg-sky-500" />
                          React / Next.js Development 
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="mt-1 h-1.5 w-1.5 rounded-full bg-sky-500" />
                          Node.js Backend Systems 
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="mt-1 h-1.5 w-1.5 rounded-full bg-sky-500" />
                          MongoDB & Database Design 
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="mt-1 h-1.5 w-1.5 rounded-full bg-sky-500" />
                          REST API Development 
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="mt-1 h-1.5 w-1.5 rounded-full bg-sky-500" />
                          Responsive UI Design
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="mb-2 font-mono text-[10px] font-bold uppercase tracking-[0.24em] text-charcoal/50">
                        ## CURRENT STATUS
                      </h3>
                      <div className="rounded-2xl bg-charcoal/[0.04] p-4 font-mono text-[11px] text-charcoal/70 w-full">
                        <div className="rounded-2xl bg-dusty-rose/[0.1] p-4 font-mono text-[11px] text-charcoal/70 w-full">
                          <div className="mb-2">
                            <span className="text-charcoal/40">Location:</span> "India"
                          </div>
                          <div className="mb-2">
                            <span className="text-charcoal/40">Availability:</span> "Open_to_Work"
                          </div>
                          <div>
                            <span className="text-charcoal/40">Focus:</span> "Full_Stack_Web_Apps"
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>

                  <section>
                    <h3 className="mb-2 font-mono text-[10px] font-bold uppercase tracking-[0.24em] text-charcoal/50">
                      ## BUILD LOG
                    </h3>
                    <p className="font-mono text-[11px] text-charcoal/60">
                      Last compiled: 2026.03
                    </p>
                  </section>
                </div>
              </div>
            </div>
          
        </article>

      </div>
    </SectionWrapper>
  );
}

