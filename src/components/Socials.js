import React from "react";
import { SocialIcon } from "react-social-icons";
const Socials = () => {
  return (
    <>
      <div className="hidden xl:flex ml-24 ">
        <ul className="flex gap-x-4 ">
          <li className="">
            {" "}
            <SocialIcon
              network="github"
              url="https://github.com/AmanTrivedi1"
            />
          </li>
          <li>
            <SocialIcon
              network="twitter"
              url="https://github.com/AmanTrivedi1"
            />
          </li>
          <li>
            <SocialIcon
              network="instagram"
              url="https://github.com/AmanTrivedi1"
            />
          </li>
        </ul>
      </div>
    </>
  );
};

export default Socials;
