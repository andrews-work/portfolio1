import React from 'react';
import Display from './Display';
import Link from 'next/link';

interface ProjectLayoutProps {
  project: {
    title: string;
    menu: string;
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
      <div className="flex border-b border-black items-center h-[15vw]">
        <Link href="/projects">
          <div className="flex text-4xl h-full ml-[2vw]">{project.title}</div>
        </Link>
        <div>{project.menu}</div>
      </div>
      <div className="w-[95vw] h-full flex flex-col items-center">
        <div className="mt-[5vh] w-full h-[50vw] flex-col items-center ml-[10vw] p-4">
          <h1 className="text-5xl mb-[2vh]">Aim</h1>
          <p className="text-3xl">1. {project.aim1}</p>
          <p className="text-3xl">2. {project.aim2}</p>
          <p className="text-3xl">3. {project.aim3}</p>
        </div>
        <div className="w-full h-[30] flex-col items-center ml-[10vw] p-4">
          <h1 className="text-5xl mb-[2vh]">Process</h1>
          <p className="text-3xl">1. {project.process1}</p>
          <p className="text-3xl">2. {project.process2}</p>
          <p className="text-3xl">3. {project.process3}</p>
          <p className="text-3xl">4. {project.process4}</p>
        </div>
        <div className="w-full h-[10vh] flex-col items-center ml-[10vw] p-4">
          <h1 className="text-5xl mb-[2vh]">Code</h1>
          <Link href={project.code} passHref>
            <a target="_blank" rel="noopener noreferrer" className="text-3xl">
              {project.code}
            </a>
          </Link>
        </div>
        <div className="w-full flex-col items-center p-4">
          <Display image={project.image} version={project.version} />
        </div>
      </div>
    </div>
  );
};

export default ProjectLayoutM;
