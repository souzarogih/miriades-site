import React from 'react';
import './styles.scss';
import logo from "../../../assets/images/miriades-logo-footer.svg"
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer__content">
        <div className="footer__logo">
          <img src={logo} alt="Miríades Logo" />
          <h2>Soluções para negócios!</h2>
          <div className="footer__social">
            <h3>Siga-nos</h3>
            <ul className="footer__social-media">
              <li> <FaInstagram /> </li>
              <li> <FaLinkedin /> </li>
              <li> <FaYoutube /> </li>
            </ul>
          </div>
        </div>
        <div className="footer__column">
          <h3>HOME</h3>
        </div>
        <div className="footer__column">
          <h3>SOBRE</h3>
          <ul>
            <li><a href="#">Quem somos</a></li>
            <li><a href="#">Cultura</a></li>
            <li><a href="#">Contato</a></li>
            <li><a href="#">Impacto social</a></li>
            <li><a href="#">Impacto Educacional</a></li>
          </ul>
        </div>
        <div className="footer__column">
          <h3>CASES</h3>
          <ul>
            <li><a href="#">Vendas</a></li>
            <li><a href="#">Pagamentos</a></li>
            <li><a href="#">Negócios</a></li>
            <li><a href="#">Educação</a></li>
            <li><a href="#">Social</a></li>
            <li><a href="#">Sites / Plataformas</a></li>
            <li><a href="#">Apps Mobile</a></li>
            <li><a href="#">Backend</a></li>
          </ul>
        </div>
        <div className="footer__column">
          <h3>SERVIÇOS</h3>
          <ul>
            <li><a href="#">Greengrocer</a></li>
            <li><a href="#">FrontBox</a></li>
            <li><a href="#">Educ</a></li>
            <li><a href="#">StockStore</a></li>
            <li><a href="#">MoreSales</a></li>
            <li><a href="#">Adeptio</a></li>
            <li><a href="#">RenovoPay</a></li>
          </ul>
        </div>
        <div className="footer__column">
          <h3>PRICING</h3>
          <ul>
            <li><a href="#">Empreendedores</a></li>
            <li><a href="#">Pequenos negócios</a></li>
            <li><a href="#">Médios negócios</a></li>
            <li><a href="#">Corporações</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
