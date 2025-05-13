import React, { useState, useEffect } from "react";
import { GridLoader } from "react-spinners";
import api from "../api";
import Card from "react-bootstrap/Card";
import style from "../CSS-Files/Skills.module.css"

export default function Skills() {
  const [skillsData, setSkillsData] = useState([])
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const color = "black";
  const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
  };

  useEffect(() => {
    async function getSkills() {
      try {
        const response = await fetch(`${api}/api/v1/skills`);
        const skillsJsonData = await response.json();
        setSkillsData(skillsJsonData.result)
      } catch (error) {
        setError('Failed to fetch skills data');
      }
    }

    getSkills();
  }, [])

  useEffect(() => {
    if (skillsData.length > 0) {
      setLoading(false);
    }
  }
    , [skillsData]);

  return (
    <div className={style.mainContainer}>
      {
        loading ? (
          <div className={style.loaderContainer}>
            <GridLoader
              color={color}
              loading={loading}
              cssOverride={override}
              height={100}
              size={30}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
            {error ? <p style={{ color: 'red' }}> {error}</p> : <p>...Skills data is being loaded 🤞</p>}
          </div>
        ) :
          <div className={style.mainContainer}>
            <h1 className={style.title}>Skills</h1>
            <div className={style.skillsContainer}>
              {
                skillsData.map((eachSkill) => {
                  return (
                    <Card key={eachSkill._id} className={style.card}>
                      <Card.Body>
                        <Card.Title>{eachSkill.name}</Card.Title>
                      </Card.Body>
                    </Card>
                  )
                })
              }
            </div>
          </div>
      }
    </div>
  );
}
