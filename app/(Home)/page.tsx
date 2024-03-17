import React from "react";
import Navbar from "../components/Navbar";
import HeroPage from "./Hero";
import WhatIDoPage from "./WhatIDo";
import Skills from "./Skills";
import Projects from "./Projects";
import Experience from "./Experience";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <HeroPage />
      <WhatIDoPage />
      <Skills />
      <Projects />
      <Experience />
      <Footer />
    </div>
  );
};

export default HomePage;
