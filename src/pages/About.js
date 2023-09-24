import React from "react";
import { motion } from "framer-motion";
const line1 = "About";

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

const About = () => {
  return (
    <>
      <div
        name="about"
        className="w-full pt-20 pb-10  sm:pt-0 h-screen bg-primary text-accent"
      >
        <div className="flex flex-col justify-center items-center w-full h-full">
          <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
            <div className="sm:text-right pb-8 pl-4">
              <motion.p
                variants={sentence}
                initial="hidden"
                animate="visible"
                className="text-4xl font-bold inline border-b-4 border-text"
              >
                {line1.split("").map((char, index) => {
                  return (
                    <motion.span key={char + " " + index} variants={letter}>
                      {char}
                    </motion.span>
                  );
                })}
              </motion.p>
            </div>
            <div></div>
          </div>
          <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
            <div className="sm:text-right text-xl font-bold">
              <p> Hi, i'm Aman, nice to meet you, Please take look around.</p>
            </div>
            <div>
              <p className="text-sm">
                I'm a passionate Full Stack Developer dedicated to crafting
                seamless digital experiences. With expertise in both front-end
                and back-end development, I transform complex ideas into
                elegant, user-friendly solutions. My commitment to staying
                up-to-date with the latest tech ensures cutting-edge results. I
                thrive on collaboration, fostering open communication for
                project success. Let's work together to bring your vision to
                life.
              </p>
            </div>
          </div>
          <div className="max-w-[1000px] md:mt-5 w-full grid sm:grid-cols-2 gap-8 px-4">
            <div className="sm:text-right text-xl font-bold">
              <p className="mt-5 md:mt-0"> Certification</p>
            </div>
            <div>
              <span className="text-base font-bold text-text"> Javascript</span>
              <p className="text-sm">
                A certified JavaScript developer is skilled in web apps, OOP,
                async programming, and security for robust applications.
              </p>
            </div>
          </div>
          <div className="max-w-[1000px] md:mt-5 w-full grid sm:grid-cols-2 gap-8 px-4">
            <div className="invisible sm:text-right text-xl font-bold">
              <p> Certification</p>
            </div>
            <div className="mt-[-50px] md:mt-0">
              <span className="text-base font-bold text-text"> FullStack</span>
              <p className="text-sm">
                A certified Fullstack developer is skilled in web apps, and able
                to make scalble and robust webapplication
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
