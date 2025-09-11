import { StaticImageData } from "next/image";

import aliphoneScreenshoot from "@/assets/images/aliphone.png";
import threadsScreenshoot from "@/assets/images/threads.png";
import carhubScreenshoot from "@/assets/images/carhub.png";
import promptopiaScreenshoot from "@/assets/images/promptopia.png";
import sushimanScreenshoot from "@/assets/images/sushiman.png";
import hilinkScreenshoot from "@/assets/images/hilink.png";
import nikeScreenshoot from "@/assets/images/nike.png";
import feastfind from "@/assets/images/feastfind.png";
import terra from "@/assets/images/terra-discover-api.png";
import mojito from "@/assets/images/mojito.png";
import zentry from "@/assets/images/zentry.png";
import framer from "@/assets/images/framer.png";

export interface SectionLink {
  id: string;
  label: string;
}

export const sections: SectionLink[] = [
  { id: "about", label: "About" },
  { id: "timeline", label: "Experience" },
  { id: "projects", label: "Projects" },
];

export interface TimelineItem {
  id: string;
  date: string;
  title: string;
  company: string;
  description: string;
  techStack?: string[];
}

export const myTimelineData: TimelineItem[] = [
  {
    id: "hashfield",
    date: "Jan 2021 - Present",
    title: "Software Engineer",
    company: "HashField (PT.Harvestindo Global Persada)",
    description:
      "Leading development of inadmin.io, an innovative SAAS platform for web app building. Responsibilities include creating flexible drag-and-drop form builders with comprehensive analytics, implementing multi-level approval workflows, ensuring robust data management, and automating financial planning tools.",
    techStack: [
      "PHP",
      "Laminas",
      "Slim FrameWork",
      "React",
      "React Boostrap",
      "React Native",
      "NativeBase",
      "MySQL",
      "Postgresql",
      "Docker",
    ],
  },
  {
    id: "stiesia",
    date: "Dec 2018 - Oct 2020",
    title: "Programmer",
    company: "Sekolah Tinggi Ilmu Ekonomi Indonesia (STIESIA)",
    description:
      "Developed and optimized catalog, library, and inventory management systems to improve data accuracy and operational efficiency. Contributed to streamlining internal processes through custom software solutions.",
    techStack: [
      "PHP",
      "CodeIgniter",
      "Laravel",
      "JavaScript",
      "jQuery",
      "Wordpress",
      "MySQL",
      "SQL Server",
    ],
  },
];

export interface ProjectItem {
  id: string;
  title: string;
  description: string;
  category: string;
  image?: StaticImageData | string; // Optional: URL to a project screenshot or logo
  techStack: string[];
  githubLink?: string; // Optional: Link to GitHub repo
  liveLink?: string; // Optional: Link to live demo
}

export const myProjectsData: ProjectItem[] = [
  {
    id: "feastfind",
    title: "feastfind.com",
    description:
      "FeastFind is a food discovery platform that helps users find local restaurants, browse menus, view ratings, and navigate to places with ease.",
    image: feastfind,
    category: "Full Stack",
    techStack: [
      "TypeScript",
      "Tailwind CSS",
      "Shadcn UI",
      "Remix (React Router)",
      "MapBox",
      "Bun",
      "zod",
      "Uploadcare",
      "Vercel",
    ],
    liveLink: "https://feastfind.com",
    githubLink: "https://github.com/feastfind",
  },
  {
    id: "aliphone",
    title: "Aliphone B2B phone ecommerce",
    description:
      "Full-stack wholesale phone trading platform (B2B). Browse phone models, find suppliers, and streamline your procurement process.",
    image: aliphoneScreenshoot,
    category: "Full Stack",
    techStack: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Shadcn UI",
      "React Table",
      "React Hook Form",
      "React Router Framework",
      "Bun",
      "Vercel",
    ],
    liveLink: "https://shop.obbylee.com/",
    githubLink: "https://github.com/obbylee/phone-ecommerce",
  },
  {
    id: "mojito",
    title: "Mojito",
    description:
      "Sip the spirit of summer. Explore our menu of crafted cocktails, a blend of premium ingredients, creative flair, and timeless recipes designed to delight your senses.",
    image: mojito,
    category: "Frontend",
    techStack: ["Nextjs", "React", "Tailwind CSS", "GSAP"],
    githubLink: "https://github.com/obbylee/mojito-uiux",
    liveLink: "https://mojito-uiux.vercel.app/",
  },
  {
    id: "zentry",
    title: "Zentry",
    description:
      "A visually dynamic web experience built with Next.js, Tailwind CSS, and GSAP.",
    image: zentry,
    category: "Frontend",
    techStack: ["Nextjs", "React", "Tailwind CSS", "GSAP"],
    githubLink: "https://github.com/obbylee/zentry-uiux",
    liveLink: "https://zentry-navy-pi.vercel.app/",
  },
  {
    id: "Sushiman",
    title: "Sushiman",
    description:
      "A beautifully crafted single-page website for Sushiman, a sushi restaurant brand. Designed to highlight the menu, chef, and authentic dining experience.",
    image: sushimanScreenshoot,
    category: "Frontend",
    techStack: ["Nextjs", "React", "Tailwind CSS", "Framer Motion"],
    githubLink: "https://github.com/obbylee/sushiman-uiux",
    liveLink: "https://sushiman-uiux.vercel.app/",
  },
  {
    id: "framer",
    title: "Framer SaaS",
    description:
      "A visually dynamic web experience built with Next.js, Tailwind CSS, and Framer Motion",
    image: framer,
    category: "Frontend",
    techStack: ["Nextjs", "React", "Tailwind CSS", "Framer Motion"],
    githubLink: "https://github.com/obbylee/framer-web",
    liveLink: "https://framer-web-psi.vercel.app/",
  },
  {
    id: "promtopia",
    title: "Promptopia",
    description:
      "Promptopia is an open-source platform designed for the AI community to effortlessly discover, create, and share innovative AI prompts.",
    image: promptopiaScreenshoot,
    category: "Full Stack",
    techStack: [
      "NextJS",
      "React",
      "Tailwind CSS",
      "Next Auth",
      "Mongoose",
      "MongoDB",
      "Vercel",
    ],
    githubLink: "https://github.com/obbylee/portofolio/tree/main/promptopia",
    liveLink: "https://promptopia-nine-tau.vercel.app/",
  },
  {
    id: "threads-clone",
    title: "Threads Clone",
    description:
      "A full-stack clone of Meta’s Threads — a modern, minimalist social media app for text-based conversations.",
    category: "Full Stack",
    techStack: [
      "NextJS",
      "Typescript",
      "React",
      "Shadcn UI",
      "Zod",
      "Clerk",
      "UploadThing",
      "Mongoose",
      "MongoDB",
    ],
    image: threadsScreenshoot,
    githubLink: "https://github.com/obbylee/portofolio/tree/main/threads",
    liveLink: "https://portofolio-seven-gamma.vercel.app/",
  },
  {
    id: "terra",
    title: "Terra discover api",
    description:
      "A fast, lightweight backend API built with Hono and TypeScript. Designed to power discovery features for location-based or content-based applications with a modern and scalable architecture.",
    image: terra,
    category: "Backend",
    techStack: [
      "Typescript",
      "Zod",
      "Prisma ORM",
      "Postgresql",
      "OpenApi",
      "Scalar",
      "Hono",
      "Bun",
      "Docker",
    ],
    githubLink: "https://github.com/obbylee/terra-discover-api",
  },
  {
    id: "carhub",
    title: "Carhub",
    description:
      "A modern and responsive web application that lets users search, browse, and explore cars for sale or rent.",
    image: carhubScreenshoot,
    category: "Frontend",
    techStack: ["NextJS", "React", "Tailwind CSS", "Typescript", "API"],
    githubLink: "https://github.com/obbylee/portofolio/tree/main/carhub",
  },
  {
    id: "nike",
    title: "Nike",
    description:
      "A sleek and modern single-page website for a fictional shoe brand, Nikke. Designed for showcasing stylish footwear with a strong brand identity and smooth user experience.",
    image: nikeScreenshoot,
    category: "Frontend",
    techStack: ["Vite", "React", "Tailwind CSS", "Typescript", "Netlify"],
    githubLink: "https://github.com/obbylee/portofolio/tree/main/nike",
    liveLink: "https://willowy-shortbread-572a5c.netlify.app/",
  },
  {
    id: "Hilink",
    title: "Hilink",
    description:
      "A nature-inspired, single-page website for Hilink, a fictional hiking and camping experience brand. Perfect for showcasing outdoor adventures and encouraging bookings.",
    image: hilinkScreenshoot,
    category: "Frontend",
    techStack: ["NextJs", "React", "Tailwind CSS", "Typescript", "Netlify"],
    githubLink: "https://github.com/obbylee/portofolio/tree/main/traveluiux",
    liveLink: "https://luminous-gelato-91c420.netlify.app/",
  },
  {
    id: "aliphone-api",
    title: "Aliphone Backend API",
    description:
      "A robust RESTful API for an e-commerce phone platform, handling product management, user authentication, and cart. Designed for scalability and extensibility.",
    category: "Backend",
    techStack: [
      "Hono",
      "Bun",
      "Better Auth",
      "Typescript",
      "tRPC",
      "Zod",
      "Prisma ORM",
      "Postgresql",
      "Docker",
    ],
    githubLink: "https://github.com/obbylee/phone-ecommerce",
  },
  {
    id: "feastfindapi",
    title: "api.feastfind.com",
    description:
      "Core API for FeastFind, a food discovery platform. This API enables comprehensive restaurant search, menu browsing, ratings retrieval, and location-based data services. It's built for performance and reliability, serving as the essential interface for all FeastFind application features.",
    category: "Backend",
    techStack: [
      "TypeScript",
      "OpenApi Typescript",
      "Scalar",
      "Prisma ORM",
      "Postgresql",
      "Neon",
      "Uploadcare",
      "Render.com",
    ],
    liveLink: "https://api.feastfind.com/",
    githubLink: "https://github.com/feastfind/feastfind-api",
  },
  {
    id: "E-commerce Platform for Local Artisans",
    title: "E-commerce Platform for Local Artisans",
    description:
      "A comprehensive full-stack e-commerce solution enabling local artisans to sell their unique crafts online with secure payments.",
    category: "Full Stack",
    techStack: ["React", "Node.js", "Express", "PostgreSQL", "Stripe API"],
    liveLink: "#",
    githubLink: "#",
  },
  {
    id: "Real-time Collaborative Whiteboard",
    title: "Real-time Collaborative Whiteboard",
    description:
      "A web-based whiteboard application supporting real-time multi-user collaboration with drawing and text tools.",
    category: "Frontend",
    techStack: ["React", "Socket.IO", "Canvas API", "TypeScript"],

    liveLink: "#",
    githubLink: "#",
  },
  {
    id: "AI-Powered Content Generation API",
    title: "AI-Powered Content Generation API",
    description:
      "A robust backend API that leverages machine learning models to generate various types of textual content on demand.",
    category: "Backend",
    techStack: ["Python", "Django REST Framework", "TensorFlow", "Docker"],

    liveLink: "#",
    githubLink: "#",
  },
  {
    id: "Personal Finance Tracker Mobile App",
    title: "Personal Finance Tracker Mobile App",
    description:
      "An intuitive mobile application for tracking expenses, setting budgets, and visualizing financial trends.",
    category: "Mobile",
    techStack: ["React Native", "Firebase Firestore", "Redux Toolkit"],

    liveLink: "#",
    githubLink: "#",
  },
  {
    id: "Interactive Data Visualization Dashboard",
    title: "Interactive Data Visualization Dashboard",
    description:
      "A dynamic dashboard displaying complex datasets with interactive charts and filtering capabilities for insights.",
    category: "Frontend",
    techStack: ["Vue.js", "D3.js", "Chart.js", "GraphQL"],

    liveLink: "#",
    githubLink: "#",
  },
  {
    id: "Recipe & Meal Planner Web App",
    title: "Recipe & Meal Planner Web App",
    description:
      "A full-stack application allowing users to discover recipes, create personalized meal plans, and manage grocery lists.",
    category: "Full Stack",
    techStack: ["Next.js", "tRPC", "Prisma", "PostgreSQL"],

    liveLink: "#",
    githubLink: "#",
  },
  {
    id: "Custom CRM System for Small Businesses",
    title: "Custom CRM System for Small Businesses",
    description:
      "A tailored Customer Relationship Management system designed to streamline client interactions and sales processes.",
    category: "Full Stack",
    techStack: ["Laravel", "Vue.js", "MySQL"],

    liveLink: "#",
    githubLink: "#",
  },
  {
    id: "Online Learning Platform Landing Page",
    title: "Online Learning Platform Landing Page",
    description:
      "A modern, responsive landing page for an online learning platform, focusing on lead generation and course showcases.",
    category: "Frontend",
    techStack: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],

    liveLink: "#",
    githubLink: "#",
  },
  {
    id: "Serverless Image Processing Service",
    title: "Serverless Image Processing Service",
    description:
      "A scalable serverless application for on-demand image resizing and optimization using cloud functions.",
    category: "Backend",
    techStack: ["AWS Lambda", "Node.js", "S3", "API Gateway"],

    liveLink: "#",
    githubLink: "#",
  },
];

export const allProjects = [
  {
    id: 1,
    title: "E-commerce Platform for Local Artisans",
    description:
      "A comprehensive full-stack e-commerce solution enabling local artisans to sell their unique crafts online with secure payments.",
    category: "Full Stack",
    techStack: ["React", "Node.js", "Express", "PostgreSQL", "Stripe API"],
    liveLink: "#",
    githubLink: "#",
  },
  {
    id: 2,
    title: "Real-time Collaborative Whiteboard",
    description:
      "A web-based whiteboard application supporting real-time multi-user collaboration with drawing and text tools.",
    category: "Frontend",
    techStack: ["React", "Socket.IO", "Canvas API", "TypeScript"],

    liveLink: "#",
    githubLink: "#",
  },
  {
    id: 3,
    title: "AI-Powered Content Generation API",
    description:
      "A robust backend API that leverages machine learning models to generate various types of textual content on demand.",
    category: "Backend",
    techStack: ["Python", "Django REST Framework", "TensorFlow", "Docker"],

    liveLink: "#",
    githubLink: "#",
  },
  {
    id: 4,
    title: "Personal Finance Tracker Mobile App",
    description:
      "An intuitive mobile application for tracking expenses, setting budgets, and visualizing financial trends.",
    category: "Mobile",
    techStack: ["React Native", "Firebase Firestore", "Redux Toolkit"],

    liveLink: "#",
    githubLink: "#",
  },
  {
    id: 5,
    title: "Blockchain-based Voting System (POC)",
    description:
      "A proof-of-concept secure voting system demonstrating blockchain principles for immutable record-keeping.",
    category: "Full Stack",
    techStack: ["Solidity", "Web3.js", "Node.js", "React"],

    liveLink: "#",
    githubLink: "#",
  },
  {
    id: 6,
    title: "DevOps Automation Script Suite",
    description:
      "A collection of Bash and Python scripts to automate common deployment, testing, and monitoring workflows.",
    category: "Backend",
    techStack: ["Bash", "Python", "Ansible", "Jenkins"],

    liveLink: "#",
    githubLink: "#",
  },
  {
    id: 7,
    title: "Interactive Data Visualization Dashboard",
    description:
      "A dynamic dashboard displaying complex datasets with interactive charts and filtering capabilities for insights.",
    category: "Frontend",
    techStack: ["Vue.js", "D3.js", "Chart.js", "GraphQL"],

    liveLink: "#",
    githubLink: "#",
  },
  {
    id: 8,
    title: "Recipe & Meal Planner Web App",
    description:
      "A full-stack application allowing users to discover recipes, create personalized meal plans, and manage grocery lists.",
    category: "Full Stack",
    techStack: ["Next.js", "tRPC", "Prisma", "PostgreSQL"],

    liveLink: "#",
    githubLink: "#",
  },
  {
    id: 9,
    title: "Smart Home IoT Integration Hub",
    description:
      "Developed an API to integrate various smart home devices and provide a unified control interface for automation.",
    category: "Backend",
    techStack: ["Node.js", "MQTT", "Raspberry Pi", "Python"],

    liveLink: "#",
    githubLink: "#",
  },
  {
    id: 10,
    title: "Custom CRM System for Small Businesses",
    description:
      "A tailored Customer Relationship Management system designed to streamline client interactions and sales processes.",
    category: "Full Stack",
    techStack: ["Laravel", "Vue.js", "MySQL"],

    liveLink: "#",
    githubLink: "#",
  },
  {
    id: 11,
    title: "Online Learning Platform Landing Page",
    description:
      "A modern, responsive landing page for an online learning platform, focusing on lead generation and course showcases.",
    category: "Frontend",
    techStack: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],

    liveLink: "#",
    githubLink: "#",
  },
  {
    id: 12,
    title: "Serverless Image Processing Service",
    description:
      "A scalable serverless application for on-demand image resizing and optimization using cloud functions.",
    category: "Backend",
    techStack: ["AWS Lambda", "Node.js", "S3", "API Gateway"],

    liveLink: "#",
    githubLink: "#",
  },
];
