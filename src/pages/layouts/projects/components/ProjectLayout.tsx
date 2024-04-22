import React from 'react';
import Welcome from './Welcome';
import Info from './Info';
import Display from './Display';
import DeviceSize from '@/components/DeviceSize';
import ProjectLayoutM from './ProjectLayoutM';

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

const ProjectLayout: React.FC<ProjectLayoutProps> = ({ project }) => {
  if (!project) {
    return <div>Loading...</div>;
  }

  return (
    <DeviceSize>
      {(size) => {
        if (size === "mobile") {
          return project ? <ProjectLayoutM project={project} /> : <div>Project not found</div>;
        } else {
          return (
            <div className="h-full w-full">
              <div className="flex-col">
              <div className="flex h-[10vh] w-full border-black border-b">
                <Welcome title={project.title} menu={project.menu} />
              </div>
              <div className="flex h-[90vh] flex-row w-full">
                <div className="w-[25vw] border-black border-r">
                  <Info
                    aim1={project.aim1}
                    aim2={project.aim2}
                    aim3={project.aim3}
                    process1={project.process1}
                    process2={project.process2}
                    process3={project.process3}
                    process4={project.process4}
                    code={project.code}
                  />
                </div>
                <div className="w-[75vw]">
                  <Display image={project.image} version={project.version} />
                </div>
              </div>
              </div>
            </div>
          );
        }
      }}
    </DeviceSize>
  );
};

export default ProjectLayout;
