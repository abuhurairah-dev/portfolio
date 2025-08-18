'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, MotionValue } from 'framer-motion';

type Metric = { label: string; value: string };
type Slide = {
  title: string;
  description: string;
  image: string;
  metrics: Metric[];
  cta?: string;
};

const slides: Slide[] = [
  {
    title: 'Optimizing a Corporate Intranet',
    description:
      "An innovative app and approach for taking advantage of unused internet from people's devices.",
    image: '',
    metrics: [
      { label: 'Conversion Rate', value: '20%' },
      { label: 'User Satisfaction', value: '95%' },
    ],
    cta: 'Coming Soon',
  },
  {
    title: 'Developing a Mobile Health',
    description: 'A mobile-first solution for health tracking and diagnostics.',
    image: '',
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
    image: '',
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
  const peek = 60;
  const cardHeight = 400;
  const spacing = 40;

  const steps: MotionValue<number>[] = slides.map((_, i) =>
    useTransform(scrollYProgress, [i / total, (i + 1) / total], [0, 1], { clamp: true })
  );

  return (
    <section
      ref={containerRef}
      style={{ height: `${cardHeight * total}px` }}
      className="relative w-full"
    >
      <div className="relative w-full h-full flex flex-col items-center">
        {slides.map((slide, i) => {
          const y = useTransform(steps[i], (v) => {
            const initialY = i * (cardHeight + spacing);
            const moveUp = i * (cardHeight - peek);
            return initialY - v * moveUp;
          });
          const ySmooth = useSpring(y, { stiffness: 200, damping: 30 });

          return (
            <Card key={i} slide={slide} y={ySmooth} zIndex={total - i} />
          );
        })}
      </div>
    </section>
  );
}

function Card({ slide, y, zIndex }: { slide: Slide; y: MotionValue<number>; zIndex: number }) {
  return (
    <motion.div
      style={{ y, zIndex }}
      className="absolute w-full max-w-4xl bg-white dark:bg-gray-900 rounded-3xl shadow-2xl p-8 flex flex-col md:flex-row gap-6"
    >
      <div className="relative w-full md:w-1/2">
        <img
          src={slide.image}
          alt={slide.title}
          className="w-full h-72 md:h-96 rounded-xl object-cover"
        />
      </div>
      <div className="flex-1">
        <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900 dark:text-white">
          {slide.title}
        </h3>
        <p className="mb-6 text-gray-700 dark:text-gray-300">{slide.description}</p>
        <div className="grid grid-cols-2 gap-4 mb-6">
          {slide.metrics.map((m, idx) => (
            <div
              key={idx}
              className="bg-gray-50 dark:bg-gray-800 p-4 rounded-xl text-center shadow"
            >
              <div className="text-sm text-gray-500 dark:text-gray-400">{m.label}</div>
              <div className="text-xl font-semibold text-gray-900 dark:text-white">{m.value}</div>
            </div>
          ))}
        </div>
        {slide.cta && (
          <button className="px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition">
            {slide.cta}
          </button>
        )}
      </div>
    </motion.div>
  );
}
