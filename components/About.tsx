"use client";

import { motion } from "framer-motion";
import { 
  Monitor, 
  Smartphone, 
  Server, 
  Database, 
  Layers, 
  Figma, 
  Github, 
  Cpu,
  Code,
  Zap
} from "lucide-react";

const skills = [
  { name: "Next JS", icon: Zap, level: 96, color: "text-white" },
  { name: "React JS", icon: Code, level: 98, color: "text-blue-400" },
  { name: "React Native", icon: Smartphone, level: 92, color: "text-emerald-400" },
  { name: "Frontend Development", icon: Monitor, level: 95, color: "text-indigo-400" },
  { name: "Backend Architecture", icon: Server, level: 90, color: "text-violet-400" },
  { name: "UI/UX Design", icon: Figma, level: 85, color: "text-pink-400" },
  { name: "Data Systems", icon: Database, level: 88, color: "text-blue-400" },
  { name: "Cloud Infrastructure", icon: Layers, level: 82, color: "text-teal-400" },
  { name: "Github & OSS", icon: Github, level: 92, color: "text-white" },
  { name: "DevOps & CI/CD", icon: Cpu, level: 85, color: "text-emerald-400" },
];

export default function About() {
  return (
    <section id="about" className="pt-32 pb-32 px-4 sm:px-6 md:px-12 scroll-mt-24">
      <div className="container ml-auto mr-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight">
              Designing <span className="text-gradient">Experiences</span>, <br />
              Building the Future.
            </h2>
            <p className="text-zinc-400 text-lg leading-relaxed mb-8">
              With over 8 years of experience in the digital space, I've had the privilege 
              of working with global brands and tech startups to transform complex 
              problems into elegant, high-perfoming digital solutions.
            </p>
            <p className="text-zinc-400 text-lg leading-relaxed mb-12">
              My approach blends technical precision with creative intuition, ensuring 
              that every line of code serves a purpose and every pixel tells a story. 
              I specialize in React-based ecosystems, cloud-native architectures, 
              and pushing the boundaries of what's possible in the browser.
            </p>

            <div className="grid grid-cols-2 gap-x-12 gap-y-10">
              <div className="flex flex-col border-l-2 border-indigo-500 pl-6">
                <span className="text-3xl font-black text-white">45+</span>
                <span className="text-zinc-500 font-medium">Projects Done</span>
              </div>
              <div className="flex flex-col border-l-2 border-violet-500 pl-6">
                <span className="text-3xl font-black text-white">12+</span>
                <span className="text-zinc-500 font-medium">Global Awards</span>
              </div>
              <div className="flex flex-col border-l-2 border-cyan-500 pl-6">
                <span className="text-3xl font-black text-white">8+</span>
                <span className="text-zinc-500 font-medium">Years Experience</span>
              </div>
              <div className="flex flex-col border-l-2 border-emerald-500 pl-6">
                <span className="text-3xl font-black text-white">10M+</span>
                <span className="text-zinc-500 font-medium">User Downloads</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {skills.map((skill, i) => (
              <motion.div
                key={skill.name}
                whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.05)" }}
                className="glass p-6 rounded-2xl flex items-center gap-4 transition-all duration-300"
              >
                <div className={`p-3 rounded-xl bg-white/5 ${skill.color}`}>
                  <skill.icon size={24} />
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-sm mb-2">{skill.name}</h4>
                  <div className="w-full h-1.5 bg-zinc-800 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.3 + i * 0.1 }}
                      className={`h-full bg-gradient-to-r from-indigo-500 to-accent`}
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
