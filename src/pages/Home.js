import React from "react";

import Fade from "react-reveal/Fade";

const Home = () => {
  return (
    <>
      <Fade>
        <div
          name="home"
          className="w-full px-8 text-accent h-screen bg-primary"
        >
          <div className="max-w-[1000px] mx-auto flex flex-col justify-center h-full">
            <p className="text-text">Hi, My Name is </p>
            <h1 className="text-4xl sm:text-7xl font-semibold text-accent">
              <Fade top> Aman Trivedi</Fade>
            </h1>
            <h1 className="text-4xl sm:text-7xl text-[#8892b0]">
              <Fade top>I am a full Stack developer.</Fade>
            </h1>
            <p className="text-[#8892b0] py-54 max-w-[700px]">
              <Fade bottom>
                I am a full Stack developer specilizing in building (and
                occasionally designing) exceptional digital experiences.
                Currently , I am focused on building a responsive full-stack web
                application
              </Fade>
            </p>
            <div>
              <button className="btn mt-5">View Work</button>
            </div>
          </div>
        </div>
      </Fade>
    </>
  );
};

export default Home;
