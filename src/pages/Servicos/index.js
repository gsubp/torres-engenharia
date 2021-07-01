import React from "react";
import "./styles.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import arquitetonicoImg from "../../images/arquitetonico.png";
import eletricoImg from "../../images/eletrico.png";
import estruturalImg from "../../images/estrutural.png";
import incendioImg from "../../images/incendio.png";
import sanitarioImg from "../../images/sanitario.png";

export default function Servicos() {
  return (
    <div className="container">
      <Header />
      <section className="servicos">
        <h1>ESTAMOS AQUI PARA AUXILIAR COM DIVERSOS TIPOS DE SERVIÇOS</h1>
        <div className="servicos-grid">
          <div className="card-servico">
            <div className="card-servico-icon">
              <img src={arquitetonicoImg} alt="" />
            </div>
            <div className="card-servico-desc">
              <h2>Projeto Arquitetônico</h2>
              <p>
                É a materialização da idéia, do espaço imaginado, é a
                representação da concepção projetual.
              </p>
            </div>
          </div>
          <div className="card-servico">
            <div className="card-servico-icon">
              <img src={eletricoImg} alt="" />
            </div>
            <div className="card-servico-desc">
              <h2>Projeto Elétrico</h2>
              <p>
                Representa-se como o conjunto de todas as informações, cálculos,
                desenhos e detalhes referentes à uma instalação elétrica,
                máquina ou equipamento eletroeletrônico.
              </p>
            </div>
          </div>
          <div className="card-servico">
            <div className="card-servico-icon">
              <img src={estruturalImg} alt="" />
            </div>
            <div className="card-servico-desc">
              <h2>Projeto Estrutural</h2>
              <p>
                é um projeto complementar ao arquitetônico cujo foco é o
                dimensionamento e detalhamento dos elementos estruturais
                (pilares, vigas, lajes).
              </p>
            </div>
          </div>
          <div className="card-servico">
            <div className="card-servico-icon">
              <img src={incendioImg} alt="" />
            </div>
            <div className="card-servico-desc">
              <h2>Projeto de Prevenção e Combate a Incêncio</h2>
              <p>
                É um documento que descreve as ações adotadas em determinada
                construção para garantir a segurança das pessoas contra
                incêndios.
              </p>
            </div>
          </div>
          <div className="card-servico">
            <div className="card-servico-icon">
              <img src={sanitarioImg} alt="" />
            </div>
            <div className="card-servico-desc">
              <h2>Projeto Hidrosanitário</h2>
              <p>
                inclui o Projeto Hidráulico e o Projeto Sanitário e abrange a
                concepção de toda a distribuição de água fria, água quente,
                esgoto, água pluvial, caixas de gordura e sistema de ventilação
                da edificação.
              </p>
            </div>
          </div>
        </div>
        <button className="btn-dark">VEJA MAIS</button>
      </section>
      <Footer />
    </div>
  );
}
