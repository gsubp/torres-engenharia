import React from "react";
import arquitetonicoImg from "../images/arquitetonico.png";
import eletricoImg from "../images/eletrico.png";
import estruturalImg from "../images/estrutural.png";
import incendioImg from "../images/incendio.png";
import sanitarioImg from "../images/sanitario.png";
import Footer from "../components/Footer";
import Header from "../components/Header";
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
            <img src={arquitetonicoImg} alt="" />
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
          <img src={eletricoImg} alt="" />
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
          <img src={estruturalImg} alt="" />
          <div className="item-servico-desc">
            <h2>Projeto Estrutural</h2>
            <p>
              é um projeto complementar ao arquitetônico cujo foco é o
              dimensionamento e detalhamento dos elementos estruturais (pilares,
              vigas, lajes).
            </p>
          </div>
        </div>
        <div className="item-servico">
          <img src={incendioImg} alt="" />
          <div className="item-servico-desc">
            <h2>Projeto de Prevenção e Combate a Incêncio</h2>
            <p>
              É um documento que descreve as ações adotadas em determinada
              construção para garantir a segurança das pessoas contra incêndios.
            </p>
          </div>
        </div>
        <div className="item-servico">
          <img src={sanitarioImg} alt="" />
          <div className="item-servico-desc">
            <h2>Projeto Hidrosanitário</h2>
            <p>
              inclui o Projeto Hidráulico e o Projeto Sanitário e abrange a
              concepção de toda a distribuição de água fria, água quente,
              esgoto, água pluvial, caixas de gordura e sistema de ventilação da
              edificação.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
