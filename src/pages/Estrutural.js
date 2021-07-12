import React from "react";
import "../styles/projeto.scss";
import Header from "../components/Header";
import Footer from "../components/Footer";
import estrutImg from "../assets/estrutural-img.png";
import estrutIcon from "../images/estrutural.png";

export default function Estrutural() {
  return (
    <div className="container">
      <Header />
      <section className="projeto-section">
        <img src={estrutIcon} alt="Projeto Estrutural" />
        <h1>Projeto Estrutural</h1>
      </section>
      <main className="projeto-main">
        <article>
          <p>
            Em resumo, o projeto estrutural (também chamado de cálculo
            estrutural) é definido por um conjunto de informações sobre o
            projeto de toda a estrutura que fará parte do edifício. Nesse
            sentido, podemos incluir tudo relacionado a: vigas, lajes,
            estruturas metálicas, pilares, fundação e alvenaria estrutural.
          </p>
        </article>
        <img src={estrutImg} alt="" />
      </main>
      <h2>A entrega desse projeto inclui:</h2>
      <div className="projeto-desc">
        <div className="projeto-desc-item">
          <ul>
            <li>Modelo 3D</li>
            <li>Quantitativos de aço e concreto</li>
            <li>Memorial descritivo</li>
            <li>Plantas de locação dos elementos estruturais</li>
            <li>
              Dimensionamento e detalhamento de vigas, pilares, lajes e
              elementos de fundação
            </li>
          </ul>
        </div>
      </div>
      <button className="btn">Solicite seu Orçamento</button>
      <Footer />
    </div>
  );
}
