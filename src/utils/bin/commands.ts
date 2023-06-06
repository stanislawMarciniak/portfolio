// List of commands that do not require API calls

import * as bin from "./index";
import config from "../../../config.json";

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
Type <span class='command'>sumfetch</span> to display summary.
`;
};

// About
export const whoami = async (args: string[]): Promise<string> => {
  return `
My name is <b>Stanisław</b>! I am a freshman at<i><a href="https://p.lodz.pl/"> University of Technology</a></i>. I love to learn new things and technologies thats why I am looking for first work experience as a <b>Fullstack Developer</b>. I would like to broaden my horizonts with practical knowledge. Currently, I am learning TypeScript and Docker. I am motivated and ready to work hard and develop my coding skills.  

More about me:
'sumfetch' - short summary.
'resume' - my latest resume.
'readme' - my github readme.`;
};

export const resume = async (args: string[]): Promise<string> => {
  const pdfUrl = "/resumecv.pdf";
  window.open(pdfUrl);

  return "Opening resume...";
};

// Contact
export const email = async (args: string[]): Promise<string> => {
  window.open(`mailto:${config.email}`);

  return `Opening mailto:${config.email}...`;
};

export const github = async (args: string[]): Promise<string> => {
  window.open(`https://github.com/${config.social.github}`);

  return "Opening github...";
};

export const repo = async (args: string[]): Promise<string> => {
  window.open(config.repo);

  return "Opening repository...";
};

export const linkedin = async (args: string[]): Promise<string> => {
  window.open(`https://linkedin.com/in/${config.social.linkedin}`);

  return "Opening linkedin...";
};
