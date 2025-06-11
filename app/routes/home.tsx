import type { Route } from "./+types/home";
import { Button } from "~/components/ui/button";
import { DownloadCloudIcon, SendHorizonalIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { type SectionLink, type TimelineItem, type ProjectItem } from "~/data";
import { sections, myTimelineData, myProjectsData } from "~/data";
import { GithubIcon, LinkIcon } from "lucide-react";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Lee Obby Waqoz - Fullstack Developer Portfolio" },
    {
      name: "description",
      content:
        "Portfolio of Lee Obby Waqoz, a Fullstack Developer specializing in end-to-end web development.",
    },
  ];
}

export default function Home() {
  const currentYear = new Date().getFullYear();
  const [activeSection, setActiveSection] = useState<string>("");

  // Effect 1: Initialize activeSection from URL hash on mount and listen for hash changes
  // This ensures the correct link is active if the page loads with a hash or if user navigates via browser history
  useEffect(() => {
    if (typeof window !== "undefined") {
      // Set initial active section based on current URL hash (remove the '#')
      const initialHash = window.location.hash.substring(1);
      if (sections.some((s) => s.id === initialHash)) {
        // Check if it's a valid section ID
        setActiveSection(initialHash);
      } else if (window.location.pathname === "/" && initialHash === "") {
        // If on root and no hash, default to the first section (e.g., 'about')
        setActiveSection(sections[0]?.id || "");
      }

      // Listen for hash changes (e.g., back/forward buttons, manual URL edit)
      const handleHashChange = () => {
        setActiveSection(window.location.hash.substring(1));
      };
      window.addEventListener("hashchange", handleHashChange);

      return () => {
        window.removeEventListener("hashchange", handleHashChange);
      };
    }
  }, []); // Runs once on mount

  // Effect 2: Intersection Observer for "active on scroll" functionality
  useEffect(() => {
    if (typeof window === "undefined") return; // Ensure running on client-side

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // When a section enters the specified intersection area
            const sectionId = entry.target.id;
            setActiveSection(sectionId); // Update the active state to highlight the link

            // Optional: Update URL hash as user scrolls, without adding to history
            // This keeps the URL in sync with the section currently in view
            if (window.location.hash !== `#${sectionId}`) {
              window.history.replaceState(null, "", `#${sectionId}`);
            }
          }
        });
      },
      {
        // rootMargin: Defines the active area in the viewport for intersection detection.
        // '-50% 0% -50% 0%' means the observer triggers when the section is roughly
        // in the middle 50% of the viewport. Adjust as needed.
        rootMargin: "-50% 0% -50% 0%",
        threshold: 0, // Even 0% intersection triggers (but rootMargin refines where)
      }
    );

    // Observe each section element on the page
    sections.forEach((section) => {
      const el = document.getElementById(section.id);
      if (el) {
        observer.observe(el);
      }
    });

    // Cleanup observer when component unmounts
    return () => {
      sections.forEach((section) => {
        const el = document.getElementById(section.id);
        if (el) {
          observer.unobserve(el);
        }
      });
    };
  }, []); // Runs once on mount

  return (
    <div className="w-full max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 px-6">
      <aside
        className="md:sticky md:top-0 py-24 h-screen flex flex-col"
        role="complementary"
        aria-label="Author Information and Navigation"
      >
        <header>
          <h1 className="text-4xl font-extrabold text-gray-800 dark:text-gray-100">
            LEE OBBY WAQOZ
          </h1>
          <h2 className="text-xl font-bold mt-4 text-blue-700 dark:text-blue-400">
            Fullstack Developer 🚀
          </h2>
          <p className="mt-3 text-gray-600 dark:text-gray-400 max-w-sm">
            Specializing in end-to-end web development, with a passion for what's next.
          </p>
        </header>

        <nav className="mt-8" aria-label="Main Section Navigation">
          <ul className="flex flex-col gap-4">
            {sections.map((section: SectionLink) => {
              const targetHref = `#${section.id}`; // Build href with '#'
              const isActive = activeSection === section.id; // Check if current section ID matches state

              return (
                <li key={section.id}>
                  <a
                    href={targetHref}
                    className={`w-fit transition-all font-medium duration-200
              ${
                isActive
                  ? "text-blue-700 border-b-2 border-blue-700 dark:text-blue-400 dark:border-blue-400" // Active state for both modes
                  : "text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-300" // Inactive state for both modes
              }
            `}
                    onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
                      e.preventDefault(); // Prevent default instant jump
                      const targetElement = document.getElementById(section.id); // Get element by ID (without '#')
                      if (targetElement) {
                        targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
                      }
                      // Update URL hash and add to browser history
                      window.history.pushState(null, "", targetHref);
                      // setActiveSection(section.id); // Immediately update active state for visual feedback
                    }}
                    {...(isActive && { "aria-current": "page" })}
                  >
                    {section.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex gap-4 mt-4">
          {/* Resume Button */}
          <Button
            asChild // This tells the Button component to render its child as an 'a' tag
            variant="outline"
            className="border-blue-700 text-blue-700 hover:bg-blue-700 hover:text-white dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-400 dark:hover:text-white"
          >
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Download Resume (PDF)"
            >
              <DownloadCloudIcon className="h-5 w-5 mr-2" />
              <span>Resume</span>
            </a>
          </Button>

          {/* Email Me Button */}
          <Button
            asChild
            variant="outline"
            className="border-blue-700 text-blue-700 hover:bg-blue-700 hover:text-white dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-400 dark:hover:text-white"
          >
            {/* Use mailto: protocol for email links */}
            <a
              href="mailto:leeobbyw@gmail.com?subject=Inquiry from your Portfolio Website&body=Hello!"
              aria-label="Send an Email"
            >
              <SendHorizonalIcon className="h-5 w-5 mr-2" />
              <span>Email me</span>
            </a>
          </Button>
        </div>

        <footer className="mt-auto" aria-label="Social Media Links">
          <ul className="flex gap-2">
            {/* GitHub Icon */}
            <li
              className="border p-2 h-10 w-10 rounded-md transition duration-300 ease-in-out
              border-gray-300 dark:border-gray-700
              bg-white dark:bg-gray-900
              text-gray-800 dark:text-gray-200
              hover:bg-blue-700 hover:border-blue-700 hover:text-white dark:hover:bg-blue-400 dark:hover:border-blue-400 dark:hover:text-white"
            >
              <a
                href="https://github.com/obbylee"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
              >
                <svg
                  aria-hidden="true"
                  className="h-6 w-6 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 50 50"
                >
                  <path
                    fill="currentColor"
                    d="M17.791,46.836C18.502,46.53,19,45.823,19,45v-5.4c0-0.197,0.016-0.402,0.041-0.61C19.027,38.994,19.014,38.997,19,39 c0,0-3,0-3.6,0c-1.5,0-2.8-0.6-3.4-1.8c-0.7-1.3-1-3.5-2.8-4.7C8.9,32.3,9.1,32,9.7,32c0.6,0.1,1.9,0.9,2.7,2c0.9,1.1,1.8,2,3.4,2 c2.487,0,3.82-0.125,4.622-0.555C21.356,34.056,22.649,33,24,33v-0.025c-5.668-0.182-9.289-2.066-10.975-4.975 c-3.665,0.042-6.856,0.405-8.677,0.707c-0.058-0.327-0.108-0.656-0.151-0.987c1.797-0.296,4.843-0.647,8.345-0.714 c-0.112-0.276-0.209-0.559-0.291-0.849c-3.511-0.178-6.541-0.039-8.187,0.097c-0.02-0.332-0.047-0.663-0.051-0.999 c1.649-0.135,4.597-0.27,8.018-0.111c-0.079-0.5-0.13-1.011-0.13-1.543c0-1.7,0.6-3.5,1.7-5c-0.5-1.7-1.2-5.3,0.2-6.6 c2.7,0,4.6,1.3,5.5,2.1C21,13.4,22.9,13,25,13s4,0.4,5.6,1.1c0.9-0.8,2.8-2.1,5.5-2.1c1.5,1.4,0.7,5,0.2,6.6c1.1,1.5,1.7,3.2,1.6,5 c0,0.484-0.045,0.951-0.11,1.409c3.499-0.172,6.527-0.034,8.204,0.102c-0.002,0.337-0.033,0.666-0.051,0.999 c-1.671-0.138-4.775-0.28-8.359-0.089c-0.089,0.336-0.197,0.663-0.325,0.98c3.546,0.046,6.665,0.389,8.548,0.689 c-0.043,0.332-0.093,0.661-0.151,0.987c-1.912-0.306-5.171-0.664-8.879-0.682C35.112,30.873,31.557,32.75,26,32.969V33 c2.6,0,5,3.9,5,6.6V45c0,0.823,0.498,1.53,1.209,1.836C41.37,43.804,48,35.164,48,25C48,12.318,37.683,2,25,2S2,12.318,2,25 C2,35.164,8.63,43.804,17.791,46.836z"
                  ></path>
                </svg>
              </a>
            </li>

            {/* LinkedIn Icon */}
            <li
              className="border p-2 h-10 w-10 rounded-md transition duration-300 ease-in-out
              border-gray-300 dark:border-gray-700
              bg-white dark:bg-gray-900
              text-gray-800 dark:text-gray-200
              hover:bg-blue-700 hover:border-blue-700 hover:text-white dark:hover:bg-blue-400 dark:hover:border-blue-400 dark:hover:text-white"
            >
              <a
                href="https://www.linkedin.com/in/leeobby/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
              >
                <svg
                  aria-hidden="true"
                  className="h-6 w-6 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 50 50"
                >
                  <path
                    fill="currentColor"
                    d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"
                  ></path>
                </svg>
              </a>
            </li>

            {/* Telegram Icon (assuming this was the intent for the 'Twitter' SVG path) */}
            <li
              className="border p-2 h-10 w-10 rounded-md transition duration-300 ease-in-out
              border-gray-300 dark:border-gray-700
              bg-white dark:bg-gray-900
              text-gray-800 dark:text-gray-200
              hover:bg-blue-700 hover:border-blue-700 hover:text-white dark:hover:bg-blue-400 dark:hover:border-blue-400 dark:hover:text-white"
            >
              <a
                href="https://t.me/leeobby"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Telegram Profile"
              >
                <svg
                  aria-hidden="true"
                  className="h-6 w-6 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 50 50"
                >
                  <path
                    fill="currentColor"
                    d="M25,2c12.703,0,23,10.297,23,23S37.703,48,25,48S2,37.703,2,25S12.297,2,25,2z M32.934,34.375 c0.423-1.298,2.405-14.234,2.65-16.783c0.074-0.772-0.17-1.285-0.648-1.514c-0.578-0.278-1.434-0.139-2.427,0.219 c-1.362,0.491-18.774,7.884-19.78,8.312c-0.954,0.405-1.856,0.847-1.856,1.487c0,0.45,0.267,0.703,1.003,0.966 c0.766,0.273,2.695,0.858,3.834,1.172c1.097,0.303,2.346,0.04,3.046-0.395c0.742-0.461,9.305-6.191,9.92-6.693 c0.614-0.502,1.104,0.141,0.602,0.644c-0.502,0.502-6.38,6.207-7.155,6.997c-0.941,0.959-0.273,1.953,0.358,2.351 c0.721,0.454,5.906,3.932,6.687,4.49c0.781,0.558,1.573,0.811,2.298,0.811C32.191,36.439,32.573,35.484,32.934,34.375z"
                  ></path>
                </svg>
              </a>
            </li>

            {/* Discord Icon (assuming this was the intent for the last SVG path) */}
            <li
              className="border p-2 h-10 w-10 rounded-md transition duration-300 ease-in-out
              border-gray-300 dark:border-gray-700
              bg-white dark:bg-gray-900
              text-gray-800 dark:text-gray-200
              hover:bg-blue-700 hover:border-blue-700 hover:text-white dark:hover:bg-blue-400 dark:hover:border-blue-400 dark:hover:text-white"
            >
              <a
                href="https://discord.com/users/your-discord-id"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Discord Profile"
              >
                <svg
                  aria-hidden="true"
                  className="h-6 w-6 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 50 50"
                >
                  <path
                    fill="currentColor"
                    d="M 41.625 10.769531 C 37.644531 7.566406 31.347656 7.023438 31.078125 7.003906 C 30.660156 6.96875 30.261719 7.203125 30.089844 7.589844 C 30.074219 7.613281 29.9375 7.929688 29.785156 8.421875 C 32.417969 8.867188 35.652344 9.761719 38.578125 11.578125 C 39.046875 11.867188 39.191406 12.484375 38.902344 12.953125 C 38.710938 13.261719 38.386719 13.429688 38.050781 13.429688 C 37.871094 13.429688 37.6875 13.378906 37.523438 13.277344 C 32.492188 10.15625 26.210938 10 25 10 C 23.789063 10 17.503906 10.15625 12.476563 13.277344 C 12.007813 13.570313 11.390625 13.425781 11.101563 12.957031 C 10.808594 12.484375 10.953125 11.871094 11.421875 11.578125 C 14.347656 9.765625 17.582031 8.867188 20.214844 8.425781 C 20.0625 7.929688 19.925781 7.617188 19.914063 7.589844 C 19.738281 7.203125 19.34375 6.960938 18.921875 7.003906 C 18.652344 7.023438 12.355469 7.566406 8.320313 10.8125 C 6.214844 12.761719 2 24.152344 2 34 C 2 34.175781 2.046875 34.34375 2.132813 34.496094 C 5.039063 39.605469 12.972656 40.941406 14.78125 41 C 14.789063 41 14.800781 41 14.8125 41 C 15.132813 41 15.433594 40.847656 15.621094 40.589844 L 17.449219 38.074219 C 12.515625 36.800781 9.996094 34.636719 9.851563 34.507813 C 9.4375 34.144531 9.398438 33.511719 9.765625 33.097656 C 10.128906 32.683594 10.761719 32.644531 11.175781 33.007813 C 11.234375 33.0625 15.875 37 25 37 C 34.140625 37 38.78125 33.046875 38.828125 33.007813 C 39.242188 32.648438 39.871094 32.683594 40.238281 33.101563 C 40.601563 33.515625 40.5625 34.144531 40.148438 34.507813 C 40.003906 34.636719 37.484375 36.800781 32.550781 38.074219 L 34.378906 40.589844 C 34.566406 40.847656 34.867188 41 35.1875 41 C 35.199219 41 35.210938 41 35.21875 41 C 37.027344 40.941406 44.960938 39.605469 47.867188 34.496094 C 47.953125 34.34375 48 34.175781 48 34 C 48 24.152344 43.785156 12.761719 41.625 10.769531 Z M 18.5 30 C 16.566406 30 15 28.210938 15 26 C 15 23.789063 16.566406 22 18.5 22 C 20.433594 22 22 23.789063 22 26 C 22 28.210938 20.433594 30 18.5 30 Z M 31.5 30 C 29.566406 30 28 28.210938 28 26 C 28 23.789063 29.566406 22 31.5 22 C 33.433594 22 35 23.789063 35 26 C 35 28.210938 33.433594 30 31.5 30 Z"
                  ></path>
                </svg>
              </a>
            </li>
          </ul>
        </footer>
      </aside>

      <main className="min-h-screen py-8">
        <section id="about" aria-labelledby="about-heading" className="py-8">
          <h2
            id="about-heading"
            className="md:hidden sticky top-0 text-lg font-bold text-gray-900 dark:text-gray-100 mb-4 backdrop-blur py-2.5 z-20"
          >
            About me
          </h2>
          <p className="text-gray-800 dark:text-gray-400">
            👋 I'm Lee, a Fullstack Developer who loves bringing complex visions to life as
            intuitive, robust, and impactful web applications. I excel at bridging powerful backend
            systems with seamless user experiences, building applications that are both highly
            functional and genuinely delightful.
          </p>
          <p className="text-gray-800 dark:text-gray-400 mt-2">
            Currently, I'm a{" "}
            <span className="font-bold text-blue-700 dark:text-blue-400">Software Engineer</span> at{" "}
            <span className="text-blue-700 dark:text-blue-400">HashField</span>, where I lead the
            development of{" "}
            <span className="font-bold text-blue-700 dark:text-blue-400">inadmin.io</span>, an
            innovative SAAS platform designed for efficient web application building. This involves
            creating flexible drag-and-drop form builders with comprehensive analytics, implementing
            intricate multi-level approval workflows, and ensuring robust data management. I also
            build web-based budgeting and expense trackers that automate financial planning.
          </p>
          <p className="text-gray-800 dark:text-gray-400 mt-2">
            In the past, I've developed diverse software solutions across various settings. My
            experience includes optimizing catalog, library, and inventory management systems for
            improved efficiency and data accuracy at{" "}
            <a href="https://stiesia.ac.id/" className="text-blue-700 dark:text-blue-400">
              Sekolah Tinggi Ilmu Ekonomi Indonesia (STIESIA)
            </a>
            .
          </p>
          <p className="text-gray-800 dark:text-gray-400 mt-2">
            When I finally pull myself away from the keyboard, my happy place is often found getting
            cozy with a good Wuxia novel 📖 or joyfully battling dragons and completing quests in
            the vast worlds of RPG games 🎮.
          </p>
        </section>

        <section id="timeline" aria-labelledby="timeline-heading" className="py-8">
          <h2
            id="timeline-heading"
            className="md:hidden sticky top-0 text-lg font-bold text-gray-900 dark:text-gray-100 mb-4 backdrop-blur py-2.5 z-20"
          >
            Experiences
          </h2>

          {/* Main container for the timeline content, ensures internal padding */}
          <div className="relative px-4 sm:px-6 lg:px-8">
            {/* Vertical Line - always on the far left of the content area */}
            <div className="absolute left-0 top-0 h-full w-0.5 bg-gray-300 dark:bg-gray-700"></div>

            {myTimelineData.map((item: TimelineItem) => (
              <div
                key={item.id}
                // All items align to the right of the vertical line
                className="mb-10 flex items-start w-full relative last:mb-0"
              >
                {/* Timeline Dot - positioned on the vertical line */}
                <div className="z-10 flex-shrink-0 bg-blue-700 dark:bg-blue-400 shadow-lg w-6 h-6 rounded-full absolute left-0 transform -translate-x-1/2 top-0 flex justify-center items-center">
                  {/* This dot visually sits on the vertical line */}
                </div>

                {/* Content Card - always on the right side */}
                <div
                  className={`w-full py-4 px-6 rounded-lg shadow-md
                bg-gray-50 dark:bg-gray-800
                text-left ml-4 sm:ml-6
                border-l-4 border-blue-700 dark:border-blue-400
              `}
                >
                  <p className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-1">
                    {item.date}
                  </p>
                  <h3 className="mb-1 font-bold text-lg text-blue-700 dark:text-blue-400">
                    {item.title}
                  </h3>
                  {item.company && (
                    <p className="mb-2 text-sm text-gray-700 dark:text-gray-300">{item.company}</p>
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
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="projects" aria-labelledby="projects-heading" className="py-16">
          <h2
            id="projects-heading"
            className="md:hidden sticky top-0 text-lg font-bold text-gray-900 dark:text-gray-100 mb-4 backdrop-blur py-2.5 z-20"
          >
            Featured Projects
          </h2>

          <div className="grid grid-cols-1 gap-8 px-4 sm:px-6 lg:px-8">
            {myProjectsData.map((project: ProjectItem) => (
              <div
                key={project.id}
                className="group relative rounded-lg shadow-md overflow-hidden
                       bg-gray-50 dark:bg-gray-800
                       border border-gray-200 dark:border-gray-700
                       hover:shadow-lg transition-all duration-300 ease-in-out
                       flex flex-col h-full" // Use flex-col and h-full for consistent card height
              >
                {project.image && (
                  <div className="relative w-full h-48 md:h-56 lg:h-64 overflow-hidden">
                    <img
                      src={project.image}
                      alt={`Screenshot of ${project.title}`}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      loading="lazy" // Optimize image loading
                    />
                    {/* Optional overlay for better text readability on images */}
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
                        aria-label={`View live demo of ${project.title}`}
                      >
                        <LinkIcon className="h-5 w-5 mr-1" />
                        <span>Live Demo</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <footer className="bg-white dark:bg-gray-900 py-8 text-center text-gray-600 dark:text-gray-400 text-sm border-t border-gray-200 dark:border-gray-800">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="mb-2">&copy; {currentYear} Lee. All rights reserved.</p>
            <p>
              UI inspired by{" "}
              <a
                href="https://brittanychiang.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700 dark:text-blue-400 hover:underline"
              >
                Brittany Chiang
              </a>
              . Built with <span className="font-semibold">React</span> and{" "}
              <span className="font-semibold">Tailwind CSS</span>, deployed with{" "}
              <a
                href="https://vercel.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700 dark:text-blue-400 hover:underline"
              >
                Vercel
              </a>
              .
            </p>
          </div>
        </footer>
      </main>
    </div>
  );
}
