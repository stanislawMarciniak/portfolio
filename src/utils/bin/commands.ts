// List of commands that do not require API calls

import * as bin from "./index";
import config from "../../../config.json";

// Help
export const help = async (args: string[]): Promise<string> => {
  const commands = Object.keys(bin).sort().join(", ");
  var c = "";
  for (let i = 1; i <= Object.keys(bin).sort().length; i++) {
    if (i % 7 === 0) {
      c += Object.keys(bin).sort()[i - 1] + "\n";
    } else {
      c += Object.keys(bin).sort()[i - 1] + " ";
    }
  }
  return `Welcome! Here are all the available commands:
\n${c}\n
[tab]: trigger completion.
[ctrl+l]/clear: clear terminal.\n
Type 'sumfetch' to display summary.
`;
};

// About
export const about = async (args: string[]): Promise<string> => {
  return `Hi, I am ${config.name}. 
Welcome to my website!
More about me:
'sumfetch' - short summary.
'resume' - my latest resume.
'readme' - my github readme.`;
};

export const resume = async (args: string[]): Promise<string> => {
  window.open(`${config.resume_url}`);
  return "Opening resume...";
};

// Contact
export const email = async (args: string[]): Promise<string> => {
  window.open(`mailto:${config.email}`);
  return `Opening mailto:${config.email}...`;
};

export const github = async (args: string[]): Promise<string> => {
  window.open(config.social.github);

  return "Opening github...";
};

export const repo = async (args: string[]): Promise<string> => {
  window.open(config.repo);

  return "Opening repository...";
};

export const linkedin = async (args: string[]): Promise<string> => {
  window.open(config.social.linkedin);

  return "Opening linkedin...";
};

// Banner
export const banner = (args?: string[]): string => {
  return `
   ___   ____                        
  /' --;^/ ,-_\\      \\ | /        
 / / --o\\ o-\\ \\\\    --(_)--       
/-/-/|o|-|\\-\\\\|\\\\    / | \\        
 '  '' |-|    '                 ___ _             _    _               __  __             _      _      _ 
       |-|                     / __| |_ __,_ _ _ (_)__| |__,___ __ __ |  \\/  |__,_ _ _ __(_)_ _ (_)__,_| |__
       |-|O                    \\__ \\  _/ _  | ' \\| (_-< / _  \\ V  V / | |\\/| / _  | '_/ _| | ' \\| / _  | / /
       |-(\\,__                 |___/\\__\\__,_|_||_|_/__/_\\__,_|\\_/\\_/  |_|  |_\\__,_|_| \\__|_|_||_|_\\__,_|_\\_\\
    ...|-|\\--,\\_....
,;;;;;;;;;;;;;;;;;;;;;;;;,.
~~,;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;,~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Type 'help' to see the list of available commands.
Type 'sumfetch' to display summary.
Type 'repo' or click <u><a class="text-light-blue dark:text-dark-blue underline" href="${config.repo}" target="_blank">here</a></u> for the Github repository.
`;
};
