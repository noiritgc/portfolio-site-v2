'use client';

import { motion } from 'framer-motion';

export default function Extracurriculars() {
  return (
    <div className="pt-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold mb-12 text-center">Extracurricular Activities</h1>
          
          <div className="space-y-12">
            <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-sm">
              <h2 className="text-2xl font-semibold mb-4">Computer Science Club</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">Co-Founder & Vice President • 2023 - Present</p>
              <div className="prose dark:prose-invert max-w-none">
                <p>Co-founded and currently serve as Vice President of a district-wide Computer Science Club for high school students, focusing on real-world impact through technology.</p>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
                  <li>Lead collaborative projects with local non-profit organizations to address community needs</li>
                  <li>Currently developing a database system for the Dublin Food Pantry to improve their operations and service delivery</li>
                  <li>Facilitate knowledge sharing and skill development among high school students across the district</li>
                </ul>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-sm">
              <h2 className="text-2xl font-semibold mb-4">Robotics Club</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">Member & Programmer • 2022 - Present</p>
              <div className="prose dark:prose-invert max-w-none">
                <p>Active member of the school's Robotics Club, contributing to robot programming and competitions.</p>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
                  <li>Developed and implemented subsytems with Gyroscopes and Super-Sonic Sensors</li>
                  <li>Collaborated with team members to design and optimize robot functionality</li>
                  <li>Participated in robotics competitions, applying programming skills to solve real-world challenges</li>
                  <li>Gained hands-on experience with robotics hardware and software integration</li>
                </ul>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-sm">
              <h2 className="text-2xl font-semibold mb-4">Dublin Coffman Music Program</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">Marching Band Member & Officer • 2022 - Present</p>
              <div className="prose dark:prose-invert max-w-none">
                <p>Active participant in both the Dublin Coffman Marching Band and Concert Band, demonstrating leadership and musical excellence.</p>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
                  <li>Achieved First Chair position, showcasing musical ability and dedication</li>
                  <li>Performed multiple solo performances, demonstrating technical skills</li>
                  <li>Served as a three-time Squad Leader, mentoring and guiding fellow band members</li>
                  <li>Elected as an officer, contributing to program leadership and organizational success</li>
                </ul>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-sm">
              <h2 className="text-2xl font-semibold mb-4">Educational Content Creator</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">Trigsaw YouTube Channel • 2024 - Present</p>
              <div className="prose dark:prose-invert max-w-none">
                <p>Creator and host of the Trigsaw YouTube channel, producing educational content focused on Physics and Calculus concepts.</p>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
                  <li>Develop and produce engaging educational videos explaining complex mathematical and scientific concepts</li>
                  <li>Create clear, accessible content that helps students understand challenging topics in Physics and Calculus</li>
                  <li>Demonstrate strong communication skills through effective explanation of technical concepts</li>
                  <li>100+ Subscribers & 2500+ Views</li>
                </ul>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-sm">
              <h2 className="text-2xl font-semibold mb-4">Freelance Mobile Developer</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">Independent Developer • 2025 - Present</p>
              <div className="prose dark:prose-invert max-w-none">
                <p>Independent mobile app developer working with multiple clients to create custom React Native applications.</p>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
                  <li>Develop cross-platform mobile applications using React Native for various clients</li>
                  <li>Manage client relationships and project requirements independently</li>
                  <li>Deliver high-quality, production-ready mobile applications</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
} 