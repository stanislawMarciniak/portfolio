interface IProject {
  name: string;
  description: string;
  image_path: string;
  deployed_url: string;
  github_url: string;
  key_techs: string[];
}

export const projectsData: IProject[] = [
  {
    name: "TIC TAC TOE",
    image_path: "/images/tictactoe.png",
    deployed_url: "https://tictactoe-sm.netlify.app",
    github_url: "https://github.com/stanislawMarciniak/tictactoe_online",
    description:
      "This app is a WebSocket application that enables two players on different devices to play the game in real-time and chat with each other. The game also features a login and registration page and uses cookies for user authentication.",
    key_techs: [
      "React",
      "Getstream.io",
      "Axios",
      "Express",
      "Universal Cookies",
      "Bcrypt",
    ],
  },
  {
    name: "Weather app",
    image_path: "/images/weather1.png",
    deployed_url: "https://weather-forecast-app-sm.netlify.app",
    github_url: "https://github.com/stanislawMarciniak/weather-app",
    description:
      "An extensive weather application that provides daily and hourly forecasts for a searched city or the user's current location.",
    key_techs: ["React", "Tailwind", "API"],
  },

  {
    name: "Portfolio",
    image_path: "/images/portfolio3.png",
    deployed_url: "https://portfolio-s-m.netlify.app",
    github_url: "https://github.com/stanislawMarciniak/portfolio",
    description: "A webpage that serves as a hub for all my other projects.",
    key_techs: ["Next.js", "Tailwind", "Typescript"],
  },
];