import React from 'react'
import "../CSS-Files/Navbar.css"

export default function NavBar() {
  const origin = window.location.origin
  
  return (
    <nav className="nav">
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href={`${origin}/aboutMe`}>About Me</a>
        </li>
        <li>
          <a href={`${origin}/skills`}>Skills</a>
        </li>
        <li>
          <a href={`${origin}/projects`}>Project</a>
        </li>
        <li>
          <a href={`${origin}/contact`}>Contact Me</a>
        </li>
      </ul>
    </nav>
  );
}
