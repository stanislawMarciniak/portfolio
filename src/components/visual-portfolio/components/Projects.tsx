import { Container, Row, Col } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import "animate.css";
import TrackVisibility from "react-on-screen";
import { projectsData } from "../../../../data";

export const Projects = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              <h2 className="flex justify-center text-5xl font-bold mb-14">
                Projects
              </h2>

              {projectsData.map((project, index) => {
                return (
                  <ProjectCard key={index} index={index} project={project} />
                );
              })}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
