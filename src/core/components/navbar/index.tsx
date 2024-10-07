import React, { useState } from "react";
import "./styles.scss";
import logo from "../../../assets/images/miriades-logo.svg";
import { Link } from "react-router-dom";

export const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <section className="navbar__logo">
        <img src={logo} alt="Miríades Logo" />
      </section>
      
      <section className={`navbar__menu ${isMenuOpen ? "navbar__menu--open" : ""}`}>
        <Link className="navbar__menu--options" to="/">HOME</Link>
        <Link className="navbar__menu--options" to="/sobre">SOBRE</Link>
        <Link className="navbar__menu--options" to="/cases">CASES</Link>
        <Link className="navbar__menu--options" to="/servicos">SERVIÇOS</Link>
        <Link className="navbar__menu--options" to="/pricing">PRICING</Link>
      </section>

      <section className="navbar__buttons">
        <Link to="/register">        <button className="navbar__buttons--register">Cadastre-se</button>
        </Link>
        <button className="navbar__buttons--login">LOGIN</button>
      </section>

      <div className="navbar__toggle" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
};
