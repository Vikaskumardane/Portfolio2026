"use client";

import { motion } from "motion/react";
import { Code2, Database, Layout, Server, Settings, Terminal, Cloud } from "lucide-react";

const skillCategories = [
  {
    title: "Cloud & DevOps",
    icon: <Cloud className="w-6 h-6" />,
    skills: [
      { name: "AWS (Lambda, S3, API GW, EC2)", level: "Advanced", score: 4 },
      { name: "Terraform (IaC)", level: "Advanced", score: 4 },
      { name: "Docker & Kubernetes (EKS/ROSA)", level: "Advanced", score: 4 },
      { name: "CloudWatch & Prometheus", level: "Intermediate", score: 3 },
    ],
  },
  {
    title: "CI/CD & Tools",
    icon: <Settings className="w-6 h-6" />,
    skills: [
      { name: "GitHub Actions", level: "Advanced", score: 4 },
      { name: "Linux & Bash Scripting", level: "Advanced", score: 4 },
      { name: "Jenkins", level: "Intermediate", score: 3 },
      { name: "Git & ServiceNow", level: "Advanced", score: 4 },
    ],
  },
  {
    title: "Backend",
    icon: <Server className="w-6 h-6" />,
    skills: [
      { name: "Node.js & Express", level: "Advanced", score: 4 },
      { name: "RESTful APIs & Microservices", level: "Advanced", score: 4 },
      { name: "Spring Boot", level: "Intermediate", score: 3 },
      { name: "Web3 & Smart Contracts", level: "Beginner", score: 2 },
    ],
  },
  {
    title: "Frontend",
    icon: <Layout className="w-6 h-6" />,
    skills: [
      { name: "React & Next.js", level: "Intermediate", score: 3 },
      { name: "Tailwind CSS", level: "Advanced", score: 4 },
      { name: "JavaScript & TypeScript", level: "Advanced", score: 4 },
      { name: "Responsive UI", level: "Advanced", score: 4 },
    ],
  },
  {
    title: "Languages",
    icon: <Code2 className="w-6 h-6" />,
    skills: [
      { name: "JavaScript / TypeScript", level: "Advanced", score: 4 },
      { name: "Python", level: "Intermediate", score: 3 },
      { name: "Java", level: "Intermediate", score: 3 },
      { name: "Solidity", level: "Beginner", score: 2 },
    ],
  },
  {
    title: "Databases",
    icon: <Database className="w-6 h-6" />,
    skills: [
      { name: "PostgreSQL & MySQL", level: "Advanced", score: 4 },
      { name: "DynamoDB (NoSQL)", level: "Intermediate", score: 3 },
      { name: "Prisma ORM", level: "Intermediate", score: 3 },
    ],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-24 bg-zinc-50 dark:bg-zinc-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-5xl font-bold tracking-tight text-zinc-900 dark:text-white mb-4"
          >
            Technical Skills
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
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-zinc-950 rounded-2xl p-6 shadow-xl border border-zinc-200 dark:border-zinc-800 hover:border-emerald-500/50 dark:hover:border-emerald-500/50 transition-colors group"
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className="p-3 bg-zinc-100 dark:bg-zinc-900 rounded-xl text-emerald-500 group-hover:scale-110 transition-transform">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-zinc-900 dark:text-white">{category.title}</h3>
              </div>

              <div className="space-y-5">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300">{skill.name}</span>
                      <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400">
                        {skill.level}
                      </span>
                    </div>
                    <div className="flex gap-1">
                      {[1, 2, 3, 4, 5].map((block) => (
                        <motion.div
                          key={block}
                          initial={{ scaleY: 0 }}
                          whileInView={{ scaleY: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: 0.2 + (block * 0.1) + (index * 0.1) }}
                          className={`h-1.5 flex-1 rounded-full ${
                            block <= skill.score
                              ? "bg-gradient-to-r from-emerald-500 to-cyan-500"
                              : "bg-zinc-200 dark:bg-zinc-800"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
