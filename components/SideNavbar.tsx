"use client";

export function SideNavbar() {
  return (
    <aside className="fixed left-6 top-1/2 z-50 hidden -translate-y-1/2 flex-col items-center gap-6 md:flex">

      <nav className="flex flex-col items-center gap-5">

        <a
          href="#hero"
          className="group relative rounded-lg p-2 text-charcoal/70 transition hover:bg-white/40 hover:text-charcoal"
        >
          <span className="material-symbols-outlined">account_tree</span>
          <span className="absolute left-full ml-3 whitespace-nowrap rounded bg-charcoal px-2 py-1 text-[10px] text-white opacity-0 transition group-hover:opacity-100">
            Home
          </span>
        </a>

        <a
          href="#experience"
          className="group relative rounded-lg p-2 text-charcoal/70 transition hover:bg-white/40 hover:text-charcoal"
        >
          <span className="material-symbols-outlined">view_list</span>
          <span className="absolute left-full ml-3 whitespace-nowrap rounded bg-charcoal px-2 py-1 text-[10px] text-white opacity-0 transition group-hover:opacity-100">
            Experiences
          </span>
        </a>

        <a
          href="#projects"
          className="group relative rounded-lg p-2 text-charcoal/70 transition hover:bg-white/40 hover:text-charcoal"
        >
          <span className="material-symbols-outlined">folder</span>
          <span className="absolute left-full ml-3 whitespace-nowrap rounded bg-charcoal px-2 py-1 text-[10px] text-white opacity-0 transition group-hover:opacity-100">
            Projects
          </span>
        </a>

        <a
          href="#tech"
          className="group relative rounded-lg p-2 text-charcoal/70 transition hover:bg-white/40 hover:text-charcoal"
        >
          <span className="material-symbols-outlined">database</span>
          <span className="absolute left-full ml-3 whitespace-nowrap rounded bg-charcoal px-2 py-1 text-[10px] text-white opacity-0 transition group-hover:opacity-100">
            Tech Stack
          </span>
        </a>

        <a
          href="#contact"
          className="group relative rounded-lg p-2 text-charcoal/70 transition hover:bg-white/40 hover:text-charcoal"
        >
          <span className="material-symbols-outlined">mail</span>
          <span className="absolute left-full ml-3 whitespace-nowrap rounded bg-charcoal px-2 py-1 text-[10px] text-white opacity-0 transition group-hover:opacity-100">
            Contact
          </span>
        </a>

      </nav>
    </aside>
  );
}