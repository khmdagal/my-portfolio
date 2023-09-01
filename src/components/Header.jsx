import React from "react";
import profileImage from "../Images/Profilet1.jpg";
import "../CSS-Files/Header.css";




function Header() {
  return (
   
      <header>
        <div className="image-container">
          <img src={profileImage} alt="Profile_Picture" />
        </div>
      <h1 id="name">Khdar Mohamed Dagal</h1>
      <h2 id="profession">Junior Web Developer</h2>
      </header>
 
  );
}

export default Header;
