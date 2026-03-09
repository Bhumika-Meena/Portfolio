'use client';

import { motion } from "framer-motion";

export function Hero() {
  return (
    

<section
  id="hero"
  className="relative min-h-screen w-full bg-cover bg-center"
  style={{ backgroundImage: "url('/banner.gif')" }}
>

  
      <div className="mx-auto flex h-full max-w-5xl flex-col justify-center px-6 pb-20 pt-28 sm:pb-24 sm:pt-32 lg:pt-40">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 0.42, 0.36, 0.99] }}
        >
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.25em] text-rose/80">
            Full Stack Portfolio
          </p>
          <h1 className="mb-4 text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
            Hi, I&apos;m{" "}
            <span className="bg-gradient-to-r from-rose to-charcoal bg-clip-text text-transparent">
              Bhumika
            </span>
          </h1>
          <h2 className="mb-4 text-xl font-medium text-charcoal/90 sm:text-2xl">
            Full Stack Developer
          </h2>
          <p className="mb-8 max-w-xl text-base leading-relaxed text-charcoal/70 sm:text-lg">
            I build elegant, performant web projects with a focus on clean
            architecture, delightful interactions, and pixel-perfect details.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="inline-flex items-center justify-center rounded-2xl bg-rose px-6 py-3 text-sm font-semibold text-white shadow-soft transition duration-300 hover:shadow-lg hover:brightness-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose focus-visible:ring-offset-2 focus-visible:ring-offset-blush"
            >
              View Projects
            </a>
            <span className="text-sm text-charcoal/60">
              Available for freelance and full-time opportunities.
            </span>
          </div>
          
        </motion.div>
      </div>

      
    </section>
  );
}

