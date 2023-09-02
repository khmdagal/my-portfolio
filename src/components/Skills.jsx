import React from "react";
import Card from "react-bootstrap/Card";
import Data from "../Data/JasonData.json";
import JavaScriptLogo from "../Images/javaScript-logo.jpg";
import HTML5Logo from "../Images/html5-logo.png";
import ExpressLogo from "../Images/express-logo.jpg";
import AccessibilityLogo from "../Images/accessibility-logo.jpg";
import AntDesignLogo from "../Images/ant-design-logo.jpg";
import BootstrapLogo from "../Images/bootstrap-logo.png";
import Css3Logo from "../Images/css3-logo.jpg";
import CypressLog from "../Images/cypress_logo.png";
import SQLServerLogo from "../Images/microsoft-sql-server-logo.jpg";
import MongoDbLgo from "../Images/mongoDB-logo.png";
import PostgreSQLLogo from "../Images/PostgreSQL-logo.jpg";
import ReactLogo from "../Images/react-js-logo.png";
import ResponsiveLogo from "../Images/responsive-logo.png";
import RestAPIsLogo from "../Images/rest-apis-logo.png";
import TDDLogo from "../Images/tdd-logo.png";
import TestAutomationLogo from "../Images/test-automation-logo.png";
import "../CSS-Files/Skills.css"

export default function Skills() {
  return (
    <div className="skills-main-container">
      <h2 className="title">Skills</h2>
      <div className="skills-container">
        {Data.technical_skills.map((skill) => {
            let imageLogo;
           
          switch (skill.name) {
            case "JavaScript":
              imageLogo = JavaScriptLogo;
              break;
            case "HTML5":
              imageLogo = HTML5Logo;
              break;
            case "CSS3":
              imageLogo = Css3Logo;
              break;
            case "Express.js":
              imageLogo = ExpressLogo;
              break;
            case "REST APIs":
              imageLogo = RestAPIsLogo;
              break;
            case "React.js":
              imageLogo = ReactLogo;
              break;
            case "Ant Design":
              imageLogo = AntDesignLogo;
              break;
            case "Bootstrap":
              imageLogo = BootstrapLogo;
              break;
            case "TDD":
              imageLogo = TDDLogo;
              break;
            case "Automation Testing":
              imageLogo = TestAutomationLogo;
              break;
            case "Cypress.io":
              imageLogo = CypressLog;
              break;
            case "PostgreSQL":
              imageLogo = PostgreSQLLogo;
              break;
            case "SQL Sever":
              imageLogo = SQLServerLogo;
              break;
            case "MongoDB":
              imageLogo = MongoDbLgo;
              break;
            case "Responsive Web Design":
              imageLogo = ResponsiveLogo;
              break;
            case "Accessibility auditing":
              imageLogo = AccessibilityLogo;
              break;
            default:
              imageLogo = null;
              break;
          }

          return (
            <Card className="card" key={skill.name}>
              <img
                className="skill-image card-img-top"
                src={imageLogo}
                alt="skill-logos"
                key={skill.name}
              />
              <h2 className="skill-name">{skill.name}</h2>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
