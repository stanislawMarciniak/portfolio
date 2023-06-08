import React from "react";
import { History } from "./interface";
import { v4 as uuidv4 } from "uuid";

export const useHistory = (defaultValue: Array<History>) => {
  const [history, setHistory] = React.useState<Array<History>>(defaultValue);
  const [command, setCommand] = React.useState<string>("");
  const [lastCommandIndex, setLastCommandIndex] = React.useState<number>(0);

  return {
    history,
    setHistory,
    command,
    lastCommandIndex,
    pushHistory: (value: string) =>
      setHistory([
        ...history,
        {
          id: uuidv4(),
          date: new Date(),
          command,
          output: value,
        },
      ]),
    setCommand,
    setLastCommandIndex,
    clearHistory: () => setHistory([]),
  };
};
