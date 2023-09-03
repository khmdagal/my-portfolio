import React from "react";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {
  // do fetching here and pass props to the relevant component.
  let Component;
  switch (window.location.pathname) {
    case "/":
      Component = <Header />;
      break;
    case "/aboutMe":
      Component = <AboutMe />;
      break;
    case "/skills":
      Component = <Skills />;
      break;
    case "/projects":
      Component = <Projects />;
      break;
    case "/contact":
      Component = <Contact />;
      break;
    default:
      Component = null;
      break;
  }
  return (
    <div>
      <Navbar />
    
      {Component}
      
      <Footer />
    </div>
  );
}

export default App;
