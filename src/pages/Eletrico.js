import React from "react";
import eletImg from "../assets/eletrico-img.png";
import Footer from "../components/Footer";
import eletIcon from "../images/eletrico.png";
import "../styles/projeto.scss";

export default function Eletrico() {
  return (
    <div className="container fade-in">
      <section className="projeto-section">
        <img src={eletIcon} alt="Projeto Elétrico" />
        <h1>Projeto Elétrico</h1>
      </section>
      <main className="projeto-main">
        <article>
          <img src={eletImg} alt="Projeto Elétrico" />
          <p>
            Podemos definir um projeto elétrico como uma coleção de todas as
            informações, cálculos, desenhos e detalhes relacionados a
            instalações elétricas, máquinas ou equipamentos elétricos e
            eletrônicos. Essas informações sobre eletricidade podem ser
            diagramas elétricos, planilhas de dados, layouts, desenhos técnicos
            de peças ou equipamentos, listas de componentes instalados e outros.
          </p>
        </article>
      </main>
      <h2>A Entrega desse projeto inclui:</h2>
      <div className="projeto-desc">
        <div className="projeto-desc-item">
          <ul>
            <li>Quadro de Cargas</li>
            <li>Modelo 3D</li>
            <li>Modelo Descritivo</li>
            <li>Detalhe de Quadros</li>
            <li>Diagrama unifilar e Cálculo de demanda</li>
            <li>
              Planta Baixa com Detalhamentos e Esquemas com Componentes
              Elétricos
            </li>
          </ul>
        </div>
      </div>
      <button className="btn">Solicite seu Orçamento</button>
      <Footer />
    </div>
  );
}
