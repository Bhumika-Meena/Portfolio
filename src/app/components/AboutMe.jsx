import React from 'react';

export default function AboutMe() {
  return (
    <section id="about" className="px-8 py-16 bg-white text-[#0a1633] my-0 flex flex-col items-center">
      <div className="max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 font-sans text-center">About Me</h2>
        <p className="mb-4 text-lg">
        Hi, I'm Bhumika — a passionate web developer focused on creating clean, responsive, and user-friendly applications. I specialize in building modern, dynamic interfaces using React.js, Next.js, Node.js, MongoDB, Bootstrap, and Tailwind CSS.
        </p>
        <p className="mb-4 text-lg">
        Driven by curiosity and a commitment to continuous learning, I enjoy solving complex problems and transforming ideas into functional, efficient solutions. I'm always exploring new technologies to enhance my skills and deliver better web experiences.
        </p>
        <p className="text-lg">
          When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or sketching new design ideas. 
          I'm always eager to learn and grow, and I believe in continuous improvement.
        </p>
      </div>
    </section>
  );
} 