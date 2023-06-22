import { Box, Button, Flex, useMediaQuery } from "@chakra-ui/react";
import Input from "../../input";
import { useHistory } from "../../history/hook";
import { FiExternalLink } from "react-icons/fi";

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
  const [isSmallerThanMd] = useMediaQuery("(max-width: 990px)");

  const handleSmoothScroll = (event, target) => {
    event.preventDefault();
    const element = document.querySelector(target);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
      });

      const path = window.location.pathname;
      const hash = target.slice(1);
      const url = path + "#" + hash;
      window.history.pushState(null, "", url);
    }
  };

  const handleResumeClick = () => {
    const pdfUrl = "/resumecv.pdf";
    window.open(pdfUrl);
  };

  return (
    <Flex
      align="center"
      justify="space-around"
      fontSize="xl"
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
      {isSmallerThanMd ? (
        <Button
          onClick={() => handleResumeClick()}
          variant="unstyled"
          fontWeight="light"
        >
          <Flex align="center" justify="space-around" gap={4} fontSize="xl">
            <Box>Resume</Box>
            <FiExternalLink />
          </Flex>
        </Button>
      ) : (
        <Flex
          w="5xl"
          justify="space-around"
          align={"center"}
          fontSize={{ lg: "xl", xl: "xl" }}
        >
          <a href="#home" onClick={(e) => handleSmoothScroll(e, "#home")}>
            Home
          </a>
          <a href="#skills" onClick={(e) => handleSmoothScroll(e, "#skills")}>
            Skills
          </a>
          <a
            href="#projects"
            onClick={(e) => handleSmoothScroll(e, "#projects")}
          >
            Projects
          </a>
          <a href="#contact" onClick={(e) => handleSmoothScroll(e, "#contact")}>
            Contact
          </a>
          <Button
            onClick={() => handleResumeClick()}
            variant="unstyled"
            fontWeight="light"
          >
            <Flex
              align="center"
              justify="space-around"
              gap={4}
              fontSize={{ lg: "xl", xl: "xl" }}
            >
              <Box>Resume</Box>
              <FiExternalLink />
            </Flex>
          </Button>
        </Flex>
      )}
    </Flex>
  );
};
