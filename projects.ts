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
    name: "Swiftboard",
    image_path: "/images/swiftboard.png",
    deployed_url: "https://swiftboard.netlify.app/",
    github_url: "https://github.com/swift-soft/swift-board",
    description:
      "It is an onboarding platform that utilizes AI to make the onboarding process as straight-forward as possible for the employers as well as the onboarded employees. It is a group project and I was responsible for employer dashboard. The project won the hackathon Hack na Zdrowie 2.",
    key_techs: [
      "Vite",
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
    image_path: "/images/weather.png",
    deployed_url: "https://weather-forecast-app-sm.netlify.app",
    github_url: "https://github.com/stanislawMarciniak/weather-app",
    description:
      "An extensive weather application that provides daily and hourly forecasts for a searched city or the user's current location.",
    key_techs: ["React", "Tailwind", "API"],
  },
];
