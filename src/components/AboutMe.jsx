import React, { useState, useEffect } from "react";
import "../CSS-Files/AboutMe.css";
import api from "../api";

function AboutMe() {
  const [aboutData, setAboutMeData] = useState('');

  
  

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

  
  return (
    <div className="main-container">
      <h1 className="title">About Me</h1>
      <div className="intro-container">
        {
          aboutData.split('.').map((eachParagraph) => {
           return <p> {eachParagraph}. </p>
          })
        }
      </div>
    </div>
  );
}

export default AboutMe;
