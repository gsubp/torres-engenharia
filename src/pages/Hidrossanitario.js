import React from "react";
import "../styles/projeto.scss";
import Header from "../components/Header";
import Footer from "../components/Footer";
import hidroImg from "../assets/hidrossanitario-img.png";
import hidroIcon from "../images/sanitario.png";

export default function Hidrossanitario() {
  return (
    <div className="container">
      <Header />
      <section className="projeto-section">
        <img src={hidroIcon} alt="Projeto Hidrossanitário" />
        <h1>Projeto Hidrossanitário</h1>
      </section>
      <main className="projeto-main">
        <article>
          <img src={hidroImg} alt="Projeto Hidrossanitáio" />
          <p>
            Projeta sistemas de distribuição de água quente e fria, coleta
            esgoto doméstico e descarga pluvial de edificações e especifica
            todas as informações necessárias ao funcionamento normal desses
            sistemas, como a definição dos pontos de abastecimento de água e o
            tamanho das tubulações.
          </p>
        </article>
      </main>
      <h2>A entrega desse projeto inclui:</h2>
      <div className="projeto-desc">
        <div className="projeto-desc-item">
          <ul>
            <li>Modelo 3D</li>
            <li>Memorial Descritivo</li>
            <li>Plantas Baixas Hidráulicas, Sanitárias e Pluviais </li>
            <li>Detalhes Isométricos dos Pontos de Consumo e Abastecimento</li>
          </ul>
        </div>
      </div>
      <button className="btn">Solicite seu Orçamento</button>
      <Footer />
    </div>
  );
}
