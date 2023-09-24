import React from "react";

const About = () => {
  return (
    <>
      <div name="about" className="w-full h-screen bg-primary text-accent">
        <div className="flex flex-col justify-center items-center w-full h-full">
          <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
            <div className="sm:text-right pb-8 pl-4">
              <p className="text-4xl font-bold inline border-b-4 border-text">
                About
              </p>
            </div>
            <div></div>
          </div>
          <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
            <div className="sm:text-right text-4xl font-bold">
              <p></p>
              Hi, i'm Aman, nice to meet you, Please take look around.
            </div>
            <div>
              <p>
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
        </div>
      </div>
    </>
  );
};

export default About;
