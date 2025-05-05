import React, { useState, useEffect } from "react";
import api from "../api";
import Card from "react-bootstrap/Card";
import "../CSS-Files/Skills.css"

export default function Skills() {
  const [skillsData, setSkillsData] = useState([])


  useEffect(() => {
    async function getSkills() {
      const response = await fetch(`${api.productionAPI}/api/v1/skills`);
      const skillsJsonData = await response.json();
      setSkillsData(skillsJsonData.result)
    }

    getSkills();
  }, [])



  return (
    <div className="skills-main-container">
      <h2 className="title">Skills</h2>
      <div className="skills-container">
        {skillsData.map((skill) => {
          return (
            <Card className="card" key={skill.name}>
              <h2 className="skill-name">{skill.name}</h2>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
