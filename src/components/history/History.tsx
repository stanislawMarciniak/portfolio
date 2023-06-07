import React from "react";
import { History as HistoryInterface } from "./interface";
import { Ps1 } from "../Ps1";

export const History: React.FC<{ history: Array<HistoryInterface> }> = ({
  history,
}) => {
  return (
    <div>
      {history.map((entry: HistoryInterface, index: number) => (
        <div key={entry.command + index}>
          <div className="flex flex-row space-x-2">
            <div className="flex-shrink">
              <Ps1 />
            </div>

            <div className="flex-grow">{entry.command}</div>
          </div>

          <p
            className="whitespace-pre-wrap"
            style={{ lineHeight: "1.3" }}
            dangerouslySetInnerHTML={{ __html: entry.output }}
          />
        </div>
      ))}
    </div>
  );
};

export default History;
