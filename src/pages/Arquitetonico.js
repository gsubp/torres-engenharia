import React from "react";
import "../styles/projeto.scss";
import Header from "../components/Header";
import Footer from "../components/Footer";
import arqImg from "../assets/arquitetonico-img.png";
import arqIcon from "../images/arquitetonico.png";

export default function Arquitetonico() {
  return (
    <div className="container">
      <Header />
      <section className="projeto-section">
        <img src={arqIcon} alt="Projeto Arquitetônico" />
        <h1>Projeto Arquitetônico</h1>
      </section>
      <main className="projeto-main">
        <article>
          <img src={arqImg} alt="Projeto Arquitetônico" />
          <p>
            É caracterizado por uma representação gráfica ou escrita dos
            conceitos previstos nas obras arquitetônicas, portanto, antecede
            todos os edifícios. Abrange várias etapas até a execução final da
            entrega do projeto, para que seja possível prever problemas de
            execução e promovê-la, o que é fundamental para garantir a qualidade
            do trabalho.
          </p>
        </article>
      </main>
      <h2>A entrega desse projeto é dividida em:</h2>
      <article className="projeto-desc">
        <div className="projeto-desc-item">
          <h3>Projeto Arquitetônico Simples</h3>
          <ul>
            <li>Planta Baixa e Corte</li>
            <li>Planta de Coberta</li>
            <li>Planta de Situação e Locação</li>
            <li>Fachada</li>
            <li>Quadro de Especificações</li>
            <li>Memórial Descritivo</li>
          </ul>
        </div>
        <div className="projeto-desc-item">
          <h3>Projeto Arquitetônico Completo</h3>
          <ul>
            <li>Projeto Arquitetônico Simples</li>
            <li>Modelo 3D</li>
            <li>Vistas Renderizadas</li>
            <li>Videos com Perspectiva de Construção</li>
          </ul>
        </div>
      </article>
      <button className="btn">SOLICITE SEU ORÇAMENTO</button>
      <Footer />
    </div>
  );
}
