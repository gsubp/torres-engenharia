import React from "react";
import instagramIcon from "../assets/instagram.svg";
import mailIcon from "../assets/mail.svg";
import mapIcon from "../assets/map.svg";
import whatsappIcon from "../assets/whatsapp.svg";
import Footer from "../components/Footer";
import "../styles/contato.scss";
import Header from "./../components/Header";
export default function Contato() {
  return (
    <div className="container">
      <main className="contato">
        <Header />
        <section className="contato-section">
          <h1>FALE CONOSCO</h1>
        </section>
        <div className="main-content">
          <div className="contato-message">
            <form>
              <input type="text" placeholder="Nome" />
              <input type="text" placeholder="Telefone" />
              <input type="text" placeholder="E-mail" />
              <textarea type="text" placeholder="Mensagem" />
              <button className="btn">ENVIAR</button>
            </form>
          </div>
          <div className="contato-info">
            <div className="contato-text-header"></div>
            <ul>
              <li>
                <a href="mailto:contato@torresengenharia.com" target="foo">
                  <img src={mailIcon} />
                  contato@torresengenharia.com
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/torresengenharialtda"
                  target="foo"
                >
                  <img src={instagramIcon} />
                  @torresengenharialtda
                </a>
              </li>
            </ul>
          </div>
        </div>
        <Footer />
      </main>
    </div>
  );
}
