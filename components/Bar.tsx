import { ISkill } from "@/types";
import React, { FunctionComponent, useState } from "react";

const Bar: FunctionComponent<{
  data: ISkill;
}> = ({ data: { Icon, name } }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <span
      className="relative flex items-center justify-center w-12 h-12 my-5 rounded-full bg-gradient-to-r from-green to-darkgreen"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Icon className="text-3xl text-white" />
      {isHovered && (
        <span
          className="absolute left-0 right-0 text-sm text-center"
          style={{ top: "100%" }}
        >
          {name}
        </span>
      )}
    </span>
  );
};

export default Bar;
