"use client";

import { motion } from "motion/react";
import { User, Code, Cloud, Zap } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-24 bg-white dark:bg-zinc-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-5xl font-bold tracking-tight text-zinc-900 dark:text-white mb-4"
          >
            About Me
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-24 h-1 bg-emerald-500 mx-auto rounded-full"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            {/* 3D Visual Element for Personal Branding */}
            <div className="relative w-full aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-tr from-emerald-400 to-cyan-500 rounded-3xl transform rotate-6 opacity-50 blur-lg animate-pulse" />
              <div className="absolute inset-0 bg-zinc-100 dark:bg-zinc-900 rounded-3xl border border-zinc-200 dark:border-zinc-800 shadow-2xl flex flex-col items-center justify-center p-8 transform transition-transform hover:scale-105 duration-500">
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-emerald-500 to-cyan-600 flex items-center justify-center mb-6 shadow-inner">
                  <User className="w-16 h-16 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-2">Vikaskumar Dane</h3>
                <p className="text-emerald-500 font-mono mb-4">Software Engineer</p>
                <div className="flex gap-4">
                  <span className="bg-zinc-200 dark:bg-zinc-800 px-3 py-1 rounded-full text-xs font-medium dark:text-zinc-300">DevOps</span>
                  <span className="bg-zinc-200 dark:bg-zinc-800 px-3 py-1 rounded-full text-xs font-medium dark:text-zinc-300">Cloud</span>
                  <span className="bg-zinc-200 dark:bg-zinc-800 px-3 py-1 rounded-full text-xs font-medium dark:text-zinc-300">Full-Stack</span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed">
              I am an AWS-certified Software Engineer with over 2 years of experience building scalable cloud-native applications and microservices. My expertise lies in full-stack development, serverless architecture, CI/CD pipelines, and DevOps practices.
            </p>
            <p className="text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed">
              Throughout my career, I&apos;ve successfully reduced deployment costs by 30% and deployment errors by 40% through rigorous infrastructure optimization and security automation. I am passionate about creating efficient, reliable, and secure software solutions.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg text-emerald-600 dark:text-emerald-400">
                  <Cloud className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-zinc-900 dark:text-white">Cloud Architecture</h4>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400">AWS, Serverless, Terraform</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-cyan-100 dark:bg-cyan-900/30 rounded-lg text-cyan-600 dark:text-cyan-400">
                  <Zap className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-zinc-900 dark:text-white">CI/CD & Automation</h4>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400">GitHub Actions, Jenkins, Snyk</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg text-indigo-600 dark:text-indigo-400">
                  <Code className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-zinc-900 dark:text-white">Full-Stack Dev</h4>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400">React, Node.js, Spring Boot</p>
                </div>
              </div>
            </div>

            <div className="pt-8 mt-8 border-t border-zinc-200 dark:border-zinc-800">
              <h4 className="text-xl font-bold text-zinc-900 dark:text-white mb-4">Education</h4>
              <div className="space-y-4">
                <div>
                  <p className="font-semibold text-zinc-800 dark:text-zinc-200">Bachelor of Engineering, Computer Science</p>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400">PCET&apos;s Nutan College of Engineering & Research (Jan 2021 – Sep 2023)</p>
                </div>
                <div>
                  <p className="font-semibold text-zinc-800 dark:text-zinc-200">Diploma of Education, Information Technology</p>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400">Pimpri Chinchwad Polytechnic (Jul 2017 – Nov 2020)</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
