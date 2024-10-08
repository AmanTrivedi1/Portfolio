"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Experience = {
  id: number;
  name: string;
  image: string;
  position: string;
  link: string;
  color: string;
};

const Experience = () => {
  const EXPERIENCE: Experience[] = [
    {
      id: 1,
      name: "VacationSaga",
      image: "vactionsaga.webp",
      position: "Full Time(SDE)",
      link: "https://www.vacationsaga.com/",
      color: "primaryDarkOrange",
    },
    {
      id: 2,
      name: "Stairs",
      image: "stairs.svg",
      position: "SDE-Intern",
      link: "https://www.thestairs.in/",
      color: "primaryCyan",
    },
    {
      id: 3,
      name: "EcentricIndia",
      image: "ecentric.svg",
      position: "Freelancing",
      link: "https://github.com/AmanTrivedi1/EcentricIndia",
      color: "primaryPurple",
    },
  
   
  
  ];

  return (
    <div className="mb-10">
      <main className="flex flex-col justify-center w-full m-auto mt-14 max-w-13xl">
        <div>
          <h1 className="p-4 text-xl font-semibold text-primaryDarkOrange sm:text-2xl md:text-3xl sm:pb-10 text-center">
            Experience
          </h1>
        </div>
        <div className="flex flex-wrap justify-center w-11/12 sm:w-9/12 m-auto items-end py-6 sm:py-4">
          <h1 className="text-xl font-semibold text-primaryCream text-center sm:text-3xl">
            I worked with some of the most{" "}
            <span className="text-primaryOrange">innovative </span>
            industry leaders
            <br />
            to help build their{" "}
            <span className="text-primaryCyan">top-notch products </span>
          </h1>
        </div>
        <main className="flex flex-row flex-wrap w-11/12 sm:w-9/12 m-auto justify-between items-end">
          {EXPERIENCE.map((exp) => (
            <div key={exp.id}>
              <div>
                <Link
                  href={exp.link}
                  target="_blank"
                  className=" text-primaryBlack   p-2  rounded-full"
                >
                  <Image
                    src={"/" + exp.image}
                    alt={exp.name}
                    width={100}
                    height={100}
                    className="h-full rounded-lg  p-1 bg-primaryBorder "
                  />
                </Link>
              </div>
              <h1 className={"text-xl font-semibold text-" + exp.color}>
                {exp.name}
              </h1>
              <p className="text-sm text-primaryCream">{exp.position}</p>
            </div>
          ))}
        </main>
      </main>
    </div>
  );
};

export default Experience;
