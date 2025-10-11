"use client";

import { useState } from "react";

import { myProjectsData } from "@/data";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const ProjectsPage = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = [
    "All",
    ...new Set(myProjectsData.map((project) => project.category)),
  ];

  const filteredProjects =
    activeCategory === "All"
      ? myProjectsData
      : myProjectsData.filter((project) => project.category === activeCategory);

  return (
    <div className="min-h-screen font-mono text-gray-100 p-4 md:p-8">
      <div className="max-w-7xl mx-auto py-12">
        <div className="sticky top-0 left-4 py-4 mb-8 bg-black z-50 h-14">
          <Link
            href="/"
            scroll={false}
            className="inline-flex items-center gap-2 text-sm font-medium text-gray-400 hover:text-blue-400 transition-colors duration-200"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Home</span>
          </Link>
        </div>

        <div className="sticky top-14 z-50 overflow-x-auto flex gap-3 mb-16 py-4 md:flex-wrap bg-black">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`
                px-5 py-2 rounded-sm text-sm md:text-base font-medium transition-all duration-200 border flex-none
                ${
                  activeCategory === category
                    ? "bg-blue-400/70 text-gray-300 border-blue-400 shadow-md"
                    : "bg-gray-800 text-gray-300 border-gray-700 hover:bg-gray-700 hover:text-gray-100"
                } 
              `}
            >
              {category}
            </button>
          ))}
        </div>

        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group relative bg-gray-800 border border-gray-700 rounded-sm overflow-hidden 
                           transform transition-all duration-300 hover:scale-[1.01] hover:shadow-xl hover:border-blue-400
                           flex flex-col cursor-pointer"
              >
                <div className="relative w-full h-56 md:h-64 overflow-hidden bg-gray-800 border-b border-gray-700 text-center place-content-center">
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={project.title}
                      className="object-cover opacity-80 transition-opacity duration-300 group-hover:opacity-100 group-hover:scale-105"
                      sizes="full"
                      priority
                      fill
                    />
                  ) : (
                    project.title
                  )}
                </div>

                <div
                  className="p-5 flex flex-col flex-grow
                                relative
                                md:absolute md:inset-x-0 md:bottom-0 md:h-full md:bg-gradient-to-t md:from-gray-800/95 md:to-transparent 
                                md:opacity-0 group-hover:md:opacity-100 transition-opacity duration-300
                                md:pointer-events-none group-hover:md:pointer-events-auto"
                >
                  <h3
                    className="text-xl font-bold text-gray-100 mb-2
                                 md:transform md:translate-y-4 group-hover:md:translate-y-0 md:transition-transform md:duration-300"
                  >
                    {project.title}
                  </h3>

                  <p className="py-2 text-sm md:hidden">
                    {project.description}
                  </p>

                  <div
                    className="flex flex-wrap gap-2 mt-auto
                                  md:opacity-0 group-hover:md:opacity-100 md:transition-opacity md:duration-300 md:delay-200"
                  >
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 bg-blue-900 text-blue-200 text-xs rounded-sm border border-blue-900"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons (Live Demo, GitHub) (Visible always on mobile, animated on desktop hover) */}
                  <div
                    className="mt-5 flex gap-3
                                  md:opacity-0 group-hover:md:opacity-100 md:transition-opacity duration-300 md:delay-300"
                  >
                    {project.liveLink && (
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center px-4 py-2 bg-blue-400 text-gray-900 hover:bg-blue-500 text-sm font-medium rounded-sm transition-colors duration-200 shadow-md" // Primary button: Main Blue (blue-400), Text: gray-900
                        onClick={(e) => e.stopPropagation()}
                      >
                        Live Demo
                      </a>
                    )}
                    {project.githubLink && (
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center px-4 py-2 bg-gray-700 text-gray-100 hover:bg-gray-600 text-sm font-medium rounded-sm transition-colors duration-200 shadow-md" // Secondary button: Border color, Headings text
                        onClick={(e) => e.stopPropagation()}
                      >
                        GitHub
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-400 text-lg py-10">
            No projects found for this category.
          </p>
        )}
      </div>
    </div>
  );
};

export default ProjectsPage;
