"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        Frontend Developer skilled in JavaScript, React, and Next.js. Experienced in creating
        dynamic and responsive web applications with a strong focus on user experience and
        performance optimization. Proficient in modern frontend technologies and best practices,
        including state management and styling. Adept at working in agile environments,
        collaborating with cross-functional teams, and delivering high-quality code.
      </p>
    </motion.section>
  );
}
