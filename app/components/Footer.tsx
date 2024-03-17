"use client";
import React from "react";
import { BsTwitterX, BsGithub, BsLinkedin } from "react-icons/bs";
import Link from "next/link";
import { CiMail } from "react-icons/ci";

const Footer = () => {
  return (
    <div>
      <div>
        <main className="flex items-center justify-center mx-1 sm:mx-2 md:mx-3 lg:mx-4">
          <footer className="flex flex-wrap flex-col items-center justify-center w-screen mt-6 border border-primaryBorder rounded-xl max-w-[13xl] p-8">
            <div className="flex items-center gap-y-12  justify-center sm:justify-between w-full px-3 pt-1 flex-wrap max-w-[10xl] md:px-6 xl:mx-10 sm:flex-row">
              <div className="text-2xl font-semibold">
                <h1 className="">
                  Where <span className="text-primaryPink">aesthetics </span>&
                  <br />
                  <span className="text-primaryBlue">functionality </span>
                  meet
                </h1>
              </div>
              <div className="flex flex-col gap-4 items-center justify-center">
                <div>
                  <h1 className="text-2xl font-semibold text-primaryBlue">
                    Follow ME
                  </h1>
                </div>
                <div className="flex gap-2 justify-center items-center p-2 border border-primaryBorder rounded-[40px]">
                  <Link
                    href="https://twitter.com/muditagarwalna"
                    target="_blank"
                    className="bg-primaryCream text-primaryBlack p-3 rounded-full"
                  >
                    <BsTwitterX className="text-xl" />
                  </Link>
                  <Link
                    href="https://github.com/mud1tx"
                    target="_blank"
                    className="bg-primaryCream text-primaryBlack p-3 rounded-full"
                  >
                    <BsGithub className="text-xl" />
                  </Link>
                  <Link
                    href="https://www.linkedin.com/in/mudit-agarwal-a9a9341b6/"
                    target="_blank"
                    className="bg-primaryCream text-primaryBlack p-3 rounded-full"
                  >
                    <BsLinkedin className="text-xl" />
                  </Link>
                  <Link
                    href="mailto:muditagarwalna@gmail.com"
                    target="_blank"
                    className="bg-primaryCream text-primaryBlack p-3 rounded-full"
                  >
                    <CiMail className="text-xl" />
                  </Link>
                </div>
              </div>
            </div>
          </footer>
        </main>
      </div>
      <div>
        <div className="flex items-start justify-center">
          <div className="flex items-center justify-center w-full mx-1 sm:mx-2 md:mx-3 lg:mx-3 max-w-[13xl]">
            <div className="flex flex-col items-center justify-between w-full pb-2 sm:flex-row">
              <h1 className="mx-1 mt-2 text-lg font-medium text-primaryCream sm:mx-2 md:mx-3 lg:mx-4">
                mud1tx &copy;2024 - Privacy Policy
              </h1>
              <h1 className="mx-1 mt-2 text-lg font-medium text-primaryCream sm:mx-2 md:mx-3 lg:mx-4">
                Kanpur, India
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
