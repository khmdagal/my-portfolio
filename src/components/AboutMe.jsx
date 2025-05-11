import React, { useState, useEffect } from "react";
import { ScaleLoader } from "react-spinners";
import style from "../CSS-Files/AboutMe.module.css";
import api from "../api";

function AboutMe() {
  const [aboutData, setAboutMeData] = useState('');
  const [loading, setLoading] = useState(true);
  const color = "#ffffff";
  

  useEffect(() => {
    async function getAboutMeData() {
      try {
        const response = await fetch(`${api.productionAPI}/api/v1/aboutme`);
        const jsonData = await response.json();
        setAboutMeData(jsonData.result[0].about);
      } catch (error) {
        console.log(error)

      }
    }

    getAboutMeData();
  }, []);

  useEffect(() => {
    if (aboutData) {
      setLoading(false);
    }
  }, [aboutData])

  return (
    <div className={style.mainContainer}>
      {
        loading ? (
          <div className={style.loaderContainer}>
          <ScaleLoader
            color={color}
            loading={loading}
            height={100}
            width={50}
            radius={50}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
          <p>...Self introduction data is being loaded 🤞</p>
          </div>
        ) :
          <div className={style.loaderContainer}>
            <h1 className={style.title}>About Me</h1>
            <div className={style.introContainer}>
              {
                aboutData.split('. ').map((eachParagraph) => {
                  return <p> {eachParagraph}. </p>
                })
              }
            </div>
          </div>
      }

    </div>
  );
}

export default AboutMe;
