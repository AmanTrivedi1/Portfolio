"use client";
import { useState } from "react";
import Welcome from "./components/Welcome";
import HomePage from "./landingpage";


const MainPage = () => {
  const [animationCompleted, setAnimationCompleted] = useState<boolean>(false);

  return (
    <div className="h-screen flex justify-center items-center relative">
      <Welcome
        animationCompleted={animationCompleted}
        setAnimationCompleted={setAnimationCompleted}
      />
      {animationCompleted && (
        <div className="w-full h-full">
          <HomePage />
        </div>
      )}
    </div>
  );
};

export default MainPage;
