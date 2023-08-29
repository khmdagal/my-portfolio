import React from "react";
import '../CSS-Files/Projects.css'

function Projects() {
  return (
    <div>
      <h2>Projects</h2>
      <div className="project">
        <h3>Project 1</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eget
          ultricies lorem. Nulla facilisi.
        </p>
      </div>
      <div className="project">
        <h3>Project 2</h3>
        <p>
          Suspendisse potenti. Fusce eget ex nec felis tempor auctor.
          Suspendisse potenti. In lobortis, velit sed tristique fringilla, arcu
          lorem elementum est, a commodo risus nulla ut nunc.
        </p>
      </div>
      <div className="project">
        <h3>Project 3</h3>
        <p>
          Ut semper, purus non varius iaculis, nunc lectus luctus est, vel
          varius augue turpis vel justo. Aliquam hendrerit ligula id sodales
          fermentum. Morbi ut euismod lacus.
        </p>
      </div>
    </div>
  );
}

export default Projects;
