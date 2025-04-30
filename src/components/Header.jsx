import React, { useState, useEffect } from "react";
import profileImage from "../Images/Profilet1.jpg";
import "../CSS-Files/Header.css";
import api from "../api";



function Header() {
  const [aboutData, setAboutMeData] = useState('')

  useEffect(() => {
    async function getAboutMeData() {
      try {
        const response = await fetch(`${api ? api.productionAPI : api.developmentAPI}/api/v1/aboutme`);
        const jsonData = await response.json();
        setAboutMeData(jsonData.result[0]);
      } catch (error) {
        console.log(error)

      }
    }

    getAboutMeData();

  }, []);


  console.log(aboutData)
  return (

    <header>
      <div className="image-container">
        <img src={profileImage} alt="Profile_Picture" />
      </div>
      <h1 id="name">{`${aboutData.first_name} ${aboutData.last_name}`}</h1>
      <h2 id="profession">{aboutData.profession}</h2>
    </header>

  );
}

export default Header;
