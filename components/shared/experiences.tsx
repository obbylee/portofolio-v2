"use client";

import { motion } from "motion/react";

import { myTimelineData, type TimelineItem } from "@/data";

import { ArrowUpRight } from "lucide-react";

const Experiences = () => {
  return (
    <section id="timeline" aria-labelledby="timeline-heading" className="py-8">
      <h2
        id="timeline-heading"
        className="md:hidden sticky top-0 text-lg font-bold text-gray-900 dark:text-gray-100 mb-4 backdrop-blur py-2.5 z-20"
      >
        Experiences
      </h2>

      <motion.a
        href="https://1drv.ms/w/c/3cdcd2b725d3c39a/EaCv7ZvLuOdCrm5lhy0mM7kB8D57X_hwalNCRrcGKWCgug?e=TaQnCg"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Download Resume (PDF)"
        className="hidden md:flex gap-2 text-lg font-bold text-gray-900 dark:text-gray-100 mb-4 backdrop-blur py-2.5 z-20"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.6, ease: "easeInOut" }}
      >
        <span>View full resume</span>
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
      </motion.a>

      <div className="flex flex-col gap-4">
        {myTimelineData.map((item: TimelineItem, index) => (
          <motion.div
            key={item.id}
            className="w-full py-4 px-6 rounded-md bg-gray-50 dark:bg-gray-800 text-left border hover:border-blue-400"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 + index * 0.2, ease: "easeInOut" }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <p className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-1">
              {item.date}
            </p>
            <h3 className="mb-1 font-bold text-lg text-blue-700 dark:text-blue-400">
              {item.title}
            </h3>
            {item.company && (
              <p className="mb-2 text-sm text-gray-700 dark:text-gray-300">
                {item.company}
              </p>
            )}
            <p className="text-gray-700 dark:text-gray-300 text-sm mb-3">
              {item.description}
            </p>

            {/* Tech Stack Display */}
            {item.techStack && item.techStack.length > 0 && (
              <div className="flex flex-wrap gap-2 pt-2 border-t border-gray-200 dark:border-gray-700">
                {item.techStack.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="inline-flex items-center px-3 py-0.5 rounded-full text-xs font-medium
                                         bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experiences;
