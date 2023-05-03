import React from "react";
import Image from "next/image";
import { AiFillGithub, AiFillLinkedin, AiFillYoutube } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { GiTie } from "react-icons/gi";
import { useTheme } from "next-themes";

function Sidebar() {
  const { theme, setTheme } = useTheme();

  const changeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <div>
      <Image
        className="w-32 h-32 mx-auto rounded-full rounded-fu"
        src="/avatar.jpeg"
        alt="user avatar"
        width={200}
        height={200}
      />

      <h3 className="my-4 text-3xl font-medium tracking-wider font-kaushan">
        <span className="text-green"> Stanisław</span> Marciniak
      </h3>
      <p className="px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-dark-200 dark:bg-black-500">
        Aspiring Web Developer
      </p>
      <a
        className="flex items-center justify-center px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-dark-200 dark:bg-black-500 "
        href="/resume.pdf"
        download="Stanisław Marciniak - CV"
      >
        <GiTie className="w-6 h-6" /> Download CV
      </a>
      <div className="flex justify-around w-9/12 mx-auto my-5 text-green md:w-full">
        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley">
          <AiFillYoutube className="w-8 h-8 cursor-pointer" />
        </a>
        <a href="https://github.com/stanislawMarciniak">
          <AiFillGithub className="w-8 h-8 cursor-pointer" />
        </a>
        <a href="https://www.linkedin.com/in/stanis%C5%82aw-marciniak-490640246/">
          <AiFillLinkedin className="w-8 h-8 cursor-pointer" />
        </a>
      </div>
      <div
        className="py-4 my-5 bg-gray-200 dark:bg-dark-200 dark:bg-black-500"
        style={{ marginLeft: "-1rem", marginRight: "-1rem" }}
      >
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
        className="w-8/12 px-5 py-2 my-2 text-white rounded-full bg-gradient-to-r from-green to-blue-400 focus:outline-none hover:scale-105"
        onClick={() => window.open("mailto:stanislaww.marciniak@gmail.com")}
      >
        Email me
      </button>
      <button
        onClick={changeTheme}
        className="w-8/12 px-5 py-2 my-4 text-white bg-black rounded-full cursor-pointer bg-gradient-to-r from-green to-blue-500 focus:outline-none hover:scale-105 "
      >
        Toggle Theme
      </button>
    </div>
  );
}

export default Sidebar;
