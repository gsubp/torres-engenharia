import React from "react";
import "../styles/projeto.scss";
import Header from "../components/Header";
import Footer from "../components/Footer";
import incendioImg from "../assets/incendio-img.png";
import incendioIcon from "../images/incendio.png";

export default function Incendio() {
  return (
    <div className="container">
      <Header />
      <section className="projeto-section">
        <img
          src={incendioIcon}
          alt="Projeto de Prevenção e Combate a Incêndio"
        />
        <h1>Projeto de Prevenção e Combate a Incêndio</h1>
      </section>
      <main className="projeto-main">
        <article>
          <p>
            O documento sistematiza e especifica os elementos necessários para
            garantir a segurança dos ocupantes e auxiliar no combate a
            incêndios. Ele define o espaço e o sistema do edifício para evacuar
            rapidamente as pessoas em uma emergência e ativar o combate a
            incêndios em caso de incêndio precoce.
          </p>
        </article>
        <img
          src={incendioImg}
          alt="Projeto de Prevenção e Combate a Incêndio"
        />
      </main>
      <p>
        Através deste projeto são dimensionados os sistemas e equipamentos
        responsáveis ​​por garantir a proteção contra incêndios, como
        extintores, mangueiras e bicos, abrigos de hidrantes, tubagens, etc.
        Além disso, a localização e as instruções dos sinais de emergência
        também são exibidas.
      </p>
      <p>
        Também é obrigatório em locais com movimento frequente de pessoas, como
        prédios comerciais, apartamentos e áreas industriais em geral, e também
        é obrigatório quando a área de construção ultrapassar 750 metros
        quadrados.
      </p>
      <p>
        A sua importância reside em reduzir as possibilidades de incêndio,
        prevendo as eventuais situações e garantindo que, em caso de sinistro, o
        edifício dispõe de recursos ágeis e eficazes para a extinção das chamas,
        garantindo assim a segurança dos residentes.
      </p>
      <button className="btn">Solicite seu Orçamento</button>
      <Footer />
    </div>
  );
}
