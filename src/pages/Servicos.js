import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import arquitetonicoImg from "../images/arquitetonico.png";
import eletricoImg from "../images/eletrico.png";
import estruturalImg from "../images/estrutural.png";
import gerenciamentoImg from "../images/gerenciamento.png";
import incendioImg from "../images/incendio.png";
import laudoImg from "../images/laudo.png";
import orcamentoImg from "../images/orcamento.png";
import sanitarioImg from "../images/sanitario.png";
import acompanhamentoImg from "../images/acompanhamento.png";
import "../styles/servicos.scss";

export default function Servicos() {
  return (
    <div className="container">
      <Header />
      <section className="servicos">
        <h1>CONHEÇA NOSSOS SERVIÇOS</h1>
        <p>Procuramos entregar os melhores serviços para suas necessidades.</p>
      </section>
      <div className="servicos-grid">
        <div className="item-servico">
          <div className="item-servico-icon">
            <img src={arquitetonicoImg} alt="Projeto Arquitetônico" />
          </div>
          <div className="item-servico-desc">
            <h2>Projeto Arquitetônico</h2>
            <p>
              É a materialização da idéia, do espaço imaginado, é a
              representação da concepção projetual.
            </p>
          </div>
        </div>
        <div className="item-servico">
          <img src={eletricoImg} alt="Projeto Elétrico" />
          <div className="item-servico-desc">
            <h2>Projeto Elétrico</h2>
            <p>
              Representa-se como o conjunto de todas as informações, cálculos,
              desenhos e detalhes referentes à uma instalação elétrica, máquina
              ou equipamento eletroeletrônico.
            </p>
          </div>
        </div>
        <div className="item-servico">
          <img src={estruturalImg} alt="Projeto Estrutural" />
          <div className="item-servico-desc">
            <h2>Projeto Estrutural</h2>
            <p>
              É um projeto complementar ao arquitetônico cujo foco é o
              dimensionamento e detalhamento dos elementos estruturais (pilares,
              vigas, lajes).
            </p>
          </div>
        </div>
        <div className="item-servico">
          <img
            src={incendioImg}
            alt="Projeto de Prevenção e Combate a Incêncio"
          />
          <div className="item-servico-desc">
            <h2>Projeto de Prevenção e Combate a Incêncio</h2>
            <p>
              É um documento que descreve as ações adotadas em determinada
              construção para garantir a segurança das pessoas contra incêndios.
            </p>
          </div>
        </div>
        <div className="item-servico">
          <img src={sanitarioImg} alt="Projeto Hidrosanitário" />
          <div className="item-servico-desc">
            <h2>Projeto Hidrosanitário</h2>
            <p>
              Inclui o Projeto Hidráulico e o Projeto Sanitário e abrange a
              concepção de toda a distribuição de água fria, água quente,
              esgoto, água pluvial, caixas de gordura e sistema de ventilação da
              edificação.
            </p>
          </div>
        </div>
        <div className="item-servico">
          <img src={gerenciamentoImg} alt="Gerenciamento" />
          <div className="item-servico-desc">
            <h2>Gerenciamento</h2>
            <p>
              Compreende habilidades e técnicas necessárias para se organizar
              atividades em prol de um objetivo previamente definido.
            </p>
          </div>
        </div>
        <div className="item-servico">
          <img src={laudoImg} alt="Laudo Técnico" />
          <div className="item-servico-desc">
            <h2>Laudo Técnico</h2>
            <p>
              Um documento que explica indiretamente os direitos e obrigações
              das partes de um projeto de engenharia civil após a conclusão do
              projeto.
            </p>
          </div>
        </div>
        <div className="item-servico">
          <img src={acompanhamentoImg} alt="Acompanhamanto" />
          <div className="item-servico-desc">
            <h2>Acompanhamento de Obra</h2>
            <p>
              Inclui atividades de verificação e acompanhamento durante a fase
              de execução da obra, comparando o conteúdo da execução com os
              respetivos projetos, apontando assim eventuais desvios.
            </p>
          </div>
        </div>
        <div className="item-servico">
          <img src={orcamentoImg} alt="Orçamento" />
          <div className="item-servico-desc">
            <h2>Orçamento</h2>
            <p>
              Faz parte do plano financeiro estratégico e inclui a previsão de
              receitas e despesas futuras administradas em um determinado
              serviço.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
