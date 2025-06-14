'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);

  const formVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const headingVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <section id="contact" className="relative bg-[#0a1633] py-20 overflow-hidden my-0">
      {/* Abstract Background Shapes */}
      <motion.div 
        className="absolute top-1/4 left-0 w-64 h-64 bg-[#ff5c1a] rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
      />
      <motion.div 
        className="absolute bottom-1/4 right-0 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
      />

      <div className="relative z-10 flex flex-col md:flex-row items-center md:justify-between w-full max-w-6xl mx-auto gap-12 px-8">
        {/* Left: Heading */}
        <motion.div 
          className="flex-1 w-full md:w-1/2 flex md:justify-start justify-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={headingVariants}
        >
          <h2 className="text-5xl md:text-7xl font-bold text-white text-center md:text-left leading-tight">Let's Connect<br/>and Create</h2>
        </motion.div>

        {/* Right: Form */}
        <motion.div 
          className="flex-1 w-full md:w-1/2 flex md:justify-end justify-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={formVariants}
        >
          <form
            action="https://formspree.io/f/yourFormID" // Replace with your Formspree form ID
            method="POST"
            className="bg-white rounded-2xl shadow-xl px-8 py-10 flex flex-col gap-6 w-full max-w-lg transform hover:scale-105 transition-transform duration-300 ease-in-out"
            onSubmit={() => setSubmitted(true)}
          >
            <div className="text-2xl font-bold text-[#0a1633] mb-2">Send me a message!</div>
            <div className="text-gray-600 text-base mb-4">Got any questions or just want to say hello? Go ahead! <span role="img" aria-label="wave">😊</span></div>
            <div className="flex flex-col md:flex-row gap-4 mb-2">
              <input
                type="text"
                name="name"
                placeholder="Your name"
                required
                className="w-full md:w-[calc(50%-0.5rem)] border-b-2 border-gray-300 focus:outline-none focus:border-[#ff5c1a] py-3 bg-transparent placeholder-gray-500 text-black text-lg"
              />
              <input
                type="email"
                name="email"
                placeholder="Your email"
                required
                className="w-full md:w-[calc(50%-0.5rem)] border-b-2 border-gray-300 focus:outline-none focus:border-[#ff5c1a] py-3 bg-transparent placeholder-gray-500 text-black text-lg"
              />
            </div>
            <textarea
              name="message"
              placeholder="Your message"
              required
              rows={5}
              className="border-b-2 border-gray-300 focus:outline-none focus:border-[#ff5c1a] py-3 bg-transparent resize-none mb-4 placeholder-gray-500 text-black text-lg"
            />
            <button
              type="submit"
              className="mx-auto mt-4 bg-[#ff5c1a] text-white px-10 py-3 rounded-full shadow-lg hover:bg-orange-600 transition-all duration-300 ease-in-out font-semibold text-lg transform hover:-translate-y-1"
            >
              Send Message
            </button>
            {submitted && (
              <div className="text-green-600 text-center mt-4 text-base">Thank you! Your message has been sent.</div>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
} 