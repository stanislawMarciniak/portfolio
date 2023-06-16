import * as bin from "./index";
import config from "../../../config.json";
import { projectsData } from "../../../projects";

// Help
export const help = async (args: string[]): Promise<string> => {
  const commands = Object.keys(bin).sort();
  var c = "";
  for (let i = 1; i <= commands.length; i++) {
    c += commands[i - 1] + "\n";
  }
  return `Welcome! Here are all the available commands:
\n<span class='command'>${c}</span>
[tab]: trigger completion.
[ctrl+l]/<span class='command'>clear</span>: clear terminal.\n
`;
};

// About
export const whoami = async (args: string[]): Promise<string> => {
  return `
My name is <b>Stanisław</b>! I am a freshman at<a class="link" target="_blank" href="https://p.lodz.pl/"> University of Technology</a>. I love to learn new things and technologies thats why I am looking for first work experience as a <b>Fullstack Developer</b>. I would like to broaden my horizonts with practical knowledge. Currently, I am learning TypeScript and Docker. I am motivated and ready to work hard and develop my coding skills.  

More about me:
<span class='command'>contact</span> - my social media.
<span class='command'>resume</span> - my latest resume.
<span class='command'>projects</span> - lists my latest projects.\n
`;
};

export const resume = async (args: string[]): Promise<string> => {
  const pdfUrl = "/resumecv.pdf";
  window.open(pdfUrl);

  return "Opening resume...";
};

// Contact
export const contact = async (args: string[]): Promise<string> => {
  return `
Mail: <a target="_blank" class='link' href='mailto:${config.email}'>${config.email}</a>
Github: <a target="_blank" class='link' href='https://github.com/${config.social.github}'>${config.social.github}</a>
Linkedin: <a target="_blank" class='link' href='https://linkedin.com/in/${config.social.linkedin}'>Stanisław Marciniak</a>\n
`;
};

export const repo = async (args: string[]): Promise<string> => {
  window.open(config.repo);

  return "Opening repository...";
};

//Projects
export const projects = async (args: string[]): Promise<string> => {
  const projectsList = projectsData.map(project => 
    `${project.name} - ${project.description} \n`
  );
  return projectsList.join("\n");
};

//EXIT && OPEN
export const close = async (args: string[]): Promise<string> => {
  return "Closing terminal...";
};

export const open = async (args: string[]): Promise<string> => {
  return "Opening terminal...";
};
