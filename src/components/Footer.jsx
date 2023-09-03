
import React from 'react';
import { FaLinkedin, FaGithub } from "react-icons/fa";
import {MdOutlineEmail } from "react-icons/md"
import "../CSS-Files/Footer.css"


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="social-icons">
          <a
            href="https://www.linkedin.com/in/kh-m-dagal/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="icon" />
          </a>
          <a
            href="https://github.com/khmdagal"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="icon" />
          </a>
        </div>
        <div>
          <p>© 2023 Khadar M Dagal. All rights reserved.</p>
         
                  <MdOutlineEmail className="icon" />
                  <p>Khmdagal@gmail.com</p>
         
        </div>
      </div>
    </footer>
  );
};

export default Footer;
