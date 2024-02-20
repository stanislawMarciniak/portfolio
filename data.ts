import { IconType } from "react-icons";
import {
  SiGithub,
  SiLinux,
  SiTailwindcss,
  SiTypescript,
  SiNextdotjs,
  SiCplusplus,
  SiReact,
  SiSupabase,
  SiChakraui,
} from "react-icons/si";

export interface ISkill {
  name: string;
  Icon: IconType;
}

interface IProject {
  name: string;
  description: string;
  image_path: string;
  deployed_url: string;
  github_url: string;
  key_techs: string[];
}

export const skillsData: ISkill[] = [
  {
    Icon: SiTypescript,
    name: "TypeScript",
  },
  {
    Icon: SiReact,
    name: "React",
  },
  {
    Icon: SiNextdotjs,
    name: "Next.js",
  },
  {
    Icon: SiSupabase,
    name: "Supabase",
  },
  {
    Icon: SiTailwindcss,
    name: "Tailwind",
  },
  {
    Icon: SiChakraui,
    name: "Chakra UI",
  },
  {
    Icon: SiGithub,
    name: "GitHub",
  },
  {
    Icon: SiLinux,
    name: "Linux",
  },
  {
    Icon: SiCplusplus,
    name: "C++",
  },
];

export const projectsData: IProject[] = [
  {
    name: "Clavvs",
    image_path: "/images/clavvs.png",
    deployed_url: "https://clavvs.netlify.app/",
    github_url: "https://github.com/stanislawMarciniak/nails",
    description:
      "This is a web page I made for my girlfriend to help her organize her schedule. She uses it on a daily basis. This web application allows users to conveniently book appointments and enroll in a nail salon. Users can easily browse available services, select preferred time slots, and provide necessary information for booking and enrollment. The admin has the ability to confirm/reject meetings and has insight into the entire meeting history.",
    key_techs: [
      "Vite",
      "React",
      "Supabase",
      "PostgreSQL",
      "Chakra UI",
      "Typescript",
    ],
  },
  {
    name: "Swiftboard",
    image_path: "/images/swiftboard.png",
    deployed_url: "https://swiftboard.netlify.app/",
    github_url: "https://github.com/swift-soft/swift-board",
    description:
      "It is an onboarding platform that utilizes AI to make the onboarding process as straight-forward as possible for the employers as well as the onboarded employees. It is a group project and I was responsible for employer dashboard. The project won the hackathon Hack na Zdrowie 2.",
    key_techs: [
      "Vite",
      "React",
      "Supabase",
      "PostgreSQL",
      "Chakra UI",
      "Typescript",
      "Docker",
    ],
  },
  {
    name: "TIC TAC TOE",
    image_path: "/images/tictactoe.png",
    deployed_url: "https://tictactoe-sm.netlify.app",
    github_url: "https://github.com/stanislawMarciniak/tictactoe_online",
    description:
      "This app is a WebSocket application that enables two players on different devices to play the game in real-time and chat with each other. The game also features a login and registration page and uses cookies for user authentication.",
    key_techs: ["JavaScript", "React", "Getstream.io", "Axios", "Express"],
  },
  {
    name: "Weather app",
    image_path: "/images/weather.png",
    deployed_url: "https://weatherforecast-sm.netlify.app/",
    github_url: "https://github.com/stanislawMarciniak/weather-app",
    description:
      "An extensive weather application that provides daily and hourly forecasts for a searched city or the user's current location.",
    key_techs: ["JavaScript", "React", "Tailwind", "OpenWeather API"],
  },
  {
    name: "Space Invaders",
    image_path: "/images/spaceinvaders.png",
    deployed_url: "",
    github_url: "",
    description:
      "Space Invaders is a classic arcade game implemented in C++ with SFML graphics library. Developed as a university Object Oriented Programming project, it demonstrates the use of design patterns such as Singleton, Factory, Observer, and State. Unit testing ensures code reliability.",
    key_techs: ["C++", "SFML", "Boost"],
  },
];
