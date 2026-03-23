"use client";

import { motion } from "framer-motion";
import { ArrowRight, Code, Palette, Zap } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[100vh] flex flex-col items-center justify-center overflow-hidden pt-48 pb-32 px-4 sm:px-6 md:px-24"
    >
      <div className="absolute inset-0 bg-mesh z-0" />

      {/* Hero Content */}
      <div className="container ml-auto mr-auto max-w-7xl z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center text-center lg:items-start lg:text-left"
        >
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-indigo-400 font-semibold mb-6 flex items-center gap-2"
          >
            <Zap size={18} />
            Available for new projects
          </motion.p>
 
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-8 leading-[1.1] tracking-tight">
            <span className="text-white">Design.</span> <br />
            <span className="text-gradient">Develop.</span> <br />
            <span className="text-white">Deliver.</span>
          </h1>
 
          <p className="text-base md:text-xl text-zinc-400 max-w-xl mb-12 leading-relaxed px-4 lg:px-0">
            I'm a Full Stack Developer specializing in building high-performance 
            web applications with stunning visual aesthetics and 
            user-centric experiences.
          </p>
 
          <div className="flex flex-col sm:flex-row flex-wrap gap-5 w-full sm:w-auto px-4 lg:px-0">
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-center gap-2 px-8 pt-4 pb-4 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-2xl shadow-xl shadow-indigo-600/30 transition-all duration-300 w-full sm:w-fit"
            >
              View Projects
              <ArrowRight size={20} />
            </motion.a>
            <motion.a
              href="https://fiverr.com"
              target="_blank"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-center gap-2 px-8 pt-4 pb-4 bg-[#1dbf73] hover:bg-[#19a463] text-white font-bold rounded-2xl transition-all duration-300 w-full sm:w-fit shadow-xl shadow-[#1dbf73]/20"
            >
              Hire Me on Fiverr
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05, border: "1px solid rgba(255, 255, 255, 0.4)" }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-center px-8 pt-4 pb-4 border border-white/20 glass text-white font-bold rounded-2xl transition-all duration-300 w-full sm:w-fit"
            >
              Direct Chat
            </motion.a>
          </div>
        </motion.div>

        {/* Visual Elements */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative h-[400px] md:h-[600px] hidden lg:block"
        >
          {/* Main Visual Box */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative w-72 h-80 md:w-80 md:h-96 bg-zinc-900 border border-white/10 rounded-3xl p-6 glow rotate-6 transform transition-transform hover:rotate-0 duration-500 overflow-hidden">
               <div className="flex flex-col gap-4">
                 <div className="w-full h-32 md:h-40 bg-indigo-500/10 border border-white/5 rounded-2xl flex items-center justify-center">
                   <Code size={48} className="text-indigo-400" />
                 </div>
                 <div className="w-full h-4 bg-white/5 rounded-full" />
                 <div className="w-3/4 h-4 bg-white/5 rounded-full" />
                 <div className="w-1/2 h-4 bg-white/5 rounded-full" />
                 <div className="flex gap-2">
                   <div className="w-8 h-8 md:w-10 md:h-10 bg-indigo-500 rounded-lg flex items-center justify-center"><Code size={18} /></div>
                   <div className="w-8 h-8 md:w-10 md:h-10 bg-violet-500 rounded-lg flex items-center justify-center"><Palette size={18} /></div>
                   <div className="w-8 h-8 md:w-10 md:h-10 bg-cyan-500 rounded-lg flex items-center justify-center"><Zap size={18} /></div>
                 </div>
               </div>
               <div className="absolute -right-4 -bottom-4 w-32 h-32 bg-indigo-500/20 blur-3xl" />
            </div>
            
            {/* Supporting Card 1 - Performance */}
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute top-1/4 -right-16 glass p-5 rounded-2xl w-44 shadow-2xl z-20"
            >
              <p className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold mb-2">Performance</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-500/10 rounded-xl flex items-center justify-center text-green-500 font-black text-sm">99</div>
                <div className="flex-1 space-y-1.5">
                  <div className="w-full h-1.5 bg-green-500/20 rounded-full overflow-hidden">
                    <div className="w-[99%] h-full bg-green-500" />
                  </div>
                  <div className="w-1/2 h-1.5 bg-zinc-800 rounded-full" />
                </div>
              </div>
            </motion.div>

             {/* Supporting Card 2 - Tech Stack */}
             <motion.div
              animate={{ y: [0, 15, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-1/4 -left-16 glass p-5 rounded-2xl w-52 shadow-2xl z-20"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="p-1.5 bg-indigo-500/20 rounded-lg text-indigo-400"><Code size={16} /></div>
                <p className="text-xs font-bold">Stack</p>
              </div>
              <div className="flex flex-wrap gap-1.5 text-[9px] items-center">
                <span className="px-2 pt-0.5 pb-0.5 bg-white/5 rounded-md border border-white/5">React 19</span>
                <span className="px-2 pt-0.5 pb-0.5 bg-white/5 rounded-md border border-white/5">Next.js 16</span>
                <span className="px-2 pt-0.5 pb-0.5 bg-white/5 rounded-md border border-white/5">TS</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Background Floaters */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], x: [0, 50, 0], y: [0, -50, 0] }}
        transition={{ repeat: Infinity, duration: 15 }}
        className="absolute top-[10%] right-[15%] w-64 h-64 bg-indigo-600/10 blur-[100px] rounded-full z-0"
      />
      <motion.div
        animate={{ scale: [1, 1.1, 1], x: [0, -30, 0], y: [0, 60, 0] }}
        transition={{ repeat: Infinity, duration: 12 }}
        className="absolute bottom-[20%] left-[10%] w-80 h-80 bg-violet-600/10 blur-[120px] rounded-full z-0"
      />
    </section>
  );
}
