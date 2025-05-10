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
 let component
 switch (window.location.pathname) {
      case "/home":
        component = <Header />;
        break;
      case "/about":
        component = <AboutMe />;
        break;
      case "/skills":
        component = <Skills />;
        break;
      case "/projects":
        component = <Projects />;
        break;
      case "/contact":
        component = <Contact />;
        break;
      default:
        component = <Header />;
    }
  // const handleScroll = (event) => {
  //   const targetId = event.target.getAttribute("href");
  //   const targetElement = document.querySelector(targetId);
  //   if (targetElement) {
  //     targetElement.scrollIntoView({ behavior: "smooth" });
  //   }
  // };
  // const handleLinkClick = (event) => {
  //   event.preventDefault();
  //   const targetId = event.target.getAttribute("href");
  //   const targetElement = document.querySelector(targetId);
  //   if (targetElement) {
  //     targetElement.scrollIntoView({ behavior: "smooth" });
  //   }
  // };
  // const handleLinkClick = (event) => {
  //   event.preventDefault();
  //   const targetId = event.target.getAttribute("href");
  //   const targetElement = document.querySelector(targetId);
  //   if (targetElement) {
  //     targetElement.scrollIntoView({ behavior: "smooth" });
  //   }
  // };                   
  
  return (
    <div>
      <Navbar />
      <div className="container">
        {component}
        </div>
      <Footer />
    </div>
  );
}

export default App;
