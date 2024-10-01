import React, { useState } from "react";
import "./styles.scss";
import logo from "../../../assets/images/miriades-logo.svg";

export const Navbar: React.FC = () => {
  // Estado para controlar a visibilidade do menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Função para alternar a visibilidade do menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <section className="navbar__logo">
        <img src={logo} alt="Miríades Logo" />
      </section>
      
      {/* Toggle class based on isMenuOpen state */}
      <section className={`navbar__menu ${isMenuOpen ? "navbar__menu--open" : ""}`}>
        <a className="navbar__menu--options" href="">HOME</a>
        <a className="navbar__menu--options" href="">SOBRE</a>
        <a className="navbar__menu--options" href="">CASES</a>
        <a className="navbar__menu--options" href="">SERVIÇOS</a>
        <a className="navbar__menu--options" href="">PRICING</a>
      </section>

      <section className="navbar__buttons">
        <button className="navbar__buttons--register">Cadastra-se</button>
        <button className="navbar__buttons--login">LOGIN</button>
      </section>

      {/* Toggle icon */}
      <div className="navbar__toggle" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
};
