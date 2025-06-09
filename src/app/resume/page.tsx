'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function Resume() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time for the PDF
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
        >
          {isLoading ? (
            <div className="flex items-center justify-center h-[calc(100vh-8rem)]">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900 dark:border-white"></div>
            </div>
          ) : (
            <iframe
              src="/resume.pdf"
              className="w-full h-[calc(100vh-8rem)]"
              title="Resume"
            />
          )}
        </motion.div>
      </div>
    </div>
  );
} 