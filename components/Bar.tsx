import { ISkill } from "@/type";
import React, { FunctionComponent } from "react";

const Bar: FunctionComponent<{
  data: ISkill;
}> = ({ data: { Icon, name } }) => {
  return <div>{name}</div>;
};

export default Bar;
