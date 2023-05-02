import { RiComputerLine } from "react-icons/ri";
import { BiGitBranch } from "react-icons/bi";
import { BsCircleFill } from "react-icons/bs";
import { FaServer, FaBookReader } from "react-icons/fa";
import { AiOutlineApi } from "react-icons/ai";
import { MdDeveloperMode } from "react-icons/md";

import { IService, ISkill } from "./type";

export const services: IService[] = [
  {
    Icon: RiComputerLine,
    title: "Frontend Development",
    about:
      "I can build a beautiful and scalable SPA using <b> HTML</b>,<b>CSS</b>   and <b>React.js</b> ",
  },
  {
    Icon: FaServer,
    title: "Backend  Development",
    about:
      "handle  deploying, server and api using <b>Express </b> & other popular frameworks",
  },
  {
    Icon: BiGitBranch,
    title: "Git",
    about: "using github daily, I make commits, merge and pulls easily",
  },
  {
    Icon: MdDeveloperMode,
    title: "Competitive Coder",
    about: "a daily problem solver in <b>HackerRank</b>  and <b>Leet Code</b> ",
  },
  {
    Icon: AiOutlineApi,
    title: "API Development",
    about:
      "I can develop robust  REST API using <b>Node API</b> and I can test it using <b>Postman</b> or <b>REST</b> extension",
  },
  {
    Icon: FaBookReader,
    title: "Student",
    about:
      "day by day I work with computers and gain more and more knowledge about them in variety of fields!",
  },
];

export const languages: ISkill[] = [
  {
    Icon: BsCircleFill,
    name: "Python",
  },
  {
    Icon: BsCircleFill,
    name: "Java Script",
  },
  {
    Icon: BsCircleFill,
    name: "React Native",
  },
  {
    Icon: BsCircleFill,
    name: "React",
  },
  {
    Icon: BsCircleFill,
    name: "Django",
  },
  {
    Icon: BsCircleFill,
    name: "Bootstrap",
  },
];

export const tools: ISkill[] = [
  {
    Icon: BsCircleFill,
    name: "Figma",
  },
  {
    Icon: BsCircleFill,
    name: "Photoshop",
  },
  {
    Icon: BsCircleFill,
    name: "Illustrator",
  },
  {
    Icon: BsCircleFill,
    name: "Framer",
  },
];
