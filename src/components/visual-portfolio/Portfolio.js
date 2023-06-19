import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";

export const Portfolio = () => {
  return (
    <div className="portfolio">
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default Portfolio;
