import React from "react";
import work1 from "../../src/img/project/pr1.png";
const Card = () => {
  return (
    <>
      <div>
        <img src={work1} alt="work" />

        <div>
          <a href="https://github.com/AmanTrivedi1/Scribble">
            <button className="border border-text text-text hover:text-accent font-bold px-2 py-2 mt-2">
              Source Code
            </button>
          </a>
        </div>
      </div>
    </>
  );
};

export default Card;
