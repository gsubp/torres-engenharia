import React from "react";
import "../styles/projeto.scss";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Arquitetonico() {
  return (
    <div className="container">
      <Header />
      <section className="projeto">
        <div className="projeto-descricao">
          <h1>Projeto Arquitetônico</h1>
          <p>
            É caracterizado por uma representação gráfica ou escrita dos
            conceitos previstos nas obras arquitetônicas, portanto, antecede
            todos os edifícios. Abrange várias etapas até a execução final da
            entrega do projeto, para que seja possível prever problemas de
            execução e promovê-la, o que é fundamental para garantir a qualidade
            do trabalho.
          </p>
          <button className="btn-light">SOLICITE SEU ORÇAMENTO</button>
        </div>
        <div className="projeto-img"></div>
      </section>
      <Footer />
    </div>
  );
}
