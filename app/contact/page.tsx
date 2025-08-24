'use client';

import { useState, useEffect } from 'react';
import clsx from 'clsx';
import NavBar from '../../components/NavBar';
import { NoiseOverlay, FloatingParticles } from '../../components/Particles';
import { useTheme } from '../../hooks/useTheme';
import { CheckCircle, Code, Palette, Briefcase } from "lucide-react";

export default function Contact() {
  const { isDarkMode, toggleTheme, isLoaded } = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;
      document.documentElement.style.setProperty('--mouse-x', `${x}%`);
      document.documentElement.style.setProperty('--mouse-y', `${y}%`);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  if (!isLoaded) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-white">Loading...</div>
      </div>
    );
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const inputBase = clsx(
    'w-full px-4 py-3 rounded-lg transition-all duration-300',
    isDarkMode
      ? 'bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:border-white/40'
      : 'bg-white/50 border border-gray-300 text-gray-900 placeholder-gray-500 focus:border-gray-500'
  );

  const cardBase = clsx(
    'p-8 rounded-2xl transition-all duration-300',
    isDarkMode
      ? 'bg-white/5 backdrop-blur-sm border border-white/10'
      : 'bg-white/50 backdrop-blur-sm border border-gray-200'
  );

  const textPrimary = isDarkMode ? 'text-white' : 'text-gray-900';
  const textSecondary = isDarkMode ? 'text-gray-300' : 'text-gray-600';

  const services = [
    { icon: Code, label: "Web Development" },
    { icon: Palette, label: "UI/UX Design" },
    { icon: Briefcase, label: "Consulting" },
  ];
  

  return (
    <div
      className={clsx(
        'min-h-screen relative overflow-hidden transition-all duration-1000',
        isDarkMode
          ? 'bg-gradient-to-br from-gray-900 via-blue-900/20 to-black'
          : 'bg-gradient-to-br from-blue-50 via-white to-blue-100'
      )}
    >
      <NavBar isDarkMode={isDarkMode} onToggleTheme={toggleTheme} /> {/* ✅ synced theme */}

      <div
        className={clsx(
          'absolute inset-0 transition-all duration-1000',
          isDarkMode
            ? 'bg-gradient-radial from-blue-500/10 via-transparent to-transparent'
            : 'bg-gradient-radial from-blue-400/20 via-transparent to-transparent'
        )}
        style={{
          backgroundPosition: 'var(--mouse-x, 50%) var(--mouse-y, 50%)',
          backgroundSize: '800px 800px',
        }}
      />

      <NoiseOverlay />
      <FloatingParticles isDarkMode={isDarkMode} />

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col pt-16">
        <main className="flex-1 flex items-center justify-center px-6 py-12">
          <div className="max-w-6xl mx-auto w-full">
            {/* Hero */}
            <div className="text-center mb-16">
              <h1
                className={clsx(
                  'text-5xl md:text-7xl font-bold mb-6 leading-tight transition-all duration-500',
                  textPrimary
                )}
              >
                Let's Connect
              </h1>
              <p
                className={clsx(
                  'text-xl md:text-2xl max-w-2xl mx-auto leading-relaxed transition-colors duration-500',
                  textSecondary
                )}
              >
                Ready to start your next project? I'd love to hear from you and
                discuss how we can work together.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              <div className={cardBase}>
                <h2 className={clsx('text-3xl font-bold mb-6', textPrimary)}>
                  Send a Message
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {['name', 'email', 'subject'].map((field, i) => (
                    <div key={i}>
                      <label
                        className={clsx(
                          'block text-sm font-medium mb-2',
                          textSecondary
                        )}
                      >
                        {field[0].toUpperCase() + field.slice(1)}
                      </label>
                      <input
                        type={field === 'email' ? 'email' : 'text'}
                        name={field}
                        value={(formData as any)[field]}
                        onChange={handleChange}
                        className={inputBase}
                        placeholder={
                          field === 'email'
                            ? 'your.email@example.com'
                            : field === 'subject'
                            ? 'Project inquiry'
                            : 'Your name'
                        }
                        required
                      />
                    </div>
                  ))}

                  <div>
                    <label
                      className={clsx(
                        'block text-sm font-medium mb-2',
                        textSecondary
                      )}
                    >
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className={clsx(inputBase, 'resize-none')}
                      placeholder="Tell me about your project..."
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className={clsx(
                      'w-full py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105',
                      isDarkMode
                        ? 'bg-white text-black hover:bg-gray-200'
                        : 'bg-gray-900 text-white hover:bg-gray-800'
                    )}
                  >
                    Send Message
                  </button>
                </form>
              </div>

              <div className="space-y-8">
                <div className={cardBase}>
                  <h3 className={clsx('text-2xl font-bold mb-6', textPrimary)}>
                    Get in Touch
                  </h3>
                  <div className="space-y-6">
                    {[
                      { icon: '📧', label: 'Email', value: 'hello@yourportfolio.com' },
                      { icon: '📱', label: 'Phone', value: '+1 (555) 123-4567' },
                      { icon: '📍', label: 'Location', value: 'San Francisco, CA' },
                    ].map((item, i) => (
                      <div key={i} className="flex items-center space-x-4">
                        <div
                          className={clsx(
                            'w-12 h-12 rounded-full flex items-center justify-center',
                            isDarkMode ? 'bg-white/10' : 'bg-gray-900/10'
                          )}
                        >
                          {item.icon}
                        </div>
                        <div>
                          <p className={clsx('font-medium', textPrimary)}>
                            {item.label}
                          </p>
                          <p className={clsx('text-sm', textSecondary)}>
                            {item.value}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className={cardBase}>
                  <h3 className={clsx("text-2xl font-bold mb-6", textPrimary)}>
                    Let's Work Together
                  </h3>
                  <p className={clsx("text-lg leading-relaxed mb-6", textSecondary)}>
                    I'm always open to discussing new projects, creative ideas, or
                    opportunities to be part of your visions.
                  </p>

                  <div className="space-y-3">
                    {services.map(({ icon: Icon, label }, i) => (
                      <div key={i} className="flex items-center space-x-3">
                        <Icon
                          className={clsx(
                            "w-5 h-5 flex-shrink-0",
                            isDarkMode ? "text-blue-400" : "text-blue-600"
                          )}
                        />
                        <span className={clsx("text-base", textSecondary)}>{label}</span>
                      </div>
                    ))}
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
