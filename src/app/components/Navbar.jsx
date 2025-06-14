'use client';
import Link from 'next/link';
import React from 'react';

export default function Navbar() {
  return (
    <nav className="w-full flex items-center justify-between px-8 py-4 text-white relative">
      <div />
      {/* Desktop Navigation */}
      <ul className="hidden md:flex space-x-8 text-lg items-center">
        <li><Link href="#home" className="hover:text-[#ff5c1a] transition">Home</Link></li>
        <li><Link href="#about" className="hover:text-[#ff5c1a] transition">About Me</Link></li>
        <li><Link href="#projects" className="hover:text-[#ff5c1a] transition">Projects</Link></li>
        <li><Link href="#skills" className="hover:text-[#ff5c1a] transition">Skills</Link></li>
        <li><Link href="#contact" className="hover:text-[#ff5c1a] transition">Contact Me</Link></li>
      </ul>

      {/* Mobile Menu Button */}
      {/* Removed mobile menu button and dropdown */}
    </nav>
  );
} 