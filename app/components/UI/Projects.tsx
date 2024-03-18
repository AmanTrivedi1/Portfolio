"use client";
import Link from "next/link";
import React, { useState } from "react";
import { IoIosArrowDropdown , IoIosArrowDropup } from "react-icons/io";
import { motion, AnimatePresence } from 'framer-motion';
import { CiCirclePlus } from 'react-icons/ci';
import { CiCircleMinus } from 'react-icons/ci';
import { FaLink, FaGithub } from "react-icons/fa";

type Project = {
  id: number;
  name: string;
  liveLink: string;
  githubLink: string;
  description:string,
};

const Projects = () => {
  const [activeQuestion, setActiveQuestion] = useState<number | null>(null);
  const PROJECTS: Project[] = [
    {
      id: 1,
      name: "Consumer to Consumer",
      liveLink: "https://consumer-2-consumer.netlify.app/",
      githubLink: "https://github.com/mud1tx/Consumer-2-Consumer",
      description:"Lend or borrow anything with ease!  This webapp lets you turn your unused items into cash by listing them for rent. Need a fancy camera for the weekend? Find it here!  Browse a vast marketplace of rentable products, perfect for any occasion. It's a sharing economy win-win for everyone! "
    },
    {
      id: 2,
      name: "TaskManager",
      liveLink: "https://manageyourtask.vercel.app/",
      githubLink: "https://github.com/AmanTrivedi1/TaskManager",
      description:"Updated soon"
    },
    {
      id: 3,
      name: "Diagram.io",
      liveLink: "https://diagram-io.vercel.app/",
      githubLink: "https://github.com/AmanTrivedi1/Diagram",
      description:"Updated soon"
    },
    {
      id: 4,
      name: "TakeNotes",
      liveLink: "https://itstakenote.vercel.app/",
      githubLink: "https://github.com/AmanTrivedi1/TakeNotes",
      description:"Updated soon"
    },
    {
      id: 5,
      name: "Bookin",
      liveLink: "https://bookinwebapp.vercel.app/",
      githubLink: "https://github.com/AmanTrivedi1/bookinWebapp",
      description:"Updated soon"
    },
    {
      id: 6,
      name: "Linkit",
      liveLink: "https://linkitt.vercel.app/",
      githubLink: "https://github.com/AmanTrivedi1/customlink",
      description:"Updated soon"
    },
    {
      id: 7,
      name: "ReadmeCreator",
      liveLink: "https://createreadmemd.vercel.app/",
      githubLink: "https://github.com/AmanTrivedi1/CreateReadme",
      description:"Updated soon"
    },
    {
      id: 8,
      name: "Netflix.io",
      liveLink: "https://itsmynetflix.vercel.app/",
      githubLink: "https://github.com/AmanTrivedi1/netflix",
      description:"Updated soon"
    },
    {
      id: 9,
      name: "Board.io",
      liveLink: "https://itstakenote.vercel.app/",
      githubLink: "https://github.com/AmanTrivedi1/whiteboard",
      description:"Updated soon"
    },
    {
      id: 10,
      name: "Nike Store",
      liveLink: "https://nike-store-client.vercel.app/",
      githubLink: "https://github.com/AmanTrivedi1/Nikestore-client",
      description:"Updated soon"
    },
  ];

  return (
    <div className="w-11/12 m-auto">
      <main className="flex flex-col justify-center w-full m-auto mt-14 max-w-13xl">
        <div>
          <h1 className="p-4 text-xl font-semibold text-primaryPink sm:text-2xl md:text-3xl sm:pb-10 text-center">
            Projects
          </h1>
        </div>  
      <div className=' '>
        {PROJECTS.map((q) => (
          <div key={q.id} className='flex items-start justify-between '>
            <div>
               <button className="w-full text-left sm:text-base text-sm
               focus:outline-none p-4 rounded-sm  shadow-md flex justify-between items-center"
               onClick={()=> setActiveQuestion(activeQuestion === q.id ? null : q.id) }>
                 {q.name} 
               {activeQuestion === q.id ? (<IoIosArrowDropup className='text-3xl  hidden p-1 rounded-full '/>) : <IoIosArrowDropdown className='text-3xl  hidden  p-1 rounded-full '/> }
               </button>
               <AnimatePresence>
                {activeQuestion === q.id && (
                   <motion.div
                   initial={{ opacity: 0, height: 0 }}
                   animate={{ opacity: 1, height: "auto" }}
                   exit={{ opacity: 0, height: 0 }}>
                   <p className='max-w-[650px] ml-5 text-primaryOrange  text-start '>{q.description}</p>
                 </motion.div>
                 )}
               </AnimatePresence>
               </div>
               <div className="flex gap-x-6 items-start">
               <Link
                  href={q.liveLink}
                  target="_blank"
                  className="bg-primaryCream text-primaryBlack p-3 rounded-full"
                >
                  <FaLink className="cursor-pointer" />
                </Link>
                <Link
                  href={q.githubLink}
                  target="_blank"
                  className="bg-primaryCream text-primaryBlack p-3 rounded-full">
                  <FaGithub className="cursor-pointer" />
                </Link>
               </div>
          </div>
          
        ))}
    </div>
      </main>
    </div>
  );
};

export default Projects;
