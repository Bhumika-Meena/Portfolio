"use client";

export function RightSidebar() {
  return (
    <div className="fixed right-8 top-24 z-30 flex w-80 flex-col gap-6">
      <div className="rounded-2xl border border-white/5 bg-charcoal p-6 text-white skeuo-shadow">
        <div className="mb-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-sm text-dusty-rose">
              terminal
            </span>
            <h4 className="font-bold uppercase tracking-widest text-[11px]">
              Cluster Overview
            </h4>
          </div>
          <span className="h-2 w-2 rounded-full bg-dusty-rose animate-pulse" />
        </div>
        <div className="space-y-3 font-mono text-[10px]">
          <div className="flex justify-between border-b border-white/5 pb-1">
            <span className="text-white/40">TOTAL_UPTIME</span>
            <span className="text-dusty-rose">45.2k Hours</span>
          </div>
          <div className="flex justify-between border-b border-white/5 pb-1">
            <span className="text-white/40">NODES_DEPLOYED</span>
            <span className="text-white/80">03</span>
          </div>
          <div className="flex justify-between">
            <span className="text-white/40">TECH_SATURATION</span>
            <span className="text-white/80">94%</span>
          </div>
        </div>
      </div>
      <div className="rounded-2xl border border-charcoal/5 bg-white p-6 skeuo-shadow">
        <div className="mb-6 flex items-center gap-2">
          <span className="material-symbols-outlined text-dusty-rose">
            network_check
          </span>
          <h4 className="font-bold uppercase tracking-widest text-[11px] text-charcoal/60">
            Career Bandwidth
          </h4>
        </div>
        <div className="space-y-6">
          <div className="space-y-2">
            <div className="flex justify-between font-mono text-[10px]">
              <span className="uppercase text-charcoal/40">Backend Stability</span>
              <span className="font-bold text-charcoal">98%</span>
            </div>
            <div className="h-1.5 overflow-hidden rounded-full bg-charcoal/5">
              <div
                className="h-full rounded-full bg-dusty-rose"
                style={{ width: "98%" }}
              />
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between font-mono text-[10px]">
              <span className="uppercase text-charcoal/40">Frontend Fidelity</span>
              <span className="font-bold text-charcoal">92%</span>
            </div>
            <div className="h-1.5 overflow-hidden rounded-full bg-charcoal/5">
              <div
                className="h-full rounded-full bg-dusty-rose"
                style={{ width: "92%" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
