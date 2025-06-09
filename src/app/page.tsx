'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  const skills = [
    { name: 'JavaScript/TypeScript', level: 'Advanced' },
    {name: 'Java', level: 'Advanced'},
    { name: 'React/Next.js', level: 'Advanced' },
    { name: 'Node.js', level: 'Intermediate' },
    { name: 'Python', level: 'Intermediate' },
    { name: 'Git', level: 'Advanced' },
    { name: 'Mobile Development', level: 'Advanced'},
    {name: 'Web Development', level: 'Advanced'},
    {name: 'Calculus', level: 'Intermediate'}

  ];

  const projects = [
    {
      title: 'Just Intonation Mobile App',
      description: '🚧 In Progress: Developing a mobile application for a client focused on Just Intonation music theory and practice. Currently implementing core features and UI components.',
      technologies: ['React Native', 'JavaScript', 'Expo'],
      link: '#',
      image: '/project-icons/just-intonation.svg'
    },
    {
      title: 'Musical Fingering Apps',
      description: '🚧 In Progress: Creating a mobile application for musical instrument fingering charts and practice tools. Currently in the initial development phase.',
      technologies: ['React Native', 'TypeScript', 'Expo'],
      link: '#',
      image: '/project-icons/musical-fingering.svg'
    },
    {
      title: 'Media Site Platform',
      description: '🚧 In Progress: Building a Flask-based website for sentiment analysis of media sources. Currently setting up the backend infrastructure and database models.',
      technologies: ['Python', 'Flask', 'HTML/CSS'],
      link: '#',
      image: '/project-icons/media-site.svg'
    },
    {
      title: 'Dublin Food Pantry Database',
      description: '🚧 In Progress: Developing a comprehensive database system to improve operations and service delivery for the Dublin Food Pantry. Currently in the design and planning phase.',
      technologies: ['Database Design'],
      link: '#',
      image: '/project-icons/food-pantry.svg'
    }
  ];

  const experiences = [
    {
      title: 'Freelance Developer',
      company: 'Self-Employed',
      duration: 'January 2025 - Present',
      logo: '/logos/freelance.svg',
      achievements: [
        'Developing custom mobile applications and solutions for clients',
        'Managing client relationships and project timelines'
      
      ]
    },
    {
      title: 'Content Creator & Educator',
      company: 'Trigsaw',
      duration: 'July 2024 - Present',
      logo: '/logos/trigsaw.svg',
      achievements: [
        'Creating educational content for Physics and Calculus',
        'Building a community of learners and developers',
        'Developing engaging tutorials and learning materials'
      ]
    },
    {
      title: 'Team Member',
      company: 'Panera Bread',
      duration: 'August 2024 - Present',
      logo: '/logos/panera.svg',
      achievements: [
        'Providing excellent customer service and maintaining store standards',
        'Working efficiently in a fast-paced environment',
        'Collaborating with team members to ensure smooth operations'
      ]
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              Noirit Ghosh Choudhuri
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-8">
              Software Developer & Instrumentalist
            </p>
            <div className="flex justify-center gap-4">
              <Link
                href="/resume"
                className="bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-6 py-3 rounded-md hover:opacity-90 transition-opacity"
              >
                View Resume
              </Link>
              <Link
                href="/#experience"
                className="border border-gray-900 dark:border-white px-6 py-3 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                View Experience
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
            <div className="prose dark:prose-invert max-w-none">
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                I am a passionate software developer with a strong foundation in web and mobile development and a keen interest in creating efficient, scalable solutions. With experience in both frontend and backend technologies, I strive to build applications that make a positive impact.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                When I'm not coding, you can find me playing the clarinet. I believe in continuous learning and staying up-to-date with the latest technologies and best practices in software development.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-12 text-center">Skills & Technologies</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-sm"
                >
                  <h3 className="text-xl font-semibold mb-2">{skill.name}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{skill.level}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-12 text-center">Experience</h2>
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.company}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-sm"
                >
                  <div className="flex items-start gap-4">
                    <div className="relative w-16 h-16 flex-shrink-0">
                      <Image
                        src={exp.logo}
                        alt={`${exp.company} logo`}
                        fill
                        className="object-contain"
                      />
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-xl font-semibold mb-1">{exp.title}</h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-2">
                        {exp.company} • {exp.duration}
                      </p>
                      <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i}>{achievement}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-12 text-center">Featured Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white dark:bg-gray-900 rounded-lg shadow-sm overflow-hidden"
                >
                  <div className="relative h-32 flex items-center justify-center bg-gray-50 dark:bg-gray-800">
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={48}
                      height={48}
                      className="object-contain"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 px-3 py-1 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <button
                      onClick={() => alert('This project is currently under development. Check back soon!')}
                      className="text-gray-900 dark:text-white hover:underline cursor-pointer"
                    >
                      View Project →
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
            <div className="flex justify-center gap-6">
              <a
                href="https://github.com/noiritgc?tab=overview&from=2025-06-01&to=2025-06-08"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a
                href="https://instagram.com/noiritgc"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href="mailto:noiritgc@gmail.com"
                className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
