import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects, technologies }) {
  console.log(projects);

  const projectFolder = projects.map((project)=>{
    return (
    <div id={project.name} key={project.id}>
      <ProjectItem name={project.name} about={project.about} technologies={project.technologies}/>
    </div>
    )
  })

  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">
        {projectFolder}
      </div>
    </div>
  );
}

export default ProjectList;