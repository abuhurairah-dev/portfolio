'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface MobileMenuProps {
  isDarkMode: boolean;
  onToggleTheme: () => void;
  isOpen: boolean;
  onClose: () => void;
}

const navItems = [
  { id: 'home', label: 'Home', href: '/' },
  { id: 'about', label: 'About', href: '/about' },
  { id: 'work', label: 'Work', href: '/work' },
  { id: 'contact', label: 'Contact', href: '/contact' },
];

export default function MobileMenu({ isDarkMode, onToggleTheme, isOpen, onClose }: MobileMenuProps) {
  const pathname = usePathname();

  const getActiveItem = () => {
    if (pathname === '/') return 'home';
    return pathname.slice(1);
  };

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
          onClick={onClose}
        />
      )}

      {/* Mobile Menu */}
      <div className={`fixed top-0 right-0 z-50 h-full w-80 transform transition-transform duration-300 ease-in-out ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className={`h-full w-full ${
          isDarkMode 
            ? 'bg-gray-900/95 backdrop-blur-md border-l border-white/10' 
            : 'bg-white/95 backdrop-blur-md border-l border-gray-200'
        }`}>
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-white/10">
            <h2 className={`text-xl font-bold ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Menu
            </h2>
            <button
              onClick={onClose}
              className={`p-2 rounded-lg transition-colors ${
                isDarkMode 
                  ? 'text-white hover:bg-white/10' 
                  : 'text-gray-900 hover:bg-gray-900/10'
              }`}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
              </svg>
            </button>
          </div>

          {/* Navigation Items */}
          <nav className="p-6">
            <ul className="space-y-4">
              {navItems.map((item) => (
                <li key={item.id}>
                  <Link
                    href={item.href}
                    onClick={onClose}
                    className={`block px-4 py-3 rounded-lg transition-all duration-300 ${
                      getActiveItem() === item.id
                        ? isDarkMode
                          ? 'bg-white/20 text-white'
                          : 'bg-gray-900/10 text-gray-900'
                        : isDarkMode
                          ? 'text-gray-300 hover:text-white hover:bg-white/10'
                          : 'text-gray-600 hover:text-gray-900 hover:bg-gray-900/10'
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Theme Toggle */}
          <div className="absolute bottom-6 left-6 right-6">
            <button
              onClick={onToggleTheme}
              className={`w-full py-3 px-4 rounded-lg font-medium transition-all duration-300 ${
                isDarkMode
                  ? 'bg-white/10 text-white hover:bg-white/20'
                  : 'bg-gray-900/10 text-gray-900 hover:bg-gray-900/20'
              }`}
            >
              {isDarkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
