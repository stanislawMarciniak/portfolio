import Image from "next/image";

export const ProjectCard = ({ project, index }) => {
  return (
    <div>
      {!(index % 2) ? (
        <div className="flex justify-around mb-32 ">
          <Image
            className="rounded-3xl"
            layout="intrinsic"
            width={633}
            height={310}
            src={project.image_path}
            alt=""
          />
          <div className="w-1/3">
            <h4>{project.name}</h4>
            <span>{project.description}</span>
          </div>
        </div>
      ) : (
        <div className="flex justify-around mb-32">
          <div className="w-1/3">
            <h4>{project.name}</h4>
            <span>{project.description}</span>
          </div>
          <Image
            className="rounded-3xl"
            layout="intrinsic"
            width={633}
            height={310}
            src={project.image_path}
            alt=""
          />
        </div>
      )}
    </div>
  );
};
