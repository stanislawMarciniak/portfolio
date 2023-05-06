import { ISkill } from "@/types";
import React, { FunctionComponent, useState } from "react";

const Bar: FunctionComponent<{
  data: ISkill;
}> = ({ data: { Icon, name } }) => {
  const [isHovered, setIsHovered] = useState(false);
  const opacity = isHovered ? "opacity-1" : "opacity-0";

  return (
    <div
      className="relative flex flex-col items-center justify-center w-20 h-20 pt-10 my-6 rounded-full bg-gradient-to-r from-green to-darkgreen"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <Icon className="text-5xl text-white" />
      </div>

      <span
        className={`px-5 text-center text-xl bg-green-300 rounded-xl dark:text-dark-700 transition-opacity duration-300 ${opacity}`}
        style={{ marginTop: "5rem" }}
      >
        {name}
      </span>
    </div>
  );
};

export default Bar;
