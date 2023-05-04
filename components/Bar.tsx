import { ISkill } from "@/types";
import React, { FunctionComponent } from "react";

const Bar: FunctionComponent<{
  data: ISkill;
}> = ({ data: { Icon, name } }) => {
  return (
    <div className="my-2 text-white bg-gray-300 rounded-full">
      <div className="flex items-center px-4 py-1 rounded-full flex-center bg-gradient-to-r from-green to-darkgreen">
        <Icon className="mr-3 " />
        {name}
      </div>
    </div>
  );
};

export default Bar;
