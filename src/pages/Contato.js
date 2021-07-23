import React from "react";
import facebookIcon from "../assets/facebook.png";
import mailIcon from "../assets/gmail.png";
import instagramIcon from "../assets/instagram.png";
import twitterIcon from "../assets/twitter.png";
import youtubeIcon from "../assets/youtube.png";
import mapIcon from "../assets/map-pin.png";
import "../styles/contato.scss";
import Header from "./../components/Header";
export default function Contato() {
  return (
    <div className="container">
      <main className="contato">
        <Header />
        <section className="contato-section">
          <h2 className="title h2">FALE CONOSCO</h2>
          <p className="text">
            Para entrar em contato, preencha o formulário ou visite nossas redes
            sociais:
          </p>
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
              <ul>
                <li>
                  <a href="https://goo.gl/maps/ZVWxDLNoq33KHskv6" target="foo">
                    <img src={mapIcon} />
                  </a>
                </li>
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
            <div className="contato-func">
              <p className="text">Horário de Funcionamento</p>
              <span className="text">De Segunda à Sexta-feira</span>
              <span className="text">Das 08h as 18h</span>
            </div>
          </div>
        </section>
        <div className="hps-home">
          <span>Desenvolvido por</span>
          <a href="https://www.instagram.com/hps.solucoes" target="foo">
            HPS SOLUÇÕES DIGITAIS
          </a>
        </div>
      </main>
    </div>
  );
}
