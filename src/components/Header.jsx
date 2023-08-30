import React from "react";
import "../CSS-Files/Header.css";

function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <a href="/">Home Page</a>
          </li>
          <li>
            <a href="/About">About</a>
          </li>
          <li>
            <a href="/Projects">Projects</a>
          </li>
          <li>
            <a href="/Contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
