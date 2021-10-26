import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import "../styles/quem-somos.scss";
import missaoImg from "../assets/hands.jpg";
import visaoImg from "../assets/visao.jpg";
import valoresImg from "../assets/valores.jpg";

export default function QuemSomos() {
  return (
    <div className="container">

      <div className="container">
        <section className="sobre">
          <div>
            <h1 className="title h1">Sobre a torres</h1>
            <p className="text">
              Modernidade,  independência  e  dinamismo  são  os  três  pilares  que  hoje  formam  a
              Torres  Engenharia, idealizada  com  a  proposta  de  revitalizar  a
              Engenharia Civil e Arquitetura em Serra Talhada - PE, que há três anos atua de forma
              independente  prestando  serviço  à  empresas  locais  e  diversas  regiões  do  país.  Assinamos  o
              compromisso de viabilizar  os sonhos dos nossos clientes aliado-nos à técnicas inovadoras de
              última geração no mercado para projetos e execução de obras através da tecnologia BIM, uma
              das mais atuais e conceituadas entre engenheiros e arquitetos ao redor do mundo.
            </p>
          </div>
        </section>
        <div className="section-content">
          <section className="missao">
            <img src={missaoImg} alt="Missão" />
            <h2 className="title h2">Missão</h2>
            <p className="text">
              Com uma atitude séria, objetiva e dedicada, oferecemos soluções
              inteligentes que superam as expectativas dos clientes na área de
              construção civil. De acordo com as necessidades do mercado,
              propomos as soluções mais viáveis ​​e econômicas, e estamos sempre
              em busca de atualização tecnológica.
            </p>
          </section>
          <section className="visao">
            <img src={visaoImg} alt="Visão" />
            <h2 className="title h2">Visão</h2>
            <p className="text">
              Com  bases  fortes  construídas  na  humildade  e  coragem  de  enfrentar  novos  desafios, buscamos a inovação no mundo da Engenharia e Arquitetura. Projetamos
              com  muito  trabalho  e  dedicação  estar  entre  as  empresas  mais  conceituadas  e  confiáveis  do
              Sertão Pernambucano na próxima década. Apresentando aos clientes soluções práticas,
              sustentáveis e eficientes para a construção de seus sonhos.
            </p>
          </section>
          <section className="valores">
            <img src={valoresImg} alt="Valores" />
            <h2 className="title h2">Valores</h2>
            <p className="text">
              Qualidade,  responsabilidade  e  respeito  na  prestação  de  serviço  da  Engenharia  e
              Arquitetura  são  os  três  pilares  que nos sustentam.  Visamos  a  satisfação  de
              cada  cliente  como  cidadão  e  como  pessoa,  assim  como,  assumimos  o  compromisso  da
              construção consciente, preservando o nosso Meio Ambiente.
            </p>
          </section>
        </div>
        <Footer />
      </div>
    </div>
  );
}
