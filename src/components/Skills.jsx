import React, { useState, useEffect } from "react";
import api from "../api";
import Card from "react-bootstrap/Card";
import style from "../CSS-Files/Skills.module.css"

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
    <div className={style.mainContainer}>
      <h2 className={style.title}>Skills</h2>
      <div className={style.skillsContainer}>
        {skillsData.map((skill) => {
          return (
            <Card className={style.card} key={skill.name}>
              <h2 className={style.skillName}>{skill.name}</h2>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
