import React, { useState, useEffect } from "react";
import { ClipLoader } from "react-spinners";
import profileImage from "../Images/Profilet1.jpg";
import "../CSS-Files/Header.module.css";
import api from "../api";


function Header() {
  const [aboutData, setAboutMeData] = useState('')
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const color = "#ffffff";
  const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
  };

  useEffect(() => {
    async function getAboutMeData() {
      try {
        const response = await fetch(`${api}/api/v1/aboutme`);
        const jsonData = await response.json();
        setAboutMeData(jsonData.result[0]);
      } catch (error) {
        setError('Failed to fetch about me data');
      }
    }
    getAboutMeData();
  }, []);

  useEffect(() => {
    if (aboutData) {
      setLoading(false);
    }
  }
    , [aboutData]);

  return (
    <header>
      {loading ? (
        <div className="loader-container">
          <ClipLoader
            color={color}
            loading={loading}
            cssOverride={override}
            size={150}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
          {error ? <p style={{ color: 'red' }}> { error }</p> : <p>...Personal data is being loaded 🤞</p>}
        </div>
      ) : <div>
        <div className="image-container">
          <img src={profileImage} alt="Profile_Picture" />
        </div>
        <h1 id="name">{`${aboutData.first_name} ${aboutData.last_name}`}</h1>
        <h2 id="profession">{aboutData.profession}</h2>
      </div>

      }

    </header>

  );
}

export default Header;
