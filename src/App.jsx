import React from "react";
import "./css/app.css";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Proyects from "./Components/Proyects";
import Skills from "./Components/Skills";

export default function App() {
  return (
    <div className="content">
      <Navbar className="nav" />
      <Home id="home" className="home" />
      <Skills id="skills" className='skills' />
      <Proyects id="mywork" className="mywork" />
    </div>
  );
}
