'use client';

import { useState, useEffect } from 'react';
import NewNavigation from '../../components/NewNavigation';

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

interface Project {
  id: number;
  title: string;
  description: string;
  category: string;
  image: string;
  technologies: string[];
  link: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A modern e-commerce platform with advanced features like real-time inventory, payment processing, and analytics dashboard.",
    category: "Web Application",
    image: "🛒",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    link: "#"
  },
  {
    id: 2,
    title: "Mobile Banking App",
    description: "Secure mobile banking application with biometric authentication, real-time transactions, and financial insights.",
    category: "Mobile App",
    image: "🏦",
    technologies: ["React Native", "Firebase", "TypeScript", "Redux"],
    link: "#"
  },
  {
    id: 3,
    title: "Design System",
    description: "Comprehensive design system with reusable components, documentation, and design tokens for consistent brand experience.",
    category: "Design System",
    image: "🎨",
    technologies: ["Figma", "Storybook", "React", "Tailwind CSS"],
    link: "#"
  },
  {
    id: 4,
    title: "AI-Powered Dashboard",
    description: "Intelligent dashboard that uses machine learning to provide insights and predictions for business metrics.",
    category: "Web Application",
    image: "📊",
    technologies: ["Python", "React", "TensorFlow", "PostgreSQL"],
    link: "#"
  },
  {
    id: 5,
    title: "Social Media Platform",
    description: "Feature-rich social media platform with real-time messaging, content sharing, and community features.",
    category: "Web Application",
    image: "📱",
    technologies: ["Next.js", "Socket.io", "Redis", "AWS"],
    link: "#"
  },
  {
    id: 6,
    title: "Portfolio Website",
    description: "Beautiful portfolio website with modern design, smooth animations, and responsive layout.",
    category: "Website",
    image: "💼",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    link: "#"
  }
];

export default function Work() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('All');

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

  const categories = ['All', 'Web Application', 'Mobile App', 'Design System', 'Website'];
  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

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
        <main className="flex-1 px-6 py-12">
          <div className="max-w-7xl mx-auto">
            {/* Hero Section */}
            <div className="text-center mb-16">
              <h1 className={`text-5xl md:text-7xl font-bold mb-6 leading-tight transition-all duration-500 ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>
                My Work
              </h1>
              <p className={`text-xl md:text-2xl max-w-2xl mx-auto leading-relaxed transition-colors duration-500 ${
                isDarkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>
                A collection of projects that showcase my skills and passion for creating exceptional digital experiences
              </p>
            </div>

            {/* Category Filter */}
            <div className="flex justify-center mb-12">
              <div className={`flex flex-wrap gap-2 p-2 rounded-2xl ${
                isDarkMode 
                  ? 'bg-white/5 backdrop-blur-sm border border-white/10' 
                  : 'bg-white/50 backdrop-blur-sm border border-gray-200'
              }`}>
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                      selectedCategory === category
                        ? isDarkMode
                          ? 'bg-white text-black'
                          : 'bg-gray-900 text-white'
                        : isDarkMode
                          ? 'text-gray-300 hover:text-white hover:bg-white/10'
                          : 'text-gray-600 hover:text-gray-900 hover:bg-gray-900/10'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* Projects Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <div
                  key={project.id}
                  className={`group p-6 rounded-2xl transition-all duration-500 transform hover:scale-105 ${
                    isDarkMode 
                      ? 'bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10' 
                      : 'bg-white/50 backdrop-blur-sm border border-gray-200 hover:bg-white/70'
                  }`}
                >
                  {/* Project Image */}
                  <div className="text-6xl mb-4 text-center">{project.image}</div>
                  
                  {/* Project Info */}
                  <div className="space-y-4">
                    <div>
                      <h3 className={`text-xl font-bold mb-2 ${
                        isDarkMode ? 'text-white' : 'text-gray-900'
                      }`}>
                        {project.title}
                      </h3>
                      <p className={`text-sm font-medium ${
                        isDarkMode ? 'text-blue-400' : 'text-blue-600'
                      }`}>
                        {project.category}
                      </p>
                    </div>
                    
                    <p className={`text-sm leading-relaxed ${
                      isDarkMode ? 'text-gray-300' : 'text-gray-600'
                    }`}>
                      {project.description}
                    </p>
                    
                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className={`px-3 py-1 rounded-full text-xs font-medium ${
                            isDarkMode
                              ? 'bg-white/10 text-gray-300'
                              : 'bg-gray-900/10 text-gray-600'
                          }`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    {/* View Project Button */}
                    <button className={`w-full mt-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                      isDarkMode
                        ? 'bg-white/10 text-white hover:bg-white/20'
                        : 'bg-gray-900/10 text-gray-900 hover:bg-gray-900/20'
                    }`}>
                      View Project
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
