"use client"

import { Card } from "@/components/Card";
import { CardHeader } from "@/components/CardHeader";
import { SectionHeader } from "@/components/SectionHeader";
import { ToolboxItems } from "@/components/ToolboxItems";
import { motion } from "framer-motion";
import Image from "next/image";
import bookImage from "@/assets/images/book-cover.png";
import memojiImage from "@/assets/images/memoji-computer1.png";
import Bootstrap from "@/assets/icons/bootstrap.svg";
import Chrome from "@/assets/icons/chrome.svg";
import CSS3 from "@/assets/icons/css3.svg";
import Firebase from "@/assets/icons/firebase.svg";
import GitHub from "@/assets/icons/github.svg";
import Gulp from "@/assets/icons/gulp.svg";
import HTML5 from "@/assets/icons/html5.svg";
import JavaScript from "@/assets/icons/square-js.svg";
import mapImage from "@/assets/images/map.png";
import Next from "@/assets/icons/nextjs.svg";
import Prisma from "@/assets/icons/prisma.svg";
import React from "@/assets/icons/react.svg";
import Redux from "@/assets/icons/redux.svg";
import Tailwind from "@/assets/icons/tailwind.svg";
import TypeScript from "@/assets/icons/typescript.svg";
import Vercel from "@/assets/icons/vercel.svg";
import VSCode from "@/assets/icons/vscode.svg";
import { useRef } from "react";

const toolboxItems = [
  {
    title: "React",
    iconType: React,
  },
  {
    title: "Next.js",
    iconType: Next,
  },
  {
    title: "Tailwind CSS",
    iconType: Tailwind,
  },
  {
    title: "TypeScript",
    iconType: TypeScript,
  },
  {
    title: "JavaScript",
    iconType: JavaScript,
  },
  {
    title: "HTML5",
    iconType: HTML5,
  },
  {
    title: "CSS3",
    iconType: CSS3,
  },
  {
    title: "Vercel",
    iconType: Vercel,
  },
  {
    title: "Chrome",
    iconType: Chrome,
  },
  {
    title: "GitHub",
    iconType: GitHub,
  },
  {
    title: "VS Code",
    iconType: VSCode,
  },
  {
    title: "Redux",
    iconType: Redux,
  },
  {
    title: "Bootstrap",
    iconType: Bootstrap,
  },
  {
    title: "Gulp",
    iconType: Gulp,
  },
  {
    title: "Prisma",
    iconType: Prisma,
  },
  {
    title: "Firebase",
    iconType: Firebase,
  },
];

const hobbies = [
  {
    title: "Photography",
    emoji: "📸",
    left: "5%",
    top: "5%",
  },
  {
    title: "Piano",
    emoji: "🎹",
    left: "50%",
    top: "5%",
  },
  {
    title: "Drumming",
    emoji: "🥁",
    left: "10%",
    top: "35%",
  },
  {
    title: "Gaming",
    emoji: "🎮",
    left: "50%",
    top: "33%",
  },
  {
    title: "Dancing",
    emoji: "🕺🏾",
    left: "70%",
    top: "45%",
  },
  {
    title: "Music",
    emoji: "🎵",
    left: "5%",
    top: "65%",
  },
  {
    title: "Fitness",
    emoji: "🏋🏾 ",
    left: "67%",
    top: "70%",
  },
  {
    title: "Basketball",
    emoji: "🏀",
    left: "70%",
    top: "20%",
  },
  {
    title: "Table Tennis",
    emoji: "🏓",
    left: "20%",
    top: "50%",
  },
  {
    title: "Swimming",
    emoji: "🏊🏾",
    left: "20%",
    top: "20%",
  },
  {
    title: "Billiards",
    emoji: "🎱",
    left: "30%",
    top: "70%",
  },
];

export const AboutSection = () => {
  const constraintRef = useRef(null);
  return (
    <div>
      <div className="py-20 lg:py-28">
        <div className="container">
          <SectionHeader
            eyebrow="About Me"
            title="A Glimpse Into My Universe"
            description="Learn more about my background, skills, what inspires me, and my journey"
          />
          <div className="mt-20 flex flex-col gap-8">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
              <Card className="h-[320px] md:col-span-2 lg:col-span-1">
                <CardHeader
                  title="My Reads"
                  description="Discover the books that have influenced my views and shaped my journey"
                />
                <div className="w-40 mx-auto mt-1 md:mt-0">
                  <Image src={bookImage} alt="Book cover" />
                </div>
              </Card>
              <Card className="h-[320px] md:col-span-3 lg:col-span-2">
                <CardHeader
                  title="My Toolbox"
                  description="Explore the technologies and tools I use to craft exceptional digital experiences"
                  className=""
                />
                <ToolboxItems
                  items={toolboxItems}
                  className=""
                  itemsWrapperClassName="animate-marquee-left [animation-duration:30s]"
                />
                <ToolboxItems
                  items={toolboxItems}
                  className="mt-6"
                  itemsWrapperClassName="animate-marquee-right [animation-duration:18s]"
                />
              </Card>
            </div>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
              <Card className="h-[320px] p-0 flex flex-col md:col-span-3 lg:col-span-2">
                <CardHeader
                  title="Beyond the Code"
                  description="Explore my interests and hobbies beyond the digital realm"
                  className="px-6 py-6"
                />
                <div ref={constraintRef} className="relative flex-1">
                  {hobbies.map((hobby) => (
                    <motion.div
                      key={hobby.title}
                      className="inline-flex items-center gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 absolute cursor-grab"
                      style={{
                        left: hobby.left,
                        top: hobby.top,
                      }}
                      drag
                      dragConstraints={constraintRef}
                      
                    >
                      <span className="font-medium text-gray-950">
                        {hobby.title}
                      </span>
                      <span>{hobby.emoji}</span>
                    </motion.div>
                  ))}
                </div>
              </Card>
              <Card className="h-[320px] p-0 relative md:col-span-2 lg:col-span-1">
                <Image
                  src={mapImage}
                  alt="Map"
                  className="h-full object-cover object-left-top"
                />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 after:content-[''] after:absolute after:inset-0 after:outline-2 after:rounded-full after:-outline-gray-950/30">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-20 animate-ping [animation-duration:2s]"></div>
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-10"></div>
                  <Image
                    src={memojiImage}
                    alt="Smiling memoji"
                    className="size-15 absolute top-2 left-2"
                  />
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
