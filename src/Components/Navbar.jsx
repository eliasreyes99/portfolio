import React, { useEffect, useRef } from "react";
import "../css/navbar.css";

export default function Navbar() {
  const navRef = useRef(null);
  const burgerRef = useRef(null);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Mueve handleBurgerClick fuera del useEffect
  const handleBurgerClick = () => {
    const nav = navRef.current;
    const burger = burgerRef.current;
    const navLinks = nav.querySelectorAll("li");

    nav.classList.toggle("nav-active");

    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
      }
    });

    burger.classList.toggle("toggle");
  };

  useEffect(() => {
    const burger = burgerRef.current;

    burger.addEventListener("click", handleBurgerClick);

    return () => {
      burger.removeEventListener("click", handleBurgerClick);
    };
  }, []);

  return (
    <div className="navbar">
      <ul className="nav-links" ref={navRef}>
        <li>
          <button
            onClick={() => {
              scrollToSection("home");
              handleBurgerClick();
            }}
          >
            Home
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              scrollToSection("skills");
              handleBurgerClick();
            }}
          >
            Skills
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              scrollToSection("mywork");
              handleBurgerClick();
            }}
          >
            My work
          </button>
        </li>
      </ul>
      <div className="burger" ref={burgerRef}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </div>
  );
}
