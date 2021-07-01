import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import "../styles/quem-somos.scss";

export default function QuemSomos() {
  return (
    <div className="container">
      <Header />
      <section className="sobre">
        <h1>A TORRES ENGENHARIA</h1>
        <p>
          A empresa foi idealizada e vem se desenvolvendo sobre pilares que se
          tornaram premissas para todos os envolvidos, como a valorização da
          equipe, rígidos princípios éticos e morais, atendimento ágil na busca
          por soluções. A qualidade dos serviços prestados pela empresa está
          baseada no atendimento personalizado, na participação efetiva dos
          sócios na execução do trabalho e na compreensão dos clientes.
        </p>
      </section>
      <main className="main-content">
        <article className="missao">
          <h1>Missão</h1>
          <p>
            Com uma atitude séria, objetiva e dedicada, oferecemos soluções
            inteligentes que superam as expectativas dos clientes na área de
            construção civil.De acordo com as necessidades do mercado, propomos
            as soluções mais viáveis ​​e econômicas, e estamos sempre em busca
            de atualização tecnológica.
          </p>
        </article>
        <article className="visao">
          <h1>Visão</h1>
          <p>
            Tornar-se referência de mercado em tecnologia, competência, ética e
            sustentabilidade no fornecimento de componentes de concreto,
            realizar inovações criativas em todos os ramos da construção civil e
            consolidar sua imagem forte e única de marca.
          </p>
        </article>
      </main>
      <article className="valores">
        <h1>Valores</h1>
        <div className="valor-grid">
          <div className="item-valor">
            <h2>Ética e Transparência</h2>
            <p>
              No âmbito das normas técnicas vigentes, focar na essência e buscar
              sempre a melhor solução.
            </p>
          </div>
          <div className="item-valor">
            <h2>Excelência e Qualidade</h2>
            <p>
              Procuramos desenvolver o nosso trabalho de forma excelente e
              promover o crescimento pessoal contínuo e a qualificação
              profissional dos nossos colaboradores de forma a garantir a
              satisfação de todas as partes envolvidas
            </p>
          </div>
          <div className="item-valor">
            <h2>Responsabilidade Ambiental</h2>
            <p>
              Respeitamos o meio ambiente e assumimos o compromisso de promover
              a sustentabilidade, aliando o empreendedorismo ao desenvolvimento
              econômico, social e ambiental.
            </p>
          </div>
          <div className="item-valor">
            <h2>Saúde e Segurança</h2>
            <p>
              Segurança e bem estar, são valores indispensáveis no ambiente de
              trabalho.
            </p>
          </div>
        </div>
      </article>
      <Footer />
    </div>
  );
}
