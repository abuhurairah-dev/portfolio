'use client';

import React from 'react';
import Link from 'next/link';
import { Linkedin, Github, Mail, Briefcase } from 'lucide-react'; // 👈 icons

interface FooterProps {
  isDarkMode: boolean;
}

export default function Footer({ isDarkMode }: FooterProps) {
  return (
    <footer
      className={`py-8 px-4 transition-colors duration-500 ${
        isDarkMode ? 'text-white' : 'text-gray-800'
      }`}
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-sm">&copy; Portfolio 2025</div>

        {/* Social icons */}
        <div className="flex gap-6 text-sm">
          <Link
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-75 transition"
          >
            <Linkedin size={22} />
          </Link>
          <Link
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-75 transition"
          >
            <Github size={22} />
          </Link>
          <Link
            href="mailto:someone@example.com"
            className="hover:opacity-75 transition"
          >
            <Mail size={22} />
          </Link>
          <Link
            href="https://www.upwork.com/freelancers/your-id"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-75 transition"
          >
            <Briefcase size={22} /> {/* Used as Upwork icon substitute */}
          </Link>
        </div>
      </div>
    </footer>
  );
}
