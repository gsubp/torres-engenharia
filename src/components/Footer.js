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
          <Link to="/">
            <img src={Logo} alt="TORRES ENGENHARIA" />
          </Link>
        </div>
        <div className="footer-func">
          <p>Horário de Funcionamento</p>
          <span>De Segunda à Sexta-feira</span>
          <span>Das 08h as 18h</span>
        </div>
        <div className="footer-contato">
          <p>Entre em Contato!</p>
          <div className="footer-icons">
            <a href="mailto:contato@torresengenharia.com" target="foo">
              <img src={mailIcon} alt="contato@torresengenharia.com" />
            </a>
            <a
              href="https://api.whatsapp.com/send?phone=5587998073764"
              target="foo"
            >
              <img src={whatsappIcon} alt="87 998073764" />
            </a>
            <a
              href="https://www.instagram.com/torresengenharialtda"
              target="foo"
            >
              <img src={instagramIcon} alt="@torresengenharialtda" />
            </a>
          </div>
        </div>
      </div>

      <div className="hps">
        <span>Desenvolvido por</span>
        <a href="https://www.instagram.com/hps.solucoes" target="foo">
          HPS SOLUÇÕES DIGITAIS
        </a>
      </div>
    </footer>
  );
}
