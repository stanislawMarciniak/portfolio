import { IconType } from "react-icons";
import {
  SiGithub,
  SiLinux,
  SiTailwindcss,
  SiNextdotjs,
  SiCplusplus,
  SiReact,
  SiSupabase,
  SiChakraui,
  SiJavascript,
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
    Icon: SiJavascript,
    name: "JavaScript",
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
      "This is a web page I made for my friend to help her organize her schedule. She uses it on a daily basis. This web application allows users to conveniently book appointments and enroll in a nail salon. Users can easily browse available services, select preferred time slots, and provide necessary information for booking and enrollment. The admin has the ability to confirm/reject meetings and has insight into the entire meeting history.",
    key_techs: [
      "Typescript",
      "React",
      "Chakra UI",
      "PostgreSQL",
      "Vite",
      "Supabase",
    ],
  },
  {
    name: "Swiftboard",
    image_path: "/images/swiftboard.png",
    deployed_url: "https://swiftboard.netlify.app/",
    github_url: "https://github.com/swift-soft/swift-board",
    description:
      "It is an onboarding platform that utilizes AI to make the onboarding process as straight-forward as possible for the employers as well as the onboarded employees. It is a group project and I was responsible for employer dashboard. The project won the hackathon 'Hack na Zdrowie 2' and 'Forge of Talents'.",
    key_techs: [
      "Typescript",
      "React",
      "Chakra UI",
      "Docker",
      "PostgreSQL",
      "Vite",
      "Supabase",
    ],
  },
  {
    name: "Threads",
    image_path: "/images/threads.png",
    deployed_url: "https://threads-sm.vercel.app/",
    github_url: "https://github.com/stanislawMarciniak/threads",
    description:
      "The application replicates the functionality of Threads, demonstrating proficiency in modern web development. Responsible for the entire development cycle, from setting up the development environment to deploying the application. The project showcases my ability to create efficient, scalable, and user-friendly web applications.",
    key_techs: [
      "React",
      "Typescript",
      "Next.js",
      "Shadcn UI",
      "MongoDB",
      "Clerk",
    ],
  },
  {
    name: "TIC TAC TOE",
    image_path: "/images/tictactoe.png",
    deployed_url: "https://tictactoe-sm.netlify.app",
    github_url: "https://github.com/stanislawMarciniak/tictactoe_online",
    description:
      "This app is a WebSocket application that enables two players on different devices to play the game in real-time and chat with each other. The game also features a login and registration page and uses cookies for user authentication.",
    key_techs: ["JavaScript", "React", "Getstream.io", "Express"],
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
    github_url: "https://github.com/stanislawMarciniak/SpaceInvaders",
    description:
      "Space Invaders is a classic arcade game implemented in C++ with the SFML graphics library. Developed with my friend as a university Object Oriented Programming project, it demonstrates the use of design patterns such as Singleton, Factory, Observer, and State. Additionally, during the project, I learned how to create unit tests.",
    key_techs: ["C++", "SFML", "Boost"],
  },
];
