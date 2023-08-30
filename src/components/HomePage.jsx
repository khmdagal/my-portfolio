import React from "react";
import profileImage from "../Images/Profilet1.jpg";
import "../CSS-Files/HomePage.css";

function HomePage() {
  return (
    <div className="hero-main-container">
      <div className="image-container">
        <img src={profileImage} alt="Profile_Picture" />
      </div>
      <div className="hero-intro-containter">
        <h2>I am Khadar M Dagal.</h2>
        <p>
          Hello, I'm <span>Khadar M Dagal</span>. I'm junior web Developer. I
          have designed, developed and deployed several projects ,and my mission
          is to embrace a journey of continuous learning, crafting innovative
          web applications, and effecting positive change. This mission follows
          my successful completion of a rigorous 9-month software development
          program at CodeYourFuture boot camp in Manchester.
        </p>
        <h3>Skills</h3>
        <ul>
          <li>React</li>
          <li>Node.js</li>
          <li>HTML/CSS</li>
          <li>JavaScript</li>
        </ul>
      </div>
    </div>
  );
}

export default HomePage;
