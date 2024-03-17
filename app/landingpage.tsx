import React from "react";
import Navbar from "./components/Navbar";
import HeroPage from "./(Home)/Hero";
import WhatIDoPage from "./(Home)/WhatIDo";
import Skills from "./(Home)/Skills";
import Projects from "./(Home)/Projects";
import Experience from "./(Home)/Experience";
import Footer from "./components/Footer";


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