import React from 'react'
import style from "../CSS-Files/Navbar.module.css"

export default function NavBar() {
  return (
    <nav className={style.nav}>
      <ul>
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About Me</a>
        </li>
        <li>
          <a href="#skills">Skills</a>
        </li>
        <li>
          <a href="#projects">Project</a>
        </li>
        <li>
          <a href="#contact">Contact Me</a>
        </li>
      </ul>
    </nav>
  );
}
