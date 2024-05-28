import React from "react";
import "./css/home.css";
import Navbar from "./Components/Navbar";

export default function Home() {
  return (
    <div className="content">
      <Navbar className="nav" />
      <div className="main-content">
        <div id="home" className="home">
        <p>
            ¡Hola! Soy Elias Reyes, un apasionado desarrollador con una sólida
            formación en tecnologías web y una pasión por crear soluciones
            innovadoras. Con una mentalidad orientada al detalle y una
            curiosidad insaciable por aprender, estoy constantemente buscando
            mejorar mis habilidades y enfrentar nuevos desafíos.
          </p>
        </div>
        <div id="aboutme" className="aboutme">
        </div>
        <div id="mywork" className="mywork">
          sdsdsd
        </div>
        <div id="contact" className="contact">
          sñlñlñ
        </div>
      </div>
    </div>
  );
}
