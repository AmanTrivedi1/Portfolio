import React from "react";
import { FaReact } from "react-icons/fa";
import { FaLinux } from "react-icons/fa";
import { GrGraphQl } from "react-icons/gr";
import { FaNodeJs } from "react-icons/fa";

const WhatIDoPage = () => {
  return (
    <div>
      <main className="flex flex-col justify-center w-full m-auto mt-6 max-w-13xl">
        <div>
          <h1 className="p-4 text-xl font-semibold text-primaryPurple sm:text-2xl md:text-3xl sm:pb-10 text-center">
            WHAT I DO
          </h1>
        </div>
        <main className="flex flex-row flex-wrap w-11/12 gap-4 m-auto">
          <div className="flex-grow w-64 ">
            <div className="h-full pb-10 pl-6 pr-10 border rounded-md bg-primaryBlackCard border-primaryBorder ">
              <div className="relative flex flex-col gap-2 pt-28">
                <FaReact className="text-primaryCyan text-4xl" />
                <h1 className="text-lg font-semibold text-primaryCyan">
                  Frontend Development
                </h1>
                <p className="text-sm text-primaryCream">
                  Designing interfaces that are intuitive, efficient, and
                  enjoyable to use.
                </p>
              </div>
            </div>
          </div>
          <div className="flex-grow w-64 ">
            <div className="h-full pb-10 pl-6 pr-10 border rounded-md bg-primaryBlackCard border-primaryBorder ">
              <div className="relative flex flex-col gap-2 pt-28">
                <GrGraphQl className="text-primaryPurple text-4xl" />
                <h1 className="text-lg font-semibold text-primaryPurple">
                  Backend Development
                </h1>
                <p className="text-sm text-primaryCream">
                  Designing interfaces that are intuitive, efficient, and
                  enjoyable to use.
                </p>
              </div>
            </div>
          </div>
          <div className="flex-grow w-64 ">
            <div className="h-full pb-10 pl-6 pr-10 border rounded-md bg-primaryBlackCard border-primaryBorder ">
              <div className="relative flex flex-col gap-2 pt-28">
                <FaNodeJs className="text-primaryPink text-4xl" />
                <h1 className="text-lg font-semibold text-primaryPink">
                  Full Stack Development
                </h1>
                <p className="text-sm text-primaryCream">
                  Designing interfaces that are intuitive, efficient, and
                  enjoyable to use.
                </p>
              </div>
            </div>
          </div>
          <div className="flex-grow w-64 ">
            <div className="h-full pb-10 pl-6 pr-10 border rounded-md bg-primaryBlackCard border-primaryBorder ">
              <div className="flex flex-col gap-2 pt-28">
                <FaLinux className="text-primaryDarkOrange text-4xl" />
                <h1 className="text-lg font-semibold text-primaryDarkOrange">
                  DevOps
                </h1>
                <p className="text-sm text-primaryCream">
                  Designing interfaces that are intuitive, efficient, and
                </p>
              </div>
            </div>
          </div>
        </main>
      </main>
    </div>
  );
};

export default WhatIDoPage;
