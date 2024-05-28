import React from "react";
import '../css/navbar.css'
import { LinkedinIcon } from "lucide-react";
import { GithubIcon } from "lucide-react";
import { PhoneIcon } from "lucide-react";

export default function Navbar() {
  const scrollToSection = (id) => {
    const elemnet = document.getElementById(id);
    if (elemnet) {
      elemnet.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
        <div className="navbar">
          <ul className="sections">
            <li>
              <button onClick={() => scrollToSection("home")}>Home</button>
            </li>
            <li>
              <button onClick={() => scrollToSection("aboutme")}>
                About me
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection("mywork")}>My work</button>
            </li>
            <li>
              <button onClick={() => scrollToSection("contact")}>
                Contact
              </button>
            </li>
          </ul>
          <div className="contact">
            <a
              href="https://www.linkedin.com/in/elias-reyes-gonzalez-873778269/"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedinIcon color="black" />
            </a>
            <a
              href="https://github.com/eliasreyes99"
              target="_blank"
              rel="noreferrer"
            >
              <GithubIcon color="black" />
            </a>
            <a href="https://wa.me/3321747670"
            target="_blank"
            rel="noreferrer">
              <PhoneIcon color="black" />
            </a>
          </div>
        </div>
  );
}
