'use client';

import { SectionWrapper } from "./SectionWrapper";

const techCategories = [
  {
    label: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS"]
  },
  {
    label: "Backend",
    items: ["Node.js", "Express", "REST APIs", "GraphQL"]
  },
  {
    label: "Databases",
    items: ["PostgreSQL", "MongoDB", "Prisma"]
  },
  {
    label: "Deployments",
    items: ["Vercel", "Render", "AWS", "Cloudinary"]
  },
  {
    label: "Tools",
    items: ["Git", "GitHub", "Docker", "Figma", "Postman"]
  }
];

export function TechStack() {
  return (
    <SectionWrapper id="tech" className="bg-blush/60">
      <div className="mb-8 flex flex-col gap-3 sm:mb-10 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Tech Stack
          </h2>
          <p className="mt-2 max-w-xl text-sm text-charcoal/70 sm:text-base">
            Tools and technologies I use to design, build, and ship products
            with confidence.
          </p>
        </div>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {techCategories.map((category) => (
          <div
            key={category.label}
            className="rounded-2xl bg-white/95 p-5 shadow-soft"
          >
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-charcoal/60">
              {category.label}
            </h3>
            <div className="flex flex-wrap gap-2">
              {category.items.map((item) => (
                <span
                  key={item}
                  className="rounded-full bg-blush px-3 py-1 text-xs font-medium text-charcoal/80 shadow-sm"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}

