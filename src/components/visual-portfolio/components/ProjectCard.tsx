import Image from "next/image";
import { AiFillGithub, AiFillProject } from "react-icons/ai";
import { useMediaQuery } from "@chakra-ui/react";

export const ProjectCard = ({ project, index }) => {
  const [isSmallerThanLg] = useMediaQuery("(max-width: 992px)");
  return (
    <div>
      {index % 2 || isSmallerThanLg ? (
        <div className="justify-between gap-6 mb-10 lg:mb-32 lg:flex ">
          <DescriptionAndHeader project={project} />
          <ProjectImage project={project} />
        </div>
      ) : (
        <div className="justify-between gap-6 mb-10 lg:mb-32 lg:flex ">
          <ProjectImage project={project} />
          <DescriptionAndHeader project={project} />
        </div>
      )}
    </div>
  );
};

const ProjectImage = ({ project }) => {
  return (
    <a target="_blank" rel="noreferrer" href={project.deployed_url}>
      <Image
        className="rounded-2xl hover:scale-95"
        layout="intrinsic"
        width={792}
        height={388}
        src={project.image_path}
        alt=""
      />
    </a>
  );
};

const DescriptionAndHeader = ({ project }) => {
  return (
    <div className="flex flex-col sm:mb-3 lg:mb-0 lg:w-1/3">
      <div className="p-3 mb-3 bg-darkCustom rounded-2xl">
        <h4>{project.name}</h4>
        <span>{project.description}</span>

        <div className="flex flex-wrap my-2 space-x-2 text-sm tracking-wider">
          {project.key_techs.map((tech) => (
            <span key={tech} className="px-2 py-1 my-1 bg-gray-800 rounded-sm">
              {tech}
            </span>
          ))}
        </div>
      </div>
      <div className="flex justify-center gap-5 mt-auto">
        <a
          target="_blank"
          rel="noreferrer"
          href={project.github_url}
          className="flex items-center px-4 py-2 space-x-3 text-lg bg-gray-800 rounded-md text-inherit decoration-transparent hover:text-fuchsia-600"
        >
          <AiFillGithub /> <span>Github</span>
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href={project.deployed_url}
          className="flex items-center px-4 py-2 space-x-3 text-lg bg-gray-800 rounded-md text-inherit decoration-transparent hover:text-fuchsia-600"
        >
          <AiFillProject /> <span>Project</span>
        </a>
      </div>
    </div>
  );
};
