import React from "react";
import facebookIcon from "../assets/facebook.png";
import mailIcon from "../assets/gmail.png";
import instagramIcon from "../assets/instagram.png";
import twitterIcon from "../assets/twitter.png";
import youtubeIcon from "../assets/youtube.png";
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
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/torresengenharialtda"
                    target="foo"
                  >
                    <img src={instagramIcon} />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.facebook.com/Torresengenharialtda"
                    target="foo"
                  >
                    <img src={facebookIcon} />
                  </a>
                </li>
                <li>
                  <a href="https://www.twitter.com" target="foo">
                    <img src={twitterIcon} />
                  </a>
                </li>
                <li>
                  <a href="https://www.youtube.com" target="foo">
                    <img src={youtubeIcon} />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="contato-footer">
            <div className="contato-endereco">
              <span>
                Rua Antônio Luiz de Sá, 400,
                <br />
                Tancreado Neves, Serra Talhada - PE
                <br />
                56909-085
                <br />
                87 99807-3764
              </span>
            </div>
            <div className="contato-func">
              <p>Horário de Funcionamento</p>
              <span>De Segunda à Sexta-feira</span>
              <span>Das 08h as 18h</span>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
