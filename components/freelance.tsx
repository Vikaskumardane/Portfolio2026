"use client";

import { motion } from "motion/react";
import { Calendar, Briefcase, Globe, ArrowUpRight } from "lucide-react";

export function Freelance() {
  return (
    <section id="freelance" className="py-24 bg-zinc-50 dark:bg-zinc-900 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-[20%] -right-[10%] w-[50%] h-[50%] rounded-full bg-emerald-500/5 blur-[120px]" />
        <div className="absolute -bottom-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-cyan-500/5 blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-white dark:bg-zinc-950 rounded-3xl p-8 md:p-12 shadow-2xl border border-zinc-200 dark:border-zinc-800">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center space-x-2 bg-emerald-100 dark:bg-emerald-900/30 rounded-full px-4 py-1.5 mb-6">
                <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <span className="text-sm font-medium text-emerald-700 dark:text-emerald-400">Available for Freelance</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-zinc-900 dark:text-white mb-6">
                Let&apos;s Build Something <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-cyan-500">Amazing</span> Together
              </h2>
              <p className="text-lg text-zinc-600 dark:text-zinc-300 mb-8 leading-relaxed">
                I&apos;m currently accepting new freelance clients. Whether you need a scalable cloud architecture, a robust CI/CD pipeline, or a full-stack web application, I can help bring your vision to life.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://calendly.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-emerald-600 hover:bg-emerald-700 rounded-lg transition-colors shadow-lg shadow-emerald-500/25"
                >
                  <Calendar className="w-5 h-5 mr-2" />
                  Book a Meeting
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            >
              <a
                href="https://upwork.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-6 bg-zinc-50 dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 hover:border-emerald-500/50 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex justify-between items-start mb-4">
                  <div className="p-3 bg-white dark:bg-zinc-800 rounded-xl shadow-sm">
                    <Briefcase className="w-6 h-6 text-emerald-500" />
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-zinc-400 group-hover:text-emerald-500 transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-2">Upwork</h3>
                <p className="text-sm text-zinc-500 dark:text-zinc-400">Hire me for project-based work with escrow protection.</p>
              </a>

              <a
                href="https://contra.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-6 bg-zinc-50 dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 hover:border-cyan-500/50 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex justify-between items-start mb-4">
                  <div className="p-3 bg-white dark:bg-zinc-800 rounded-xl shadow-sm">
                    <Globe className="w-6 h-6 text-cyan-500" />
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-zinc-400 group-hover:text-cyan-500 transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-2">Contra</h3>
                <p className="text-sm text-zinc-500 dark:text-zinc-400">Commission me commission-free for flexible engagements.</p>
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
