import miphoto from "../miphoto.png";
import "../css/aboutme.css";

export default function AboutMe() {
  return (
    <div id="aboutme" className="aboutme">
      <img className="miphoto" src={miphoto} alt="" />
      <div className="text">
        <h1>About me</h1>
        <p>
          ¡Hola! Soy Elias Reyes, un apasionado desarrollador con una sólida
          formación en tecnologías web y una pasión por crear soluciones
          innovadoras. Con una mentalidad orientada al detalle y una curiosidad
          insaciable por aprender, estoy constantemente buscando mejorar mis
          habilidades y enfrentar nuevos desafíos.
        </p>
      </div>
    </div>
  );
}
