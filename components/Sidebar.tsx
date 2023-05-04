import React from "react";
import Image from "next/image";
import { AiFillGithub, AiFillLinkedin, AiFillYoutube } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { GiTie } from "react-icons/gi";
import ThemeButton from "./ThemeButton";

function Sidebar() {
  return (
    <div>
      <Image
        className="w-32 h-32 mx-auto rounded-full rounded-fu"
        src="/avatar.jpeg"
        alt="user avatar"
        width={200}
        height={200}
      />

      <h3 className="my-4 text-3xl font-medium tracking-wider font-poppins">
        <span className="text-green dark:text-darkgreen">
          {" "}
          Stanisław Marciniak
        </span>
      </h3>
      <p className="px-2 py-1 my-3 bg-green-200 rounded-full dark:bg-dark-200 dark:bg-black-500">
        Aspiring Fullstack Developer
      </p>
      <a
        className="flex items-center justify-center px-2 py-1 my-3 bg-green-200 rounded-full  hover:text-green dark:hover:text-darkgreen dark:bg-dark-200 dark:bg-black-500"
        href="/resume.pdf"
        download="Stanisław Marciniak - CV"
      >
        <GiTie className="w-6 h-6" /> Download CV
      </a>
      <div className="flex justify-around w-9/12 mx-auto my-5 dark:text-darkgreen text-green md:w-full ">
        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley">
          <AiFillYoutube className="w-8 h-8 cursor-pointer hover:scale-105" />
        </a>
        <a href="https://github.com/stanislawMarciniak">
          <AiFillGithub className="w-8 h-8 cursor-pointer hover:scale-105" />
        </a>
        <a href="https://www.linkedin.com/in/stanis%C5%82aw-marciniak-490640246/">
          <AiFillLinkedin className="w-8 h-8 cursor-pointer hover:scale-105" />
        </a>
      </div>
      <div className="py-4 my-5 bg-green-200 rounded-2xl dark:bg-dark-200 dark:bg-black-500">
        <div className="flex items-center justify-center space-x-2">
          <GoLocation />
          <span>Łódź, Poland</span>
        </div>
        <p className="my-2" style={{ wordWrap: "break-word" }}>
          stanislaww.marciniak@gmail.com
        </p>
        <p className="my-2">731 699 527</p>
      </div>
      <button
        className="w-8/12 px-5 py-2 my-2 text-white rounded-full bg-gradient-to-r from-green to-green-500 dark:from-green-700 dark:to-green-600 focus:outline-none hover:scale-105"
        onClick={() => window.open("mailto:stanislaww.marciniak@gmail.com")}
      >
        Email me
      </button>
      <ThemeButton />
    </div>
  );
}

export default Sidebar;
