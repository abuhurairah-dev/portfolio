'use client';

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
  const activeItem = pathname === '/' ? 'home' : pathname.slice(1);

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-opacity duration-300"
          onClick={onClose}
        />
      )}

      <div
        className={`fixed top-0 right-0 z-50 h-full w-80 transform transition-transform duration-500 ease-out
        ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div
          className={`h-full w-full backdrop-blur-xl border-l shadow-2xl
          ${isDarkMode
            ? 'from-gray-900/95 via-gray-800/95 to-black/95 border-white/20 shadow-black/50 bg-gradient-to-br'
            : 'from-white/95 via-gray-50/95 to-white/95 border-gray-200 shadow-gray-500/20 bg-gradient-to-br'}`}
        >
          <Header isDarkMode={isDarkMode} onClose={onClose} />
          <NavLinks navItems={navItems} activeItem={activeItem} isDarkMode={isDarkMode} onClose={onClose} />
          <ThemeToggle isDarkMode={isDarkMode} onToggleTheme={onToggleTheme} />
        </div>
      </div>
    </>
  );
}

function Header({ isDarkMode, onClose }: { isDarkMode: boolean; onClose: () => void }) {
  return (
    <div className={`flex items-center justify-between p-6 border-b ${isDarkMode ? 'border-white/20' : 'border-gray-200'}`}>
      <div className="flex items-center space-x-3">
        <div
          className={`relative w-8 h-8 rounded-lg flex items-center justify-center
          ${isDarkMode
            ? 'bg-gradient-to-br from-blue-500/20 to-purple-600/20 border border-white/20'
            : 'bg-gradient-to-br from-blue-500/10 to-purple-600/10 border border-gray-200'}`}
        >
          <span className={`text-sm font-bold ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}>P</span>
        </div>
        <h2 className={`text-lg font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Portfolio</h2>
      </div>
      <button
        onClick={onClose}
        className={`p-2 rounded-lg transition-all duration-300 hover:scale-110
        ${isDarkMode
          ? 'text-white hover:bg-white/10 border border-white/20'
          : 'text-gray-900 hover:bg-gray-900/10 border border-gray-200'}`}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 
                   10.59 12 5 17.59 6.41 19 12 13.41 
                   17.59 19 19 17.59 13.41 12z" />
        </svg>
      </button>
    </div>
  );
}

function NavLinks({
  navItems,
  activeItem,
  isDarkMode,
  onClose,
}: {
  navItems: { id: string; label: string; href: string }[];
  activeItem: string;
  isDarkMode: boolean;
  onClose: () => void;
}) {
  return (
    <nav className="p-6">
      <ul className="space-y-3">
        {navItems.map((item) => {
          const isActive = activeItem === item.id;
          return (
            <li key={item.id}>
              <Link
                href={item.href}
                onClick={onClose}
                className={`group relative block px-4 py-4 transition-all duration-300
                ${isActive
                  ? isDarkMode
                    ? 'text-white border-b-2 border-blue-400'
                    : 'text-gray-900 border-b-2 border-blue-600'
                  : isDarkMode
                    ? 'text-gray-300 hover:text-white'
                    : 'text-gray-600 hover:text-gray-900'}`}
              >
                {isActive && (
                  <div className={`absolute bottom-0 left-0 w-full h-0.5 ${isDarkMode ? 'bg-blue-400' : 'bg-blue-600'}`} />
                )}
                <div
                  className={`absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300
                  ${isDarkMode ? 'bg-white' : 'bg-gray-900'} group-hover:w-full`}
                />
                <span className="relative z-10 font-medium tracking-wide">{item.label}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

function ThemeToggle({ isDarkMode, onToggleTheme }: { isDarkMode: boolean; onToggleTheme: () => void }) {
  return (
    <div className="absolute bottom-6 left-6 right-6">
      <button
        onClick={onToggleTheme}
        className={`group relative w-full py-4 px-6 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105
        ${isDarkMode
          ? 'bg-gradient-to-r from-blue-500/20 to-purple-600/20 text-white border border-white/20 hover:shadow-lg hover:shadow-blue-500/25'
          : 'bg-gradient-to-r from-blue-500/10 to-purple-600/10 text-gray-900 border border-gray-200 hover:shadow-lg hover:shadow-blue-500/25'}`}
      >
        <span className="flex items-center justify-center space-x-2">
          <span className="text-lg transition-transform duration-300 group-hover:rotate-12">
            {isDarkMode ? '☀️' : '🌙'}
          </span>
          <span>{isDarkMode ? 'Light Mode' : 'Dark Mode'}</span>
        </span>
        <div
          className={`absolute inset-0 rounded-xl blur-md transition-opacity duration-300
          ${isDarkMode ? 'bg-blue-500/30' : 'bg-blue-500/20'} opacity-0 group-hover:opacity-100`}
        />
      </button>
    </div>
  );
}
