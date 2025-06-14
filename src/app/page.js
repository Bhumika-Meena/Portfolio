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
        <div className="grid grid-cols-1 gap-12 max-w-4xl mx-auto">
          <ProjectCard 
            title="Tic-Tac-Toe" 
            desc="This is a two-player Tic Tac Toe game developed in Java using the Swing library. The game provides an interactive graphical interface where players can easily read the game rules, start a new match, and exit the application. It offers a simple and engaging way for two players to compete, with intuitive controls and a clear layout."
            imgSrc="/tictactoe.png" 
            builtWith="Java, Swing (Java GUI library)"
             
            codeLink="https://github.com/Bhumika-Meena"
            
          />
          <ProjectCard 
            title="King Food" 
            desc="The Food Delivery App is a web-based platform that allows users to browse restaurant listings, view menus, and place secure online orders. It features real-time order tracking, a responsive and user-friendly interface, and authentication for both customers and admins. The app ensures smooth checkout and basic admin controls for managing listings and orders."
            imgSrc="/kingFood.png" 
            builtWith="React.js, Node.js, MongoDB, Tailwind CSS"
            websiteLink="#" 
            codeLink="https://github.com/Bhumika-Meena"
            
          />
          <ProjectCard 
            title="Travel Planner" 
            desc="This is a web-based Travel Planner that allows users to create personalized trip itineraries. Users can select destinations, set travel dates, and receive AI-generated activity suggestions. The app includes gamification elements — users earn points and badges by completing tasks and can view their rankings on a leaderboard. It also features a real-time chat system built with Socket.io, enabling users to collaborate and share plans instantly. Additional functionalities include user authentication, admin controls, and responsive design."
            imgSrc="/travelPlanner.png" 
            builtWith="Next.js,React.js, Node.js, MongoDB, Tailwind CSS, Socket.io"
            
            codeLink="https://github.com/Bhumika-Meena"
           
          />
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

        {/* Experience Section */}
        <motion.div 
          className="mt-16 max-w-4xl mx-auto text-black p-6 bg-white rounded-lg shadow-xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{ 
            hidden: { opacity: 0, y: 50 },
            visible: { 
              opacity: 1, 
              y: 0, 
              transition: { 
                duration: 0.8, 
                ease: "easeOut", 
                staggerChildren: 0.2 // Stagger animation for list items
              }
            }
          }}
        >
          <motion.h3 
            className="text-2xl md:text-3xl font-bold mb-6 text-center font-sans text-[#0a1633]"
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
          >
            Experience
          </motion.h3>
          <ul className="list-disc list-inside space-y-4 text-lg md:text-xl leading-relaxed text-gray-700">
            <motion.li variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0, transition: { duration: 0.5 } } }}>Developed and maintained responsive web applications using React.js and Next.js.</motion.li>
            <motion.li variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0, transition: { duration: 0.5 } } }}>Implemented robust backend solutions with Node.js and MongoDB for data management.</motion.li>
            <motion.li variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0, transition: { duration: 0.5 } } }}>Collaborated with design teams to translate UI/UX wireframes into high-quality code.</motion.li>
            <motion.li variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0, transition: { duration: 0.5 } } }}>Utilized Tailwind CSS and Bootstrap for efficient and consistent styling.</motion.li>
            <motion.li variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0, transition: { duration: 0.5 } } }}>Managed code versions and collaborated with teams using Git and GitHub.</motion.li>
            <motion.li variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0, transition: { duration: 0.5 } } }}> Soft Skills: Communication / Teamwork / Leadership / Creativity / Problem Solving</motion.li>
            <motion.li variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0, transition: { duration: 0.5 } } }}> Coursework: Artificial Intelligence, Machine Learning, Operating Systems, Computer Networks, Database
            Management Systems, Software Engineering</motion.li>
          </ul>

          
        </motion.div>
        <motion.div 
          className="mt-16 max-w-4xl mx-auto text-black p-6 bg-white rounded-lg shadow-xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{ 
            hidden: { opacity: 0, y: 50 },
            visible: { 
              opacity: 1, 
              y: 0, 
              transition: { 
                duration: 0.8, 
                ease: "easeOut", 
                staggerChildren: 0.2 // Stagger animation for list items
              }
            }
          }}
        >
          <motion.h3 
            className="text-2xl md:text-3xl font-bold mb-6 text-center font-sans text-[#0a1633]"
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
          >
            Education
          </motion.h3>
          <ul className="list-disc list-inside space-y-4 text-lg md:text-xl leading-relaxed text-gray-700">
            <motion.li variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0, transition: { duration: 0.5 } } }}>Central University of Rajasthan,Rajasthan:  B.Tech in Computer Science and Engineering (CGPA/Percentage: 7.00)</motion.li>
            <motion.li variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0, transition: { duration: 0.5 } } }}>Saint Johns School CBSE, Rajasthan (Percentage: 77.2%)</motion.li>
            
          </ul>

        </motion.div>
      </section>
      <ContactSection />
    </main>
  );
}

