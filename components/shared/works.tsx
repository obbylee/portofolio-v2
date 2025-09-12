"use client";

import { motion } from "motion/react";

import { type ProjectItem } from "@/data";
import { myProjectsData } from "@/data";

import { ArrowUpRight, GithubIcon, LinkIcon } from "lucide-react";

import Image from "next/image";
import Link from "next/link";

const Works = () => {
  return (
    <section id="projects" aria-labelledby="projects-heading" className="py-16">
      <h2
        id="projects-heading"
        className="md:hidden sticky top-0 text-lg font-bold text-gray-900 dark:text-gray-100 mb-4 backdrop-blur py-2.5 z-20"
      >
        Featured Projects
      </h2>

      <Link
        href={"/works"}
        scroll={false}
        className="hidden md:flex gap-2 text-lg font-bold text-gray-900 dark:text-gray-100 mb-4 backdrop-blur py-2.5 z-20"
      >
        <span>View full projects</span>
        <motion.span
          animate={{ y: [0, -10, 0] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <ArrowUpRight />
        </motion.span>
      </Link>

      <div className="flex flex-col gap-4">
        {myProjectsData.slice(0, 8).map((project: ProjectItem) => (
          <motion.div
            key={project.id}
            className="group relative rounded-lg shadow-md overflow-hidden bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:shadow-lg flex flex-col h-full"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ ease: "easeInOut" }}
            viewport={{ once: true, amount: 0.5 }}
          >
            {project.image && (
              <div className="relative w-full h-48 md:h-56 lg:h-64 overflow-hidden">
                <Image
                  src={project.image}
                  alt={`Screenshot of ${project.title}`}
                  fill
                  sizes="full"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent"></div>
              </div>
            )}

            <div className="p-6 flex flex-col flex-grow">
              <h3 className="mb-2 font-bold text-xl text-blue-700 dark:text-blue-400">
                {project.title}
              </h3>
              <p className="text-gray-700 dark:text-gray-300 text-sm mb-4 flex-grow">
                {project.description}
              </p>
              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 pt-2 border-t border-gray-200 dark:border-gray-700 mt-auto">
                {project.techStack.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="inline-flex items-center px-3 py-0.5 rounded-full text-xs font-medium
                                   bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              {/* Links */}
              <div className="flex gap-4 mt-4">
                {project.githubLink && (
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-gray-700 dark:text-gray-300 hover:text-blue-700 dark:hover:text-blue-400 transition-colors duration-200"
                    aria-label={`View ${project.title} on GitHub`}
                  >
                    <GithubIcon className="h-5 w-5 mr-1" />
                    <span>GitHub</span>
                  </a>
                )}
                {project.liveLink && (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-gray-700 dark:text-gray-300 hover:text-blue-700 dark:hover:text-blue-400 transition-colors duration-200"
                  >
                    <LinkIcon className="h-5 w-5 mr-1" />
                    <span>Live Url</span>
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Works;
