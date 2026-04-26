"use client";

import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { ArrowRight, Terminal, Cloud, Server, Code2, Database, Box, Network, GitBranch, FileText } from "lucide-react";
import { useEffect, useState } from "react";

export function Hero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (typeof window === "undefined") return;
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    // Normalize between -1 and 1
    const x = (clientX / innerWidth) * 2 - 1;
    const y = (clientY / innerHeight) * 2 - 1;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  // Parallax layers
  const layer1X = useTransform(smoothX, [-1, 1], [-15, 15]);
  const layer1Y = useTransform(smoothY, [-1, 1], [-15, 15]);

  const layer2X = useTransform(smoothX, [-1, 1], [-30, 30]);
  const layer2Y = useTransform(smoothY, [-1, 1], [-30, 30]);

  const layer3X = useTransform(smoothX, [-1, 1], [-50, 50]);
  const layer3Y = useTransform(smoothY, [-1, 1], [-50, 50]);

  return (
    <section 
      id="home" 
      className="relative min-h-[90vh] flex items-center justify-center overflow-hidden"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Background 3D-like elements */}
      <div className="absolute inset-0 z-0 opacity-20 dark:opacity-10 pointer-events-none">
        <motion.div
          animate={{
            rotate: [0, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-1/4 -right-1/4 w-[800px] h-[800px] rounded-full bg-gradient-to-br from-emerald-400 to-cyan-500 blur-3xl"
        />
        <motion.div
          animate={{
            rotate: [360, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-1/4 -left-1/4 w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center space-x-2 bg-zinc-100 dark:bg-zinc-800/50 rounded-full px-4 py-1.5 mb-6 border border-zinc-200 dark:border-zinc-700">
              <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="text-sm font-medium text-zinc-600 dark:text-zinc-300">Available for new opportunities</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 text-zinc-900 dark:text-white">
              Hi, I&apos;m <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-cyan-500">Vikas</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-zinc-600 dark:text-zinc-300 mb-6">
              AWS-Certified Software Engineer & DevOps Specialist
            </h2>
            <p className="text-lg text-zinc-500 dark:text-zinc-400 mb-8 max-w-xl leading-relaxed">
              Building scalable cloud-native applications and microservices. I specialize in infrastructure optimization, security automation, and CI/CD pipelines to reduce costs and deployment errors.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#projects"
                className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-emerald-600 hover:bg-emerald-700 rounded-lg transition-colors shadow-lg shadow-emerald-500/25"
              >
                View Projects
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-zinc-700 dark:text-zinc-200 bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 hover:bg-zinc-50 dark:hover:bg-zinc-700 rounded-lg transition-colors"
              >
                Contact Me
              </a>
              <a
                href="https://drive.google.com/file/d/14W7cTCuSq1plpS9fgok3xy0Y56HnvTKN/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800/30 hover:bg-emerald-100 dark:hover:bg-emerald-900/40 rounded-lg transition-colors"
              >
                <FileText className="mr-2 h-5 w-5" />
                View Resume
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="relative block h-[400px] lg:h-[500px] mt-8 lg:mt-0 w-full"
          >
            {/* 3D-like floating elements representing DevOps */}
            <div className="absolute inset-0 flex items-center justify-center scale-75 md:scale-100">
              {/* Center Main Element - AWS Cloud */}
              <motion.div
                style={{ x: layer1X, y: layer1Y }}
                className="relative z-20 w-56 h-56 md:w-64 md:h-64 bg-white dark:bg-zinc-900 rounded-2xl shadow-2xl border border-zinc-200 dark:border-zinc-800 flex items-center justify-center"
              >
                <motion.div animate={{ y: [-5, 5, -5] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} className="text-center">
                  <Cloud className="w-16 h-16 md:w-20 md:h-20 mx-auto text-emerald-500 mb-4" />
                  <p className="font-mono font-bold text-lg md:text-xl dark:text-white">AWS Cloud</p>
                </motion.div>
              </motion.div>

              {/* Docker / Container */}
              <motion.div
                style={{ x: layer3X, y: layer3Y }}
                className="absolute top-0 right-0 md:top-10 md:right-10 z-30 w-28 h-28 md:w-32 md:h-32 bg-zinc-50 dark:bg-zinc-800 rounded-xl shadow-xl border border-zinc-200 dark:border-zinc-700 flex items-center justify-center backdrop-blur-sm"
              >
                <motion.div animate={{ y: [5, -5, 5], rotateZ: [0, 5, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}>
                  <Box className="w-10 h-10 md:w-12 md:h-12 text-blue-500 mx-auto" />
                  <p className="font-mono text-xs text-center mt-2 text-zinc-500 dark:text-zinc-400">Docker</p>
                </motion.div>
              </motion.div>

              {/* Kubernetes / Network */}
              <motion.div
                style={{ x: layer2X, y: layer2Y }}
                className="absolute bottom-0 left-0 md:bottom-10 md:left-10 z-30 w-32 h-32 md:w-40 md:h-40 bg-zinc-50 dark:bg-zinc-800 rounded-xl shadow-xl border border-zinc-200 dark:border-zinc-700 flex items-center justify-center backdrop-blur-sm"
              >
                <motion.div animate={{ y: [-8, 8, -8], rotateZ: [0, -5, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}>
                  <Network className="w-12 h-12 md:w-14 md:h-14 text-indigo-500 mx-auto" />
                  <p className="font-mono text-xs text-center mt-2 text-zinc-500 dark:text-zinc-400">Kubernetes</p>
                </motion.div>
              </motion.div>

              {/* CI/CD Pipeline / GitBranch */}
              <motion.div
                style={{ x: layer3X, y: layer3Y }}
                className="absolute top-10 left-0 md:top-20 md:left-0 z-10 w-24 h-24 md:w-28 md:h-28 bg-zinc-50 dark:bg-zinc-800 rounded-xl shadow-xl border border-zinc-200 dark:border-zinc-700 flex items-center justify-center backdrop-blur-sm"
              >
                <motion.div animate={{ y: [8, -8, 8], rotateZ: [0, 10, 0] }} transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}>
                  <GitBranch className="w-8 h-8 md:w-10 md:h-10 text-orange-500 mx-auto" />
                  <p className="font-mono text-xs text-center mt-2 text-zinc-500 dark:text-zinc-400">CI/CD</p>
                </motion.div>
              </motion.div>

              {/* Terminal / Linux */}
              <motion.div
                style={{ x: layer2X, y: layer2Y }}
                className="absolute bottom-10 right-0 md:bottom-20 md:right-0 z-10 w-24 h-24 md:w-28 md:h-28 bg-zinc-50 dark:bg-zinc-800 rounded-xl shadow-xl border border-zinc-200 dark:border-zinc-700 flex items-center justify-center backdrop-blur-sm"
              >
                <motion.div animate={{ y: [-6, 6, -6], rotateZ: [0, -10, 0] }} transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}>
                  <Terminal className="w-8 h-8 md:w-10 md:h-10 text-zinc-700 dark:text-zinc-300 mx-auto" />
                  <p className="font-mono text-xs text-center mt-2 text-zinc-500 dark:text-zinc-400">Linux</p>
                </motion.div>
              </motion.div>

              {/* Server / Infrastructure */}
              <motion.div
                style={{ x: layer1X, y: layer1Y }}
                className="absolute top-1/2 -right-4 md:-right-10 z-20 w-20 h-20 md:w-24 md:h-24 bg-zinc-50 dark:bg-zinc-800 rounded-xl shadow-xl border border-zinc-200 dark:border-zinc-700 flex items-center justify-center backdrop-blur-sm"
              >
                <motion.div animate={{ y: [5, -5, 5], rotateZ: [0, 15, 0] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}>
                  <Server className="w-6 h-6 md:w-8 md:h-8 text-emerald-500 mx-auto" />
                  <p className="font-mono text-xs text-center mt-2 text-zinc-500 dark:text-zinc-400">Infra</p>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
