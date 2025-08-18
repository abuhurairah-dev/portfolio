'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

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

export default function PromotionalCard() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const total = slides.length;
  const cardHeight = 400;
  const spacing = 0;
  const peek = 5; // how much of the pinned card remains visible

  // PREPARE y-springs for cards 1…n (we’ll render slide[0] as sticky)
  const ySprings = slides.slice(1).map((_, idx) => {
    const slideIndex = idx + 1;
    const start = slideIndex / total;
    const end = (slideIndex + 1) / total;

    // 0→1 over this card’s scroll window
    const progress = useTransform(scrollYProgress, [start, end], [0, 1], {
      clamp: true,
    });

    // calculate initial vertical offset and how far to move
    const initialY = slideIndex * (cardHeight + spacing);
    const moveUp = slideIndex * (cardHeight - peek);

    // map progress → actual y value
    const yValue = useTransform(progress, (v) => initialY - v * moveUp);

    // smooth it out
    return useSpring(yValue, { stiffness: 200, damping: 30 });
  });

  return (
    <section
      ref={containerRef}
      className="relative w-full"
      style={{ height: cardHeight + (cardHeight - 0) * (total - 1) }}
    >
      {/* 1) Sticky first card */}
      <div className="sticky top-0 z-30 w-full max-w-4xl mx-auto">
        <Card slide={slides[0]} />
      </div>

      {/* 2) Absolutely position the rest */}
      {slides.slice(1).map((slide, idx) => {
        const y = ySprings[idx];
        const zIndex = 100 + idx + 1;

        return (
          <motion.div
            key={idx}
            style={{ y, zIndex }}
            className="absolute left-0 right-0 mx-auto w-full max-w-4xl"
          >
            <Card slide={slide} />
          </motion.div>
        );
      })}
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
          <button className="px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition">
            {slide.cta}
          </button>
        )}
      </div>
    </div>
  );
}