import { RiComputerLine } from "react-icons/ri";
import { BiGitBranch } from "react-icons/bi";
import { BsCircleFill } from "react-icons/bs";
import { FaServer, FaBookReader } from "react-icons/fa";
import { AiOutlineApi } from "react-icons/ai";
import { MdDeveloperMode } from "react-icons/md";

import { IProject, IService, ISkill } from "./types";

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
    about: "a daily problem solver in <b>SPOJ</b>  and <b>Leet Code</b> ",
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
    name: "Tailwind",
  },
  {
    Icon: BsCircleFill,
    name: "Java Script",
  },
  {
    Icon: BsCircleFill,
    name: "Type Script",
  },
  {
    Icon: BsCircleFill,
    name: "React",
  },
  {
    Icon: BsCircleFill,
    name: "Node.js",
  },
  {
    Icon: BsCircleFill,
    name: "Next.js",
  },
];

export const tools: ISkill[] = [
  {
    Icon: BsCircleFill,
    name: "GitHub",
  },
  {
    Icon: BsCircleFill,
    name: "Linux",
  },
  {
    Icon: BsCircleFill,
    name: "Postman",
  },
  {
    Icon: BsCircleFill,
    name: "Photoshop",
  },
];

export const projects: IProject[] = [
  {
    name: "TIC TAC TOE",
    image_path: "/images/covid.jpg",
    deployed_url: "https://tictactoe-sm.netlify.app",
    github_url: "https://github.com/Dey-Sumit/covid-19-tracker",
    description:
      "This app shows a statistical view about corona virus over the world",
    key_techs: ["React", "Chart.js", "Material UI"],
  },
  {
    name: "Weather app",
    image_path: "/images/algoVisual.png",
    deployed_url: "https://weather-forecast-app-sm.netlify.app",
    github_url: "https://github.com/Dey-Sumit/algorithm-visualizer",
    description:
      "An web app which shows how an algorithm (path finding or sorting) works with cool animation",
    key_techs: ["React", "firebase", "Framer Motion"],
  },

  {
    name: "Portfolio",
    image_path: "/images/chatapp.jpg",
    deployed_url: "https://portfolio-s-m.netlify.app",
    github_url: "https://github.com/Dey-Sumit/chat-app-socket.io-react-node",
    description:
      "Basic Realtime Chat App where one can create a room can talk to each other",
    key_techs: ["React", "Node", "Express", "Socket", "Bootstrap"],
  },

  {
    name: "Resume",
    image_path: "/images/algoVisual.png",
    deployed_url: "https://cv-sm.netlify.app",
    github_url: "https://github.com/Dey-Sumit/algorithm-visualizer",
    description:
      "An web app which shows how an algorithm (path finding or sorting) works with cool animation",
    key_techs: ["React", "firebase", "Framer Motion"],
  },
];
