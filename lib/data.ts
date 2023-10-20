import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import nextBlogImg from "@/public/next-blog.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

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
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
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
      "I graduated from P.G Sec-9 govt. college in gurgaon from a degree in B.C.A. Where i developed my fundamental programming and software developlement skills in Computer Science.",
    icon: React.createElement(LuGraduationCap),
    date: "2019-2022",
  },
  {
    title: "Front-End Developer Internship",
    location: "Techvins Software Pvt.",
    description:
      "I completed my six months internship from Techvins software. Where i worked primarily as a front-end developer Intern. Here i get to utilize and polish my front-end developlement skills in a professional environment. ",
    icon: React.createElement(CgWorkAlt),
    date: "2022-2023",
  },
  {
    title: "TBD",
    location: "Gurgaon",
    description: "",
    icon: React.createElement(FaReact),
    date: "2022-2023",
  },
] as const;

export const projectsData = [
  {
    title: "Next-Blog",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: nextBlogImg,
  },
  {
    title: "rmtDev",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
] as const;
