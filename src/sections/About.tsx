import { Card } from "@/components/Card";
import { SectionHeader } from "@/components/SectionHeader";
import { TechIcon } from "@/components/TechIcon";
import Image from "next/image";
import bookImage from "@/assets/images/book-cover.png";
import smileMemoji from "@/assets/images/memoji-smile.png";
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
import StarIcon from "@/assets/icons/star.svg";
import Tailwind from "@/assets/icons/tailwind.svg";
import TypeScript from "@/assets/icons/typescript.svg";
import Vercel from "@/assets/icons/vercel.svg";
import VSCode from "@/assets/icons/vscode.svg";
import { CardHeader } from "@/components/CardHeader";
import { ToolboxItems } from "@/components/ToolboxItems";

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
  return (
    <div>
      <div className="pb-20">
        <div className="container">
          <SectionHeader
            eyebrow="About Me"
            title="A Glimpse Into My Journey"
            description="Learn more about my background, skills, what inspires me, and my journey."
          />
          <div className="mt-20 flex flex-col gap-8">
            <Card className="h-[320px]">
              <CardHeader
                title="My Story"
                description="Discover the books that have influenced my views and shaped my journey"
              />
              <div className="w-40 mx-auto mt-8">
                <Image src={bookImage} alt="Book cover" />
              </div>
            </Card>
            <Card className="h-[320px] p-0">
              <CardHeader
                title="My Toolbox"
                description="Explore the technologies and tools I use to craft exceptional digital experiences"
                className="px-6 pt-6"
              />
              <ToolboxItems items={toolboxItems} className="mt-6" />
              <ToolboxItems
                items={toolboxItems}
                className="mt-6"
                itemsWrapperClassName="-translate-x-1/2"
              />
            </Card>
            <Card className="h-[320px] p-0 flex flex-col">
              <CardHeader
                title="Beyond the Code"
                description="Explore my interests and hobbies beyond the digital realm"
                className="px-6 py-6"
              />
              <div className="relative flex-1">
                {hobbies.map((hobby) => (
                  <div
                    key={hobby.title}
                    className="inline-flex items-center gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 absolute"
                    style={{
                      left: hobby.left,
                      top: hobby.top,
                    }}
                  >
                    <span className="font-medium text-gray-950">
                      {hobby.title}
                    </span>
                    <span>{hobby.emoji}</span>
                  </div>
                ))}
              </div>
            </Card>
            <Card>
              <Image src={mapImage} alt="Map" />
              <Image src={smileMemoji} alt="Smiling memoji" />
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
