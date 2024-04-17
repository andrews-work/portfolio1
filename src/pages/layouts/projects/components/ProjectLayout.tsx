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
        console.log(size);
        if (size === "mobile") {
          return project ? <ProjectLayoutM project={project} /> : <div>Project not found</div>;
        } else {
          return (
            <div className="h-full w-full flex flex-col bg-blue-500">
              <div className="h-[10vh] w-full border-b border-black bg-blue-500">
                <p>This is a test</p>
              </div>
              <div className="flex-row h-[90vh] w-full">
                <div className="h-full w-[25vw] border-r border-black">
                  <p>This is a test</p>
                </div>
                <div className="h-full w-[75vw]">
                  <p>This is a test</p>
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
