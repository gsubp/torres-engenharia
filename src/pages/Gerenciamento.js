import React from "react";
import gerenciamentoImg from "../assets/gerenciamento-img.png";
import Footer from "../components/Footer";
import gerenciamentoIcon from "../images/gerenciamento.png";
import "../styles/projeto.scss";

export default function Gerenciamento() {
  return (
    <div className="container">
      <section className="projeto-section">
        <img src={gerenciamentoIcon} alt="Gerenciamento" />
        <h1>Gerenciamento</h1>
      </section>
      <main className="projeto-main">
        <article>
          <img src={gerenciamentoImg} alt="Gerenciamento" />
          <p>
            Corresponde às atividades e ferramentas relacionadas com a gestão do
            tempo, recursos e pessoas para cumprir os horários de trabalho e as
            previsões financeiras, bem como cumprir a legislação aplicável.
          </p>
        </article>
        <p>
          O principal benefício da gestão da construção está relacionado ao seu
          controle geral, onde o plano é seguido fielmente para economizar
          recursos e cumprir prazos no menor tempo possível. Desta forma, o
          cliente tem garantia de execução garantida e, portanto, sua
          confiabilidade.
        </p>
        <p>
          Os serviços de gestão envolvem a preparação de estudos de viabilidade,
          orçamentos, cronogramas, coleta de documentos necessários, contratação
          de fornecedores, acompanhamento de obra, etc.
        </p>
      </main>
      <button className="btn">Solicite seu Orçamento</button>
      <Footer />
    </div>
  );
}
