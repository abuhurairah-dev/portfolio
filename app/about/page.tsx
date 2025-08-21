'use client';

import { useEffect } from 'react';
import NavBar from '../../components/NavBar';
import { NoiseOverlay, FloatingParticles } from '../../components/Particles';
import EducationSection from '../../components/EducationSection';
import ExperienceSection from '../../components/ExperienceSection';
import { useTheme } from '../../hooks/useTheme';
import { motion } from 'framer-motion';
import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiJavascript,
  SiFigma,
  SiAdobephotoshop,
  SiGithub,
} from 'react-icons/si';

export default function About() {
  const { isDarkMode, toggleTheme, isLoaded } = useTheme();

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const x = (clientX / window.innerWidth) * 100;
      const y = (clientY / window.innerHeight) * 100;
      document.documentElement.style.setProperty('--mouse-x', `${x}%`);
      document.documentElement.style.setProperty('--mouse-y', `${y}%`);
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

  return (
    <div
      className={`min-h-screen relative overflow-hidden transition-all duration-1000 ${
        isDarkMode
          ? 'bg-gradient-to-br from-gray-900 via-blue-900/20 to-black'
          : 'bg-gradient-to-br from-blue-50 via-white to-blue-100'
      }`}
    >
      <NavBar isDarkMode={isDarkMode} onToggleTheme={toggleTheme} />

      <div
        className={`absolute inset-0 transition-all duration-1000 ${
          isDarkMode
            ? 'bg-gradient-radial from-blue-500/10 via-transparent to-transparent'
            : 'bg-gradient-radial from-blue-400/20 via-transparent to-transparent'
        }`}
        style={{
          backgroundPosition: 'var(--mouse-x, 50%) var(--mouse-y, 50%)',
          backgroundSize: '800px 800px',
        }}
      />

      <NoiseOverlay />
      <FloatingParticles isDarkMode={isDarkMode} />

      <div className="relative z-10 min-h-screen flex flex-col pt-16">
        <main className="flex-1 flex items-center justify-center px-6 py-12">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
              <motion.h1
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className={`text-5xl md:text-7xl font-extrabold mb-6 leading-tight tracking-tight ${
                  isDarkMode
                    ? 'text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]'
                    : 'text-gray-900'
                }`}
              >
                About Me
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className={`text-xl md:text-2xl max-w-2xl mx-auto leading-relaxed ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-600'
                }`}
              >
                Passionate designer and developer creating beautiful digital
                experiences
              </motion.p>
            </div>

            {/* Two Column Layout */}
            <div className="grid md:grid-cols-2 gap-12 mb-20">
              {/* Left Column */}
              <div className="space-y-8">
                <SectionCard title="My Story" isDarkMode={isDarkMode}>
                  I’m a creative professional with over 5 years of experience in
                  design and development. I specialize in creating user-centered
                  digital solutions that combine beautiful aesthetics with
                  powerful functionality.
                </SectionCard>

                <SectionCard title="My Approach" isDarkMode={isDarkMode}>
                  I believe in the power of thoughtful design to solve complex
                  problems. Every project starts with understanding the user’s
                  needs and ends with a solution that exceeds expectations.
                </SectionCard>
              </div>

              {/* Right Column */}
              <div className="space-y-8">
                <SectionCard title="Skills & Expertise" isDarkMode={isDarkMode}>
                  <div className="space-y-4">
                    {[
                      'UI/UX Design',
                      'Frontend Development',
                      'React & Next.js',
                      'TypeScript',
                      'Tailwind CSS',
                      'Figma & Adobe Creative Suite',
                    ].map((skill, i) => (
                      <motion.div
                        key={skill}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className={`flex items-center space-x-3 group ${
                          isDarkMode ? 'text-gray-300' : 'text-gray-600'
                        }`}
                      >
                        <div
                          className={`w-3 h-3 rounded-full transition-colors ${
                            isDarkMode
                              ? 'bg-blue-400 group-hover:bg-blue-300'
                              : 'bg-blue-600 group-hover:bg-blue-500'
                          }`}
                        />
                        <span className="text-lg font-medium group-hover:scale-105 transition-transform">
                          {skill}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </SectionCard>

                <SectionCard title="Let’s Connect" isDarkMode={isDarkMode}>
                  <p
                    className={`text-lg leading-relaxed mb-6 ${
                      isDarkMode ? 'text-gray-300' : 'text-gray-600'
                    }`}
                  >
                    I’m always interested in new opportunities and exciting
                    projects. Let’s discuss how we can work together to create
                    something amazing.
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`px-6 py-3 rounded-xl font-semibold shadow-md transition-colors ${
                      isDarkMode
                        ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-400 hover:to-purple-400'
                        : 'bg-gray-900 text-white hover:bg-gray-800'
                    }`}
                  >
                    Get In Touch
                  </motion.button>
                </SectionCard>
              </div>
            </div>

            {/* Technologies Section */}
            <div className="mb-12 text-center">
              <h2
                className={`text-4xl md:text-5xl font-bold mb-12 ${
                  isDarkMode ? 'text-white' : 'text-gray-900'
                }`}
              >
                Technologies I Work With
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
                {[
                  { name: 'React', icon: SiReact, color: 'text-sky-400' },
                  {
                    name: 'Next.js',
                    icon: SiNextdotjs,
                    color: 'text-gray-900 dark:text-white',
                  },
                  {
                    name: 'Tailwind',
                    icon: SiTailwindcss,
                    color: 'text-sky-500',
                  },
                  {
                    name: 'TypeScript',
                    icon: SiTypescript,
                    color: 'text-blue-500',
                  },
                  {
                    name: 'JavaScript',
                    icon: SiJavascript,
                    color: 'text-yellow-400',
                  },
                  { name: 'Figma', icon: SiFigma, color: 'text-pink-500' },
                  {
                    name: 'Photoshop',
                    icon: SiAdobephotoshop,
                    color: 'text-blue-700',
                  },
                  {
                    name: 'GitHub',
                    icon: SiGithub,
                    color: 'text-gray-800 dark:text-white',
                  },
                ].map(({ name, icon: Icon, color }) => (
                  <motion.div
                    key={name}
                    whileHover={{ scale: 1.1, rotate: 2 }}
                    transition={{ type: 'spring', stiffness: 200 }}
                    className={`flex flex-col items-center p-6 rounded-2xl shadow-lg cursor-pointer ${
                      isDarkMode
                        ? 'bg-white/5 border border-white/10 hover:shadow-blue-500/20'
                        : 'bg-white/80 border border-gray-200 hover:shadow-blue-300/40'
                    }`}
                  >
                    <Icon className={`text-5xl mb-4 ${color}`} />
                    <p
                      className={`font-semibold ${
                        isDarkMode ? 'text-gray-200' : 'text-gray-700'
                      }`}
                    >
                      {name}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            <ExperienceSection isDarkMode={isDarkMode} />
            <EducationSection isDarkMode={isDarkMode} />
          </div>
        </main>
      </div>
    </div>
  );
}

function SectionCard({
  title,
  children,
  isDarkMode,
}: {
  title: string;
  children: React.ReactNode;
  isDarkMode: boolean;
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 200 }}
      className={`p-8 rounded-2xl shadow-lg transition-all duration-300 ${
        isDarkMode
          ? 'bg-white/5 backdrop-blur-md border border-white/10 hover:shadow-blue-500/20'
          : 'bg-white/70 backdrop-blur-sm border border-gray-200 hover:shadow-lg'
      }`}
    >
      <h3
        className={`text-2xl font-bold mb-4 ${
          isDarkMode ? 'text-white' : 'text-gray-900'
        }`}
      >
        {title}
      </h3>
      <div className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
        {children}
      </div>
    </motion.div>
  );
}
