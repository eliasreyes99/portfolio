import React from "react";
import "./css/home.css";
import Navbar from "./Components/Navbar";
import AboutMe from "./Components/AboutMe";

export default function Home() {
 
  return (
    <div className="content">
      <Navbar className="nav" />

      <div id="home" className="home"></div>
      <AboutMe/>
      <div className="main-content">
        <div id="home" className="home"></div>
        <div id="mywork" className="mywork">
        </div>
        <div id="contact" className="contact">
        </div>
      </div>
    </div>
  );
}
