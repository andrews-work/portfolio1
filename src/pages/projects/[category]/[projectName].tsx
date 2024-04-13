import React from 'react';
import { useRouter } from 'next/router';
import ProjectLayout from '@/pages/layouts/projects/components/ProjectLayout';
import { projectsData } from '@/components/data/Variables';
import { StaticImageData } from 'next/image';

const ProjectPage = () => {
  const router = useRouter();
  const { category, projectName } = router.query;

  // Find the project data based on the category and projectName
  const project = projectsData.find(
    (project) => project.category === category && project.name === projectName
  );

  // If the project is not found, return early without rendering the ProjectLayout component
  if (!project) {
    return <div>Project not found</div>;
  }

  // Use a type assertion to tell TypeScript that project.image is of type StaticImageData
  const image = project.image as StaticImageData;

  // Pass the project data to the ProjectLayout component
  return <ProjectLayout project={{ ...project, image: image.src }} />;
};

export default ProjectPage;
