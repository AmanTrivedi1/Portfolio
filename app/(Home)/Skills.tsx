import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";

type Skill = {
  src: string;
  alt: string;
};

const Skills = () => {
  const FRONTEND: Skill[] = [
    { src: "html-5.png", alt: "HTML" },
    { src: "css.png", alt: "CSS" },
    { src: "javascript.svg", alt: "Javascript" },
    { src: "java.png", alt: "Java" },
    { src: "typescript.png", alt: "Typescript" },
    { src: "bootstrap.svg", alt: "Bootstrap" },
    { src: "react.png", alt: "React" },
    { src: "redux.svg", alt: "Redux" },
    { src: "next.png", alt: "Next" },
    { src: "tailwind.png", alt: "Tailwind" },
    { src: "git.svg", alt: "Git" },
    { src: "github.svg", alt: "Github" },
  ];

  const BACKEND: Skill[] = [
    { src: "node-js.png", alt: "HTML" },
    { src: "express.svg", alt: "CSS" },
    { src: "mongodb.svg", alt: "Javascript" },
    { src: "postgres.png", alt: "Java" },
    { src: "linux.png", alt: "Typescript" },
    { src: "jenkins.png", alt: "Bootstrap" },
    { src: "nginx.svg", alt: "React" },
    { src: "Docker.svg", alt: "Redux" },
    { src: "aws.png", alt: "Tailwind" },
    { src: "graphql.svg", alt: "Git" },
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
              <div className="bg-primaryBorder m-1 rounded-xl p-4 cursor-pointer">
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
              <div className="bg-primaryBorder m-1 rounded-xl p-4 cursor-pointer">
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
