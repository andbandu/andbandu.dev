"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Menu, X, Briefcase } from "lucide-react";
import { useState, useEffect } from "react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

const socialLinks = [
  { icon: Github, href: "https://github.com/andbandu", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/andbandu/", label: "LinkedIn" },
  { icon: Twitter, href: "https://x.com/andbandu", label: "Twitter" },
  { icon: Briefcase, href: "https://fiverr.com", label: "Fiverr" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 ml-auto mr-auto z-50 transition-all duration-300 ${scrolled ? "pt-4 pb-4" : "pt-6 pb-6"
        }`}
    >
      <div className="container ml-auto mr-auto px-6">
        <div
          className={`glass rounded-full px-10 pt-4 pb-4 flex items-center justify-between transition-all duration-300 relative ${scrolled ? "shadow-lg bg-zinc-900/80" : "bg-transparent border-transparent"
            }`}
        >
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-bold font-heading text-gradient whitespace-nowrap z-10"
          >
            Andbandu
          </motion.div>

          {/* Desktop Navigation - Centered via Absolute Positioning */}
          <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-8 whitespace-nowrap">
            {navLinks.map((link, i) => (
              <motion.a
                key={link.name}
                href={link.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="text-sm font-medium text-zinc-400 hover:text-white transition-colors"
              >
                {link.name}
              </motion.a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-4 z-10">
            {socialLinks.map((social, i) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 + i * 0.1 }}
                className="p-2 rounded-full hover:bg-white/10 text-zinc-400 hover:text-white transition-all"
              >
                <social.icon size={18} />
              </motion.a>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-zinc-400 hover:text-white z-10"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="absolute top-full left-6 right-6 mt-4 glass rounded-2xl p-6 md:hidden"
        >
          <div className="flex flex-col gap-4 text-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-lg font-medium text-zinc-400 hover:text-white transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <div className="flex justify-center gap-6 mt-4 pt-4 border-t border-white/10">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="text-zinc-400 hover:text-white"
                >
                  <social.icon size={24} />
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
