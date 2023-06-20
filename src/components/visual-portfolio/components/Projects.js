import { Container, Row, Col } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import "animate.css";
import TrackVisibility from "react-on-screen";
import { projectsData } from "../../../../projects";

export const Projects = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              <h2 className="flex justify-center">Projects</h2>

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
