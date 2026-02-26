"use client";

import { motion } from "motion/react";
import { Award, CheckCircle2 } from "lucide-react";
import Image from "next/image";

const certifications = [
  {
    title: "AWS Certified Developer - Associate",
    issuer: "Amazon Web Services",
    date: "2024",
    description: "Validates proficiency in developing, deploying, and debugging cloud-based applications using AWS.",
    icon: "https://picsum.photos/seed/aws-dev/100/100",
  },
  {
    title: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    date: "2023",
    description: "Demonstrates an overall understanding of the AWS Cloud platform, covering basic cloud concepts and security.",
    icon: "https://picsum.photos/seed/aws-cp/100/100",
  },
  {
    title: "Generative AI for Everyone",
    issuer: "Coursera",
    date: "2024",
    description: "Understanding of Generative AI concepts, applications, and ethical considerations.",
    icon: "https://picsum.photos/seed/genai/100/100",
  },
  {
    title: "Data Structures",
    issuer: "Coursera",
    date: "2022",
    description: "In-depth knowledge of fundamental data structures and their implementation in software engineering.",
    icon: "https://picsum.photos/seed/ds/100/100",
  },
  {
    title: "Agile Software Development",
    issuer: "Coursera",
    date: "2023",
    description: "Mastery of Agile methodologies, Scrum framework, and iterative software development practices.",
    icon: "https://picsum.photos/seed/agile/100/100",
  },
];

export function Certifications() {
  return (
    <section id="certifications" className="py-24 bg-white dark:bg-zinc-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-5xl font-bold tracking-tight text-zinc-900 dark:text-white mb-4"
          >
            Certifications
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
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-zinc-50 dark:bg-zinc-900 rounded-2xl p-8 shadow-lg border border-zinc-200 dark:border-zinc-800 overflow-hidden hover:shadow-2xl hover:border-emerald-500/50 transition-all duration-300"
            >
              <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <CheckCircle2 className="w-6 h-6 text-emerald-500" />
              </div>

              <div className="flex items-center space-x-6 mb-6">
                <div className="relative w-16 h-16 rounded-xl overflow-hidden bg-white dark:bg-zinc-800 shadow-md border border-zinc-200 dark:border-zinc-700 flex items-center justify-center p-2">
                  <Image src={cert.icon} alt={cert.issuer} fill referrerPolicy="no-referrer" className="object-contain mix-blend-multiply dark:mix-blend-normal" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-zinc-900 dark:text-white leading-tight mb-1">{cert.title}</h3>
                  <p className="text-sm font-medium text-emerald-600 dark:text-emerald-400">{cert.issuer}</p>
                </div>
              </div>

              <div className="relative h-24">
                <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed absolute inset-0 transition-opacity duration-300 opacity-100 group-hover:opacity-0">
                  {cert.description.substring(0, 80)}...
                </p>
                <div className="absolute inset-0 bg-zinc-50 dark:bg-zinc-900 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 flex flex-col justify-center">
                  <p className="text-zinc-700 dark:text-zinc-300 text-sm leading-relaxed">
                    {cert.description}
                  </p>
                  <p className="text-xs font-bold text-zinc-500 dark:text-zinc-500 mt-2 uppercase tracking-wider">
                    Issued: {cert.date}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
