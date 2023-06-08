import Head from "next/head";
import React from "react";
import config from "../../config.json";
import { Input } from "../components/input";
import { useHistory } from "../components/history/hook";
import { History } from "../components/history/History";
import { banner } from "../utils/banner";
import { useSelector } from "react-redux";
import { selectFoldedState } from "../redux/folder";

interface IndexPageProps {
  inputRef: React.MutableRefObject<HTMLInputElement>;
}

const IndexPage: React.FC<IndexPageProps> = ({ inputRef }) => {
  const folded = useSelector(selectFoldedState);
  const containerRef = React.useRef(null);
  const {
    history,
    setHistory,
    command,
    lastCommandIndex,
    setCommand,
    pushHistory,
    clearHistory,
    setLastCommandIndex,
  } = useHistory([]);

  const getSize = () => {
    const screenWidth = window.innerWidth;
    if (screenWidth >= 1554) {
      return "xl";
    } else if (screenWidth >= 1161) {
      return "md";
    } else {
      return "sm";
    }
  };

  const init = () => {
    if (history.length > 0) {
      setHistory([
        {
          ...history[0],
          output: banner(getSize()),
        },
        ...history.slice(1),
      ]);
    } else {
      pushHistory(banner(getSize()));
    }
  };

  React.useEffect(() => {
    init();

    const handleResize = () => {
      setHistory((prevHistory) => [
        {
          ...prevHistory[0],
          output: banner(getSize()),
        },
        ...prevHistory.slice(1),
      ]);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  React.useEffect(() => {
    if (inputRef.current) {
      inputRef.current.scrollIntoView();
      inputRef.current.focus({ preventScroll: true });
    }
  }, [history]);

  return (
    <>
      <Head>
        <title>{config.title}</title>
      </Head>

      <div
        className={`h-full overflow-hidden border-2 rounded-xl border-dark-yellow ${
          folded ? "px-2" : "p-8"
        }`}
      >
        <div ref={containerRef} className="h-full overflow-y-auto">
          {folded ? null : <History history={history} />}

          <Input
            inputRef={inputRef}
            containerRef={containerRef}
            command={command}
            history={history}
            lastCommandIndex={lastCommandIndex}
            setCommand={setCommand}
            setHistory={pushHistory}
            setLastCommandIndex={setLastCommandIndex}
            clearHistory={clearHistory}
          />
        </div>
      </div>
    </>
  );
};

export default IndexPage;
