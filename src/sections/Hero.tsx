import memojiImage from "@/assets/images/memoji-computer1.png";
import ArrowDown from "@/assets/icons/arrow-down.svg";
import { HeroOrbit } from "@/components/HeroOrbit";
import Image from "next/image";
import grainImage from "@/assets/images/grain.jpg";
import StarIcon from "@/assets/icons/star.svg";
import SparkleIcon from "@/assets/icons/sparkle.svg";

export const HeroSection = () => {
  return (
    <div className="py-32 md:py-48 lg:py-56 relative z-0 overflow-x-clip">
      <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)]">
        <div
          className="absolute inset-0 opacity-5 -z-10"
          style={{ backgroundImage: `url(${grainImage.src})` }}
        />
        <div className="size-[630px] md:size-[700px] hero-ring"></div>
        <div className="size-[750px] hero-ring md:hidden"></div>
        <div className="size-[900px] hero-ring"></div>
        <div className="size-[1100px] hero-ring"></div>
        <div className="size-[1300px] hero-ring"></div>
        <div className="size-[1500px] hero-ring"></div>
        <div className="size-[1700px] hero-ring"></div>

        {/* Rotating Stars */}
        <HeroOrbit
          size={450}
          rotation={-14}
          shouldOrbit
          orbitDuration="40s"
          shouldSpin
          spinDuration="4s"
        >
          <SparkleIcon className="size-8 text-emerald-300/20 animate-spin [animation-duration:48s]" />
        </HeroOrbit>
        <HeroOrbit
          size={460}
          rotation={79}
          shouldOrbit
          orbitDuration="42s"
          shouldSpin
          spinDuration="4s"
        >
          <SparkleIcon className="size-5 text-emerald-300/20 animate-spin [animation-duration:20s]" />
        </HeroOrbit>
        <HeroOrbit size={540} rotation={-41} shouldOrbit orbitDuration="44s">
          <div className="size-2 rounded-full bg-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit
          size={550}
          rotation={178}
          shouldOrbit
          orbitDuration="46s"
          shouldSpin
          spinDuration="4s"
        >
          <SparkleIcon className="size-10 text-emerald-300/20 animate-spin [animation-duration:50s]" />
        </HeroOrbit>
        <HeroOrbit
          size={590}
          rotation={20}
          shouldOrbit
          orbitDuration="48s"
          shouldSpin
          spinDuration="8s"
        >
          <StarIcon className="size-12 text-emerald-300 animate-spin [animation-duration:52s]" />
        </HeroOrbit>
        <HeroOrbit
          size={610}
          rotation={98}
          shouldOrbit
          orbitDuration="50s"
          shouldSpin
          spinDuration="8s"
        >
          <StarIcon className="size-8 text-emerald-300 animate-spin [animation-duration:48s]" />
        </HeroOrbit>
        <HeroOrbit size={670} rotation={-5} shouldOrbit orbitDuration="52s">
          <div className="size-2 rounded-full bg-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit
          size={730}
          rotation={144}
          shouldOrbit
          orbitDuration="54s"
          shouldSpin
          spinDuration="4s"
        >
          <SparkleIcon className="size-14 text-emerald-300/20 animate-spin [animation-duration:54s]" />
        </HeroOrbit>
        <HeroOrbit size={740} rotation={85} shouldOrbit orbitDuration="56s">
          <div className="size-3 rounded-full bg-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit
          size={820}
          rotation={-72}
          shouldOrbit
          orbitDuration="58s"
          shouldSpin
          spinDuration="8s"
        >
          <StarIcon className="size-28 text-emerald-300 animate-spin [animation-duration:68s]" />
        </HeroOrbit>
      </div>

      <div className="container flex flex-col items-center gap-8">
        {/* Badge Section */}
        <div className="flex flex-col items-center">
          <Image
            src={memojiImage}
            className="size-[120px] md:size-[140px]"
            alt="Person sitting behind laptop"
          />
          <div className="inline-flex items-center gap-4 rounded-lg border border-gray-800 px-4 py-1.5 bg-gray-950">
            <div className="relative size-2.5">
              {/* Ping element container */}
              <div className="absolute inset-0 animate-ping-large">
                <div className="w-full h-full bg-green-500 rounded-full" />
              </div>
              {/* Static dot */}
              <div className="bg-green-500 size-2.5 rounded-full" />
            </div>
            <span className="text-sm font-medium">
              Open to new opportunities
            </span>
          </div>
        </div>

        {/* Heading Section */}
        <div className="max-w-2xl mx-auto space-y-6">
          <h1 className="font-serif text-3xl text-center md:text-5xl tracking-tight">
            Building Exceptional
            <br />
            User Experiences
          </h1>
          <p className="text-center text-white/60 md:text-md mt-4">
            Passionate front-end developer skilled in creating intuitive,
            visually stunning interfaces. Detail-oriented and
            problem-solving-driven, I turn ideas into seamless digital
            experiences.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-col md:flex-row justify-center gap-4 mt-4">
          <button className="flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl hover:bg-white/5 transition-colors">
            <span className="font-semibold text-sm">Explore My Creation</span>
            <ArrowDown className="size-4" />
          </button>
          <button className="flex items-center gap-2 border border-white bg-white text-gray-900 px-6 h-12 rounded-xl hover:bg-gray-100 transition-colors">
            <span>👋🏾</span>
            <span className="font-semibold text-sm">Get in Touch</span>
          </button>
        </div>
      </div>
    </div>
  );
};
