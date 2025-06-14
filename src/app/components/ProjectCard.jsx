'use client';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function ProjectCard({ title, desc, imgSrc, builtWith, websiteLink, codeLink, cardColor }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 }); // Trigger when 50% of the element is in view

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={cardVariants}
      transition={{ duration: 0.6, ease: "easeOut" }}
      whileHover={{ scale: 1.02, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
      className={`flex flex-col md:flex-row rounded-2xl shadow-lg font-sans overflow-hidden bg-white text-[#0a1633] min-h-[350px]`}
    >
      {/* Left Section: Text Content */}
      <div className="flex-1 p-6 flex flex-col justify-center items-center md:items-start text-center md:text-left">
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        <p className="text-sm mb-4 leading-relaxed">{desc}</p>
        {builtWith && (
          <p className="text-xs font-semibold text-gray-600 mb-6">Built with: {builtWith}</p>
        )}
        <div className="flex flex-wrap gap-3">
          {websiteLink && (
            <a 
              href={websiteLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#0a1633] text-white px-5 py-2 rounded-lg text-sm font-semibold hover:bg-gray-800 transition shadow-md"
            >
              Visit Website
            </a>
          )}
          {codeLink && (
            <a 
              href={codeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-gray-400 text-[#0a1633] px-5 py-2 rounded-lg text-sm font-semibold hover:bg-gray-100 transition shadow-md"
            >
              View Code
            </a>
          )}
        </div>
      </div>

      {/* Right Section: Image with Colored Background and Device Frame */}
      <div className={`relative flex-1 flex items-center justify-center p-8 ${cardColor} min-h-[250px] md:min-h-full`}>
        <div className="relative w-full h-full bg-white rounded-xl shadow-2xl overflow-hidden p-2">
          <Image 
            src={imgSrc || '/placeholder.png'}
            alt={title}
            fill
            className="object-contain object-center"
          />
        </div>
      </div>
    </motion.div>
  );
} 