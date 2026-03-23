"use client";

import { motion } from "framer-motion";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="pt-12 pb-12 px-4 sm:px-6 md:px-12 border-t border-white/5 bg-zinc-950">
      <div className="container ml-auto mr-auto max-w-7xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 mb-12">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl font-black font-heading tracking-tighter whitespace-nowrap"
          >
            And<span className="text-gradient">bandu</span>
          </motion.div>

          <nav className="flex flex-wrap justify-center gap-x-10 gap-y-4">
            {["Home", "About", "Projects", "Contact"].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-zinc-500 hover:text-white font-bold transition-colors"
              >
                {link}
              </a>
            ))}
          </nav>

          <div className="flex gap-4">
            <span className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-xs font-bold text-zinc-500">EN</span>
            <span className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-xs font-bold text-zinc-500 hover:text-white cursor-pointer transition-colors">JP</span>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-12 border-t border-white/5 text-sm text-zinc-600 font-medium">
          <p>© {currentYear} Andbandu. All rights reserved. Crafted with passion.</p>
          <div className="flex gap-8 mt-6 md:mt-0">
             <a href="#" className="hover:text-zinc-400 transition-colors">Privacy Policy</a>
             <a href="#" className="hover:text-zinc-400 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
