project
|-- documents
    |-- files.md
    |-- todo.md
|-- portfolio
    |--eslintrc.json
    |-- .gitignore
    |-- next/
    |-- next-env.d.ts
    |-- next.config.mjs
    |-- node_modules/
    |-- package-lock.json
    |-- package.json
    |-- postcss.config.js
    |-- public/
    |-- src/
        |-- app
            |-- favicon.ico
            |-- globals.css
            |-- layout.tsx
            |-- page.tsx
        |-- components
            |-- ColorChange.tsx
            |-- colorUtils.ts
            |-- DeviceSize.tsx
            |-- labels.ts
        |-- images
            |-- amirysvehla.png
            |-- manpuku.png
        |-- pages
            |-- languages.tsx
            |-- layouts
                |-- home
                    |-- components
                        |-- Display.tsx
                        |-- info.tsx
                        |-- Welcome.tsx
                    |-- homePage.tsx
                    |-- layouts
                        |-- desktopHome.tsx
                        |-- mobileHome.tsx
                        |-- tabletHome.tsx
                |-- languages
                    |-- components
                    |-- languagePage.tsx
                    |-- layouts
                        |-- desktopLanguage.tsx
                        |-- mobileLanguage.tsx
                        |-- tabletLanguage.tsx
                |-- projects
                    |-- [category]
                        |-- [projectName].tsx
                    |-- components
                        |-- Menu.tsx
                        |-- ProjectLayout.tsx
                        |-- Variables.tsx
                    |-- layouts
                        |-- desktopProject.tsx
                        |-- mobileProject.tsx
                        |-- tabletProject.tsx
                    |-- projectsPage.tsx
                |-- store
                    |-- components
                    |-- layouts
                        |-- desktopStore.tsx
                        |-- mobileStore.tsx
                        |-- tabletStore.tsx
                    |-- storePage.tsx
                |-- websites
                    |-- components
                        |-- gallery
                        |-- labels.ts
                    |-- layouts
                        |-- desktopWebsites.tsx
                        |-- mobileWebsites.tsx
                        |-- tabletWebsites.tsx
                    |-- websitesPage.tsx
            |-- projects.tsx
            |-- store.tsx
            |-- websites.tsx
    |-- tailwind.config.ts
    |-- tsconfig.json





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
            <div className="h-full w-full flex flex-col">
              <div className="h-[10vh] w-full border-b border-black bg-blue-500">
                <p>This is a test</p>
                {/* <Welcome title={project.title} menu={project.menu} /> */}
              </div>
              <div className="flex h-[90vh] w-full">
                <div className="h-full w-[25vw] border-r border-black">
                  {/* <Info
                    aim1={project.aim1}
                    aim2={project.aim2}
                    aim3={project.aim3}
                    process1={project.process1}
                    process2={project.process2}
                    process3={project.process3}
                    process4={project.process4}
                    code={project.code}
                  /> */}
                </div>
                <div className="h-full w-[75vw]">
                  {/* <Display image={project.image} version={project.version} /> */}
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
