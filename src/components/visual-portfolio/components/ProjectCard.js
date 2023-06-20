import Image from "next/image";

export const ProjectCard = ({ project, index }) => {
  return (
    <div>
      {index % 2 === 1 ? (
        <div className="flex justify-around my-20">
          <Image width="300px" height="200px" src={project.image_path} alt="" />
          <div>
            <h4>{project.name}</h4>
            <span>{project.description}</span>
          </div>
        </div>
      ) : (
        <div className="flex justify-around my-20">
          <div>
            <h4>{project.name}</h4>
            <span>{project.description}</span>
          </div>
          <Image width="500px" height="200px" src={project.image_path} alt="" />
        </div>
      )}
    </div>
  );
};
