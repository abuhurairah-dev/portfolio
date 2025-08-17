'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import MobileMenu from './MobileMenu';

interface NavItem {
  id: string;
  label: string;
  href: string;
  icon: React.ReactNode;
}

// Beautiful SVG Icons for navigation
const HomeIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
  </svg>
);

const AboutIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
  </svg>
);

const WorkIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-1 9H9V9h10v2zm-4 4H9v-2h6v2zm4-8H9V5h10v2z"/>
  </svg>
);

const ContactIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
  </svg>
);

const navItems: NavItem[] = [
  { id: 'home', label: 'Home', href: '/', icon: <HomeIcon /> },
  { id: 'about', label: 'About', href: '/about', icon: <AboutIcon /> },
  { id: 'work', label: 'Work', href: '/work', icon: <WorkIcon /> },
  { id: 'contact', label: 'Contact', href: '/contact', icon: <ContactIcon /> },
];

interface NewNavigationProps {
  isDarkMode: boolean;
  onToggleTheme: () => void;
}

export default function NewNavigation({ isDarkMode, onToggleTheme }: NewNavigationProps) {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const getActiveItem = () => {
    if (pathname === '/') return 'home';
    return pathname.slice(1);
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'backdrop-blur-md bg-black/20 border-b border-white/10' 
          : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link 
              href="/" 
              className={`text-xl font-bold transition-colors duration-300 ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}
            >
              Portfolio
            </Link>

            {/* Navigation Items */}
            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item) => (
                <Link
                  key={item.id}
                  href={item.href}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 transform hover:scale-105 ${
                    getActiveItem() === item.id
                      ? isDarkMode
                        ? 'bg-white/20 text-white shadow-lg'
                        : 'bg-gray-900/10 text-gray-900 shadow-lg'
                      : isDarkMode
                        ? 'text-gray-300 hover:text-white hover:bg-white/10'
                        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-900/10'
                  }`}
                >
                  <span className="text-lg">{item.icon}</span>
                  <span className="font-medium">{item.label}</span>
                </Link>
              ))}
            </div>

            {/* Right side buttons */}
            <div className="flex items-center space-x-2">
              {/* Theme Toggle */}
              <button
                onClick={onToggleTheme}
                className={`p-3 rounded-full transition-all duration-300 transform hover:scale-110 ${
                  isDarkMode
                    ? 'bg-white/10 text-white hover:bg-white/20 glow'
                    : 'bg-gray-800/10 text-gray-800 hover:bg-gray-800/20'
                }`}
              >
                {isDarkMode ? '☀️' : '🌙'}
              </button>

              {/* Mobile Menu Button */}
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`md:hidden p-3 rounded-lg transition-all duration-300 ${
                  isDarkMode 
                    ? 'text-white hover:bg-white/10' 
                    : 'text-gray-900 hover:bg-gray-900/10'
                }`}
              >
                <svg 
                  width="24" 
                  height="24" 
                  viewBox="0 0 24 24" 
                  fill="currentColor"
                >
                  <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <MobileMenu
        isDarkMode={isDarkMode}
        onToggleTheme={onToggleTheme}
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </>
  );
}
