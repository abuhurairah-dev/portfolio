'use client';

import React from 'react';
import Link from 'next/link';

interface FooterProps {
  isDarkMode: boolean;
}

export default function Footer({ isDarkMode }: FooterProps) {
  return (
    <footer className={`py-8 px-4 transition-colors duration-500 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-sm">&copy; Portfolio 2025</div>

        <div className="flex flex-wrap gap-6 text-sm">
          <Link href="https://linkedin.com" className="hover:underline">
            LinkedIn
          </Link>
          <Link href="mailto:someone@example.com" className="hover:underline">
            Mail
          </Link>
          <Link href="https://yourwebsite.com" className="hover:underline">
            Website
          </Link>
          <Link href="https://niceystudio.com" className="hover:underline">
            Nicey Studio
          </Link>
        </div>
      </div>
    </footer>
  );
}
