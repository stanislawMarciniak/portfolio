import React from "react";
import Image from "next/image";
import { AiFillGithub, AiFillLinkedin, AiFillYoutube } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { GiTie } from "react-icons/gi";

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

      <h3>
        <span> Stanisław</span> Marciniak
      </h3>
      <p>Web Developer</p>
      <p>
        <GiTie className="w-6 h-6" /> Download Resume
      </p>
      {/* social icon */}
      <a href="">
        <AiFillYoutube className="w-8 h-8" />
      </a>
      <a href="">
        <AiFillGithub className="w-8 h-8" />
      </a>
      <a href="">
        <AiFillLinkedin className="w-8 h-8" />
      </a>
      {/* address*/}
      <div>
        <div>
          <GoLocation />
          <span>Łódź, Poland</span>
        </div>
        <p>stanislaw.marciniak@gmail.com</p>
        <p>731 699 527</p>
      </div>
      <button>Email me</button>
      <button>Toggle Theme</button>
    </div>
  );
}

export default Sidebar;
