import React from 'react';
import DisplayM from './DisplayM';
import Link from 'next/link';

interface ProjectLayoutProps {
  project: {
    title: string;
    aim1: string;
    aim2: string;
    aim3: string;
    process1: string;
    process2: string;
    process3: string;
    process4: string;
    code: string;
    image: string;
    version: string;
  };
}

const ProjectLayoutM: React.FC<ProjectLayoutProps> = ({ project }) => {
  if (!project) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex-col">
      {/* title */}
      <div className="flex border-b border-black items-center h-[15vw]">
        <Link href="/projects">
          <div className="flex text-4xl ml-[2vw]">{project.title}</div>
        </Link>
      </div>
      {/* main section */}
      <div className="w-[95vw] flex items-center">
        <div className="w-full flex items-center p-4">
          {/* aim */}
          <div className="w-full mb-[2vh]">
            <h1 className="text-3xl mb-[2vh]">Aim</h1>
            <p className="text-xl">1. {project.aim1}</p>
            <p className="text-xl">2. {project.aim2}</p>
            <p className="text-xl">3. {project.aim3}</p>
          </div>
          {/* process */}
          <div className="w-full mb-[2vh]">
            <h1 className="text-3xl mb-[2vh]">Process</h1>
            <p className="text-xl">1. {project.process1}</p>
            <p className="text-xl">2. {project.process2}</p>
            <p className="text-xl">3. {project.process3}</p>
            <p className="text-xl">4. {project.process4}</p>
          </div>
          {/* code link */}
          <div className="w-full mb-[2vh]">
            <h1 className="text-3xl mb-[2vh]">Code</h1>
            <Link href={project.code} passHref>
              <a target="_blank" rel="noopener noreferrer" className="text-xl">
                {project.code}
              </a>
            </Link>
          </div>
          {/* image */}
            <DisplayM image={project.image} version={project.version} />
          <div className="w-full items-center p-4">
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectLayoutM;
