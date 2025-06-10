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
      "React",
      "React Boostrap",
      "React Native",
      "NativeBase",
      "MySQL",
      "POSTGRESQL",
      "Docker",
    ], // Example tech stack
  },
  {
    id: "stiesia",
    date: "Dec 2018 - Oct 2020",
    title: "Programmer",
    company: "Sekolah Tinggi Ilmu Ekonomi Indonesia (STIESIA)",
    description:
      "Developed and optimized catalog, library, and inventory management systems to improve data accuracy and operational efficiency. Contributed to streamlining internal processes through custom software solutions.",
    techStack: ["PHP", "CodeIgniter", "Laravel", "Wordpress", "MySQL", "JavaScript", "jQuery"], // Example tech stack
  },
];
