// src/components/Navbar.tsx
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Home", path: "/" },
  { label: "Lessons", path: "/lessons" },
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" },
];

const Navbar: React.FC = () => {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const isActive = (path: string) => pathname === path;

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 h-16 transition-shadow duration-300 bg-gray-900 ${
        scrolled ? "shadow-lg" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="text-white text-2xl font-extrabold tracking-wide hover:opacity-80 transition"
        >
          AJ Seadler
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`relative text-sm font-medium transition-colors duration-200 ${
                isActive(item.path)
                  ? "text-white"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              {item.label}
              <span
                className={`absolute left-0 -bottom-1 h-0.5 w-full bg-indigo-500 transition-transform duration-200 ${
                  isActive(item.path)
                    ? "scale-x-100"
                    : "scale-x-0 group-hover:scale-x-100"
                }`}
              />
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:block">
          <Link
            to="/lessons"
            className="inline-block bg-gradient-to-r from-indigo-500 to-pink-500 text-white text-sm font-semibold px-6 py-2 rounded-full shadow-lg hover:from-indigo-600 hover:to-pink-600 transform hover:-translate-y-0.5 transition"
          >
            Book a Lesson
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-gray-900 border-t border-gray-800">
          <nav className="px-6 pt-4 pb-6 space-y-3">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setOpen(false)}
                className={`block text-base font-medium transition-colors duration-200 ${
                  isActive(item.path)
                    ? "text-white"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/lessons"
              onClick={() => setOpen(false)}
              className="mt-4 block text-center bg-gradient-to-r from-indigo-500 to-pink-500 text-white font-semibold py-2 rounded-full shadow hover:from-indigo-600 hover:to-pink-600 transition"
            >
              Book a Lesson
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
