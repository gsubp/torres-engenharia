import React from "react";
import "./styles.css";
import Footer from "../../components/Footer";
import mapIcon from "../../images/map.svg";
import mailIcon from "../../images/mail.svg";
import instagramIcon from "../../images/instagram.svg";
import whatsappIcon from "../../images/whatsapp.svg";
export default function Contato() {
  return (
    <div className="container">
      <section className="contato">
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
                <p>
                  Rua Antônio Luiz de Sá, 400,
                  <br />
                  Tancreado Neves, Serra Talhada - PE
                  <br />
                  56909-085
                  <br />
                </p>
              </a>
            </li>
            <li>
              <a
                href="https://api.whatsapp.com/send?phone=5587998073764"
                target="_black"
              >
                <img src={whatsappIcon} />
                <p>87 99807-3764</p>
              </a>
            </li>
            <li>
              <a href="mailto:contato@torresengenharia.com" target="_black">
                <img src={mailIcon} />
                <p>contato@torresengenharia.com</p>
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/torresengenharialtda"
                target="_black"
              >
                <img src={instagramIcon} />
                <p>@torresengenharialtda</p>
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
      </section>
      <Footer />
    </div>
  );
}
