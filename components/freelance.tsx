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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* Left Side: Pitch and CTAs */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center space-x-2 bg-emerald-100 dark:bg-emerald-900/30 rounded-full px-4 py-1.5 mb-6">
                <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <span className="text-sm font-medium text-emerald-700 dark:text-emerald-400">Consulting & Freelance</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-zinc-900 dark:text-white mb-6">
                Let&apos;s Build & Scale Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-cyan-500">Vision</span>
              </h2>
              <p className="text-lg text-zinc-600 dark:text-zinc-300 mb-8 leading-relaxed">
                I partner with startups and businesses to build high-performance web applications and design resilient cloud infrastructures. From writing the first line of React code to automating production AWS deployments, I deliver end-to-end solutions.
              </p>

              <div className="space-y-4">
                <a
                  href="https://calendly.com/vikasdane06/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 text-base font-medium text-white bg-emerald-600 hover:bg-emerald-700 rounded-xl transition-all shadow-lg shadow-emerald-500/25 hover:-translate-y-0.5"
                >
                  <Calendar className="w-5 h-5 mr-2" />
                  Book a Discovery Call
                </a>
                
                <div className="flex flex-wrap items-center gap-4 pt-4">
                  <span className="text-sm font-medium text-zinc-500">Also available on:</span>
                  <a
                    href="https://www.upwork.com/freelancers/~012fe0f54b7714743f?mp_source=share"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm font-bold text-zinc-700 dark:text-zinc-300 hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors"
                  >
                    <Briefcase className="w-4 h-4 mr-1.5" /> Upwork
                  </a>
                  <a
                    href="https://contra.com/vikasdane06_0da3g72h"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm font-bold text-zinc-700 dark:text-zinc-300 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors"
                  >
                    <Globe className="w-4 h-4 mr-1.5" /> Contra
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Right Side: Productized Services */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-4"
            >
              {/* Service 1: Web Dev */}
              <div className="group p-6 bg-zinc-50 dark:bg-zinc-900/50 rounded-2xl border border-zinc-200 dark:border-zinc-800 hover:border-emerald-500/30 transition-all duration-300 flex gap-4 items-start">
                <div className="p-3 bg-white dark:bg-zinc-800 rounded-xl shadow-sm shrink-0">
                  <svg className="w-6 h-6 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-zinc-900 dark:text-white mb-1">Full-Stack Web Development</h3>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">Modern, responsive frontends (React/Next.js) powered by robust backends (Node/Spring). I build apps that users love and businesses rely on.</p>
                </div>
              </div>

              {/* Service 2: Cloud/AWS */}
              <div className="group p-6 bg-zinc-50 dark:bg-zinc-900/50 rounded-2xl border border-zinc-200 dark:border-zinc-800 hover:border-emerald-500/30 transition-all duration-300 flex gap-4 items-start">
                <div className="p-3 bg-white dark:bg-zinc-800 rounded-xl shadow-sm shrink-0">
                  <svg className="w-6 h-6 text-cyan-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-zinc-900 dark:text-white mb-1">Cloud Architecture & AWS</h3>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">Serverless infrastructure, secure VPCs, and database optimizations. I design and scale cloud architectures that save money and never go down.</p>
                </div>
              </div>

              {/* Service 3: DevOps */}
              <div className="group p-6 bg-zinc-50 dark:bg-zinc-900/50 rounded-2xl border border-zinc-200 dark:border-zinc-800 hover:border-emerald-500/30 transition-all duration-300 flex gap-4 items-start">
                <div className="p-3 bg-white dark:bg-zinc-800 rounded-xl shadow-sm shrink-0">
                  <svg className="w-6 h-6 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-zinc-900 dark:text-white mb-1">CI/CD & DevOps Automation</h3>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">Stop deploying manually. I implement zero-downtime CI/CD pipelines (Jenkins, GitHub Actions) and Infrastructure as Code (Terraform).</p>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
