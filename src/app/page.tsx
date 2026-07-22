'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Beat-Less Tuning Mobile App',
    description:
      'A polished mobile app for practicing music theory and Just Intonation / Beat-Less Tuning, available now on the iOS App Store. Students can tune chords and intervals or freely experiment within a Just Intonation temperament, while a built-in testing mode makes the app equally useful as a classroom teaching tool for tracking and sharing results.',
    technologies: ['React Native', 'JavaScript', 'Expo', 'UI Design'],
    link: {
      label: 'Demo Video',
      href: 'https://youtu.be/El4SwqdXyRs?si=luYzWUifW8VIAXxR',
    },
    secondaryLink: {
      label: 'View project',
      href: 'https://apps.apple.com/us/app/beat-less-tuning/id6758780458',
    },
    images: [
      '/project-icons/3.png',
      '/project-icons/4.png',
      '/project-icons/6.png',
      '/project-icons/8.png',
    ],
    status: 'Live',
  },
  {
    title: 'Buzzlytix',
    description:
      'A media intelligence platform that distills current events and trends into a concise, consolidated feed. Users can track trending "Buzzwords" across the media landscape, explore the topics being widely discussed worldwide, and follow the trends that emerge around them.',
    technologies: ['Python', 'Flask', 'HTML/CSS', 'AI', 'Product Thinking'],
    link: {
      label: 'View project',
      href: 'https://buzzlytix.com',
    },
    images: [
      '/project-icons/buzz-1.png',
      '/project-icons/buzz-2.png',
      '/project-icons/buzz-3.png',
      '/project-icons/buzz-4.png',
    ],
    status: 'Live',
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.9),_transparent_45%),linear-gradient(135deg,_#f8f5ef_0%,_#f3efe9_100%)] dark:bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.08),_transparent_45%),linear-gradient(135deg,_#0f172a_0%,_#111827_100%)]">
      <section className="px-4 pb-16 pt-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-gray-500 dark:text-gray-400">
                Software • Music • Product
              </p>
              <h1 className="text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
                I build thoughtful digital experiences that feel simple and memorable.
              </h1>
              <p className="mt-6 max-w-2xl text-lg text-gray-600 dark:text-gray-300">
                I&apos;m a developer focused on mobile apps, creative tools, and modern web products that connect strong design with practical execution.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/resume"
                  className="rounded-full bg-gray-900 px-5 py-3 text-sm font-medium text-white transition hover:bg-gray-700 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-200"
                >
                  View Resume
                </Link>
                <a
                  href="https://github.com/noiritgc?tab=overview&from=2025-06-01&to=2025-06-08"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-gray-300 px-5 py-3 text-sm font-medium text-gray-700 transition hover:border-gray-900 hover:text-gray-900 dark:border-gray-700 dark:text-gray-200 dark:hover:border-white dark:hover:text-white"
                >
                  GitHub
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="rounded-3xl border border-black/10 bg-white/70 p-6 shadow-[0_25px_80px_-35px_rgba(15,23,42,0.45)] backdrop-blur dark:border-white/10 dark:bg-gray-900/70"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gray-500 dark:text-gray-400">
                Current focus
              </p>
              <ul className="mt-6 space-y-4 text-sm text-gray-600 dark:text-gray-300">
                <li className="rounded-2xl border border-gray-200 bg-gray-50/80 p-4 dark:border-gray-800 dark:bg-gray-800/70">
                  <span className="font-semibold text-gray-900 dark:text-white">React Native</span> for expressive, user-friendly mobile products.
                </li>
                <li className="rounded-2xl border border-gray-200 bg-gray-50/80 p-4 dark:border-gray-800 dark:bg-gray-800/70">
                  <span className="font-semibold text-gray-900 dark:text-white">Next.js</span> for fast, polished web experiences.
                </li>
                <li className="rounded-2xl border border-gray-200 bg-gray-50/80 p-4 dark:border-gray-800 dark:bg-gray-800/70">
                  <span className="font-semibold text-gray-900 dark:text-white">Music + tech</span> projects that blend creativity with engineering.
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="px-4 pb-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8 flex items-end justify-between gap-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gray-500 dark:text-gray-400">
                Selected work
              </p>
              <h2 className="mt-2 text-3xl font-semibold sm:text-4xl">Projects</h2>
            </div>
          </div>

          <div className="flex flex-col gap-8">
            {projects.map((project, index) => (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="flex h-full w-full flex-col overflow-hidden rounded-[2rem] border border-black/10 bg-white/85 shadow-[0_25px_80px_-35px_rgba(15,23,42,0.4)] backdrop-blur dark:border-white/10 dark:bg-gray-900/85"
              >
                <div className="bg-gray-100 p-3 dark:bg-gray-800/80 sm:p-4">
                  <div className="grid gap-3 md:grid-cols-2">
                    {project.images.map((image, imageIndex) => (
                      <div
                        key={`${project.title}-${imageIndex}`}
                        className="flex items-center justify-center overflow-hidden rounded-[1.5rem] border border-black/5 bg-white p-3 dark:border-white/10"
                      >
                        <Image
                          src={image}
                          alt={`${project.title} screenshot ${imageIndex + 1}`}
                          width={886}
                          height={1920}
                          className="mx-auto h-auto max-h-[280px] w-auto max-w-full object-contain sm:max-h-[320px]"
                        />
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-7 sm:p-8">
                  <div className="flex items-center justify-between gap-3">
                    <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium uppercase tracking-[0.25em] text-gray-600 dark:bg-gray-800 dark:text-gray-300">
                      {project.status}
                    </span>
                  </div>

                  <div className="mt-6 flex-1">
                    <h3 className="text-2xl font-semibold">{project.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-gray-600 dark:text-gray-300">{project.description}</p>
                  </div>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="rounded-full border border-gray-200 px-3 py-1 text-xs font-medium text-gray-600 dark:border-gray-700 dark:text-gray-300">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {project.link ? (
                    <div className="mt-6 flex flex-wrap gap-3">
                      <a
                        href={project.link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-sm font-semibold text-gray-900 transition hover:translate-x-1 dark:text-white"
                      >
                        {project.link.label} →
                      </a>
                      {project.secondaryLink ? (
                        <a
                          href={project.secondaryLink.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center rounded-full border border-gray-300 px-3 py-1.5 text-sm font-semibold text-gray-700 transition hover:border-gray-900 hover:text-gray-900 dark:border-gray-700 dark:text-gray-300 dark:hover:border-white dark:hover:text-white"
                        >
                          {project.secondaryLink.label}
                        </a>
                      ) : null}
                    </div>
                  ) : (
                    <span className="mt-6 text-sm font-medium text-gray-500 dark:text-gray-400">More details coming soon</span>
                  )}
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
