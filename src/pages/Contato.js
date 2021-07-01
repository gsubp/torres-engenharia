import React from "react";
import instagramIcon from "../assets/instagram.svg";
import mailIcon from "../assets/mail.svg";
import mapIcon from "../assets/map.svg";
import whatsappIcon from "../assets/whatsapp.svg";
import Footer from "../components/Footer";
import "../styles/contato.scss";
export default function Contato() {
  return (
    <div className="container">
      <main className="contato">
        <div className="contato-info">
          <div className="contato-text-header">
            <h1>FALE CONOSCO</h1>
            <p>
              Estamos felizes com a sua visita e esperamos que entre em contato
              o mais rápido póssivel.
            </p>
          </div>
          <ul>
            <li>
              <a href="https://goo.gl/maps/ZVWxDLNoq33KHskv6" target="_blank">
                <img src={mapIcon} />
                Rua Antônio Luiz de Sá, 400,
                <br />
                Tancreado Neves, Serra Talhada - PE
                <br />
                56909-085
                <br />
              </a>
            </li>
            <li>
              <a
                href="https://api.whatsapp.com/send?phone=5587998073764"
                target="_black"
              >
                <img src={whatsappIcon} />
                87 99807-3764
              </a>
            </li>
            <li>
              <a href="mailto:contato@torresengenharia.com" target="_black">
                <img src={mailIcon} />
                contato@torresengenharia.com
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/torresengenharialtda"
                target="_black"
              >
                <img src={instagramIcon} />
                @torresengenharialtda
              </a>
            </li>
          </ul>
        </div>
        <div className="contato-message">
          <h1>DEIXE-NOS UMA MENSAGEM</h1>
          <form>
            <input type="text" placeholder="Nome" />
            <input type="text" placeholder="Telefone" />
            <input type="text" placeholder="E-mail" />
            <textarea type="text" placeholder="Mensagem" />
            <button className="btn-dark">ENVIAR</button>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
}
