"use client";
import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

const Navbar = () => {
  const router = useRouter();
  // const [isOpen, setIsOpen] = useState(false);
  // const NavBarData = [
  //   { id: "1", name: "Home", url: "/" },
  //   { id: "2", name: "About Me", url: "/about" },
  //   { id: "3", name: "Contact", url: "/contact" },
  // ];

  // const handleNavigation = (url: string) => {
  //   router.push(url);
  //   setIsOpen(false);
  // };

  // const toggleDropdown = () => {
  //   setIsOpen(!isOpen);
  // };

  // const closeDropdown = () => {
  //   setIsOpen(false);
  // };

  return (
    <div className="relative">
      <div className="h-16 bg-primaryBlack text-primaryCream border-b-[1px] border-primaryBorder">
        <div className="h-full flex items-center ml-4 mr-4 p-2 justify-between text-2xl font-medium">
          <div
            className="flex items-center gap-2 border border-primaryBorder rounded-3xl px-3 py-2"
            // onClick={toggleDropdown  }
          >
            <div className="w-4 h-4 rounded-3xl bg-primaryCream"></div>
            <div className="animate-pulse">Aman</div>
          </div>
          {/* <div
            className="p-2 border border-primaryBorder rounded-3xl cursor-pointer"
            onClick={toggleDropdown}
          >
            <GiHamburgerMenu />
          </div> */}
        </div>
      </div>
      {/* {isOpen && (
        <motion.div
          className="fixed top-0 left-0 w-screen h-screen bg-black opacity-50 z-40"
          onClick={closeDropdown}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          exit={{ opacity: 0 }}
        ></motion.div>
      )}
      {isOpen && (
        <motion.div
          className="absolute w-full top-16 mt-2 mr-4 bg-primaryBlack rounded shadow-lg z-50"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 1 }}
        >
          <ul className="text-center p-6">
            {NavBarData.map((data) => (
              <li
                key={data.id}
                className="cursor-pointer text-2xl p-4"
                onClick={() => handleNavigation(data.url)}
              >
                {data.name}
              </li>
            ))}
          </ul>
        </motion.div>
      )} */}
    </div>
  );
};

export default Navbar;
