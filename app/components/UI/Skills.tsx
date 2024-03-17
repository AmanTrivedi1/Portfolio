"use client";
import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";

type Skill = {
  id: number;
  src: string;
  alt: string;
};

const Skills = () => {
  const FRONTEND: Skill[] = [
    { id: 1, src: "html-5.png", alt: "HTML" },
    { id: 2, src: "css.png", alt: "CSS" },
    { id: 3, src: "javascript.svg", alt: "Javascript" },
    { id: 4, src: "java.png", alt: "Java" },
    { id: 5, src: "typescript.png", alt: "Typescript" },
    { id: 6, src: "bootstrap.svg", alt: "Bootstrap" },
    { id: 7, src: "react.png", alt: "React" },
    { id: 8, src: "redux.svg", alt: "Redux" },
    { id: 9, src: "next.png", alt: "Next" },
    { id: 10, src: "tailwind.png", alt: "Tailwind" },
    { id: 11, src: "git.svg", alt: "Git" },
    { id: 12, src: "github.svg", alt: "Github" },
    { id: 13, src: "shadcn.png", alt: "Shadcn" },
    { id: 13, src: "nextui.png", alt: "NextUi" },

  ];

  const BACKEND: Skill[] = [
    { id: 1, src: "node-js.png", alt: "HTML" },
    { id: 2, src: "express.svg", alt: "CSS" },
    { id: 3, src: "mongodb.svg", alt: "Javascript" },
    { id: 4, src: "postgres.png", alt: "Java" },
    { id: 5, src: "kafka.png", alt: "Kafka" },
    { id: 6, src: "Docker.svg", alt: "Redux" },
    { id: 7, src: "aws.png", alt: "Tailwind" },
    { id: 8, src: "graphql.svg", alt: "Git" },
  ];

  return (
    <div>
      <main className="flex flex-col justify-center w-full m-auto mt-14 max-w-13xl">
        <div>
          <h1 className="p-4 text-xl font-semibold text-primaryOrange sm:text-2xl md:text-3xl sm:pb-10 text-center">
            Skills
          </h1>
        </div>
        <main className="flex flex-row flex-wrap w-11/12 sm:w-9/12 gap-4 m-auto">
          <Marquee
            autoFill
            pauseOnHover
            gradient
            gradientColor="#0e100f"
            speed={30}
          >
            {FRONTEND.map((img) => (
              <div
                key={img.id}
                className="bg-primaryBorder m-1 rounded-xl p-4 cursor-pointer"
              >
                <Image
                  src={"/" + img.src}
                  alt={img.alt}
                  width={50}
                  height={50}
                />
              </div>
            ))}
          </Marquee>
          <Marquee
            autoFill
            pauseOnHover
            direction="right"
            speed={30}
            gradient
            gradientColor="#0e100f"
          >
            {BACKEND.map((img) => (
              <div
                key={img.id}
                className="bg-primaryBorder m-1 rounded-xl p-4 cursor-pointer"
              >
                <Image
                  src={"/" + img.src}
                  alt={img.alt}
                  width={50}
                  height={50}
                />
              </div>
            ))}
          </Marquee>
        </main>
      </main>
    </div>
  );
};

export default Skills;
