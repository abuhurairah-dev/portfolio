'use client';

import { motion } from 'framer-motion';

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Product Manager @ StartupX",
    text: "Working with you was a seamless experience. Your ability to translate product ideas into robust applications is outstanding.",
    avatar: "https://i.pravatar.cc/100?img=47",
  },
  {
    name: "James Lee",
    role: "CTO @ TechNova",
    text: "Highly impressed by the clean architecture and attention to detail. You consistently deliver beyond expectations.",
    avatar: "https://i.pravatar.cc/100?img=12",
  },
  {
    name: "Emily Carter",
    role: "Designer @ CreativeHub",
    text: "Collaborating with you has been inspiring! Your technical insight really elevated our design-to-code workflow.",
    avatar: "https://i.pravatar.cc/100?img=32",
  },
];

export default function Testimonials({ isDarkMode }: { isDarkMode: boolean }) {
  return (
    <section className="py-20 px-6">
      <h2
        className={`text-4xl font-bold mb-12 text-center ${
          isDarkMode ? "text-white" : "text-gray-900"
        }`}
      >
        Testimonials
      </h2>

      {/* Centered container */}
      <div className="flex justify-center">
        <div className="flex gap-8 overflow-x-auto snap-x snap-mandatory pb-6 scrollbar-hide max-w-6xl justify-center">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className={`flex-shrink-0 w-80 snap-center rounded-2xl shadow-lg p-6 transition-colors duration-500 ${
                isDarkMode ? "bg-gray-800 text-gray-200" : "bg-white text-gray-800"
              }`}
            >
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-12 h-12 rounded-full object-cover border"
                />
                <div>
                  <p className="font-semibold">{t.name}</p>
                  <p className="text-sm opacity-75">{t.role}</p>
                </div>
              </div>
              <p className="leading-relaxed">“{t.text}”</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
