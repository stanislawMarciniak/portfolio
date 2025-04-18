import {
  Box,
  Button,
  Flex,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useMediaQuery,
} from "@chakra-ui/react";
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

  const handleResumeClick = (file) => {
    const pdfUrl = `/${file}`;
    window.open(pdfUrl, "_blank");
  };

  return (
    <Flex
      align="center"
      justify="space-around"
      fontSize="xl"
      className={`custom-navbar${scrolled ? " scrolled" : ""}`}
      gap={2}
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
        <Menu>
          {({ isOpen }) => (
            <>
              <MenuButton
                isActive={isOpen}
                as={Button}
                variant="unstyled"
                fontWeight="light"
                rightIcon={<FiExternalLink />}
              >
                <Flex align="center" gap={2}>
                  Resume
                  <FiExternalLink />
                </Flex>
              </MenuButton>
              <MenuList>
                <MenuItem onClick={() => handleResumeClick("resume_en.pdf")}>
                  English Version
                </MenuItem>
                <MenuItem onClick={() => handleResumeClick("resume.pdf")}>
                  Polish Version
                </MenuItem>
              </MenuList>
            </>
          )}
        </Menu>
      ) : (
        <Flex w="5xl" justify="space-around" align={"center"} fontSize="xl">
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
          <Menu>
            {({ isOpen }) => (
              <>
                <MenuButton isActive={isOpen} as={Button} variant="unstyled">
                  <Flex align="center" gap={2} fontSize="xl">
                    Resume
                    <FiExternalLink />
                  </Flex>
                </MenuButton>
                <MenuList>
                  <MenuItem onClick={() => handleResumeClick("resume_en.pdf")}>
                    English Version
                  </MenuItem>
                  <MenuItem onClick={() => handleResumeClick("resume.pdf")}>
                    Polish Version
                  </MenuItem>
                </MenuList>
              </>
            )}
          </Menu>
        </Flex>
      )}
    </Flex>
  );
};
