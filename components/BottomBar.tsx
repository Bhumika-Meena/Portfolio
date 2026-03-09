"use client";

export function BottomBar() {
  return (
    <div className="fixed bottom-6 left-1/2 z-50 flex -translate-x-1/2 items-center gap-10 rounded-2xl bg-charcoal px-8 py-3 skeuo-shadow">
      <div className="flex items-center gap-3">
        <span
          className="h-2.5 w-2.5 rounded-full bg-dusty-rose"
          style={{ boxShadow: "0 0 10px rgba(217,123,147,0.5)" }}
        />
        <span className="font-mono text-[10px] uppercase text-white/80">
          Root://Dev/Experience/Trace
        </span>
      </div>
      <div className="h-4 w-px bg-white/10" />
      <div className="flex items-center gap-6">
        <div className="flex flex-col">
          <span className="text-[8px] uppercase tracking-widest text-white/30">
            Active Nodes
          </span>
          <span className="font-mono text-xs text-white">3 RUNNING</span>
        </div>
        <div className="flex flex-col">
          <span className="text-[8px] uppercase tracking-widest text-white/30">
            System Age
          </span>
          <span className="font-mono text-xs text-white">6.2 YEARS</span>
        </div>
      </div>
      <div className="h-4 w-px bg-white/10" />
      <div className="flex items-center gap-6">
        <a
          href="#experiences"
          className="text-white/40 transition-colors hover:text-dusty-rose"
          aria-label="View terminal"
        >
          <span className="material-symbols-outlined text-lg">terminal</span>
        </a>
      </div>
    </div>
  );
}
