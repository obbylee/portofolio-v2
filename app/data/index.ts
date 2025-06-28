import aliphoneScreenshoot from "~/assets/images/aliphone.png";
import threadsScreenshoot from "~/assets/images/threads.png";
import carhubScreenshoot from "~/assets/images/carhub.png";
import promptopiaScreenshoot from "~/assets/images/promptopia.png";
import sushimanScreenshoot from "~/assets/images/sushiman.png";
import hilinkScreenshoot from "~/assets/images/hilink.png";
import nikeScreenshoot from "~/assets/images/nike.png";
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
  company?: string;
  description: string;
  techStack?: string[];
}

export const myTimelineData: TimelineItem[] = [
  {
    id: "hashfield",
    date: "Jan 2021 - Present",
    title: "Software Engineer",
    company: "HashField",
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
  image?: string; // Optional: URL to a project screenshot or logo
  techStack: string[];
  githubLink?: string; // Optional: Link to GitHub repo
  liveLink?: string; // Optional: Link to live demo
}

export const myProjectsData: ProjectItem[] = [
  {
    id: "aliphone",
    title: "Aliphone B2B phone ecommerce",
    description:
      "Full-stack wholesale phone trading platform (B2B). Browse phone models, find suppliers, and streamline your procurement process.",
    image: aliphoneScreenshoot,
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
    id: "aliphone-api",
    title: "Aliphone Backend API",
    description:
      "A robust RESTful API for an e-commerce phone platform, handling product management, user authentication, and cart. Designed for scalability and extensibility.",
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
    id: "threads-clone",
    title: "Threads Clone",
    description:
      "A full-stack clone of Meta’s Threads — a modern, minimalist social media app for text-based conversations.",
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
    id: "promtopia",
    title: "Promptopia",
    description:
      "Promptopia is an open-source platform designed for the AI community to effortlessly discover, create, and share innovative AI prompts.",
    image: promptopiaScreenshoot,
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
    id: "mflix",
    title: "Mflix Movies Api",
    description:
      "A free and open-source RESTful API that provides detailed information about movies.",
    techStack: [
      "Typescript",
      "Zod",
      "Prisma ORM",
      "Postgresql",
      "Hono",
      "Bun",
      "Docker",
    ],
    githubLink: "https://github.com/obbylee/mflix",
  },
  {
    id: "portfolio-v1",
    title: "Portfolio Website (This one!)",
    description:
      "My personal portfolio website, showcasing my skills, experience, and projects. Designed with a clean, professional aesthetic and built for optimal performance and user experience.",
    techStack: [
      "React",
      "Tailwind CSS",
      "Vite/React Router",
      "TypeScript",
      "Vercel",
    ],
    githubLink: "https://github.com/your-username/your-portfolio-repo",
    liveLink: "https://your-portfolio-url.vercel.app/",
  },

  {
    id: "carhub",
    title: "Carhub",
    description:
      "A modern and responsive web application that lets users search, browse, and explore cars for sale or rent.",
    image: carhubScreenshoot,
    techStack: ["NextJS", "React", "Tailwind CSS", "Typescript", "API"],
    githubLink: "https://github.com/obbylee/portofolio/tree/main/carhub",
  },
  {
    id: "nike",
    title: "Nike",
    description:
      "A sleek and modern single-page website for a fictional shoe brand, Nikke. Designed for showcasing stylish footwear with a strong brand identity and smooth user experience.",
    image: nikeScreenshoot,
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
    techStack: ["NextJs", "React", "Tailwind CSS", "Typescript", "Netlify"],
    githubLink: "https://github.com/obbylee/portofolio/tree/main/traveluiux",
    liveLink: "https://luminous-gelato-91c420.netlify.app/",
  },
  {
    id: "Sushiman",
    title: "Sushiman",
    description:
      "A beautifully crafted single-page website for Sushiman, a sushi restaurant brand. Designed to highlight the menu, chef, and authentic dining experience.",
    image: sushimanScreenshoot,
    techStack: ["Vite", "React", "Tailwind CSS"],
    githubLink: "https://github.com/obbylee/portofolio/tree/main/sushiman",
    liveLink: "https://fancy-tartufo-5d408b.netlify.app/",
  },
];
