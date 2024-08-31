"use client";
import React from "react";
import Navbar from "../Navbar";
import HeroPage from "./Hero";
import WhatIDoPage from "./WhatIDo";
import Skills from "./Skills";
import Projects from "./Projects";
import Experience from "./Experience";
import Footer from "../Footer";


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
