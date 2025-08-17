'use client';

import { useState, useEffect } from 'react';
import clsx from 'clsx';
import NavBar from '../../components/NavBar';
import { useTheme } from '../../hooks/useTheme';

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

function NoiseOverlay() {
  return (
    <div className="absolute inset-0 opacity-30 mix-blend-overlay">
      <div
        className="w-full h-full"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
}

function FloatingParticles({ isDarkMode }: { isDarkMode: boolean }) {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particleData.map((p, i) => (
        <div
          key={i}
          className={clsx(
            'absolute w-1 h-1 rounded-full animate-float',
            isDarkMode ? 'bg-blue-400/30' : 'bg-blue-600/20'
          )}
          style={{
            left: p.left,
            top: p.top,
            animationDelay: p.delay,
            animationDuration: p.duration,
          }}
        />
      ))}
    </div>
  );
}

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
                  <h3 className={clsx('text-2xl font-bold mb-6', textPrimary)}>
                    Let's Work Together
                  </h3>
                  <p className={clsx('text-lg leading-relaxed mb-6', textSecondary)}>
                    I'm always open to discussing new projects, creative ideas, or
                    opportunities to be part of your visions.
                  </p>
                  {['Web Development', 'UI/UX Design', 'Consulting'].map((s, i) => (
                    <div
                      key={i}
                      className={clsx('flex items-center space-x-3', textSecondary)}
                    >
                      <div
                        className={clsx(
                          'w-2 h-2 rounded-full',
                          isDarkMode ? 'bg-blue-400' : 'bg-blue-600'
                        )}
                      />
                      <span>{s}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
