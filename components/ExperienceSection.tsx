"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

export default function ExperienceSection({ isDarkMode }: { isDarkMode: boolean }) {
  const experiences = [
    {
      role: "Frontend Developer",
      company: "Tech Solutions Inc.",
      period: "2022 – Present",
      description:
        "Building responsive web applications with React, Next.js, and Tailwind. Collaborated with design teams to deliver user-centered solutions.",
    },
    {
      role: "UI/UX Designer",
      company: "Creative Studio",
      period: "2020 – 2022",
      description:
        "Designed intuitive interfaces and prototypes in Figma, improved user flows, and worked closely with developers for seamless implementation.",
    },
    {
      role: "Junior Web Developer",
      company: "Startup Hub",
      period: "2018 – 2020",
      description:
        "Contributed to small-scale projects, maintained websites, and gained hands-on experience with JavaScript and design tools.",
    },
  ];

  return (
    <section className="mb-20">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className={`text-4xl md:text-5xl font-bold text-center mb-12 ${
          isDarkMode ? "text-white" : "text-gray-900"
        }`}
      >
        Experience
      </motion.h2>

      <div className="relative max-w-4xl mx-auto">
        {/* Vertical timeline line */}
        <div
          className={`absolute left-6 top-0 w-1 h-full rounded-full ${
            isDarkMode ? "bg-gradient-to-b from-blue-500/40 to-purple-500/30" : "bg-gray-200"
          }`}
        />

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
              className="relative pl-16"
            >
              {/* Icon */}
              <div
                className={`absolute left-0 flex items-center justify-center w-12 h-12 rounded-full shadow-lg ring-4 ${
                  isDarkMode
                    ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white ring-white/10"
                    : "bg-gradient-to-r from-blue-600 to-purple-600 text-white ring-gray-100"
                }`}
              >
                <Briefcase size={20} />
              </div>

              {/* Card */}
              <div
                className={`p-6 rounded-2xl shadow-md transition-transform duration-300 hover:-translate-y-1 ${
                  isDarkMode
                    ? "bg-white/5 backdrop-blur-lg border border-white/10"
                    : "bg-white border border-gray-200"
                }`}
              >
                <h3
                  className={`text-xl font-bold ${
                    isDarkMode ? "text-white" : "text-gray-900"
                  }`}
                >
                  {exp.role}
                </h3>
                <p
                  className={`mt-1 font-medium ${
                    isDarkMode ? "text-blue-400" : "text-blue-600"
                  }`}
                >
                  {exp.company} · {exp.period}
                </p>
                <p
                  className={`mt-3 leading-relaxed ${
                    isDarkMode ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  {exp.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
