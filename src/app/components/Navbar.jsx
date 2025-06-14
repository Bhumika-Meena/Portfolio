import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="w-full flex items-center justify-between px-8 py-4 bg-[#0a1633]/30 backdrop-blur-md text-white">
      <div />
      <ul className="hidden md:flex space-x-8 text-lg items-center">
        <li><Link href="#home" className="hover:text-[#ff5c1a] transition">Home</Link></li>
        <li><Link href="#about" className="hover:text-[#ff5c1a] transition">About Me</Link></li>
        <li><Link href="#projects" className="hover:text-[#ff5c1a] transition">Projects</Link></li>
        <li><Link href="#skills" className="hover:text-[#ff5c1a] transition">Skills</Link></li>
        <li><Link href="#contact" className="hover:text-[#ff5c1a] transition">Contact Me</Link></li>
      </ul>
      <div className="md:hidden">
        {/* Mobile menu icon placeholder */}
        <span className="material-icons">menu</span>
      </div>
    </nav>
  );
} 