import React from "react";
import work1 from "../../src/img/project/pr1.png";
import work2 from "../../src/img/project/pr2.png";
import work3 from "../../src/img/project/pr3.png";
import work4 from "../../src/img/project/pr4.png";
import work5 from "../../src/img/project/pr8.png";
import work6 from "../../src/img/project/pr7.png";
import work7 from "../../src/img/project/pr9.png";
import work10 from "../../src/img/project/pr10.png";
import work11 from "../../src/img/project/pr11.png";
import Example from "./scroll";


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
     <Example/>
    </>
  );
};

export default Portfolio;
