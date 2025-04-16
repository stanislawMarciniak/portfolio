import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { skillsData } from "../../../../data";

export const Skills = ({ id }) => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    largeDesktop: {
      breakpoint: { max: 3000, min: 1600 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 1600, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="mb-20 -mt-4 skill" style={{ position: "relative" }}>
      <div id={id} className="transparent-element" />
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="px-16 py-14 bg-darkCustom skill-bx zoomIn">
              <h2 className="mb-8 text-5xl font-bold">
                Skills and Technologies
              </h2>
              <p className="mb-8 text-lg tracking-wider text-gray-400">
                Most of my projects focus on machine learning using Python and
                its robust ecosystem. I rely on libraries such as Pandas and
                NumPy for data processing, and I build models with scikit-learn
                and TensorFlow. As I work on increasingly complex applications,
                I’m also learning Docker to streamline model deployment and
                maintain scalable, reproducible environments.
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
              >
                {skillsData.map((skill, id) => (
                  <div className="flex flex-col items-center" key={id}>
                    <div className="p-4 rounded-full">
                      <skill.Icon
                        style={{ fill: "url(#blue-gradient)" }}
                        className="text-9xl"
                      />
                    </div>
                    <span className="text-2xl">{skill.name}</span>
                  </div>
                ))}
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
