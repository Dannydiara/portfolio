import { Card } from "@/components/Card";
import { SectionHeader } from "@/components/SectionHeader";
import { TechIcon } from "@/components/TechIcon";
import StarIcon from "@/assets/icons/star.svg";
import bookImage from "@/assets/images/book-cover.png";
import Image from "next/image";
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
import smileMemoji from "@/assets/images/memoji-smile.png";
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
  },
  {
    title: "Piano",
    emoji: "🎹",
  },
  {
    title: "Drumming",
    emoji: "🥁",
  },
  {
    title: "Gaming",
    emoji: "🎮",
  },
  {
    title: "Dancing",
    emoji: "🕺🏾",
  },
  {
    title: "Music",
    emoji: "🎵",
  },
  {
    title: "Fitness",
    emoji: "🏋🏾 ",
  },
  {
    title: "Basketball",
    emoji: "🏀",
  },
  {
    title: "Table Tennis",
    emoji: "🏓",
  },
  {
    title: "Swimming",
    emoji: "🏊🏾",
  },
  {
    title: "Billiards",
    emoji: "🎱",
  },
];


export const AboutSection = () => {
  return <div>
    <div className="pb-20">
        <div className="container">
        <SectionHeader 
          eyebrow="About Me" 
          title="A Glimpse Into My Journey"  
          description="Learn more about my background, skills, what inspires me, and my journey."
        />
        <div className="mt-20">
          <Card className="h-[320px]">
            <CardHeader 
              title="My Story" 
              description="Discover the books that have influenced my views and shaped my journey" 
            />
            <div className="w-40 mx-auto mt-8">
              <Image src={bookImage} alt="Book cover" />
            </div>
          </Card>
          <Card>
            <CardHeader 
              title="My Toolbox"
              description="Explore the technologies and tools I use to craft exceptional digital experiences"
            />
            <ToolboxItems items={toolboxItems} />
            <ToolboxItems items={toolboxItems} />
          </Card>
          <Card>
            <CardHeader 
              title="Beyond the Code"
              description="Explore my interests and hobbies beyond the digital realm"
            />
            <div>
              {hobbies.map((hobby) => (
                <div key={hobby.title}>
                  <span>{hobby.title}</span>
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
  </div>;
};
