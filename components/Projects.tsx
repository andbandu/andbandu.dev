"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    title: "EcoSphere AI",
    category: "AI & Sustainability",
    description:
      "A machine learning platform that analyzes urban environmental data to optimize resource usage and reduce carbon footprints.",
    tags: ["Next.js", "Python", "TensorFlow", "D3.js"],
    image: "/project1.jpg", // We'll generate an image for this later if needed
    liveLabel: "Live Demo",
    link: "#",
    github: "#",
  },
  {
    title: "QuantumPay",
    category: "FinTech & Security",
    description:
      "Securing the future of digital finance with quantum-resistant encryption for next-generation payment gateways.",
    tags: ["TypeScript", "Rust", "Prisma", "AWS"],
    image: "/project2.jpg",
    liveLabel: "Case Study",
    link: "#",
    github: "#",
  },
  {
    title: "Lumea Studio",
    category: "E-Commerce & 3D",
    description:
      "An immersive 3D shopping experience for luxury items, featuring real-time customization and AR previews.",
    tags: ["Three.js", "React Three Fiber", "Tailwind", "Stripe"],
    image: "/project3.jpg",
    liveLabel: "View Shop",
    link: "#",
    github: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="pt-32 pb-32 px-4 sm:px-6 md:px-12 bg-zinc-950/30 scroll-mt-24">
      <div className="container ml-auto mr-auto max-w-7xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              Selected <span className="text-gradient">Projects</span>
            </h2>
            <p className="text-zinc-400 text-lg leading-relaxed">
              A collection of high-impact digital experiences I've designed and 
              developed, focusing on performance, scalability, and stunning aesthetics.
            </p>
          </motion.div>
          
          <motion.a
             href="https://github.com"
             initial={{ opacity: 0, x: 20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             className="flex items-center justify-center gap-2 px-6 pt-3 pb-3 border border-white/10 rounded-full hover:bg-white/5 transition-colors group w-full sm:w-fit"
          >
             Browse GitHub <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </motion.a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="group relative glass rounded-3xl overflow-hidden h-full flex flex-col"
            >
              {/* Project Image Placeholder - will be styled with CSS gradient if no image */}
              <div className="relative h-60 w-full overflow-hidden bg-zinc-900 flex items-center justify-center border-b border-white/5">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-accent/10 group-hover:scale-110 transition-transform duration-700" />
                <div className="w-16 h-16 rounded-2xl bg-white/5 backdrop-blur-md flex items-center justify-center border border-white/10 group-hover:rotate-12 transition-transform duration-500">
                  <ExternalLink className="text-white/40 group-hover:text-white transition-colors" />
                </div>
              </div>

              <div className="p-8 flex-1 flex flex-col">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold tracking-widest text-indigo-400 uppercase">
                    {project.category}
                  </span>
                  <div className="flex gap-3">
                    <a href={project.github} className="text-zinc-500 hover:text-white transition-colors">
                      <Github size={18} />
                    </a>
                    <a href={project.link} className="text-zinc-500 hover:text-white transition-colors">
                      <ExternalLink size={18} />
                    </a>
                  </div>
                </div>

                <h3 className="text-2xl font-bold mb-3 group-hover:text-indigo-400 transition-colors">
                   {project.title}
                </h3>
                
                <p className="text-zinc-400 mb-6 flex-1">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 pt-1 pb-1 bg-white/5 border border-white/5 rounded-lg text-xs font-medium text-zinc-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href={project.link}
                  className="inline-flex items-center gap-2 pt-2 pb-2 text-sm font-bold border-b-2 border-transparent hover:border-indigo-500 transition-all duration-300 w-fit"
                >
                  {project.liveLabel} <ArrowRight size={16} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
