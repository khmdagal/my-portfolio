/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import profileImage from "../Images/Profilet1.jpg";
import "../CSS-Files/HomePage.css";

function HomePage() {
  return (
    <div className="hero-main-container">
      <div className="image-container">
        <img src={profileImage} alt="Profile Picture" />
      </div>
      <div className="hero-intro-containter">
        <h2>I am Khadar M Dagal.</h2>
        <p>Full Stact Junior web Deviloper</p>
      </div>
    </div>
  );
}

export default HomePage;
