import React, { Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import TechChallenges from "./components/TechChallenges";
import Feedback from "./components/Feedback";
import Footer from "./components/Footer";


function App() {
  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      minHeight: "100vh",
    }}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/home" element={<Header />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/techchallenges" element={<TechChallenges />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
