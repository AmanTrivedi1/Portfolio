import Image from "next/image";
import Link from "next/link";
import React from "react";

type Experience = {
  name: string;
  image: string;
  position: string;
  link: string;
  color: string;
};

const Experience = () => {
  const EXPERIENCE: Experience[] = [
    {
      name: "TaskLabs",
      image: "tasklabs.jpeg",
      position: "SDE-Intern",
      link: "https://www.linkedin.com/company/tasklabs/about/",
      color: "primaryCyan",
    },
    {
      name: "activist",
      image: "activist.png",
      position: "Open Source Contribution",
      link: "https://github.com/activist-org/activist/pull/98",
      color: "primaryPurple",
    },
    {
      name: "Flowbite React",
      image: "flowbite-react.png",
      position: "Open Source Contribution",
      link: "https://github.com/themesberg/flowbite-react/pull/1160#event-11125703749",
      color: "primaryPink",
    },
    {
      name: "Cuttle",
      image: "cuttle.png",
      position: "Open Source Contribution",
      link: "https://github.com/cuttle-cards/cuttle/issues/362#event-9067224107",
      color: "primaryDarkOrange",
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
            <div>
              <div>
                <Link
                  href={exp.link}
                  target="_blank"
                  className=" text-primaryBlack p-3 rounded-full"
                >
                  <Image
                    src={"/" + exp.image}
                    alt={exp.name}
                    width={100}
                    height={100}
                    className="h-full w-full"
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
