'use client';

import { useEffect } from 'react';
import { motion } from 'framer-motion';
import NavBar from '../components/NavBar';
import { HeartIcon, SquareIcon } from '../components/HeroIcons';
import { NoiseOverlay, FloatingParticles } from '../components/Particles';
import PromotionalCard from '../components/PromotionalCard';
import HireCard from '../components/HireCard';
import { useTheme } from '../hooks/useTheme';
import Footer from '@/components/Footer';
import LatestWork from '@/components/LatestWork';
import { Code, Github, Figma, Linkedin, Laptop, Database, Globe, Cpu } from "lucide-react";
import Link from "next/link";
import clsx from 'clsx';

export default function Home() {
  const { isDarkMode, toggleTheme, isLoaded } = useTheme();

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      document.documentElement.style.setProperty('--mouse-x', `${(e.clientX / window.innerWidth) * 100}%`);
      document.documentElement.style.setProperty('--mouse-y', `${(e.clientY / window.innerHeight) * 100}%`);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  if (!isLoaded) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-white">Loading...</div>
      </div>
    );
  }

  const gradientBg = isDarkMode
    ? 'bg-gradient-to-br from-gray-900 via-blue-900/20 to-black'
    : 'bg-gradient-to-br from-blue-50 via-white to-blue-100';

  const icons = [
    { icon: <Code size={28} />, bg: "from-indigo-500 to-purple-500" },
    { icon: <Github size={28} />, bg: "from-gray-800 to-gray-600" },
    { icon: <Figma size={28} />, bg: "from-pink-500 to-purple-500" },
    { icon: <Linkedin size={28} />, bg: "from-blue-600 to-blue-400" },
    { icon: <Laptop size={28} />, bg: "from-teal-500 to-cyan-500" },
    { icon: <Database size={28} />, bg: "from-green-500 to-emerald-500" },
    { icon: <Globe size={28} />, bg: "from-orange-500 to-yellow-500" },
    { icon: <Cpu size={28} />, bg: "from-red-500 to-pink-500" },
  ];

  return (
    <div className={`min-h-screen relative overflow-hidden transition-all duration-1000 ${gradientBg}`}>
      <NavBar isDarkMode={isDarkMode} onToggleTheme={toggleTheme} />
      <NoiseOverlay />
      <FloatingParticles isDarkMode={isDarkMode} />

      <div
        className={`absolute inset-0 transition-all duration-1000 ${
          isDarkMode
            ? 'bg-gradient-radial from-blue-500/10 via-transparent to-transparent'
            : 'bg-gradient-radial from-blue-400/20 via-transparent to-transparent'
        }`}
        style={{ backgroundPosition: 'var(--mouse-x, 50%) var(--mouse-y, 50%)', backgroundSize: '800px 800px' }}
      />

      <div className="relative z-10 min-h-screen flex flex-col pt-30">
        <main className="flex-1 flex items-center justify-center px-6">
          <div className="text-center max-w-4xl mx-auto">
            <div className="relative mb-8 animate-float">
              <div
                className={`w-40 h-40 mx-auto rounded-full overflow-hidden border-4 shadow-2xl transition-all duration-300 ${
                  isDarkMode ? 'border-white/20 glow' : 'border-gray-300/50'
                }`}
              >
                <div
                  className={`w-full h-full flex items-center justify-center text-4xl ${
                    isDarkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-200 text-gray-600'
                  }`}
                >
                  👨‍💻
                </div>
              </div>

              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                <div className="bg-white text-black px-4 py-1 rounded-full text-sm font-medium flex items-center gap-2 shadow-lg animate-float" style={{ animationDelay: '0.5s' }}>
                  <span>✓</span>
                  <span>Verified Expert</span>
                </div>
              </div>
            </div>

            <h1
              className={`text-5xl md:text-7xl font-bold mb-6 leading-tight transition-all duration-500 ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}
            >
              <span className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>Portfolio for Full Stack Devlopers to</span>
              <span className="block"> showcase their work</span>
            </h1>

            <p
              className={`text-xl md:text-2xl mb-8 max-w-2xl mx-auto leading-relaxed transition-colors duration-500 ${
                isDarkMode ? 'text-gray-300' : 'text-gray-600'
              }`}
            >
              Helping startups and brands craft expressive and engaging solutions for their software needs.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                className={`px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 ${
                  isDarkMode ? 'bg-black text-white hover:bg-gray-800 glow' : 'bg-gray-900 text-white hover:bg-gray-800'
                }`}
              >
                Template
              </button>
              <button
                className={`px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 border-2 ${
                  isDarkMode
                    ? 'bg-gray-800/50 text-white border-white/20 hover:bg-gray-700/50'
                    : 'bg-white/50 text-gray-800 border-gray-300 hover:bg-white/70'
                }`}
              >
                Connect
              </button>
            </div>
          </div>
        </main>

        <section className="flex justify-center py-20">
          <div className="relative w-3/5 h-28 overflow-hidden">
            <motion.div
              className="flex gap-20 h-full items-center"
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                repeat: Infinity,
                duration: 20,
                ease: "linear",
              }}
            >
              {[...icons, ...icons].map((item, i) => (
                <motion.div
                  key={i}
                  className={`w-16 h-16 flex items-center justify-center rounded-full shadow-xl bg-gradient-to-br ${item.bg} text-white flex-shrink-0`}
                  animate={{ y: [0, -10, 0], scale: [1, 1.05, 1] }}
                  transition={{
                    repeat: Infinity,
                    duration: 5 + i * 0.3,
                    ease: "easeInOut",
                  }}
                >
                  {item.icon}
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <main>
          <PromotionalCard />
        </main>

        <div className="max-w-7xl mx-auto pt-50 text-center">
          <LatestWork isDarkMode={isDarkMode} />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-10"
          >
            <Link href="/work">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={clsx(
                  "px-6 py-3 rounded-lg font-semibold text-lg shadow-md transition-colors",
                  isDarkMode
                    ? "bg-black text-white hover:bg-gray-800 glow"
                    : "bg-gray-900 text-white hover:bg-gray-800"
                )}
              >
                View All Projects →
              </motion.button>
            </Link>
          </motion.div>
        </div>

        <main>
          <HireCard isDarkMode={isDarkMode} />
        </main>
      </div>

      <Footer isDarkMode={isDarkMode} />
    </div>
  );
}
