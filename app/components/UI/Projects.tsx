"use client";
import Link from "next/link";
import React from "react";
import { FaLink, FaGithub } from "react-icons/fa";

type Project = {
  id: number;
  name: string;
  liveLink: string;
  githubLink: string;
};

const Projects = () => {
  const PROJECTS: Project[] = [
    {
      id: 1,
      name: "Consumer to Consumer",
      liveLink: "https://consumer-2-consumer.netlify.app/",
      githubLink: "https://github.com/mud1tx/Consumer-2-Consumer",
    },
    {
      id: 2,
      name: "TaskManager",
      liveLink: "https://manageyourtask.vercel.app/",
      githubLink: "https://github.com/AmanTrivedi1/TaskManager",
    },
    {
      id: 3,
      name: "Diagram.io",
      liveLink: "https://diagram-io.vercel.app/",
      githubLink: "https://github.com/AmanTrivedi1/Diagram",
    },
    {
      id: 4,
      name: "TakeNotes",
      liveLink: "https://itstakenote.vercel.app/",
      githubLink: "https://github.com/AmanTrivedi1/TakeNotes",
    },
    {
      id: 5,
      name: "Bookin",
      liveLink: "https://bookinwebapp.vercel.app/",
      githubLink: "https://github.com/AmanTrivedi1/bookinWebapp",
    },
    {
      id: 6,
      name: "Movix",
      liveLink: "https://movie-jade.vercel.app/",
      githubLink: "https://github.com/AmanTrivedi1/Movie-Webapp",
    },
    {
      id: 7,
      name: "ReadmeCreator",
      liveLink: "https://createreadmemd.vercel.app/",
      githubLink: "https://github.com/AmanTrivedi1/CreateReadme",
    },
    {
      id: 8,
      name: "Netflix.io",
      liveLink: "https://itsmynetflix.vercel.app/",
      githubLink: "https://github.com/AmanTrivedi1/netflix",
    },
    {
      id: 9,
      name: "Board.io",
      liveLink: "https://itstakenote.vercel.app/",
      githubLink: "https://github.com/AmanTrivedi1/whiteboard",
    },
    {
      id: 10,
      name: "Nike Store",
      liveLink: "https://nike-store-client.vercel.app/",
      githubLink: "https://github.com/AmanTrivedi1/Nikestore-client",
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
            <div
              key={project.id}
              className="flex justify-between items-center w-full px-3 py-8 border-b border-primaryBorder"
            >
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
