"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useTheme } from "../hooks/useTheme";

const images = [
  "https://images.unsplash.com/photo-1503264116251-35a269479413?w=800&h=600&fit=crop",
  "https://images.unsplash.com/photo-1506765515384-028b60a970df?w=800&h=600&fit=crop",
  "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=600&fit=crop",
  "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop",
  "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop",
];

type HireCardProps = {
  isDarkMode: boolean;
};

export default function HireCard({ isDarkMode }: HireCardProps) {
  return (
    <section
      className={`relative flex items-center justify-center min-h-screen px-6 overflow-hidden transition-colors duration-500 ${
        isDarkMode ? "bg-transparent" : "bg-transparent"
      }`}
    >
      {/* Background Showcase */}
      <div className="relative w-full max-w-6xl h-[400px] overflow-hidden rounded-[200px]">
        {/* Sliding images */}
        <motion.div
          className="absolute flex h-full"
          animate={{ x: ["0%", "-100%"] }}
          transition={{
            repeat: Infinity,
            duration: 30,
            ease: "linear",
          }}
        >
          {[...images, ...images].map((src, i) => (
            <div key={i} className="relative h-full w-[500px] flex-shrink-0">
              <Image
                src={src}
                alt={`showcase-${i}`}
                fill
                className={`object-cover ${
                  isDarkMode ? "opacity-60" : "opacity-80"
                }`}
              />
            </div>
          ))}
        </motion.div>

        {/* Dark/Light overlay */}
        <div
          className={`absolute inset-0 ${
            isDarkMode
              ? "bg-gradient-to-b from-black/40 to-black/70"
              : "bg-gradient-to-b from-white/40 to-white/70"
          }`}
        />

        {/* Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <h1
            className={`text-4xl md:text-5xl font-semibold mb-6 transition-colors ${
              isDarkMode ? "text-white" : "text-gray-900"
            }`}
          >
            Upgrade your web <br /> application with Next JS
          </h1>
          <button
            className={`px-6 py-3 font-medium rounded-full flex items-center gap-2 shadow-lg transition ${
              isDarkMode
                ? "bg-black text-white hover:bg-gray-800"
                : "bg-white text-gray-900 hover:bg-gray-200"
            }`}
          >
            <span>✨ Hire Me on Upwork</span>
          </button>
          <p
            className={`mt-6 ${
              isDarkMode ? "text-gray-300" : "text-gray-700"
            }`}
          >
            <span className="font-semibold">Developer</span>
          </p>
        </div>
      </div>
    </section>
  );
}
