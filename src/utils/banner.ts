import config from "../../config.json";

export const banner = (arg?: string): string => {
  const defaultMessage = `
  Type <span class='command'>help</span> to see the list of available commands.
  Type <span class='command'>repo</span> or click <a class="link text-light-blue dark:text-dark-blue underline" href="${config.repo}" target="_blank">here</a> for the Github repository.
  Type <span class='command'>exit</span> if you prefer typical form of portfolio.
  `;

  const xlAscii = `
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
  `;

  const mdAscii = `
   ___   ____
  /' --;^/ ,-_\\      \\ | /
 / / --o\\ o-\\ \\\\    --(_)--                 
/-/-/|o|-|\\-\\\\|\\\\    / | \\
 '  '' |-|    '
       |-|
       |-|O
       |-(\\,__
    ...|-|\\--,\\_....
,;;;;;;;;;;;;;;;;;;;;;;;;,.
~~,;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;,~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  ___ _             _    _               __  __             _      _      _   
 / __| |_ __ _ _ _ (_)__| |__ ___ __ __ |  \\/  |__ _ _ _ __(_)_ _ (_)__ _| |__
 \\__ \\  _/ _, | ' \\| (_-< / _, \\ V  V / | |\\/| / _, | '_/ _| | ' \\| / _, | / /
 |___/\\__\\__,_|_||_|_/__/_\\__,_|\\_/\\_/  |_|  |_\\__,_|_| \\__|_|_||_|_\\__,_|_\\_\\
  `;

  switch (arg) {
    case "xl":
      return xlAscii + defaultMessage;
    case "md":
      return mdAscii + defaultMessage;
    case "sm":
      return defaultMessage;
  }
};
