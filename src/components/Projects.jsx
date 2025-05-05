import React,{ useEffect , useState} from "react";
import "../CSS-Files/Projects.css";
import api from "../api";
//import Data from "../Data/JasonData.json";

function Projects() {
  const [projectsData, setProjectsData] = useState([]);

  useEffect(() => {
    async function getProjects() {
      const response = await fetch(`${api.productionAPI}/api/v1/projects`);
      const projects = await response.json();
      setProjectsData(projects.result)
    }

    getProjects();
  },[])


console.log({projectsData})
  return (
    <div className="mainContainer">
      <h2 className="title">Projects</h2>
      <div className="projectsContainer">
        {projectsData.map((project) => {
          return (
            <div className="projectCard" key={project.id}>
              <div className="project-intro">
                <h3 className="projectTitle">{project.name}</h3>
                <span className="myRole">My Role: {project.role}</span>
                <a
                  className="demoLink"
                  href={`${
                    typeof project.demo === "string"
                      ? project.demo
                      : project.demo[0]
                  }`}
                >
                 Project Demo
                </a>
              </div>

              <div className="projectObjective">
                <span>Objective </span>
                <p>{project.objective}</p>
              </div>
              
              <div className="techStack">
                <span>Project Tech Stack </span>
                <p>{project.tech_stack}</p>
              </div>
              <div className="frontend">
                <span>Front-end Tech Stack </span>
                <p>{project.frontend}</p>
              </div>
              <div className="backend">
                <span>Back-end Tech Stack </span>
                <p>{project.backend}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Projects;
