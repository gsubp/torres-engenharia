import React from "react";
import acompanhamentoImg from "../assets/acompanhamento-img.png";
import Footer from "../components/Footer";
import acompanhamentoIcon from "../images/acompanhamento.png";
import "../styles/projeto.scss";

export default function Acompanhamento() {
  return (
    <div className="container">
      <section className="projeto-section">
        <img src={acompanhamentoIcon} alt="Acompanhamento de Obra" />
        <h1>Acompanhamento de Obra</h1>
      </section>
      <main className="projeto-main">
        <article>
          <img src={acompanhamentoImg} alt="Acompanhamento de Obra" />
          <p>
            Inclui atividades de verificação e acompanhamento durante a fase de
            execução da obra, comparando o conteúdo da execução com os
            respetivos projetos, apontando assim eventuais desvios.
          </p>
        </article>
        <p>
          O monitoramento é um dos aspectos básicos do seu sucesso, pois ajuda a
          otimizar o serviço e sua gestão, podendo também analisar imprevistos
          no projeto. Por isso, profissionais qualificados que possam
          identificar e compreender a situação local são obrigados a estar
          presentes, a fim de propor soluções rápidas para o problema.
        </p>
        <p>
          Desta forma, os clientes podem sentir-se mais seguros, pois todas as
          suas necessidades serão satisfeitas do início ao fim à medida que a
          construção avança.
        </p>
      </main>
      <button className="btn">Solicite seu Orçamento</button>
      <Footer />
    </div>
  );
}
