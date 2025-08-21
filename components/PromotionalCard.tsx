'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';

type Metric = { label: string; value: string };
type Slide = {
  title: string;
  description: string;
  image?: string | null;
  metrics: Metric[];
  cta?: string;
};

const slides: Slide[] = [
  {
    title: 'Optimizing a Corporate Intranet',
    description:
      "An innovative app and approach for taking advantage of unused internet from people's devices.",
    image: null,
    metrics: [
      { label: 'Conversion Rate', value: '20%' },
      { label: 'User Satisfaction', value: '95%' },
    ],
    cta: 'Coming Soon',
  },
  {
    title: 'Developing a Mobile Health',
    description: 'A mobile-first solution for health tracking and diagnostics.',
    image: null,
    metrics: [
      { label: 'Conversion Rate', value: '18%' },
      { label: 'User Satisfaction', value: '92%' },
    ],
    cta: 'Explore',
  },
  {
    title: 'Revamping an E-Commerce Website',
    description:
      'Created a user-friendly interface for accessing premium operational web scraping proxies.',
    image: null,
    metrics: [
      { label: 'Usability', value: '85%' },
      { label: 'User Retention', value: '70%' },
    ],
    cta: 'View case study',
  },
];

// Animation variants
const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: i * 0.2,
      ease: 'easeOut',
    },
  }),
};

export default function PromotionalCard() {
  return (
    <section className="w-full max-w-4xl mx-auto flex flex-col gap-8">
      {slides.map((slide, idx) => (
        <motion.div
          key={idx}
          custom={idx}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={cardVariants}
        >
          <Card slide={slide} />
        </motion.div>
      ))}
    </section>
  );
}

function Card({ slide }: { slide: Slide }) {
  return (
    <div className="bg-white dark:bg-gray-900 rounded-3xl shadow-2xl p-8 flex flex-col md:flex-row gap-6">
      {slide.image && (
        <div className="relative w-full md:w-1/2">
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-72 md:h-96 rounded-xl object-cover"
          />
        </div>
      )}

      <div className="flex-1">
        <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900 dark:text-white">
          {slide.title}
        </h3>
        <p className="mb-6 text-gray-700 dark:text-gray-300">
          {slide.description}
        </p>
        <div className="grid grid-cols-2 gap-4 mb-6">
          {slide.metrics.map((m, idx) => (
            <div
              key={idx}
              className="bg-gray-50 dark:bg-gray-800 p-4 rounded-xl text-center shadow"
            >
              <div className="text-sm text-gray-500 dark:text-gray-400">
                {m.label}
              </div>
              <div className="text-xl font-semibold text-gray-900 dark:text-white">
                {m.value}
              </div>
            </div>
          ))}
        </div>
        {slide.cta && (
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="px-6 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full shadow transition"
          >
            {slide.cta}
          </motion.button>
        )}
      </div>
    </div>
  );
}
