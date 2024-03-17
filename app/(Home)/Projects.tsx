import Link from "next/link";
import React from "react";
import { FaLink, FaGithub } from "react-icons/fa";

type Project = {
  id: string; // Adding id field
  name: string;
  liveLink: string;
  githubLink: string;
};

const Projects = () => {
  const PROJECTS: Project[] = [
    {
      id: "1", // Adding id for each project
      name: "ChatVerse",
      liveLink: "https://chatverse-iota.vercel.app/",
      githubLink: "https://github.com/mud1tx/ChatVerse",
    },
    {
      id: "2",
      name: "Consumer-2-Consumer",
      liveLink: "https://consumer-2-consumer.netlify.app/",
      githubLink: "https://github.com/mud1tx/Consumer-2-Consumer",
    },
    {
      id: "3",
      name: "Shoppe",
      liveLink: "https://shoppe-ecommerce.netlify.app/",
      githubLink: "https://github.com/mud1tx/Shoppe",
    },
    {
      id: "4",
      name: "Library-Genesis",
      liveLink: "https://library-genesis.netlify.app/",
      githubLink: "https://github.com/mud1tx/Library-Genesis",
    },
    {
      id: "5",
      name: "Loch UI Design",
      liveLink: "https://apploch.netlify.app/",
      githubLink: "https://github.com/mud1tx/Loch",
    },
  ];

  return (
    <div>
      <main className="flex flex-col justify-center w-full m-auto mt-14 max-w-13xl">
        <div>
          <h1 className="p-4 text-xl font-semibold text-primaryPink sm:text-2xl md:text-3xl sm:pb-10 text-center">
            Projects
          </h1>
        </div>
        <main className="flex flex-row flex-wrap w-11/12 sm:w-9/12 m-auto">
          {PROJECTS.map((project) => (
            <div key={project.id} className="flex justify-between items-center w-full px-3 py-8 border-b border-primaryBorder">
              <div>
                <h1 className="text-xl font-semibold text-primaryCream">
                  {project.name}
                </h1>
              </div>
              <div className="flex items-center gap-x-4">
                <Link
                  href={project.liveLink}
                  target="_blank"
                  className="bg-primaryCream text-primaryBlack p-3 rounded-full"
                >
                  <FaLink className="cursor-pointer" />
                </Link>
                <Link
                  href={project.githubLink}
                  target="_blank"
                  className="bg-primaryCream text-primaryBlack p-3 rounded-full"
                >
                  <FaGithub className="cursor-pointer" />
                </Link>
              </div>
            </div>
          ))}
        </main>
      </main>
    </div>
  );
};

export default Projects;
