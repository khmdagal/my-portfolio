import React from "react";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";

function App() {
  
  return (
    <div >
        <Header />
        <AboutMe />
        <Skills />
        <Projects />
        <Contact />
    </div>
  );
}

export default App;
