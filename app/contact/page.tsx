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

export default function Contact() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

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
        <main className="flex-1 flex items-center justify-center px-6 py-12">
          <div className="max-w-6xl mx-auto w-full">
            {/* Hero Section */}
            <div className="text-center mb-16">
              <h1 className={`text-5xl md:text-7xl font-bold mb-6 leading-tight transition-all duration-500 ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>
                Let's Connect
              </h1>
              <p className={`text-xl md:text-2xl max-w-2xl mx-auto leading-relaxed transition-colors duration-500 ${
                isDarkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>
                Ready to start your next project? I'd love to hear from you and discuss how we can work together.
              </p>
            </div>

            {/* Contact Content */}
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className={`p-8 rounded-2xl transition-all duration-300 ${
                isDarkMode 
                  ? 'bg-white/5 backdrop-blur-sm border border-white/10' 
                  : 'bg-white/50 backdrop-blur-sm border border-gray-200'
              }`}>
                <h2 className={`text-3xl font-bold mb-6 ${
                  isDarkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  Send a Message
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className={`block text-sm font-medium mb-2 ${
                      isDarkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 rounded-lg transition-all duration-300 ${
                        isDarkMode
                          ? 'bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:border-white/40'
                          : 'bg-white/50 border border-gray-300 text-gray-900 placeholder-gray-500 focus:border-gray-500'
                      }`}
                      placeholder="Your name"
                      required
                    />
                  </div>

                  <div>
                    <label className={`block text-sm font-medium mb-2 ${
                      isDarkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 rounded-lg transition-all duration-300 ${
                        isDarkMode
                          ? 'bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:border-white/40'
                          : 'bg-white/50 border border-gray-300 text-gray-900 placeholder-gray-500 focus:border-gray-500'
                      }`}
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>

                  <div>
                    <label className={`block text-sm font-medium mb-2 ${
                      isDarkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 rounded-lg transition-all duration-300 ${
                        isDarkMode
                          ? 'bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:border-white/40'
                          : 'bg-white/50 border border-gray-300 text-gray-900 placeholder-gray-500 focus:border-gray-500'
                      }`}
                      placeholder="Project inquiry"
                      required
                    />
                  </div>

                  <div>
                    <label className={`block text-sm font-medium mb-2 ${
                      isDarkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={6}
                      className={`w-full px-4 py-3 rounded-lg transition-all duration-300 resize-none ${
                        isDarkMode
                          ? 'bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:border-white/40'
                          : 'bg-white/50 border border-gray-300 text-gray-900 placeholder-gray-500 focus:border-gray-500'
                      }`}
                      placeholder="Tell me about your project..."
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className={`w-full py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 ${
                      isDarkMode
                        ? 'bg-white text-black hover:bg-gray-200'
                        : 'bg-gray-900 text-white hover:bg-gray-800'
                    }`}
                  >
                    Send Message
                  </button>
                </form>
              </div>

              {/* Contact Information */}
              <div className="space-y-8">
                <div className={`p-8 rounded-2xl transition-all duration-300 ${
                  isDarkMode 
                    ? 'bg-white/5 backdrop-blur-sm border border-white/10' 
                    : 'bg-white/50 backdrop-blur-sm border border-gray-200'
                }`}>
                  <h3 className={`text-2xl font-bold mb-6 ${
                    isDarkMode ? 'text-white' : 'text-gray-900'
                  }`}>
                    Get in Touch
                  </h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                        isDarkMode ? 'bg-white/10' : 'bg-gray-900/10'
                      }`}>
                        📧
                      </div>
                      <div>
                        <p className={`font-medium ${
                          isDarkMode ? 'text-white' : 'text-gray-900'
                        }`}>
                          Email
                        </p>
                        <p className={`text-sm ${
                          isDarkMode ? 'text-gray-300' : 'text-gray-600'
                        }`}>
                          hello@yourportfolio.com
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4">
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                        isDarkMode ? 'bg-white/10' : 'bg-gray-900/10'
                      }`}>
                        📱
                      </div>
                      <div>
                        <p className={`font-medium ${
                          isDarkMode ? 'text-white' : 'text-gray-900'
                        }`}>
                          Phone
                        </p>
                        <p className={`text-sm ${
                          isDarkMode ? 'text-gray-300' : 'text-gray-600'
                        }`}>
                          +1 (555) 123-4567
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4">
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                        isDarkMode ? 'bg-white/10' : 'bg-gray-900/10'
                      }`}>
                        📍
                      </div>
                      <div>
                        <p className={`font-medium ${
                          isDarkMode ? 'text-white' : 'text-gray-900'
                        }`}>
                          Location
                        </p>
                        <p className={`text-sm ${
                          isDarkMode ? 'text-gray-300' : 'text-gray-600'
                        }`}>
                          San Francisco, CA
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className={`p-8 rounded-2xl transition-all duration-300 ${
                  isDarkMode 
                    ? 'bg-white/5 backdrop-blur-sm border border-white/10' 
                    : 'bg-white/50 backdrop-blur-sm border border-gray-200'
                }`}>
                  <h3 className={`text-2xl font-bold mb-6 ${
                    isDarkMode ? 'text-white' : 'text-gray-900'
                  }`}>
                    Let's Work Together
                  </h3>
                  
                  <p className={`text-lg leading-relaxed mb-6 ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
                  </p>
                  
                  <div className="space-y-3">
                    <div className={`flex items-center space-x-3 ${
                      isDarkMode ? 'text-gray-300' : 'text-gray-600'
                    }`}>
                      <div className={`w-2 h-2 rounded-full ${
                        isDarkMode ? 'bg-blue-400' : 'bg-blue-600'
                      }`} />
                      <span>Web Development</span>
                    </div>
                    <div className={`flex items-center space-x-3 ${
                      isDarkMode ? 'text-gray-300' : 'text-gray-600'
                    }`}>
                      <div className={`w-2 h-2 rounded-full ${
                        isDarkMode ? 'bg-blue-400' : 'bg-blue-600'
                      }`} />
                      <span>UI/UX Design</span>
                    </div>
                    <div className={`flex items-center space-x-3 ${
                      isDarkMode ? 'text-gray-300' : 'text-gray-600'
                    }`}>
                      <div className={`w-2 h-2 rounded-full ${
                        isDarkMode ? 'bg-blue-400' : 'bg-blue-600'
                      }`} />
                      <span>Consulting</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
