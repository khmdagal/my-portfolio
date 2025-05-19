import { FaLinkedin, FaGithub } from "react-icons/fa";
import {MdOutlineEmail } from "react-icons/md"
import style from "../CSS-Files/Footer.module.css"

const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className={style.footerContainer}>
        <div className={style.socialIcons}>
          <a aria-label="LinkedIn link"
            href="https://www.linkedin.com/in/kh-m-dagal/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className={style.icon} />
          </a>
          <a
            aria-label="GitHub link"
            href="https://github.com/khmdagal"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className={style.icon} />
          </a>
        </div>
        <div>
          <p>© 2023 Khadar M Dagal. All rights reserved.</p>
         
                  <MdOutlineEmail className={style.icon} />
                  <p>Khmdagal@gmail.com</p>
         
        </div>
      </div>
    </footer>
  );
};

export default Footer;
