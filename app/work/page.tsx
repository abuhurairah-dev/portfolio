'use client';

import { useEffect, useState } from 'react';
import NavBar from '../../components/NavBar';
import { NoiseOverlay, FloatingParticles } from '../../components/Particles';
import { useTheme } from '../../hooks/useTheme';

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
    description:
      "A modern e-commerce platform with advanced features like real-time inventory, payment processing, and analytics dashboard.",
    category: "Web Application",
    image: "🛒",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    link: "#",
  },
  {
    id: 2,
    title: "Mobile Banking App",
    description:
      "Secure mobile banking application with biometric authentication, real-time transactions, and financial insights.",
    category: "Mobile App",
    image: "🏦",
    technologies: ["React Native", "Firebase", "TypeScript", "Redux"],
    link: "#",
  },
  {
    id: 3,
    title: "Design System",
    description:
      "Comprehensive design system with reusable components, documentation, and design tokens for consistent brand experience.",
    category: "Design System",
    image: "🎨",
    technologies: ["Figma", "Storybook", "React", "Tailwind CSS"],
    link: "#",
  },
  {
    id: 4,
    title: "AI-Powered Dashboard",
    description:
      "Intelligent dashboard that uses machine learning to provide insights and predictions for business metrics.",
    category: "Web Application",
    image: "📊",
    technologies: ["Python", "React", "TensorFlow", "PostgreSQL"],
    link: "#",
  },
  {
    id: 5,
    title: "Social Media Platform",
    description:
      "Feature-rich social media platform with real-time messaging, content sharing, and community features.",
    category: "Web Application",
    image: "📱",
    technologies: ["Next.js", "Socket.io", "Redis", "AWS"],
    link: "#",
  },
  {
    id: 6,
    title: "Portfolio Website",
    description:
      "Beautiful portfolio website with modern design, smooth animations, and responsive layout.",
    category: "Website",
    image: "💼",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    link: "#",
  },
];

export default function Work() {
  const { isDarkMode, toggleTheme, isLoaded } = useTheme();
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const x = (clientX / window.innerWidth) * 100;
      const y = (clientY / window.innerHeight) * 100;

      document.documentElement.style.setProperty("--mouse-x", `${x}%`);
      document.documentElement.style.setProperty("--mouse-y", `${y}%`);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const categories = ["All", "Web Application", "Mobile App", "Design System", "Website"];
  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  if (!isLoaded) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
        Loading...
      </div>
    );
  }

  return (
    <div
      className={`min-h-screen relative overflow-hidden transition-colors duration-1000 ${
        isDarkMode
          ? "bg-gradient-to-br from-gray-900 via-blue-900/20 to-black"
          : "bg-gradient-to-br from-blue-50 via-white to-blue-100"
      }`}
    >
      {/* Navbar */}
      <NavBar isDarkMode={isDarkMode} onToggleTheme={toggleTheme} />

      {/* Background Effects */}
      <div
        className={`absolute inset-0 transition-all duration-1000 ${
          isDarkMode
            ? "bg-gradient-radial from-blue-500/10 via-transparent to-transparent"
            : "bg-gradient-radial from-blue-400/20 via-transparent to-transparent"
        }`}
        style={{
          backgroundPosition: "var(--mouse-x, 50%) var(--mouse-y, 50%)",
          backgroundSize: "800px 800px",
        }}
      />
      <NoiseOverlay />
      <FloatingParticles isDarkMode={isDarkMode} />

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col pt-16">
        <main className="flex-1 px-6 py-12">
          <div className="max-w-7xl mx-auto">
            {/* Title */}
            <div className="text-center mb-16">
              <h1
                className={`text-5xl md:text-7xl font-bold mb-6 leading-tight ${
                  isDarkMode ? "text-white" : "text-gray-900"
                }`}
              >
                My Work
              </h1>
              <p
                className={`text-xl md:text-2xl max-w-2xl mx-auto leading-relaxed ${
                  isDarkMode ? "text-gray-300" : "text-gray-600"
                }`}
              >
                A collection of projects that showcase my skills and passion for
                creating exceptional digital experiences.
              </p>
            </div>

            {/* Categories */}
            <div className="flex justify-center mb-12">
              <div
                className={`flex flex-wrap gap-2 p-2 rounded-2xl ${
                  isDarkMode
                    ? "bg-white/5 backdrop-blur-sm border border-white/10"
                    : "bg-white/50 backdrop-blur-sm border border-gray-200"
                }`}
              >
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                      selectedCategory === category
                        ? isDarkMode
                          ? "bg-white text-black"
                          : "bg-gray-900 text-white"
                        : isDarkMode
                        ? "text-gray-300 hover:text-white hover:bg-white/10"
                        : "text-gray-600 hover:text-gray-900 hover:bg-gray-900/10"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* Latest Work Section */}
            <section className="mb-20">
              <h2
                className={`text-3xl font-bold mb-8 ${
                  isDarkMode ? "text-white" : "text-gray-900"
                }`}
              >
                ✨ Latest Work
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.slice(0, 3).map((project) => (
                  <div
                    key={project.id}
                    className={`group p-6 rounded-2xl transition-all duration-500 hover:scale-[1.03] hover:shadow-xl ${
                      isDarkMode
                        ? "bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10"
                        : "bg-white shadow-sm border border-gray-200 hover:shadow-md"
                    }`}
                  >
                    <div className="text-5xl mb-4 text-center">{project.image}</div>
                    <h3
                      className={`text-lg font-semibold mb-2 ${
                        isDarkMode ? "text-white" : "text-gray-900"
                      }`}
                    >
                      {project.title}
                    </h3>
                    <p
                      className={`text-sm mb-4 ${
                        isDarkMode ? "text-gray-300" : "text-gray-600"
                      }`}
                    >
                      {project.description}
                    </p>
                    <a
                      href={project.link}
                      className={`inline-block px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                        isDarkMode
                          ? "bg-white/10 text-white hover:bg-white/20"
                          : "bg-gray-900/10 text-gray-900 hover:bg-gray-900/20"
                      }`}
                    >
                      View Project →
                    </a>
                  </div>
                ))}
              </div>
            </section>

            {/* All Projects */}
            <section>
              <h2
                className={`text-3xl font-bold mb-8 ${
                  isDarkMode ? "text-white" : "text-gray-900"
                }`}
              >
                📂 All Projects
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProjects.map((project) => (
                  <div
                    key={project.id}
                    className={`group p-6 rounded-2xl transition-all duration-500 hover:scale-[1.03] hover:shadow-xl ${
                      isDarkMode
                        ? "bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10"
                        : "bg-white shadow-sm border border-gray-200 hover:shadow-md"
                    }`}
                  >
                    <div className="text-6xl mb-4 text-center">{project.image}</div>
                    <h3
                      className={`text-lg font-semibold mb-2 ${
                        isDarkMode ? "text-white" : "text-gray-900"
                      }`}
                    >
                      {project.title}
                    </h3>
                    <p
                      className={`text-sm mb-4 ${
                        isDarkMode ? "text-gray-300" : "text-gray-600"
                      }`}
                    >
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className={`px-3 py-1 rounded-full text-xs font-medium ${
                            isDarkMode
                              ? "bg-white/10 text-gray-300"
                              : "bg-gray-900/10 text-gray-600"
                          }`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <a
                      href={project.link}
                      className={`inline-block w-full text-center py-2 rounded-lg font-medium transition-all duration-300 ${
                        isDarkMode
                          ? "bg-white/10 text-white hover:bg-white/20"
                          : "bg-gray-900/10 text-gray-900 hover:bg-gray-900/20"
                      }`}
                    >
                      View Project →
                    </a>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}
