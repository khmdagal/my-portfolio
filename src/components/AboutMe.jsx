import React, { useState, useEffect } from "react";
import "../CSS-Files/AboutMe.css";

function AboutMe() {

  const [aboutData, setAboutMeData] = useState('')

  useEffect(() => {
    async function getAboutMeData() {
      try {
        const response = await fetch('http://localhost:3500/api/v1/aboutme');
        const jsonData = await response.json();
        setAboutMeData(jsonData.result[0].about);
      } catch (error) {
        console.log(error)

      }
    }

    getAboutMeData();
  }, []);

  console.log(aboutData)
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
