'use client';

import React from 'react';
import { projects } from '@/data/projects';

interface LatestWorkProps {
  isDarkMode: boolean;
}

export default function LatestWork({ isDarkMode }: LatestWorkProps) {
  const latestProjects = projects.filter((project) => project.latest);

  return (
    <section className="mb-20">
      <h2
        className={`text-3xl font-bold mb-8 ${
          isDarkMode ? 'text-white' : 'text-gray-900'
        }`}
      >
        ✨ Latest Work
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {latestProjects.map((project) => (
          <div
            key={project.id}
            className={`group p-6 rounded-2xl transition-all duration-500 hover:scale-[1.03] hover:shadow-xl ${
              isDarkMode
                ? 'bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10'
                : 'bg-white shadow-sm border border-gray-200 hover:shadow-md'
            }`}
          >
            <div className="text-5xl mb-4 text-center">{project.image}</div>
            <h3
              className={`text-lg font-semibold mb-2 ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}
            >
              {project.title}
            </h3>
            <p
              className={`text-sm mb-4 ${
                isDarkMode ? 'text-gray-300' : 'text-gray-600'
              }`}
            >
              {project.description}
            </p>
            <a
              href={project.link}
              className={`inline-block px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                isDarkMode
                  ? 'bg-white/10 text-white hover:bg-white/20'
                  : 'bg-gray-900/10 text-gray-900 hover:bg-gray-900/20'
              }`}
            >
              View Project →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
