import React from "react";
import { motion } from "framer-motion";
import Resume from "../../src/img/Aman (1).pdf";
const line1 = "Aman Trivedi";
const line2 = "I am a full Stack developer.";

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
const Home = () => {
  return (
    <>
      <div name="home" className="w-full px-8 text-accent h-screen bg-primary">
        <div className="max-w-[1000px] mx-auto flex flex-col justify-center h-full">
          <p className="text-text">Hi, My Name is </p>
          <motion.h1
            variants={sentence}
            initial="hidden"
            animate="visible"
            className="text-4xl sm:text-7xl font-semibold text-accent"
          >
            {line1.split("").map((char, index) => {
              return (
                <motion.span key={char + " " + index} variants={letter}>
                  {char}
                </motion.span>
              );
            })}
          </motion.h1>
          <motion.h2
            variants={sentence}
            initial="hidden"
            animate="visible"
            className="text-4xl sm:text-7xl text-[#8892b0]"
          >
            {line2.split("").map((char2, index) => {
              return (
                <motion.span key={char2 + " " + index} variants={letter}>
                  {char2}
                </motion.span>
              );
            })}
          </motion.h2>
          <p className="text-[#8892b0] py-54 max-w-[700px]">
            I am a full Stack developer specilizing in building (and
            occasionally designing) exceptional digital experiences. Currently ,
            I am focused on building a responsive full-stack web application
          </p>
          <div>
            <a download="" className="btn mt-5 w-40 h-14" href={Resume}>
              Resume
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
