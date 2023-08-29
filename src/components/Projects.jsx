import React from "react";
import "../CSS-Files/Projects.css";

function Projects() {
  return (
    <div>
      <h2>Projects</h2>
      <div className="project">
        <h3>CYF Group Buddy Project</h3>
        <h4>Role: Developer</h4>
        <h4>Demo</h4>
        <p>
          Objective: To cultivate collaborative teamwork, problem-solving skills
          and a strategic programming mindset. Initiated dynamic brainstorming
          sessions to conceive and develop a project with a significant positive
          impact. Project Focus: The endeavor was centered on the utilization of
          modern front-end technologies, particularly HTML, CSS and pure
          JavaScript. Rather than relying on traditional frameworks, we
          harnessed the capabilities of the following technologies.
          Technologies: HTML, CSS and pure JavaScript.
        </p>
      </div>
      <div className="project">
        <h3>Spelling Test Practice Project</h3>
        <h4>Role: Developer</h4>
        <h4>Demo</h4>
        <p>
          Objective: The project was to undertaken overarching goal of creating
          a modern web application to aid children preparation for statutory
          spelling assessments. Front-end: Leveraged the powerful modern
          technologies such as React.js, JavaScript and CSS to deliver
          interactive user experience. Back-end: Employed Node.js and Express
          library to stablish a seamless and efficient connection between front-
          end and back-end components. Additionally, Incorporated PostgreSQL
          database to management to robust data storage and retrieval. Core
          Technologies: HTML, CSS, React.js JavaScript, Node.js, PostgreSQL and
          Cypress
        </p>
      </div>
      <div className="project">
        <h3>The Collective Foundation Project</h3>
        <h4>Role: Developer</h4>
        <h4>Demo</h4>
        <p>
          Objective: This was CYF boot camp, and the initiative was to
          undertaken to construct a fully operational CMS website catering to
          the needs of the Collective Foundation Charity, based in Hungry.
          Front-end: Blend React.js, JavaScript, CSS and Ant Design to shape a
          dynamic visually engaging front-end. Back-end: Utilized Node.js to
          ensure the smooth flow of data processing, impeccable communication
          between client side and server side and integration with a PostgreSQL
          database. Technologies: React.js, Ant Design, JavaScript, Node.js,
          PostgreSQL, HTML5 and CSS3, deployed on render.com
        </p>
      </div>
    </div>
  );
}

export default Projects;
