import React from "react";
//import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import HomePage from "./components/HomePage";

function App() {
  return (
    <div>
      <Header />
      <About />
      <HomePage />
      <Projects />
      <Contact />
    </div>
  )
}

export default App;
