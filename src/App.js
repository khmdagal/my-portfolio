import React from "react";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";


function App() {
// do fetching here and pass props to the relevant component.
  
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
