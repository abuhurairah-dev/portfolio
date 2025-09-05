// data/projects.ts

export interface Project {
    id: number;
    title: string;
    description: string;
    category: string;
    image: string;
    technologies: string[];
    link: string;
    latest?: boolean;
    thumbnail: string;
    preview?: string;
  }
  
export const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description:
      "A modern e-commerce platform with advanced features like real-time inventory, payment processing, and analytics dashboard.",
    category: "Web Application",
    image: "🛒",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    link: "#",
    latest: true,
    thumbnail: "https://source.unsplash.com/600x400/?ecommerce,website",
    preview: "https://source.unsplash.com/900x600/?shopping,technology",
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
    latest: true,
    thumbnail: "https://source.unsplash.com/600x400/?banking,app",
    preview: "https://source.unsplash.com/900x600/?finance,mobile",
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
    latest: false,
    thumbnail: "https://source.unsplash.com/600x400/?design,ui",
    preview: "https://source.unsplash.com/900x600/?design,system",
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
    latest: true,
    thumbnail: "https://source.unsplash.com/600x400/?dashboard,ai",
    preview: "https://source.unsplash.com/900x600/?data,analytics",
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
    latest: false,
    thumbnail: "https://source.unsplash.com/600x400/?social,network",
    preview: "https://source.unsplash.com/900x600/?community,chat",
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
    latest: false,
    thumbnail: "https://source.unsplash.com/600x400/?portfolio,website",
    preview: "https://source.unsplash.com/900x600/?web,developer",
  },
];
