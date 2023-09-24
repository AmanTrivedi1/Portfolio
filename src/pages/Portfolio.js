import React from "react";
import work1 from "../../src/img/project/pr1.png";
import work2 from "../../src/img/project/pr2.png";
import work3 from "../../src/img/project/pr3.png";
import work4 from "../../src/img/project/pr4.png";
import work5 from "../../src/img/project/pr5.png";
import work6 from "../../src/img/project/pr6.png";
import Fade from "react-reveal/Fade";
import { Link } from "react-router-dom";
const Portfolio = () => {
  return (
    <>
      <Fade>
        <div
          name="work"
          className="w-full h-full md:pt-0 pt-20 md:h-screen text-accent bg-primary"
        >
          <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center  w-full h-full">
            <div className="pb-8 ">
              <p className="text-4xl font-semibold inline border-b-4 border-text text-accent  ">
                Work
              </p>
              <p className="py-6">
                <Fade bottom> // Checkout some of my recent work</Fade>
              </p>
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              <div>
                <Fade top>
                  <img src={work1} alt="work" />
                </Fade>
                <Fade bottom>
                  <div>
                    <button className="border border-text text-text hover:text-accent font-bold px-2 py-2 mt-2">
                      Source Code
                    </button>
                  </div>
                </Fade>
              </div>
              <div>
                <Fade top>
                  <img src={work2} alt="work" />
                </Fade>
                <Fade bottom>
                  <div>
                    <button className="border border-text text-text hover:text-accent font-bold px-2 py-2 mt-2">
                      Source Code
                    </button>
                  </div>
                </Fade>
              </div>
              <div>
                <Fade top>
                  <img src={work3} alt="work" />
                </Fade>
                <Fade bottom>
                  <div>
                    <button className="border border-text text-text hover:text-accent font-bold px-2 py-2 mt-2">
                      Source Code
                    </button>
                  </div>
                </Fade>
              </div>
              <div>
                <Fade top>
                  <img src={work5} alt="work" />
                </Fade>
                <Fade bottom>
                  <div>
                    <button className="border border-text text-text hover:text-accent font-bold px-2 py-2 mt-2">
                      Source Code
                    </button>
                  </div>
                </Fade>
              </div>
              <div>
                <Fade top>
                  <img src={work4} alt="work" />
                </Fade>
                <Fade bottom>
                  <div>
                    <button className="border border-text text-text hover:text-accent font-bold px-2 py-2 mt-2">
                      Source Code
                    </button>
                  </div>
                </Fade>
              </div>
              <div>
                <Fade top>
                  <img src={work6} alt="work" />
                </Fade>
                <Fade bottom>
                  <div>
                    <button className="border border-text text-text hover:text-accent font-bold px-2 py-2 mt-2">
                      Source Code
                    </button>
                  </div>
                </Fade>
              </div>
            </div>
          </div>
        </div>
      </Fade>
    </>
  );
};

export default Portfolio;
