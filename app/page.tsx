'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import NewNavigation from '../components/NewNavigation';
import { 
  HeartIcon, 
  SquareIcon, 
  WIcon, 
  LightningIcon, 
  NIcon, 
  XIcon, 
  BIcon 
} from '../components/HeroIcons';

// Pre-defined particle positions and animations to avoid hydration errors
const particleData = [
  { left: '10%', top: '20%', delay: '0.1s', duration: '3.5s' },
  { left: '25%', top: '45%', delay: '0.3s', duration: '4.2s' },
  { left: '40%', top: '15%', delay: '0.5s', duration: '3.8s' },
  { left: '55%', top: '70%', delay: '0.7s', duration: '4.0s' },
  { left: '70%', top: '30%', delay: '0.9s', duration: '3.6s' },
  { left: '85%', top: '60%', delay: '1.1s', duration: '4.1s' },
  { left: '15%', top: '80%', delay: '1.3s', duration: '3.9s' },
  { left: '30%', top: '10%', delay: '1.5s', duration: '3.7s' },
  { left: '45%', top: '55%', delay: '1.7s', duration: '4.3s' },
  { left: '60%', top: '25%', delay: '1.9s', duration: '3.4s' },
  { left: '75%', top: '75%', delay: '2.1s', duration: '4.0s' },
  { left: '90%', top: '40%', delay: '2.3s', duration: '3.8s' },
  { left: '5%', top: '65%', delay: '2.5s', duration: '3.6s' },
  { left: '20%', top: '35%', delay: '2.7s', duration: '4.2s' },
  { left: '35%', top: '85%', delay: '2.9s', duration: '3.9s' },
  { left: '50%', top: '5%', delay: '3.1s', duration: '3.7s' },
  { left: '65%', top: '50%', delay: '3.3s', duration: '4.1s' },
  { left: '80%', top: '20%', delay: '3.5s', duration: '3.5s' },
  { left: '95%', top: '80%', delay: '3.7s', duration: '4.0s' },
  { left: '10%', top: '90%', delay: '3.9s', duration: '3.8s' },
];

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  // Animated background gradient effect
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

  return (
    <div className={`min-h-screen relative overflow-hidden transition-all duration-1000 ${
      isDarkMode 
        ? 'bg-gradient-to-br from-gray-900 via-blue-900/20 to-black' 
        : 'bg-gradient-to-br from-blue-50 via-white to-blue-100'
    }`}>
      {/* New Navigation Bar */}
      <NewNavigation isDarkMode={isDarkMode} onToggleTheme={() => setIsDarkMode(!isDarkMode)} />

      {/* Animated background gradient */}
      <div className={`absolute inset-0 transition-all duration-1000 ${
        isDarkMode 
          ? 'bg-gradient-radial from-blue-500/10 via-transparent to-transparent' 
          : 'bg-gradient-radial from-blue-400/20 via-transparent to-transparent'
      }`} 
      style={{
        backgroundPosition: 'var(--mouse-x, 50%) var(--mouse-y, 50%)',
        backgroundSize: '800px 800px'
      }} />
      
      {/* Noise texture overlay */}
      <div className="absolute inset-0 opacity-30 mix-blend-overlay">
        <div className="w-full h-full" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* Floating particles effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particleData.map((particle, i) => (
          <div
            key={i}
            className={`absolute w-1 h-1 rounded-full animate-float ${
              isDarkMode ? 'bg-blue-400/30' : 'bg-blue-600/20'
            }`}
            style={{
              left: particle.left,
              top: particle.top,
              animationDelay: particle.delay,
              animationDuration: particle.duration
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 min-h-screen flex flex-col pt-16">
        {/* Hero Section */}
        <main className="flex-1 flex items-center justify-center px-6">
          <div className="text-center max-w-4xl mx-auto">
            {/* Profile Image */}
            <div className="relative mb-8 animate-float">
              <div className={`w-32 h-32 mx-auto rounded-full overflow-hidden border-4 shadow-2xl transition-all duration-300 ${
                isDarkMode 
                  ? 'border-white/20 glow' 
                  : 'border-gray-300/50'
              }`}>
                <div className={`w-full h-full flex items-center justify-center text-4xl ${
                  isDarkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-200 text-gray-600'
                }`}>
                  👨‍💻
                </div>
              </div>
              
              {/* Verified Expert Badge */}
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                <div className="bg-white text-black px-4 py-1 rounded-full text-sm font-medium flex items-center gap-2 shadow-lg animate-float" style={{ animationDelay: '0.5s' }}>
                  <span>✓</span>
                  <span>Verified Expert</span>
                </div>
              </div>
            </div>

            {/* Main Heading */}
            <h1 className={`text-5xl md:text-7xl font-bold mb-6 leading-tight transition-all duration-500 ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>
              <span className={`block transition-colors duration-500 ${
                isDarkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>
                Designed for Designers to
              </span>
              <span className={`block transition-colors duration-500 ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>
                showcase their work
              </span>
            </h1>

            {/* Description */}
            <p className={`text-xl md:text-2xl mb-8 max-w-2xl mx-auto leading-relaxed transition-colors duration-500 ${
              isDarkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Helping startups and brands to craft expressive and engaging solutions for their software needs.
            </p>

            {/* Call to Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className={`px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 btn-hover ${
                isDarkMode
                  ? 'bg-black text-white hover:bg-gray-800 glow'
                  : 'bg-gray-900 text-white hover:bg-gray-800'
              }`}>
                Remix Template
              </button>
              <button className={`px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 border-2 ${
                isDarkMode
                  ? 'bg-gray-800/50 text-white border-white/20 hover:bg-gray-700/50'
                  : 'bg-white/50 text-gray-800 border-gray-300 hover:bg-white/70'
              }`}>
                Get Athos Plus
              </button>
            </div>
          </div>
        </main>

        {/* Bottom Icons Section */}
        <footer className="p-8">
          <div className="flex justify-center items-center gap-6 md:gap-8 flex-wrap">
            {/* Heart Icon */}
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-400 to-purple-600 flex items-center justify-center text-white shadow-lg hover:scale-110 transition-all duration-300 animate-float" style={{ animationDelay: '0.1s' }}>
              <HeartIcon />
            </div>
            
            {/* Square Icon */}
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-400 to-pink-500 flex items-center justify-center text-white shadow-lg hover:scale-110 transition-all duration-300 animate-float" style={{ animationDelay: '0.2s' }}>
              <SquareIcon />
            </div>
            
            {/* W Icon */}
            <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-xl shadow-lg hover:scale-110 transition-all duration-300 animate-float" style={{ animationDelay: '0.3s' }}>
              W
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
