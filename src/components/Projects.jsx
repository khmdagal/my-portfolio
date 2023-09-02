import React from "react";
import "../CSS-Files/Projects.css";
import Data from "../Data/JasonData.json";

function Projects() {
  return (
    <div className="mainContainer">
      <h2 className="title">Projects</h2>
      <div className="projectsContainer">
        {Data.Projects.map((project) => {
          return (
            <div className="projectCard" key={project.Project_Name}>
              <div className="project-intro">
                <h3 className="projectTitle">{project.Project_Name}</h3>
                <span className="myRole">My Role: {project.My_role}</span>
                <a className="demoLink" href={`${project.Demo}`}>
                  Demo
                </a>
              </div>

              <div className="projectObjective">
                <span>Objective </span>
                <p>{project.Objective}</p>
              </div>
              <div className="techStuck">
                <span>Project Tech Stuck </span>
                <p>{project.Tech_stuck}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Projects;
