import React from "react";
import { Link } from "react-router-dom";
import instagramIcon from "../images/instagram.svg";
import Logo from "../images/logo-full.png";
import mailIcon from "../images/mail.svg";
import whatsappIcon from "../images/whatsapp.svg";
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
          <Link>
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
            <Link href="">
              <img src={whatsappIcon} alt="" />
            </Link>
            <Link href="">
              <img src={mailIcon} alt="" />
            </Link>
            <Link href="">
              <img src={instagramIcon} alt="" />
            </Link>
          </div>
        </div>
      </div>

      <div className="hps">
        <span>
          Desenvolvido por{" "}
          <Link href="https://www.instagram.com/hps.solucoes">
            HPS SOLUÇÔES DIGITAIS
          </Link>
        </span>
      </div>
    </footer>
  );
}
