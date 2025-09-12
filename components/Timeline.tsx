'use client';

import { motion } from 'framer-motion';

const milestones = [
  {
    year: "2019",
    title: "Started Web Development",
    description: "Built my first websites with HTML, CSS and JavaScript while exploring the world of programming.",
  },
  {
    year: "2021",
    title: "Joined Tech Company",
    description: "Worked as a frontend developer, creating responsive UI and collaborating with designers.",
  },
  {
    year: "2023",
    title: "Freelance Full-Stack Developer",
    description: "Helped startups and brands craft end-to-end solutions using React, Node.js, and databases.",
  },
  {
    year: "2025",
    title: "Expanding Horizons",
    description: "Currently focusing on advanced systems, backend optimization, and scalable applications.",
  },
];

export default function Timeline({ isDarkMode }: { isDarkMode: boolean }) {
  return (
    <section className="py-20 px-6">
      <h2
        className={`text-4xl font-bold mb-16 text-center ${
          isDarkMode ? "text-white" : "text-gray-900"
        }`}
      >
        Career Journey
      </h2>

      <div className="relative max-w-4xl mx-auto">
        {/* Vertical line */}
        <div className="absolute left-1/2 top-0 h-full w-1 -translate-x-1/2 bg-gradient-to-b from-blue-500/40 to-purple-500/40" />

        <div className="space-y-16">
          {milestones.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              viewport={{ once: true }}
              className={`relative flex items-center ${
                i % 2 === 0 ? "justify-start" : "justify-end"
              }`}
            >
              <div
                className={`w-5 h-5 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 absolute left-1/2 -translate-x-1/2 z-10`}
              />
              <div
                className={`w-[calc(50%-2rem)] p-6 rounded-2xl shadow-xl transition-colors duration-500 ${
                  isDarkMode ? "bg-gray-800 text-gray-200" : "bg-white text-gray-800"
                }`}
              >
                <p className="text-sm font-semibold text-blue-500">{item.year}</p>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-sm opacity-80 leading-relaxed">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
