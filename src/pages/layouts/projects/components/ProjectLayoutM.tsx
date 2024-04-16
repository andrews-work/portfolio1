// ProjectLayoutM.tsx

import React from 'react';
import WelcomeM from './WelcomeM';
import DisplayM from './DisplayM';
import AimM from './AimM';
import ProcessM from './ProcessM';
import CodeM from './CodeM';

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
    <div className="flex-col w-full min-h-screen">
      <WelcomeM title={project.title} />

      {/* main section */}
      <div className="w-[95vw] flex flex-col items-center min-h-[120vh]">
        <div className="w-full flex flex-col items-center">
          <AimM aim1={project.aim1} aim2={project.aim2} aim3={project.aim3} />
          <ProcessM process1={project.process1} process2={project.process2} process3={project.process3} process4={project.process4} />
          <CodeM code={project.code} />
          <DisplayM image={project.image} version={project.version} />
        </div>
      </div>
    </div>
  );
};

export default ProjectLayoutM;
