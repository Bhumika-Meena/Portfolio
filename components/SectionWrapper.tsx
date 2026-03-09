'use client';

import { motion, Variants } from "framer-motion";
import { ReactNode } from "react";

const variants: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 0.42, 0.36, 0.99]
    }
  }
};

interface SectionWrapperProps {
  id?: string;
  children: ReactNode;
  className?: string;
  containerClassName?: string;
}

export function SectionWrapper({
  id,
  children,
  className = "",
  containerClassName = "max-w-5xl"
}: SectionWrapperProps) {
  return (
    <section id={id} className={`w-full ${className}`}>
      <motion.div
        className={`mx-auto px-6 py-16 sm:py-20 lg:py-24 ${containerClassName}`}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={variants}
      >
        {children}
      </motion.div>
    </section>
  );
}

