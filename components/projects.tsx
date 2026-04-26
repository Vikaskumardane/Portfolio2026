"use client";

import { motion } from "motion/react";
import { ExternalLink, Github, Layers, ArrowRight } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    title: "Serverless AWS Infrastructure (Multi-Region)",
    description: "Built and managed a large-scale serverless application spanning multi-account, multi-region AWS environments (dev, perf, training, prod) using Terraform IaC. Implemented CloudWatch dashboards and alerting.",
    tech: ["AWS Lambda", "Terraform", "API Gateway", "Step Functions", "CloudWatch"],
    outcome: "Maintained 99%+ production availability and robust disaster recovery.",
    github: "https://github.com/Vikaskumardane",
    demo: "https://medium.com/@Vikaskumar_Dane/building-production-ready-aws-architecture-secure-web-app-with-multi-az-high-availability-1ecf06ef1380",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "CI/CD Pipeline with Jenkins & Docker",
    description: "Built an end-to-end CI/CD pipeline for a Flask web application using Jenkins and Docker, automating build, test, and deployment stages. Containerized the application for environment parity.",
    tech: ["Jenkins", "Docker", "Flask", "AWS EC2", "CI/CD"],
    outcome: "Reduced manual release effort to near zero with consistent dev/prod parity.",
    github: "https://github.com/Vikaskumardane",
    demo: "https://medium.com/@Vikaskumar_Dane/deploy-your-first-jenkins-app-on-aws-ec2-a-hands-on-guide-for-beginners-49121c0622e4",
    image: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Blockchain NFT Marketplace",
    description: "Architected a fully decentralized NFT Marketplace on blockchain, enabling peer-to-peer minting, listing, and trading of non-fungible tokens without centralized intermediaries.",
    tech: ["Blockchain", "Solidity", "Smart Contracts", "Web3.js", "React"],
    outcome: "Published at ICCIP 2024 and indexed in Scopus-ranked SSRN Electronic Journal.",
    github: "https://github.com/Vikaskumardane",
    demo: "https://www.scribd.com/document/691452014/16-Blockchain-Based-NFT-Marketplace-1",
    image: "https://images.unsplash.com/photo-1621416894569-0f39ed31d247?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "YouTube Clone – React & Tailwind",
    description: "Full-featured YouTube clone built with React and Tailwind CSS, integrating the YouTube Data API for real-time video feeds, search functionality, and responsive video playback.",
    tech: ["React", "Tailwind CSS", "YouTube API", "JavaScript"],
    outcome: "Delivered a fully responsive application with real-time video feed integration.",
    github: "https://github.com/Vikaskumardane",
    demo: "https://youtube-clone-vikas.vercel.app/",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Travelling Agency Landing Page",
    description: "Built a fully responsive travelling agency landing page using plain HTML, CSS, and JavaScript — focused on clean UI, smooth animations, and mobile-first design.",
    tech: ["HTML", "CSS", "JavaScript", "Responsive Design"],
    outcome: "Created a highly optimized, cross-browser compatible interface.",
    github: "https://github.com/Vikaskumardane",
    demo: "https://zippytravels.netlify.app/",
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=800&auto=format&fit=crop",
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-24 bg-zinc-50 dark:bg-zinc-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-5xl font-bold tracking-tight text-zinc-900 dark:text-white mb-4"
          >
            Featured Projects
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-24 h-1 bg-emerald-500 mx-auto rounded-full"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative bg-white dark:bg-zinc-950 rounded-3xl overflow-hidden shadow-xl border border-zinc-200 dark:border-zinc-800 hover:border-emerald-500/50 transition-all duration-500 hover:-translate-y-2 flex flex-col"
            >
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-zinc-900/20 dark:bg-zinc-900/40 z-10 group-hover:bg-transparent transition-colors duration-500" />
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  referrerPolicy="no-referrer"
                  className="object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/20 to-transparent z-20 opacity-80" />
                <div className="absolute bottom-6 left-6 z-30 right-6">
                  <h3 className="text-xl font-bold text-white mb-0 leading-tight">{project.title}</h3>
                </div>
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <p className="text-zinc-600 dark:text-zinc-300 mb-6 leading-relaxed text-sm line-clamp-3">
                  {project.description}
                </p>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-zinc-900 dark:text-white uppercase tracking-wider mb-3 flex items-center">
                    <Layers className="w-4 h-4 mr-2 text-emerald-500" />
                    Technologies
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 rounded-full text-xs font-medium border border-zinc-200 dark:border-zinc-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-8 p-4 bg-emerald-50 dark:bg-emerald-900/20 rounded-xl border border-emerald-100 dark:border-emerald-800/30">
                  <h4 className="text-sm font-semibold text-emerald-800 dark:text-emerald-400 uppercase tracking-wider mb-2">Outcome</h4>
                  <p className="text-emerald-700 dark:text-emerald-300 text-sm font-medium">
                    {project.outcome}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-6 border-t border-zinc-200 dark:border-zinc-800">
                  <div className="flex space-x-4">
                    <a
                      href={project.github}
                      className="text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors flex items-center"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="w-5 h-5 mr-2" />
                      <span className="text-sm font-medium">Code</span>
                    </a>
                    <a
                      href={project.demo}
                      className="text-zinc-500 hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors flex items-center"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="w-5 h-5 mr-2" />
                      <span className="text-sm font-medium">Live Demo</span>
                    </a>
                  </div>
                  <motion.div
                    whileHover={{ x: 5 }}
                    className="w-10 h-10 rounded-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center text-zinc-900 dark:text-white"
                  >
                    <ArrowRight className="w-5 h-5" />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
