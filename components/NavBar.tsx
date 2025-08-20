'use client';

import { useState, useEffect } from 'react';
import { createPortal } from "react-dom";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import MobileMenu from './MobileMenu';
import Image from "next/image";

interface NavItem {
  id: string;
  label: string;
  href: string;
  icon: React.ReactNode;
}

const icons: Record<string, React.ReactNode> = {
  home: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="transition-transform duration-200 group-hover:scale-110">
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
    </svg>
  ),
  about: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="transition-transform duration-200 group-hover:scale-110">
      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
    </svg>
  ),
  work: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="transition-transform duration-200 group-hover:scale-110">
      <path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-1 9H9V9h10v2zm-4 4H9v-2h6v2zm4-8H9V5h10v2z"/>
    </svg>
  ),
  contact: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="transition-transform duration-200 group-hover:scale-110">
      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
    </svg>
  ),
};

const navItems: NavItem[] = [
  { id: 'home', label: 'Home', href: '/', icon: icons.home },
  { id: 'about', label: 'About', href: '/about', icon: icons.about },
  { id: 'work', label: 'Work', href: '/work', icon: icons.work },
  { id: 'contact', label: 'Contact', href: '/contact', icon: icons.contact },
];

interface NavigationProps {
  isDarkMode: boolean;
  onToggleTheme: () => void;
}

export default function NavBar({ isDarkMode, onToggleTheme }: NavigationProps) {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const activeItem = pathname === '/' ? 'home' : pathname.slice(1);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-out
        ${isScrolled
          ? 'backdrop-blur-xl bg-black/30 border-b border-white/20 shadow-2xl shadow-black/20'
          : 'bg-transparent'}`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <Logo isDarkMode={isDarkMode} />
            <NavLinks navItems={navItems} activeItem={activeItem} isDarkMode={isDarkMode} />

            <div className="flex items-center space-x-3">
              <ThemeToggle isDarkMode={isDarkMode} onToggle={onToggleTheme} />
              <MobileToggle isDarkMode={isDarkMode} onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} />
            </div>
          </div>
        </div>
      </nav>

      <MobileMenu
        isDarkMode={isDarkMode}
        onToggleTheme={onToggleTheme}
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </>
  );
}

function Logo({ isDarkMode }: { isDarkMode: boolean }) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"; // stop background scroll
    } else {
      document.body.style.overflow = ""; // reset
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Modal content (separate so we can portal it)
  const modalContent = (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 backdrop-blur-sm"
      onClick={() => setIsOpen(false)}
    >
      <Image
        src="https://images.unsplash.com/photo-1503264116251-35a269479413?w=800&h=600&fit=crop"
        alt="Enlarged Logo"
        width={800}
        height={800}
        className="rounded-2xl shadow-2xl object-contain max-w-[90%] max-h-[90%]"
      />
    </div>
  );

  return (
    <>
      {/* Logo clickable */}
      <button
        onClick={() => setIsOpen(true)}
        className="relative overflow-hidden flex items-center space-x-3 focus:outline-none"
      >
        <div
          className={`relative w-10 h-10 rounded-xl flex items-center justify-center overflow-hidden
            ${
              isDarkMode
                ? "bg-gradient-to-br from-blue-500/20 to-purple-600/20 border border-white/20"
                : "bg-gradient-to-br from-blue-500/10 to-purple-600/10 border border-gray-200"
            }`}
        >
          <Image
            src="https://images.unsplash.com/photo-1503264116251-35a269479413?w=800&h=600&fit=crop"
            alt="Logo"
            width={40}
            height={40}
            className="object-cover rounded-xl"
          />
        </div>
        <div className="flex flex-col text-left">
          <span
            className={`text-lg font-bold tracking-tight ${
              isDarkMode ? "text-white" : "text-gray-900"
            }`}
          >
            Portfolio
          </span>
          <span
            className={`text-xs font-medium tracking-wider ${
              isDarkMode ? "text-blue-400" : "text-blue-600"
            }`}
          >
            DEVELOPER
          </span>
        </div>
      </button>

      {/* Modal injected into <body> */}
      {isOpen && typeof window !== "undefined"
        ? createPortal(modalContent, document.body)
        : null}
    </>
  );
}

function NavLinks({ navItems, activeItem, isDarkMode }: { navItems: NavItem[], activeItem: string, isDarkMode: boolean }) {
  return (
    <div className="hidden md:flex items-center space-x-1">
      {navItems.map((item) => {
        const isActive = activeItem === item.id;
        return (
          <Link
            key={item.id}
            href={item.href}
            className={`group relative flex items-center space-x-2 px-6 py-3 transition-all duration-300
              ${isActive
                ? isDarkMode ? 'text-white border-b-2 border-blue-400' : 'text-gray-900 border-b-2 border-blue-600'
                : isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}
          >
            {isActive && (
              <div className={`absolute bottom-0 left-0 w-full h-0.5 ${isDarkMode ? 'bg-blue-400' : 'bg-blue-600'}`} />
            )}
            <div className={`absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 ${isDarkMode ? 'bg-white' : 'bg-gray-900'} group-hover:w-full`} />
            <span className="relative z-10">{item.icon}</span>
            <span className="relative z-10 font-medium tracking-wide">{item.label}</span>
          </Link>
        );
      })}
    </div>
  );
}

function ThemeToggle({ isDarkMode, onToggle }: { isDarkMode: boolean, onToggle: () => void }) {
  return (
    <button
      onClick={onToggle}
      className={`group relative p-3 rounded-xl transition-all duration-300 transform hover:scale-110
        ${isDarkMode
          ? 'bg-gradient-to-br from-blue-500/20 to-purple-600/20 text-white border border-white/20'
          : 'bg-gradient-to-br from-blue-500/10 to-purple-600/10 text-gray-800 border border-gray-200'}`}
    >
      <span className="text-lg transition-transform duration-300 group-hover:rotate-12">
        {isDarkMode ? '☀️' : '🌙'}
      </span>
      <div className={`absolute inset-0 rounded-xl blur-md transition-opacity duration-300
        ${isDarkMode ? 'bg-blue-500/30' : 'bg-blue-500/20'} opacity-0 group-hover:opacity-100`} />
    </button>
  );
}

function MobileToggle({ isDarkMode, onClick }: { isDarkMode: boolean, onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className={`md:hidden group relative p-3 rounded-xl transition-all duration-300
        ${isDarkMode ? 'text-white hover:bg-white/10 border border-white/20' : 'text-gray-900 hover:bg-gray-900/10 border border-gray-200'}`}
    >
      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="transition-transform duration-300 group-hover:scale-110">
        <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>
      </svg>
    </button>
  );
}
