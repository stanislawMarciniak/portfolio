import config from "../../config.json";

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

Type <span class='command'>help</span> to see the list of available commands.
Type <span class='command'>sumfetch</span> to display summary.
Type <span class='command'>repo</span> or click <u><a class="text-light-blue dark:text-dark-blue underline" href="${config.repo}" target="_blank">here</a></u> for the Github repository.
`;
};
