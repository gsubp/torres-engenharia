import React from "react";
import laudoImg from "../assets/laudo-img.png";
import Footer from "../components/Footer";
import laudoIcon from "../images/laudo.png";
import "../styles/projeto.scss";

export default function Laudo() {
  return (
    <div className="container">
      <section className="projeto-section">
        <img src={laudoIcon} alt="Laudo Técnico" />
        <h1>Laudo Técnico</h1>
      </section>
      <main className="projeto-main">
        <article>
          <img src={laudoImg} alt="Laudo Técnico" />
          <p>
            Um documento que explica indiretamente os direitos e obrigações das
            partes de um projeto de engenharia civil após a conclusão do
            projeto.
          </p>
        </article>
        <p>
          Documento elaborado por técnico habilitado que se responsabiliza por
          relatar a situação ou problemas na construção, descrevendo os itens
          necessários para avaliar a causa. Para garantir clareza e eficiência,
          foram feitas verificações para registrar todas as informações
          relevantes.
        </p>
        <p>
          Pode ser necessário em algumas situações, como desapropriação,
          inventário, reforma, avaliação de imóveis e fiscalização de bairro,
          normalmente comuns em ocorrências de construção civil.
        </p>
      </main>
      <button className="btn">Solicite seu Orçamento</button>
      <Footer />
    </div>
  );
}
