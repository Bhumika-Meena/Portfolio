'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function AboutMe() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 1, ease: "easeOut" } },
  };

  return (
    <section id="about" className="px-8 py-20 bg-white text-[#0a1633] my-0 flex flex-col items-center overflow-hidden">
      <motion.div
        className="max-w-6xl flex flex-col md:flex-row items-center md:justify-between gap-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        {/* Left: Text Content */}
        <motion.div className="flex-1 text-center md:text-left" variants={containerVariants}>
          <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold mb-6 font-sans">About Me</motion.h2>
          <motion.p variants={itemVariants} className="mb-4 text-lg leading-relaxed">
            Hi, I'm Bhumika — a passionate web developer focused on creating clean, responsive, and user-friendly applications. I specialize in building modern, dynamic interfaces using React.js, Next.js, Node.js, MongoDB, Bootstrap, and Tailwind CSS.
          </motion.p>
          <motion.p variants={itemVariants} className="mb-4 text-lg leading-relaxed">
            Driven by curiosity and a commitment to continuous learning, I enjoy solving complex problems and transforming ideas into functional, efficient solutions. I'm always exploring new technologies to enhance my skills and deliver better web experiences.
          </motion.p>
          <motion.p variants={itemVariants} className="text-lg leading-relaxed">
            When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or sketching new design ideas. 
            I'm always eager to learn and grow, and I believe in continuous improvement.
          </motion.p>
        </motion.div>

        {/* Right: Image/Illustration Placeholder */}
        <motion.div 
          className="flex-1 flex justify-center md:justify-end"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={imageVariants}
        >
          <Image 
            src="/aboutMe.png" // Replace with a suitable image or illustration
            alt="About Me Illustration"
            width={700} 
            height={700} 
            className="rounded-lg"
          />
        </motion.div>
      </motion.div>
    </section>
  );
} 