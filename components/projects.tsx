"use client";

import { motion } from "motion/react";
import { ExternalLink, Github, Layers, ArrowRight } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    title: "Serverless AWS Infrastructure",
    description: "Architected and deployed a large-scale multi-account, multi-region AWS application using Terraform. Managed Lambda functions, API Gateway, S3, Route 53, Step Functions, and Secrets Manager.",
    tech: ["AWS", "Terraform", "Lambda", "API Gateway", "Step Functions"],
    outcome: "Reduced execution time by 25% and ensured 99.9% deployment success rate.",
    github: "#",
    demo: "#",
    image: "https://picsum.photos/seed/aws/800/600",
  },
  {
    title: "Enterprise Cloud Migration (ROSA)",
    description: "Collaborated on enterprise cloud migration to Red Hat OpenShift on AWS. Established agile infrastructure and deployment workflows using Kubernetes and Prometheus.",
    tech: ["ROSA", "Kubernetes", "Prometheus", "AWS Code Pipeline"],
    outcome: "Enhanced deployment frequency by 35% and improved system reliability.",
    github: "#",
    demo: "#",
    image: "https://picsum.photos/seed/k8s/800/600",
  },
  {
    title: "Scalable Microservices API",
    description: "Designed and optimized scalable RESTful APIs and Spring Boot microservices. Implemented Snyk security automation in CI/CD pipeline.",
    tech: ["Spring Boot", "REST API", "Snyk", "GitHub Actions"],
    outcome: "Improved API efficiency by 20% and reduced critical vulnerabilities by 40%.",
    github: "#",
    demo: "#",
    image: "https://picsum.photos/seed/api/800/600",
  },
  {
    title: "High-Converting E-Commerce Platform",
    description: "Built high-converting e-commerce interfaces using modern frontend technologies and SEO optimization.",
    tech: ["React", "Node.js", "Tailwind CSS", "Express"],
    outcome: "Increased sales conversions by 25% and generated 150+ additional organic visitors per month.",
    github: "#",
    demo: "#",
    image: "https://picsum.photos/seed/ecommerce/800/600",
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative bg-white dark:bg-zinc-950 rounded-3xl overflow-hidden shadow-xl border border-zinc-200 dark:border-zinc-800 hover:border-emerald-500/50 transition-all duration-500 hover:-translate-y-2"
            >
              <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 bg-zinc-900/20 dark:bg-zinc-900/40 z-10 group-hover:bg-transparent transition-colors duration-500" />
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  referrerPolicy="no-referrer"
                  className="object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/20 to-transparent z-20 opacity-80" />
                <div className="absolute bottom-6 left-6 z-30">
                  <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                </div>
              </div>

              <div className="p-8">
                <p className="text-zinc-600 dark:text-zinc-300 mb-6 leading-relaxed">
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
