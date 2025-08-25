"use client";

import { motion } from "motion/react";

const About = () => {
  return (
    <section id="about" aria-labelledby="about-heading" className="py-8">
      <h2
        id="about-heading"
        className="md:hidden sticky top-0 text-lg font-bold text-gray-900 dark:text-gray-100 mb-4 backdrop-blur py-2.5 z-20"
      >
        About me
      </h2>

      <motion.p
        className="text-gray-800 dark:text-gray-400 mt-2"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.4, ease: "easeInOut" }}
        viewport={{ once: true }}
      >
        My journey as a{" "}
        <span className="font-bold text-blue-700 dark:text-blue-400">
          Software Engineer
        </span>{" "}
        has always been driven by a genuine passion for building impactful web
        systems that truly make a difference. Most recently, at{" "}
        <span className="text-blue-700 dark:text-blue-400">HashField</span>, I
        had the opportunity to contribute to the development of{" "}
        <span className="font-bold text-blue-700 dark:text-blue-400">
          inadmin.io
        </span>
        , a SaaS platform designed to streamline administrative workflows. In
        this role, I focused on crafting intuitive user experiences and ensuring
        robust underlying solutions, from designing flexible drag-and-drop form
        builders with comprehensive analytics to perfecting intricate
        multi-level approval systems.
      </motion.p>

      <motion.p
        className="text-gray-800 dark:text-gray-400 mt-2"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.4, ease: "easeInOut" }}
        viewport={{ once: true }}
      >
        When I finally pull myself away from the keyboard, my happy place is
        often found getting cozy with a good Wuxia novel 📖 or joyfully battling
        dragons and completing quests in the vast worlds of RPG games 🎮.
      </motion.p>
    </section>
  );
};

export default About;
