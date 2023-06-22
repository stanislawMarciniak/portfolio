import { Flex } from "@chakra-ui/react";
import { Link } from "react-scroll";
import Input from "../../input";
import { useHistory } from "../../history/hook";

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

  return (
    <Flex
      justify="space-around"
      fontSize="2xl"
      className={`custom-navbar${scrolled ? " scrolled" : ""}`}
    >
      <div
        style={{ height: "100%" }}
        className="px-2 overflow-hidden border-2 rounded-xl border-dark-yellow bg-dark-background"
      >
        <div style={{ height: "100%" }} className="overflow-y-auto">
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
      <Flex w="5xl" justify="space-around" fontSize="3xl">
        <Link
          to="resume"
          smooth={true}
          className="navbar-link"
          activeClass="active"
          spy={true}
          offset={-50}
          duration={500}
        >
          Resume
        </Link>
        <Link
          to="home"
          smooth={true}
          className="navbar-link"
          activeClass="active"
          spy={true}
          offset={-50}
          duration={500}
        >
          Home
        </Link>
        <Link
          to="skills"
          smooth={true}
          className="navbar-link"
          activeClass="active"
          spy={true}
          offset={-50}
          duration={500}
        >
          Skills
        </Link>
        <Link
          to="projects"
          smooth={true}
          className="navbar-link"
          activeClass="active"
          spy={true}
          offset={-50}
          duration={500}
        >
          Projects
        </Link>
        <Link
          to="contact"
          smooth={true}
          className="navbar-link"
          activeClass="active"
          spy={true}
          offset={-50}
          duration={500}
        >
          Contact
        </Link>
      </Flex>
    </Flex>
  );
};
