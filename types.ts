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

export interface IProject {
  name: string;
  description: string;
  image_path: string;
  deployed_url: string;
  github_url: string;
  key_techs: string[];
}
