'use client';
import Image from "next/image";
import HeroImage from "./components/HeroImage";
import ProjectCard from "./components/ProjectCard";
import SkillIcon from "./components/SkillIcon";
import ContactSection from "./components/ContactSection";
import AboutMe from "./components/AboutMe";
import { motion } from 'framer-motion';

const skills = [
  { name: "HTML5", imgSrc: "/skills/html5.svg" },
  { name: "CSS3", imgSrc: "/skills/css3.svg" },
  { name: "Bootstrap", imgSrc: "/skills/bootstrap.svg" },
  { name: "Tailwind CSS", imgSrc: "/skills/tailwind.svg" },
  { name: "React.js", imgSrc: "/skills/react.svg" },
  { name: "Next.js", imgSrc: "/skills/nextjs.svg" },
  { name: "Node.js", imgSrc: "/skills/nodejs.svg" },
  { name: "MongoDB", imgSrc: "/skills/mongodb.svg" },
  { name: "Git", imgSrc: "/skills/git.svg" },
  { name: "GitHub", imgSrc: "/skills/github.svg" },
  { name: "MySQL", imgSrc: "/skills/mysql.svg" },
];

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        staggerChildren: 0.35 // Increased delay between children
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7 } } // Increased individual animation duration
  };

  return (
    <main className="bg-[#f6f8fc]">
      {/* Hero Section with Full Background Image */}
      <section id="home" className="relative w-full h-[600px] md:h-[700px] flex items-center justify-start overflow-hidden bg-[#0a1633] px-8 my-0">
        <Image
          src="/ChatGPT.png" // Place your hero image in public/hero.jpg
          alt="Hero Background"
          fill
          className="object-cover object-center z-0"
          priority
        />
        <div className="absolute inset-0 bg-[#0a1633]/80 z-10" />
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="relative z-20 flex flex-col items-start text-left w-full max-w-xl md:ml-20"
        >
          <motion.h1 variants={itemVariants} className="text-4xl md:text-6xl font-bold mb-4 leading-tight font-sans text-white">Hi, I'm Bhumika,<br />Web developer.</motion.h1>
          <motion.p variants={itemVariants} className="mb-2 text-orange-300 font-semibold">Creative • Passionate • Focused</motion.p>
          <motion.p variants={itemVariants} className="mb-8 max-w-xl text-lg text-white">Enjoy building clean, responsive, and user-friendly web applications</motion.p>
          <motion.a variants={itemVariants} href="#about" className="inline-block bg-[#ff5c1a] px-6 py-3 rounded-full text-white font-semibold hover:bg-orange-600 transition">About Me</motion.a>
        </motion.div>
      </section>

      {/* About Me Section */}
      <AboutMe />

      {/* Projects Section */}
      <section id="projects" className="px-8 py-16 bg-white text-[#0a1633] my-0">
        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center font-sans">My Recent Projects</h2>
        <p className="text-center mb-8 text-lg">Here are a few design projects I've worked on recently. Want to see more? <a href="#contact" className="text-[#ff5c1a] font-semibold">Email me.</a></p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <ProjectCard title="Tic-Tac-Toe" desc="An interactive JAVA game with a clean UI for two-player matches." imgSrc="/tictactoe.png" cardColor="bg-[#1e2a4a] text-white" />
          <ProjectCard title="King Food" desc="A web app for ordering food online with real-time tracking, secure checkout, and user-friendly menus." imgSrc="/kingFood.png" cardColor="bg-[#ff5c1a] text-white" />
          <ProjectCard title="Travel Planner" desc="A gamified web app for planning trips, earning points through tasks, and tracking progress on a leaderboard." imgSrc="/travelPlanner.png" cardColor="bg-[#232b4a] text-white" />
        </div>
        <div className="flex justify-center mt-8">
          <a href="https://github.com/Bhumika-Meena" className="bg-[#ff5c1a] text-white font-semibold flex items-center px-6 py-2 rounded-full hover:bg-orange-600 transition">See more on GitHub</a>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="px-8 py-16 bg-[#f6f8fc] my-0">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center font-sans text-black">Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 gap-y-10 gap-x-8 max-w-4xl mx-auto">
          {skills.map((skill) => (
            <div key={skill.name} className="flex flex-col items-center">
              <SkillIcon name={skill.name} imgSrc={skill.imgSrc} textClass="font-bold text-[#0a1633]" />
            </div>
          ))}
        </div>
      </section>
      <ContactSection />
    </main>
  );
}

