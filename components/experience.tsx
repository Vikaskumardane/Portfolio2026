"use client";

import { motion } from "motion/react";
import { Briefcase, Calendar, MapPin, GitBranch, Terminal, Cloud, Server, Box, CheckCircle2, GitCommit, Clock, PlayCircle } from "lucide-react";

const experiences = [
  {
    role: "Senior Software Engineer",
    company: "Capgemini",
    location: "Pune, India",
    date: "January 2026 – Present",
    description: [
      "Architected and deployed serverless infrastructure for large-scale multi-account, multi-region AWS application using Terraform (IaC), managing Lambda functions, API Gateway, S3, Route 53, Step Functions, and Secrets Manager",
      "Developed and optimized AWS Lambda functions to support new business automation features and reduce execution time by 25%",
      "Managed CI/CD pipelines with GitHub Actions ensuring 99.9% deployment success rate across env1, env2, perf, training, and prod environments",
      "Monitored production workloads using CloudWatch logs and dashboards, proactively resolving incidents to maintain application availability and SLA compliance",
    ],
  },
  {
    role: "Software Engineer",
    company: "Capgemini",
    location: "Pune, India",
    date: "June 2024 – December 2025",
    description: [
      "Designed and optimized scalable RESTful APIs and Spring Boot microservices, improving API efficiency by 20% through architecture refactoring and database query optimization",
      "Reduced infrastructure costs by 30% through intelligent AWS resource optimization and right-sizing EC2, RDS instances",
      "Implemented Snyk security automation in CI/CD pipeline, reducing critical vulnerabilities by 40% and automating security scanning for 15+ microservices",
      "Collaborated on enterprise cloud migration to ROSA (Red Hat OpenShift on AWS), establishing agile infrastructure and deployment workflows",
      "Leveraged Kubernetes, Prometheus, and AWS Code Pipeline to enhance deployment frequency by 35% and improve system reliability",
    ],
  },
  {
    role: "Freelance Web Developer",
    company: "Self-Employed",
    location: "Remote",
    date: "March 2024 – June 2024",
    description: [
      "Delivered 4+ full-stack web applications for SaaS, e-commerce, and service platforms with 100% on-time delivery using React, Vue.js, Node.js, and Express",
      "Implemented SEO best practices and performance optimizations, increasing organic traffic by 150+ monthly visitors and reducing page load time by 40%",
    ],
  },
  {
    role: "Web Developer",
    company: "SocioWave Media",
    location: "Pune, India",
    date: "February 2023 – February 2024",
    description: [
      "Redesigned legacy websites with modern frontend technologies and SEO optimization, generating 150+ additional organic visitors per month",
      "Built high-converting e-commerce interfaces using JavaScript and Tailwind CSS, increasing sales conversions by 25% and improving user engagement metrics",
      "Delivered 10+ website projects with 95%+ client satisfaction through effective stakeholder collaboration and requirements gathering",
    ],
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-24 bg-white dark:bg-zinc-950 relative overflow-hidden">
      {/* Background 3D Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-40 -left-10 opacity-10 dark:opacity-5"
        >
          <GitBranch className="w-64 h-64 text-emerald-500" />
        </motion.div>
        <motion.div
          animate={{ y: [0, 30, 0], rotate: [0, -10, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute top-1/3 -right-20 opacity-10 dark:opacity-5"
        >
          <Box className="w-80 h-80 text-cyan-500" />
        </motion.div>
        <motion.div
          animate={{ y: [0, -15, 0], rotate: [0, 15, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-40 left-10 opacity-10 dark:opacity-5"
        >
          <GitCommit className="w-48 h-48 text-indigo-500" />
        </motion.div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-5xl font-bold tracking-tight text-zinc-900 dark:text-white mb-4"
          >
            Experience
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-24 h-1 bg-emerald-500 mx-auto rounded-full"
          />
        </div>

        <div className="relative border-l-2 border-zinc-200 dark:border-zinc-800/50 ml-3 md:ml-6 space-y-16">
          {/* Animated Pipeline Line */}
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 2, ease: "easeInOut" }}
            className="absolute -left-[2px] top-0 w-[2px] bg-emerald-500 z-0"
          />

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50, rotateX: 10 }}
              whileInView={{ opacity: 1, x: 0, rotateX: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: 0.1, type: "spring", stiffness: 100 }}
              className="relative pl-8 md:pl-12 group z-10"
            >
              {/* GitHub Actions Node */}
              <div className="absolute -left-[17px] top-4 w-8 h-8 rounded-full bg-white dark:bg-zinc-950 border-2 border-zinc-300 dark:border-zinc-700 flex items-center justify-center group-hover:border-emerald-500 transition-colors duration-500 z-20">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + index * 0.2, type: "spring" }}
                >
                  <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                </motion.div>
              </div>

              {/* GitHub Actions Job Card */}
              <div className="bg-white dark:bg-zinc-900/80 backdrop-blur-sm rounded-xl shadow-xl border border-zinc-200 dark:border-zinc-800 overflow-hidden hover:border-emerald-500/50 hover:shadow-emerald-500/10 transition-all duration-500 transform group-hover:-translate-y-1">
                {/* Job Header */}
                <div className="bg-zinc-100 dark:bg-zinc-950/50 px-4 py-3 border-b border-zinc-200 dark:border-zinc-800 flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <PlayCircle className="w-5 h-5 text-zinc-400 group-hover:text-emerald-500 transition-colors" />
                    <span className="font-mono text-sm font-semibold text-zinc-700 dark:text-zinc-300">
                      job: {exp.company.toLowerCase().replace(/\s+/g, '-')}-deploy
                    </span>
                  </div>
                  <div className="flex items-center space-x-2 text-zinc-500 font-mono text-xs">
                    <Clock className="w-3 h-3" />
                    <span>{exp.date}</span>
                  </div>
                </div>

                {/* Job Content */}
                <div className="p-6 md:p-8">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
                    <div>
                      <h3 className="text-2xl font-bold text-zinc-900 dark:text-white group-hover:text-emerald-500 transition-colors">{exp.role}</h3>
                      <div className="flex items-center text-emerald-600 dark:text-emerald-400 font-medium mt-2">
                        <Briefcase className="w-4 h-4 mr-2" />
                        {exp.company}
                      </div>
                    </div>
                    <div className="flex items-center bg-zinc-100 dark:bg-zinc-800/50 px-3 py-1.5 rounded-full w-fit text-sm text-zinc-600 dark:text-zinc-400">
                      <MapPin className="w-4 h-4 mr-2 text-emerald-500" />
                      {exp.location}
                    </div>
                  </div>

                  <div className="space-y-3 font-mono text-sm">
                    {exp.description.map((item, i) => (
                      <motion.div 
                        key={i} 
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.6 + (i * 0.1) }}
                        className="flex items-start group/line"
                      >
                        <span className="mr-4 text-zinc-400 dark:text-zinc-600 select-none">{`>`}</span>
                        <span className="text-zinc-700 dark:text-zinc-300 leading-relaxed group-hover/line:text-zinc-900 dark:group-hover/line:text-zinc-100 transition-colors">{item}</span>
                      </motion.div>
                    ))}
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 1.2 }}
                      className="pt-4 flex items-center text-emerald-600 dark:text-emerald-500"
                    >
                      <CheckCircle2 className="w-4 h-4 mr-2" />
                      <span>Deployment successful</span>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
