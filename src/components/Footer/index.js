import React from "react";
import "./styles.css";
import { Link } from "react-router-dom";
import whatsappIcon from "../../images/whatsapp.svg";
import instagramIcon from "../../images/instagram.svg";
import mailIcon from "../../images/mail.svg";
import mapIcon from "../../images/map.svg";
import Logo from "../../images/logo-full.png";
export default function Footer() {
  return (
    <footer>
      <div className="row-footer">
        <div className="footer-social">
          <ul>
            <li>
              <Link href="">Home</Link>
            </li>
            <li>
              <Link href="">Quem Somos</Link>
            </li>
            <li>
              <Link href="">Soluções</Link>
            </li>
            <li>
              <Link href="">Portfólio</Link>
            </li>
            <li>
              <Link href="">Cursos</Link>
            </li>
            <li>
              <Link href="">Contato</Link>
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
