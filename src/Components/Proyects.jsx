import React, { useState, useEffect } from "react";
import proyects from "../mocks/proyects.json";
import "../css/Proyects.css";
import { GithubIcon } from "lucide-react";

export default function Proyects() {
  const proyectos = proyects.proyects;

  return (
    <div id="mywork" className="mywork">
      <h1>Proyects</h1>
      <ul>
        {proyectos.map((proyect) => (
          <ProyectItem key={proyect.id} proyect={proyect} />
        ))}
      </ul>
    </div>
  );
}
function ProyectItem({ proyect }) {
  const images = [
    proyect.img,
    proyect.img2,
    proyect.img3,
    proyect.img4,
    proyect.img5,
  ].filter(Boolean);

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <li>
      <div className="image-container" data-description={proyect.description}>
        <img
          src={images[currentImage]}
          alt={proyect.title}
          className="active"
        />
      </div>
      <div className="information">
        <div className="title">
          <a href={proyect.enlace} target="_blank" rel="noreferrer">
            {proyect.title}
          </a>
          <a href={proyect.github} target="_blank" rel="noreferrer">
            <GithubIcon />
          </a>
        </div>
        Tecnologías usadas: {proyect.tecnologis}
        <p>{proyect.description}</p>
      </div>
    </li>
  );
}
