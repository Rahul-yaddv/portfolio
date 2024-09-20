import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import nextBlogImg from "@/public/next-blog.png";
import autoAvenue from "@/public/auto-avenue.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },

  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated College",
    location: "Gurgaon, IN",
    description:
      "I graduated from P.G Sec-9 govt. college in gurgaon from a degree in B.C.A. Where i developed my fundamental programming and software development skills in Computer Science.",
    icon: React.createElement(LuGraduationCap),
    date: "2019-2022",
  },
  {
    title: "Front-End Developer",
    location: "Techvins Software Pvt.",
    description:
      "Here i worked primarily as a front-end developer. Here i get to utilize and polish my front-end development skills in a professional environment.",
    icon: React.createElement(CgWorkAlt),
    date: "2022-2023",
  },
  {
    title: "Frontend developer",
    location: "Metaverse ventures.",
    description:
      "Contributed as a Frontend Developer to the xMail project, a robust bulk email scheduling and management platform. I contributed by working on api integration from various services while also delivering high-quality user interfaces,advanced interactive calendar and complex data visualization.",
    icon: React.createElement(FaReact),
    date: "2023-2024",
  },
] as const;

export const projectsData = [
  {
    title: "Code-flow",
    description:
      "code-flow is a full-stack post creation Platform with features like authentication ,database storage in MongoDB and Goggle firebase",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: nextBlogImg,
    projectUrl: "https://next-blog-fr.vercel.app/",
  },
  {
    title: "Auto-Avenue",
    description:
      "Auto-Avenue is a modern auto-vehicles information gathering platform.Users can customize their preference based on various categories.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind"],
    imageUrl: autoAvenue,
    projectUrl: "https://auto-avenue-livid.vercel.app/",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript/TS",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Redux",
  "Express.js",
  "PostgreSQL",
  "Python",
  "Django",
  "NextJs",
  "REACT-QUERY",
] as const;
