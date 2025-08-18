'use client';

import { useEffect } from 'react';
import NavBar from '../../components/NavBar';
import { NoiseOverlay, FloatingParticles } from '../../components/Particles';
import { useTheme } from '../../hooks/useTheme';

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
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h1
                className={`text-5xl md:text-7xl font-bold mb-6 leading-tight transition-all duration-500 ${
                  isDarkMode ? 'text-white' : 'text-gray-900'
                }`}
              >
                About Me
              </h1>
              <p
                className={`text-xl md:text-2xl max-w-2xl mx-auto leading-relaxed transition-colors duration-500 ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-600'
                }`}
              >
                Passionate designer and developer creating beautiful digital
                experiences
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              {/* Left Column */}
              <div className="space-y-8">
                <div
                  className={`p-8 rounded-2xl transition-all duration-300 ${
                    isDarkMode
                      ? 'bg-white/5 backdrop-blur-sm border border-white/10'
                      : 'bg-white/50 backdrop-blur-sm border border-gray-200'
                  }`}
                >
                  <h3
                    className={`text-2xl font-bold mb-4 ${
                      isDarkMode ? 'text-white' : 'text-gray-900'
                    }`}
                  >
                    My Story
                  </h3>
                  <p
                    className={`text-lg leading-relaxed ${
                      isDarkMode ? 'text-gray-300' : 'text-gray-600'
                    }`}
                  >
                    I'm a creative professional with over 5 years of experience
                    in design and development. I specialize in creating
                    user-centered digital solutions that combine beautiful
                    aesthetics with powerful functionality.
                  </p>
                </div>

                <div
                  className={`p-8 rounded-2xl transition-all duration-300 ${
                    isDarkMode
                      ? 'bg-white/5 backdrop-blur-sm border border-white/10'
                      : 'bg-white/50 backdrop-blur-sm border border-gray-200'
                  }`}
                >
                  <h3
                    className={`text-2xl font-bold mb-4 ${
                      isDarkMode ? 'text-white' : 'text-gray-900'
                    }`}
                  >
                    My Approach
                  </h3>
                  <p
                    className={`text-lg leading-relaxed ${
                      isDarkMode ? 'text-gray-300' : 'text-gray-600'
                    }`}
                  >
                    I believe in the power of thoughtful design to solve complex
                    problems. Every project starts with understanding the user's
                    needs and ends with a solution that exceeds expectations.
                  </p>
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-8">
                <div
                  className={`p-8 rounded-2xl transition-all duration-300 ${
                    isDarkMode
                      ? 'bg-white/5 backdrop-blur-sm border border-white/10'
                      : 'bg-white/50 backdrop-blur-sm border border-gray-200'
                  }`}
                >
                  <h3
                    className={`text-2xl font-bold mb-4 ${
                      isDarkMode ? 'text-white' : 'text-gray-900'
                    }`}
                  >
                    Skills & Expertise
                  </h3>
                  <div className="space-y-3">
                    {[
                      'UI/UX Design',
                      'Frontend Development',
                      'React & Next.js',
                      'TypeScript',
                      'Tailwind CSS',
                      'Figma & Adobe Creative Suite',
                    ].map((skill) => (
                      <div
                        key={skill}
                        className={`flex items-center space-x-3 ${
                          isDarkMode ? 'text-gray-300' : 'text-gray-600'
                        }`}
                      >
                        <div
                          className={`w-2 h-2 rounded-full ${
                            isDarkMode ? 'bg-blue-400' : 'bg-blue-600'
                          }`}
                        />
                        <span className="text-lg">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div
                  className={`p-8 rounded-2xl transition-all duration-300 ${
                    isDarkMode
                      ? 'bg-white/5 backdrop-blur-sm border border-white/10'
                      : 'bg-white/50 backdrop-blur-sm border border-gray-200'
                  }`}
                >
                  <h3
                    className={`text-2xl font-bold mb-4 ${
                      isDarkMode ? 'text-white' : 'text-gray-900'
                    }`}
                  >
                    Let's Connect
                  </h3>
                  <p
                    className={`text-lg leading-relaxed mb-6 ${
                      isDarkMode ? 'text-gray-300' : 'text-gray-600'
                    }`}
                  >
                    I'm always interested in new opportunities and exciting
                    projects. Let's discuss how we can work together to create
                    something amazing.
                  </p>
                  <button
                    className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 ${
                      isDarkMode
                        ? 'bg-white text-black hover:bg-gray-200'
                        : 'bg-gray-900 text-white hover:bg-gray-800'
                    }`}
                  >
                    Get In Touch
                  </button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
