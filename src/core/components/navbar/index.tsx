import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./styles.scss";
import logo from "../../../assets/images/miriades-logo.svg";

export const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId: string) => {
    navigate('/');
    setTimeout(() => {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({
          behavior: 'auto',  
          block: 'start',     
          inline: 'nearest'    
        });
      }
    }, 100);  
  };
  

  return (
    <nav className="navbar">
      <section className="navbar__logo">
        <img src={logo} alt="Miríades Logo" />
      </section>

      <section className={`navbar__menu ${isMenuOpen ? "navbar__menu--open" : ""}`}>
        <Link className="navbar__menu--options" to="/">HOME</Link>
        <a className="navbar__menu--options" onClick={() => scrollToSection('sobre')}>SOBRE</a>
        <a className="navbar__menu--options" onClick={() => scrollToSection('cases')}>CASES</a>
        <a className="navbar__menu--options" onClick={() => scrollToSection('servicos')}>SERVIÇOS</a>
        <Link className="navbar__menu--options" to={"/pricing"}>PRICING</Link>
      </section>

      <section className="navbar__buttons">
        <Link to="/register">
          <button className="navbar__buttons--register">Cadastre-se</button>
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
