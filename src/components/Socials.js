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
              url="https://twitter.com/Aman_trivedi10"
            />
          </li>
          <li>
            <SocialIcon
              network="instagram"
              url="https://www.instagram.com/_beingaman._/"
            />
          </li>
          <li>
            <SocialIcon
              network="linkedin"
              url="https://www.linkedin.com/in/aman-trivedi-a70974213/"
            />
          </li>
        </ul>
      </div>
    </>
  );
};

export default Socials;
