import React from "react";
import { Link } from "react-router-dom";
import instagramIcon from "../assets/instagram.svg";
import Logo from "../assets/logo-full.png";
import mailIcon from "../assets/mail.svg";
import whatsappIcon from "../assets/whatsapp.svg";
import "../styles/footer.scss";
export default function Footer() {
  return (
    <footer>
      <div className="row-footer">
        <div className="footer-social">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/quem-somos">Quem Somos</Link>
            </li>
            <li>
              <Link to="/servicos">Serviços</Link>
            </li>
            <li>
              <Link to="/solucos">Soluções</Link>
            </li>
            <li>
              <Link to="/portfolio">Portfólio</Link>
            </li>
            <li>
              <Link to="/contato">Contato</Link>
            </li>
          </ul>
          <Link to="/">
            <img src={Logo} alt="" />
          </Link>
          <p>
            Rua Antônio Luiz de Sá, 400,
            <br />
            Tancreado Neves, Serra Talhada - PE
            <br />
            56909-085
            <br />
          </p>
        </div>
        <div className="footer-func">
          <p>Horário de Funcionamento</p>
          <span>De Segunda à Sexta-feira</span>
          <span>Das 08h as 18h</span>
        </div>
        <div className="footer-contato">
          <p>Entre em Contato!</p>
          <div className="footer-icons">
            <a href="">
              <img src={whatsappIcon} alt="" />
            </a>
            <a href="">
              <img src={mailIcon} alt="" />
            </a>
            <a href="">
              <img src={instagramIcon} alt="" />
            </a>
          </div>
        </div>
      </div>

      <div className="hps">
        <span>Desenvolvido por</span>
        <a href="https://www.instagram.com/hps.solucoes">
          HPS SOLUÇÕES DIGITAIS
        </a>
      </div>
    </footer>
  );
}
