import { useQuery } from '@tanstack/react-query'
import { CircleLoader } from "react-spinners";
import style from "../CSS-Files/Projects.module.css";
import api from "../api";

function Projects() {
 

  async function getProjects() {
    try {
      const response = await fetch(`${api}/api/v1/projects`);
      const projects = await response.json();
      return projects.result
    } catch (error) {
      console.log(`Failed to fetch projects data ${error.message}`);
    }
  }

  const { data, isLoading, error } = useQuery({
    queryKey: ['projects'],
    queryFn: getProjects,
    staleTime: 60000 // One minute
  });




 

  return (
    <div className={style.mainContainer}>
      {
        isLoading ?
          (
            <div className={style.loaderContainer}>
              <CircleLoader
                height={200}
                loading={isLoading}
                width={100}
                size={50}
                radius={50}
              />
              {error ? <p style={{ color: 'red' }}> {error.message}</p> : <p>... Projects data is being loaded 🤞</p>}
            </div>
          ) :
          <div>
            <h2 className={style.title}>Projects</h2>
            <div className={style.projectsContainer}>
              {data?.map((project) => {
                return (
                  <div className={style.projectCard} key={project.id}>
                    <div className={style.projectIntro}>
                      <h3 className={style.projectTitle}>{project.name}</h3>
                      <span className={style.myRole}>My Role: {project.role}</span>
                      <a
                        className={style.demoLink}
                        href={`${typeof project.demo === "string"
                          ? project.demo
                          : project.demo[0]
                          }`}
                      >
                        Project Demo
                      </a>
                    </div>

                    <div className={style.projectObjective}>
                      <span>Objective </span>
                      <p>{project.objective}</p>
                    </div>

                    <div className={style.techStack}>
                      <span>Project Tech Stack </span>
                      <p>{project.tech_stack}</p>
                    </div>
                    <div className={style.frontend}>
                      <span>Front-end Tech Stack </span>
                      <p>{project.frontend}</p>
                    </div>
                    <div className={style.backend}>
                      <span>Back-end Tech Stack </span>
                      <p>{project.backend}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
      }
    </div>
  );
}

export default Projects;
