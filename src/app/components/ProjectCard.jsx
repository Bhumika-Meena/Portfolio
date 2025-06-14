'use client';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function ProjectCard({ title, desc, imgSrc, cardColor }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 }); // Trigger when 50% of the element is in view

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
      transition={{ duration: 0.6, ease: "easeOut" }}
      whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
      className={`rounded-2xl shadow-md min-h-[300px] font-sans overflow-hidden ${cardColor || 'bg-white text-[#0a1633]'}`}
    >
      <div className="relative w-full h-48">
        <Image src={imgSrc || '/placeholder.png'} alt={title} fill className="object-cover" />
      </div>
      <div className="p-4 flex flex-col items-center">
        <div className="text-2xl font-bold mb-2 text-center">{title}</div>
        {desc && <div className="text-center text-sm font-medium">{desc}</div>}
      </div>
    </motion.div>
  );
} 