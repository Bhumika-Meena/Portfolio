'use client';
import React, { useState } from 'react';

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="contact" className="relative bg-[#f6f8fc] py-20 flex flex-col items-center my-0">
      <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-5xl mx-auto gap-12 md:gap-0">
        {/* Left: Heading */}
        <div className="flex-1 w-full md:w-1/2 flex md:justify-start justify-center mb-8 md:mb-0">
          <h2 className="text-5xl md:text-6xl font-light text-gray-400 text-left md:text-left select-none">Contact me</h2>
        </div>
        {/* Right: Form */}
        <div className="flex-1 w-full md:w-1/2 flex justify-center">
          <form
            action="https://formspree.io/f/yourFormID" // Replace with your Formspree form ID
            method="POST"
            className="bg-white rounded-2xl shadow-lg px-8 py-10 flex flex-col gap-6 w-full max-w-xl"
            onSubmit={() => setSubmitted(true)}
          >
            <div className="text-lg md:text-xl font-semibold text-[#0a1633] mb-1">Send me a message!</div>
            <div className="text-gray-500 text-sm mb-4">Got any questions or just want to say hello? Go ahead! <span role="img" aria-label="wave">😊</span></div>
            <div className="flex flex-col md:flex-row gap-4 mb-2">
              <input
                type="text"
                name="name"
                placeholder="Your name"
                required
                className="flex-1 border-b border-gray-300 focus:outline-none focus:border-[#ff5c1a] py-2 px-1 bg-transparent"
              />
              <input
                type="email"
                name="email"
                placeholder="Your email"
                required
                className="flex-1 border-b border-gray-300 focus:outline-none focus:border-[#ff5c1a] py-2 px-1 bg-transparent"
              />
            </div>
            <textarea
              name="message"
              placeholder="Your message"
              required
              rows={4}
              className="border-b border-gray-300 focus:outline-none focus:border-[#ff5c1a] py-2 px-1 bg-transparent resize-none mb-4"
            />
            <button
              type="submit"
              className="mx-auto mt-2 bg-white border border-gray-400 text-[#0a1633] px-8 py-2 rounded-lg shadow hover:bg-[#ff5c1a] hover:text-white transition font-semibold"
            >
              Send
            </button>
            {submitted && (
              <div className="text-green-600 text-center mt-2">Thank you! Your message has been sent.</div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
} 