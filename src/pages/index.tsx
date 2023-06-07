import Head from "next/head";
import React from "react";
import config from "../../config.json";
import { Input } from "../components/input";
import { useHistory } from "../components/history/hook";
import { History } from "../components/history/History";
import { banner } from "../utils/banner";

interface IndexPageProps {
  inputRef: React.MutableRefObject<HTMLInputElement>;
}

const IndexPage: React.FC<IndexPageProps> = ({ inputRef }) => {
  const containerRef = React.useRef(null);
  const {
    history,
    command,
    lastCommandIndex,
    setCommand,
    setHistory,
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

  const init = React.useCallback(() => setHistory(banner(getSize())), []);

  React.useEffect(() => {
    init();

    const handleResize = () => {
      setHistory(banner(getSize()));
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [init]);

  React.useEffect(() => {
    init();
  }, [init]);

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

      <div className="h-full p-8 overflow-hidden border-2 rounded-xl border-light-yellow dark:border-dark-yellow">
        <div ref={containerRef} className="h-full overflow-y-auto">
          <History history={history} />

          <Input
            inputRef={inputRef}
            containerRef={containerRef}
            command={command}
            history={history}
            lastCommandIndex={lastCommandIndex}
            setCommand={setCommand}
            setHistory={setHistory}
            setLastCommandIndex={setLastCommandIndex}
            clearHistory={clearHistory}
          />
        </div>
      </div>
    </>
  );
};

export default IndexPage;
