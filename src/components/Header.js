import React from "react";
import Socials from "./Socials";
import Logo from "../img/header/logo.svg";
import MobileNav from "./MobileNav";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <>
      <header className=" w-full fixed px-[30px] bg-primary lg:px-[100px]  z-30 h-20 flex items-center ">
        <div className="flex flex-col lg:flex-row lg:items-center w-full justify-between">
          <Link to="/" className="max-w-[200px]">
            <h1 className="text-3xl text-text  font-semibold  font-primary">
              AT
            </h1>
          </Link>
          <nav className="hidden lg:flex gap-x-12 font-semibold ">
            <Link
              to="/"
              className="text-[#aeb0b1] text-lg hover:text-accent transition"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-[#aeb0b1] text-lg hover:text-accent transition"
            >
              About
            </Link>
            <Link
              to="/portfolio"
              className="text-[#aeb0b1] text-lg hover:text-accent transition"
            >
              Portfolio
            </Link>
            <Link
              to="/skills"
              className="text-[#aeb0b1] text-lg hover:text-accent transition"
            >
              Skills
            </Link>
            <Link
              to="/contact"
              className="text-[#aeb0b1] text-lg hover:text-accent transition"
            >
              Contact
            </Link>
          </nav>
        </div>
        <Socials />
        <MobileNav />
      </header>
    </>
  );
};

export default Header;
