import React from "react";
import Html from "../img/all/html.png";
import Css from "../img/all/css.png";
import JavaScript from "../img/all/javascript.png";
import ReactImg from "../img/all/react.png";
import Node from "../img/all/node.png";
import Firebase from "../img/all/firebase.png";
import Github from "../img/all/github.png";
import Tailwind from "../img/all/tailwind.png";
import Mongo from "../img/all/mongo.png";
import Java from "../img/all/java.png";
import NextJs from "../img/all/nextjs.png";

const Skills = () => {
  return (
    <>
      <div
        name="skills "
        className="text-accent w-full h-full sm:h-screen  pt-32"
      >
        <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full ">
          <div className="">
            <p className="text-4xl inline font-semibold border-b-4 border-text ">
              Experience
            </p>
            <p className="py-4 ">
              // Thsese are the technologies i've work with
            </p>
          </div>
          <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
            <div className="shadow-md cursor-pointer hover:shadow-text rounded-lg hover:scale-110 duration-500">
              <img className="w-16 mx-auto " src={Html} alt="/stack" />
              <p>Html</p>
            </div>

            <div className="shadow-md cursor-pointer hover:shadow-text rounded-lg hover:scale-110 duration-500">
              <img className="w-16 mx-auto " src={Css} alt="/stack" />
              <p>Css</p>
            </div>

            <div className="shadow-md cursor-pointer hover:shadow-text rounded-lg hover:scale-110 duration-500">
              <img className="w-16 mx-auto " src={JavaScript} alt="/stack" />
              <p>JavaScript</p>
            </div>

            <div className="shadow-md cursor-pointer hover:shadow-text rounded-lg hover:scale-110 duration-500">
              <img className="w-16 mx-auto " src={ReactImg} alt="/stack" />
              <p>ReactJs</p>
            </div>

            <div className="shadow-md cursor-pointer hover:shadow-text rounded-lg hover:scale-110 duration-500">
              <img className="w-16 mx-auto " src={Node} alt="/stack" />
              <p>Node</p>
            </div>

            <div className="shadow-md cursor-pointer hover:shadow-text rounded-lg hover:scale-110 duration-500">
              <img className="w-16 mx-auto " src={Firebase} alt="/stack" />
              <p>Firebase</p>
            </div>

            <div className="shadow-md cursor-pointer hover:shadow-text rounded-lg hover:scale-110 duration-500">
              <img className="w-16 mx-auto " src={Github} alt="/stack" />
              <p>Guthub</p>
            </div>

            <div className="shadow-md cursor-pointer hover:shadow-text rounded-lg hover:scale-110 duration-500">
              <img className="w-16 mx-auto " src={Tailwind} alt="/stack" />
              <p>Tailwind css</p>
            </div>

            <div className="shadow-md cursor-pointer hover:shadow-text rounded-lg hover:scale-110 duration-500">
              <img className="w-16 mx-auto " src={Mongo} alt="/stack" />
              <p>Mongo db</p>
            </div>

            <div className="shadow-md cursor-pointer hover:shadow-text rounded-lg hover:scale-110 duration-500">
              <img className="w-16 mx-auto " src={NextJs} alt="/stack" />
              <p>NextJs</p>
            </div>
            <div className="shadow-md cursor-pointer hover:shadow-text rounded-lg hover:scale-110 duration-500">
              <img className="w-16 mx-auto " src={Java} alt="/stack" />
              <p>Jav</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
