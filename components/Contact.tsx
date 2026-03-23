"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send, ExternalLink } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setTimeout(() => {
      setStatus("sent");
      setFormState({ name: "", email: "", message: "" });
      setTimeout(() => setStatus("idle"), 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="pt-32 pb-32 px-4 sm:px-6 md:px-12 bg-zinc-950 scroll-mt-24">
      <div className="container ml-auto mr-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-black mb-10 leading-tight">
              Let's <span className="text-gradient">Collaborate</span>. <br />
              Start a Conversation.
            </h2>
            <p className="text-zinc-400 text-lg leading-relaxed mb-12 max-w-lg">
              I'm always open to discussing new projects, creative ideas, or 
              opportunities to be part of your vision. Reach out and I'll get 
              back to you within 24 hours.
            </p>

            <div className="space-y-8">
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 bg-indigo-500/10 rounded-2xl flex items-center justify-center text-indigo-400 group-hover:bg-indigo-500 group-hover:text-white transition-all duration-300">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-zinc-500 font-bold mb-1">Email</p>
                  <p className="text-lg font-bold">hello@andbandu.dev</p>
                </div>
              </div>
              
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 bg-violet-500/10 rounded-2xl flex items-center justify-center text-violet-400 group-hover:bg-violet-500 group-hover:text-white transition-all duration-300">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-zinc-500 font-bold mb-1">Phone</p>
                  <p className="text-lg font-bold">+1 (555) 000-0000</p>
                </div>
              </div>
              
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 bg-cyan-500/10 rounded-2xl flex items-center justify-center text-cyan-400 group-hover:bg-cyan-500 group-hover:text-white transition-all duration-300">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-zinc-500 font-bold mb-1">Location</p>
                  <p className="text-lg font-bold">Global Presence, Remote-First</p>
                </div>
              </div>
            </div>
            
            <div className="mt-16 pt-16 border-t border-white/5 flex gap-8 whitespace-nowrap overflow-x-auto no-scrollbar">
               {["GitHub", "LinkedIn", "Fiverr", "Twitter", "Instagram"].map((social) => (
                 <a key={social} href="#" className="text-zinc-500 font-bold hover:text-white flex items-center gap-2 transition-colors">
                    {social} <ExternalLink size={14} />
                 </a>
               ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass p-10 md:p-12 rounded-[2rem] glow"
          >
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-zinc-400 px-1">Full Name</label>
                  <input
                    type="text"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 pt-3 pb-3 text-white focus:outline-none focus:border-indigo-500 focus:bg-indigo-500/5 transition-all outline-none"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-zinc-400 px-1">Email Address</label>
                  <input
                    type="email"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 pt-3 pb-3 text-white focus:outline-none focus:border-indigo-500 focus:bg-indigo-500/5 transition-all outline-none"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-zinc-400 px-1">Message</label>
                <textarea
                  required
                  rows={6}
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-4 pt-3 pb-3 text-white focus:outline-none focus:border-indigo-500 focus:bg-indigo-500/5 transition-all outline-none resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                disabled={status !== "idle"}
                className="w-full pt-4 pb-4 bg-indigo-600 hover:bg-indigo-700 text-white font-black rounded-2xl transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed group shadow-xl shadow-indigo-600/20"
              >
                {status === "idle" && (
                  <>
                    Send Message
                    <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </>
                )}
                {status === "sending" && "Sending..."}
                {status === "sent" && "Message Sent!"}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
