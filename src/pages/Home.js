import React from "react";
import ProfileImage from "../img/home/profile (1).png";
import MobileProfile from "../img/home/smallprofile.png";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <>
      <section className=" bg-primary ">
        <div className="container mx-auto">
          <div className="flex flex-col   justify-center">
            <div className="w-full  text-center lg:text-start text-accent  pt-36 pb-14 lg:pt-0 lg:pb-0 lg:w-auto z-10 lg:absolute flex flex-col justify-center items-center lg:items-start ">
              <h1 className="h1">
                Developer & <br />
                Problem Solver
              </h1>
              <p className="text-[26px] lg:text-[36px] text-accent mb-4 lg:mb-12">
                India , Uttarpradesh
              </p>
              <Link to="/" className="btn ">
                Resume
              </Link>
            </div>
            <div className=" flex justify-center lg:justify-end items-center max-h-96 lg:max-h-max">
              <div className="relative hidden lg:flex lg:-right-40 ">
                <img src={ProfileImage} alt="Aman Trivedi" />
              </div>
              <div className="relative flex items-center justify-center  lg:hidden  lg:-right-40 ">
                <img src={MobileProfile} alt="Aman Trivedi" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
