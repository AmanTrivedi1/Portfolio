import React from "react";
import work1 from "../../src/img/project/pr1.png";
import work2 from "../../src/img/project/pr2.png";
import work3 from "../../src/img/project/pr3.png";
import work4 from "../../src/img/project/pr4.png";
import work5 from "../../src/img/project/pr8.png";
import work6 from "../../src/img/project/pr7.png";
import work7 from "../../src/img/project/pr9.png";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { motion } from "framer-motion";

const line1 = "Work";
const line2 = "// Checkout some of my recent work";

const sentence = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.5,
      staggerChildren: 0.08,
    },
  },
};
const letter = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

const Portfolio = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1023, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 767, min: 0 },
      items: 1,
    },
  };
  return (
    <>
      <div
        name="work"
        className="w-full h-full md:pt-0 pt-20 md:h-screen text-accent bg-primary"
      >
        <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center  w-full h-full">
          <div className="pb-8 ">
            <motion.p
              variants={sentence}
              initial="hidden"
              animate="visible"
              className="text-4xl font-semibold inline border-b-4 border-text text-accent "
            >
              {line1.split("").map((char, index) => {
                return (
                  <motion.span key={char + " " + index} variants={letter}>
                    {char}
                  </motion.span>
                );
              })}
            </motion.p>
            <motion.p
              variants={sentence}
              initial="hidden"
              animate="visible"
              className="py-6"
            >
              {line2.split("").map((char2, index) => {
                return (
                  <motion.span key={char2 + " " + index} variants={letter}>
                    {char2}
                  </motion.span>
                );
              })}
            </motion.p>
            <p className="py-6"></p>
          </div>

          <Carousel
            responsive={responsive}
            containerClass="-mx-[10px]"
            itemClass="px-[10px]"
          >
            <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <img class="rounded-t-lg" src={work3} alt="" />

              <div class="p-5">
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  "Crafted a unique website enabling users to easily borrow a
                  wide range of items, promoting resource sharing and community
                  collaboration."
                </p>
                <a
                  href="https://github.com/mud1tx/Consumer"
                  class="inline-flex items-center px-3 py-2 text-sm font-medium  text-white text-center  bg-[#4EC077] rounded-lg hover:opacity-90 focus:ring-4 focus:outline-none focus:ring-blue-300 "
                >
                  Source Code
                  <svg
                    class="w-3.5 h-3.5 ml-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>
              </div>
            </div>

            <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                <img class="rounded-t-lg" src={work7} alt="" />
              </a>
              <div class="p-5">
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  My LMS website offers an intuitive platform for seamless
                  educational content delivery, fostering a dynamic and engaging
                  learning experience for users.
                </p>
                <a
                  href="https://github.com/AmanTrivedi1/LearningManagement"
                  class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#0F0F0F] rounded-lg hover:opacity-90 focus:ring-4 focus:outline-none focus:ring-blue-300 "
                >
                  Source Code
                  <svg
                    class="w-3.5 h-3.5 ml-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>
              </div>
            </div>

            <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                <img class="rounded-t-lg" src={work1} alt="" />
              </a>
              <div class="p-5">
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  "I've developed a cutting-edge website with AI-powered ,
                  including dynamic image and text generation, unlocking a world
                  of creative possibilities."
                </p>
                <a
                  href="https://github.com/AmanTrivedi1/Scribble"
                  class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#4EC077] rounded-lg hover:opacity-90 focus:ring-4 focus:outline-none focus:ring-blue-300 "
                >
                  Source Code
                  <svg
                    class="w-3.5 h-3.5 ml-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>
              </div>
            </div>

            <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <img class="rounded-t-lg" src={work2} alt="" />

              <div class="p-5">
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  "I've crafted a user-friendly website for seamless burger
                  ordering, complete with a robust backend system for efficient
                  order management and status updates."
                </p>
                <a
                  href="https://github.com/AmanTrivedi1/Order-Food-Online"
                  class="inline-flex items-center px-3 py-2 text-sm font-medium  text-black text-center  bg-[#FDF2E9] rounded-lg hover:opacity-90 focus:ring-4 focus:outline-none focus:ring-blue-300 "
                >
                  Source Code
                  <svg
                    class="w-3.5 h-3.5 ml-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>
              </div>
            </div>

            <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <img class="rounded-t-lg" src={work4} alt="" />

              <div class="p-5">
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  "Developed a user-friendly website that simplifies shoe
                  ordering, providing a seamless shopping experience for
                  footwear enthusiasts."
                </p>
                <a
                  href="https://github.com/AmanTrivedi1/Nikestore-client"
                  class="inline-flex items-center px-3 py-2 text-sm font-medium  text-white text-center  bg-[#222222] rounded-lg hover:opacity-90 focus:ring-4 focus:outline-none focus:ring-blue-300 "
                >
                  Source Code
                  <svg
                    class="w-3.5 h-3.5 ml-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>
              </div>
            </div>

            <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <img class="rounded-t-lg" src={work5} alt="" />

              <div class="p-5">
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  "Built a Netflix-inspired movie streaming platform, delivering
                  a seamless and feature-rich viewing experience." It also have
                  password protection
                </p>
                <a
                  href="https://github.com/AmanTrivedi1/netflix"
                  class="inline-flex items-center px-3 py-2 text-sm font-medium  text-white text-center  bg-[#D81F26] rounded-lg hover:opacity-90 focus:ring-4 focus:outline-none focus:ring-blue-300 "
                >
                  Source Code
                  <svg
                    class="w-3.5 h-3.5 ml-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>
              </div>
            </div>

            <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <img class="rounded-t-lg" src={work6} alt="" />

              <div class="p-5">
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  "Developed a versatile note-taking website, like Notion,
                  empowering users to create and share notes effortlessly,
                  fostering collaboration with others"
                </p>
                <a
                  href="https://github.com/AmanTrivedi1/TakeNotes"
                  class="inline-flex items-center px-3 py-2 text-sm font-medium  text-black text-center  bg-[#ffffff] rounded-lg hover:opacity-90 focus:ring-4 focus:outline-none focus:ring-blue-300 "
                >
                  Source Code
                  <svg
                    class="w-3.5 h-3.5 ml-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </Carousel>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
