import React from "react";
import Home from "../pages/Home";
import About from "../pages/About";
import Portfolio from "../pages/Portfolio";

import { Routes, Route, useLocation } from "react-router-dom";
import Skills from "../pages/Skills";
import Example from "../pages/scroll";

const AnimRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Example />} />
        <Route path="/example" element={<Example />} />
        <Route path="/skills" element={<Skills />} />
      </Routes>
    </>
  );
};

export default AnimRoutes;
