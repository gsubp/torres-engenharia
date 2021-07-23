import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import "../styles/quem-somos.scss";

export default function QuemSomos() {
  return (
    <div className="container">
      <Header />
      <section className="sobre">
        <div>
          <h1 className="title h1">Quem Somos</h1>
        </div>
      </section>
      <main className="main-content">
        <div className="desc">
          <p className="text">
            <span className="text">A TORRES ENGENHARIA</span> foi idealizada e
            vem se desenvolvendo sobre pilares que se tornaram premissas para
            todos os envolvidos, como a valorização da equipe, rígidos
            princípios éticos e morais, atendimento ágil na busca por soluções.
            A qualidade dos serviços prestados pela empresa está baseada no
            atendimento personalizado, na participação efetiva dos sócios na
            execução do trabalho e na compreensão dos clientes.
          </p>
        </div>
        <div className="section-content">
          <section className="missao">
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
            <h2 className="title h2">Visão</h2>
            <p className="text">
              Tornar-se referência de mercado em tecnologia, competência, ética
              e sustentabilidade no fornecimento de componentes de concreto,
              realizar inovações criativas em todos os ramos da construção civil
              e consolidar sua imagem forte e única de marca.
            </p>
          </section>
        </div>
        <section className="valores">
          <h2 className="title h2">Valores</h2>
          <div className="valor-grid">
            <div className="item-valor">
              <h3 className="title h3">Excelência e Qualidade</h3>
              <p className="text">
                Procuramos desenvolver o nosso trabalho de forma excelente e
                promover o crescimento pessoal contínuo e a qualificação
                profissional dos nossos colaboradores de forma a garantir a
                satisfação de todas as partes envolvidas
              </p>
            </div>
            <div className="item-valor">
              <h3 className="title h3">Responsabilidade Ambiental</h3>
              <p className="text">
                Respeitamos o meio ambiente e assumimos o compromisso de
                promover a sustentabilidade, aliando o empreendedorismo ao
                desenvolvimento econômico, social e ambiental.
              </p>
            </div>
            <div className="item-valor">
              <h3 className="title h3">Ética e Transparência</h3>
              <p className="text">
                No âmbito das normas técnicas vigentes, focar na essência e
                buscar sempre a melhor solução.
              </p>
            </div>
            <div className="item-valor">
              <h3 className="title h3">Saúde e Segurança</h3>
              <p className="text">
                Segurança e bem estar, são valores indispensáveis no ambiente de
                trabalho.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
