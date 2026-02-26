"use client";

import { motion } from "motion/react";
import { ArrowUp } from "lucide-react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-white dark:bg-zinc-950 py-12 border-t border-zinc-200 dark:border-zinc-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between">
        <div className="mb-4 md:mb-0">
          <a href="#home" className="text-xl font-bold tracking-tighter text-zinc-900 dark:text-zinc-100">
            Vikas<span className="text-emerald-500">.dev</span>
          </a>
          <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-2">
            © {new Date().getFullYear()} Vikaskumar Dane. All rights reserved.
          </p>
        </div>

        <div className="flex items-center space-x-6">
          <a href="#about" className="text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-emerald-500 transition-colors">About</a>
          <a href="#projects" className="text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-emerald-500 transition-colors">Projects</a>
          <a href="#contact" className="text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-emerald-500 transition-colors">Contact</a>
        </div>

        <motion.button
          whileHover={{ y: -3 }}
          onClick={scrollToTop}
          suppressHydrationWarning
          className="mt-6 md:mt-0 p-3 bg-zinc-100 dark:bg-zinc-900 rounded-xl text-zinc-600 dark:text-zinc-400 hover:text-emerald-500 hover:bg-emerald-50 dark:hover:bg-emerald-900/20 transition-all shadow-sm border border-zinc-200 dark:border-zinc-800"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-5 h-5" />
        </motion.button>
      </div>
    </footer>
  );
}
