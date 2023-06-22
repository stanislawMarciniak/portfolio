import "bootstrap/dist/css/bootstrap.min.css";
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { useEffect, useRef, useState } from "react";

export const Portfolio = () => {
  const [scrolled, setScrolled] = useState(false);
  const scrollingElementRef = useRef(null);

  useEffect(() => {
    const scrollingElement = scrollingElementRef.current;

    const onScroll = () => {
      if (scrollingElement.scrollTop > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    scrollingElement.addEventListener("scroll", onScroll);

    return () => scrollingElement.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div>
      <svg width="0" height="0">
        <linearGradient id="blue-gradient" x1="100%" y1="100%" x2="0%" y2="0%">
          <stop stopColor="#4D3CEB" offset="0%" />
          <stop stopColor="#F059D7" offset="100%" />
        </linearGradient>
      </svg>
      <NavBar scrolled={scrolled} />
      <div
        ref={scrollingElementRef}
        style={{ overflowY: "scroll", height: "calc(100vh)" }}
      >
        <Banner id="home" />
        <Skills id="skills" />
        <Projects id="projects" />
        <Contact id="contact" />
      </div>
    </div>
  );
};

export default Portfolio;
