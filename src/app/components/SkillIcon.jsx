'use client';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function SkillIcon({ name, imgSrc, textClass }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  const variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
      transition={{ duration: 0.5, ease: "easeOut" }}
      whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
      className="flex flex-col items-center justify-center w-24 h-24 bg-white rounded-xl shadow-md text-center p-2"
    >
      <Image src={imgSrc || '/placeholder-skill.png'} alt={name} width={40} height={40} />
      <span className={`mt-2 text-sm leading-tight ${textClass || 'font-bold text-[#0a1633]'}`}>{name}</span>
    </motion.div>
  );
} 