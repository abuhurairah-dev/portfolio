'use client';

import { useState, useEffect } from 'react';
import { createPortal } from "react-dom";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import MobileMenu from './MobileMenu';
import Image from "next/image";
import { Moon, Sun, Menu } from "lucide-react"; // cleaner icons

interface NavItem {
  id: string;
  label: string;
  href: string;
  icon: React.ReactNode;
}

const icons: Record<string, React.ReactNode> = {
  home: (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
    </svg>
  ),
  about: (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 12c2.2 0 4-1.8 4-4s-1.8-4-4-4-4 
        1.8-4 4 1.8 4 4 4zm0 2c-2.7 0-8 1.3-8 
        4v2h16v-2c0-2.7-5.3-4-8-4z"/>
    </svg>
  ),
  work: (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
      <path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 
        0-2 .9-2 2v12c0 1.1.9 2 2 
        2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/>
    </svg>
  ),
  contact: (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20 4H4c-1.1 0-2 
        .9-2 2v12c0 1.1.9 2 2 
        2h16c1.1 0 2-.9 
        2-2V6c0-1.1-.9-2-2-2zm0 
        4l-8 5-8-5V6l8 5 8-5v2z"/>
    </svg>
  ),
};

const navItems: NavItem[] = [
  { id: 'home', label: 'Home', href: '/', icon: icons.home },
  { id: 'about', label: 'About', href: '/about', icon: icons.about },
  { id: 'work', label: 'Work', href: '/work', icon: icons.work },
  { id: 'contact', label: 'Contact', href: '/contact', icon: icons.contact },
];

const profileImage = "/avatar.png";

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
    const onScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500
        ${isScrolled
          ? 'backdrop-blur-md bg-black/30 border-b border-white/10'
          : 'bg-transparent'}`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Logo isDarkMode={isDarkMode} />
            <NavLinks navItems={navItems} activeItem={activeItem} isDarkMode={isDarkMode} />

            <div className="flex items-center gap-3">
              <ThemeToggle isDarkMode={isDarkMode} onToggle={onToggleTheme} />
              <MobileToggle onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} />
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
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  const modalContent = (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 backdrop-blur-sm"
      onClick={() => setIsOpen(false)}
    >
      <Image
        src={profileImage}
        alt="Profile"
        width={500}
        height={500}
        className="object-cover rounded-xl"
      />
    </div>
  );

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="flex items-center gap-2 focus:outline-none group"
      >
        <div className="relative w-10 h-10 rounded-xl overflow-hidden ring-2 ring-transparent group-hover:ring-blue-500 transition">
          <Image src={profileImage} alt="Profile" fill className="object-cover" />
        </div>
        <div className="flex flex-col text-left">
          <span className={`text-base font-semibold ${isDarkMode ? "text-white" : "text-gray-900"}`}>
            Portfolio
          </span>
          <span className={`text-xs tracking-wide ${isDarkMode ? "text-blue-400" : "text-blue-600"}`}>
            Developer
          </span>
        </div>
      </button>

      {isOpen && typeof window !== "undefined"
        ? createPortal(modalContent, document.body)
        : null}
    </>
  );
}

function NavLinks({ navItems, activeItem, isDarkMode }: { navItems: NavItem[], activeItem: string, isDarkMode: boolean }) {
  return (
    <div className="hidden md:flex items-center gap-2">
      {navItems.map((item) => {
        const isActive = activeItem === item.id;
        return (
          <Link
            key={item.id}
            href={item.href}
            className={`group relative flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition
              ${isActive
                ? isDarkMode ? 'text-white' : 'text-gray-900'
                : isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}
          >
            <span className="flex items-center">{item.icon}</span>
            {item.label}
            <span className={`absolute bottom-0 left-0 w-0 h-0.5 ${isDarkMode ? 'bg-blue-400' : 'bg-blue-600'} transition-all duration-300 group-hover:w-full ${isActive ? 'w-full' : ''}`} />
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
      className="p-2 rounded-lg border border-gray-300 dark:border-white/20 hover:bg-gray-100 dark:hover:bg-white/10 transition"
    >
      {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
}

function MobileToggle({ onClick }: { onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="md:hidden p-2 rounded-lg border border-gray-300 dark:border-white/20 hover:bg-gray-100 dark:hover:bg-white/10 transition"
    >
      <Menu size={20} />
    </button>
  );
}
