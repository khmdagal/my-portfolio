import React from "react";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import "./CSS-Files/Navbar.css";

function App() {
  // do fetching here and pass props to the relevant component.
  return (
    <div>
      <Navbar />
      <div id="home">
        <Header />
      </div>
      <div id="about">
        <AboutMe />
      </div>
      <div id="skills">
        <Skills />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;
