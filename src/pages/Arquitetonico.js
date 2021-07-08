import React from "react";
import "../styles/projeto.scss";
import Header from "../components/Header";
import Footer from "../components/Footer";
import arqImg from "../images/arquitetonico (4).jpg";
import arqIcon from "../images/arquitetonico.png";

export default function Arquitetonico() {
  return (
    <div className="container">
      <Header />
      <section className="projeto-section">
        <img src={arqIcon} alt="" />
        <h1>Projeto Arquitetônico</h1>
      </section>
      <main className="projeto-main">
        <article>
          <p>
            É caracterizado por uma representação gráfica ou escrita dos
            conceitos previstos nas obras arquitetônicas, portanto, antecede
            todos os edifícios. Abrange várias etapas até a execução final da
            entrega do projeto, para que seja possível prever problemas de
            execução e promovê-la, o que é fundamental para garantir a qualidade
            do trabalho.
          </p>
          <button className="btn">SOLICITE SEU ORÇAMENTO</button>
        </article>
        <img src={arqImg} alt="" />
      </main>
      <Footer />
    </div>
  );
}
