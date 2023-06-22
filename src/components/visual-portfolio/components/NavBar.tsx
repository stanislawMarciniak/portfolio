import { Box, Flex } from "@chakra-ui/react";
import Input from "../../input";
import { useHistory } from "../../history/hook";
import { BsDownload } from "react-icons/bs";

export const NavBar = ({ scrolled }) => {
  const {
    history,
    command,
    lastCommandIndex,
    setCommand,
    pushHistory,
    clearHistory,
    setLastCommandIndex,
  } = useHistory([]);

  const handleSmoothScroll = (event, target) => {
    event.preventDefault();
    const element = document.querySelector(target);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
      });

      // Update the URL with the corresponding anchor
      const path = window.location.pathname;
      const hash = target.slice(1);
      const url = path + "#" + hash;
      window.history.pushState(null, "", url);
    }
  };

  const handleResumeClick = () => {};

  return (
    <Flex
      align="center"
      justify="space-around"
      fontSize="2xl"
      className={`custom-navbar${scrolled ? " scrolled" : ""}`}
    >
      <div
        style={{ height: "100%" }}
        className="px-2 ml-3 overflow-hidden border-2 rounded-xl border-dark-yellow bg-dark-background"
      >
        <div style={{ height: "100%" }} className="overflow-y-auto ">
          <Input
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
      <Flex w="5xl" justify="space-around" fontSize={{ lg: "xl", xl: "3xl" }}>
        <a href="#home" onClick={(e) => handleSmoothScroll(e, "#home")}>
          Home
        </a>
        <a href="#skills" onClick={(e) => handleSmoothScroll(e, "#skills")}>
          Skills
        </a>
        <a href="#projects" onClick={(e) => handleSmoothScroll(e, "#projects")}>
          Projects
        </a>
        <a href="#contact" onClick={(e) => handleSmoothScroll(e, "#contact")}>
          Contact
        </a>
        <Flex
          align="center"
          justify="space-around"
          gap={4}
          onClick={() => handleResumeClick()}
        >
          <Box>Resume</Box>
          <BsDownload />
        </Flex>
      </Flex>
    </Flex>
  );
};
