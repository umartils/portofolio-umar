/* eslint-disable react/react-in-jsx-scope */
import { useState, useEffect } from "react";

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#certificates', label: 'Certificates' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('#home');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'py-3 bg-white/80 backdrop-blur-xl border-b border-slate-200 shadow-sm'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2 group">
          <div className="w-2 h-2 rounded-full bg-amber-600 group-hover:scale-125 transition-transform" />
          <span className="text-xl font-bold text-slate-900 tracking-tight">
            Portfolio
          </span>
        </a>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-1 bg-slate-100 border border-slate-200 rounded-full px-1.5 py-1.5">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setActive(link.href)}
                className={`block px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  active === link.href
                    ? 'bg-amber-200 text-amber-900'
                    : 'text-slate-600 hover:text-amber-700 hover:bg-slate-200'
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <a
          href="/files/cv-umar.pdf"
          download={true}
          className="hidden md:flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium text-amber-700 bg-amber-50 border border-amber-200 hover:bg-amber-100 hover:border-amber-300 transition-all duration-200"
        >
          <i className="ri-download-line ri-sm" />
          Download CV
        </a>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2 rounded-lg hover:bg-slate-200 transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-5 h-0.5 bg-slate-800 transition-all duration-300 ${
              menuOpen ? 'rotate-45 translate-y-2' : ''
            }`}
          />
          <span
            className={`block w-5 h-0.5 bg-slate-800 transition-all duration-300 ${
              menuOpen ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`block w-5 h-0.5 bg-slate-800 transition-all duration-300 ${
              menuOpen ? '-rotate-45 -translate-y-2' : ''
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? 'max-h-72 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="container mx-auto px-4 pt-3 pb-4 flex flex-col gap-1 border-t border-slate-200 mt-3 bg-white">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => {
                setActive(link.href);
                setMenuOpen(false);
              }}
              className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
                active === link.href
                  ? 'bg-amber-200 text-amber-900'
                  : 'text-slate-600 hover:text-amber-700 hover:bg-slate-100'
              }`}
            >
              {link.label}
            </a>
          ))}

          <a
            href="/files/cv-umar.pdf"
            download={true}
            className="mt-2 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium text-amber-700 bg-amber-50 border border-amber-200 hover:bg-amber-100"
          >
            <i className="ri-download-line ri-sm" />
            Download CV
          </a>
        </div>
      </div>
    </header>
  );
}