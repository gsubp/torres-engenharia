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
      <Header />
      <section className="sobre">
        <div>
          <h1 className="title h1">Sobra a torres</h1>
        </div>
      </section>
      <div className="container image-sobre">
        <div className="container bg">
          <div className="desc">
            <p className="text">
              <b>A TORRES ENGENHARIA</b> foi idealizada e vem se desenvolvendo
              sobre pilares que se tornaram premissas para todos os envolvidos,
              como a valorização da equipe, rígidos princípios éticos e morais,
              atendimento ágil na busca por soluções. A qualidade dos serviços
              prestados pela empresa está baseada no atendimento personalizado,
              na participação efetiva dos sócios na execução do trabalho e na
              compreensão dos clientes.
            </p>
          </div>
          <div className="section-content">
            <section className="missao">
              <img src={missaoImg} alt="Missão" />
              <h2 className="title h2">Missão</h2>
              <p className="text">
                Com uma atitude séria, objetiva e dedicada, oferecemos soluções
                inteligentes que superam as expectativas dos clientes na área de
                construção civil. De acordo com as necessidades do mercado,
                propomos as soluções mais viáveis ​​e econômicas, e estamos
                sempre em busca de atualização tecnológica.
              </p>
            </section>
            <section className="visao">
              <img src={visaoImg} alt="Visão" />
              <h2 className="title h2">Visão</h2>
              <p className="text">
                Tornar-se referência de mercado em tecnologia, competência,
                ética e sustentabilidade no fornecimento de componentes de
                concreto, realizar inovações criativas em todos os ramos da
                construção civil e consolidar sua imagem forte e única de marca.
              </p>
            </section>
            <section className="valores">
              <img src={valoresImg} alt="Valores" />
              <h2 className="title h2">Valores</h2>
              <p className="text">Excelência e Qualidade</p>
              <p className="text">Responsabilidade Ambiental</p>
              <p className="text">Ética e Transparência</p>
              <p className="text">Saúde e Segurança</p>
            </section>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
