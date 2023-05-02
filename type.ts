import { IconType } from "react-icons";

export interface IService {
  Icon: IconType;
  title: string;
  about: string;
}

export interface ISkill {
  name: string;
  Icon: IconType;
}
