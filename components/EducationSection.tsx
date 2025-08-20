'use client';

import { motion } from 'framer-motion';

interface EducationItem {
  degree: string;
  institution: string;
  year: string;
}

const education: EducationItem[] = [
  {
    degree: 'Bachelor of Science in Computer Science',
    institution: 'National University of Sciences and Technology (NUST)',
    year: '2017 – 2021',
  },
  {
    degree: 'Intermediate in Pre-Engineering',
    institution: 'Punjab Group of Colleges',
    year: '2015 – 2017',
  },
  {
    degree: 'Matriculation in Science',
    institution: 'Allied School',
    year: '2013 – 2015',
  },
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 120 } },
};

export default function EducationSection({ isDarkMode }: { isDarkMode: boolean }) {
  return (
    <div className="mb-20 text-center">
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className={`text-4xl md:text-5xl font-bold mb-12 ${
          isDarkMode ? 'text-white' : 'text-gray-900'
        }`}
      >
        Education
      </motion.h2>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="grid gap-8 max-w-4xl mx-auto"
      >
        {education.map((item, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            whileHover={{ scale: 1.03, boxShadow: isDarkMode
              ? '0px 8px 25px rgba(0,0,0,0.4)'
              : '0px 8px 20px rgba(0,0,0,0.15)' }}
            transition={{ type: 'spring', stiffness: 200 }}
            className={`p-6 rounded-2xl shadow-lg transition-all duration-300 text-left ${
              isDarkMode
                ? 'bg-white/5 backdrop-blur-md border border-white/10'
                : 'bg-white/80 backdrop-blur-sm border border-gray-200'
            }`}
          >
            <h3
              className={`text-xl font-semibold mb-2 ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}
            >
              {item.degree}
            </h3>
            <p
              className={`text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}
            >
              {item.institution}
            </p>
            <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
              {item.year}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
