"use client";

export function Header() {
  return (
    <header className="fixed left-0 right-0 z-40 flex h-14 items-center justify-between border-b border-charcoal/5 bg-white/30 px-8 backdrop-blur-sm">
      <div className="flex items-center gap-4">
        <div className="font-mono text-[11px] font-bold tracking-widest text-charcoal/40">
          ARCHIVE_MNGR_V1.0
        </div>
        <div className="h-3 w-px bg-charcoal/10" />
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-dusty-rose animate-pulse" />
          <span className="font-mono text-[10px] uppercase text-charcoal/60">
            System Trace Active
          </span>
        </div>
      </div>
      <div className="flex items-center gap-6">
        <div className="font-mono text-[10px] text-charcoal/60">
          ROOT_ACCESS: GRANTED
        </div>
        <a
          href="/cv.pdf"
          download
          className="rounded-full bg-charcoal px-4 py-1.5 font-mono text-[10px] font-bold uppercase tracking-widest text-white transition-all hover:bg-dusty-rose"
        >
          Download_CV
        </a>
      </div>
    </header>
  );
}
