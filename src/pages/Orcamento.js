import React from "react";
import orcamentoImg from "../assets/orcamento-img.png";
import Footer from "../components/Footer";
import orcamentoIcon from "../images/orcamento.png";
import "../styles/projeto.scss";

export default function Orcamento() {
  return (
    <div className="container fade-in">
      <section className="projeto-section">
        <img src={orcamentoIcon} alt="Orçamento" />
        <h1>Orçamento</h1>
      </section>
      <main className="projeto-main">
        <article>
          <img src={orcamentoImg} alt="Orçamento" />
          <p>
            Faz parte do plano financeiro estratégico e inclui a previsão de
            receitas e despesas futuras administradas em um determinado serviço.
          </p>
        </article>
        <p>
          Corresponde a uma ferramenta de gestão que contém todos os custos dos
          serviços de engenharia e é representada por uma planilha que detalha
          todos os itens necessários para compor o custo final. Portanto,
          facilita a tomada de decisões, cobre todas as necessidades do trabalho
          e economiza dinheiro com isso.
        </p>
        <p>
          Nosso orçamento é formulado e detalhado para garantir que as
          informações sejam confiáveis. Além disso, eles são fáceis de entender,
          de modo que podem ser usados ​​com segurança e eficácia durante a
          execução do projeto.
        </p>
      </main>
      <button className="btn">Solicite seu Orçamento</button>
      <Footer />
    </div>
  );
}
