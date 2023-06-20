import Image from "next/image";
import { useMediaQuery } from "@mui/material";

export const ProjectCard = ({ project, index }) => {
  const isSmallerThanLg = useMediaQuery((theme) =>
    theme.breakpoints.down("lg")
  );

  return (
    <div>
      {index % 2 || isSmallerThanLg ? (
        <div className="justify-between gap-6 mb-32 lg:flex ">
          <DescriptionAndHeader project={project} />
          <ProjectImage project={project} />
        </div>
      ) : (
        <div className="justify-between gap-6 mb-32 lg:flex ">
          <ProjectImage project={project} />
          <DescriptionAndHeader project={project} />
        </div>
      )}
    </div>
  );
};

const ProjectImage = ({ project }) => {
  return (
    <Image
      className="rounded-3xl"
      layout="intrinsic"
      width={792}
      height={388}
      src={project.image_path}
      alt=""
    />
  );
};

const DescriptionAndHeader = ({ project }) => {
  return (
    <div className="mb-3 lg:w-1/3">
      <h4>{project.name}</h4>
      <span>{project.description}</span>
    </div>
  );
};
