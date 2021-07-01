import React from "react";
import "./styles.css";
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import img1 from "../../images/construcao.jpg";
import img2 from "../../images/construcao.jpg";

export default function SlideShow(){

    return(
        <div className="slide-container">
        <Slide arrows={false}>
          <div className="each-slide">
            <div style={{backgroundImage: `url(${img1})`}}>
              <div className="slide-text">                
                <h1>COMPROMETIMENTO</h1>
                <p>Nossos engenheiros trabalham em parceria, juntos ao nossos fornecedores, para auxiliar em todos os segmentos desejados por nossos clientes.</p>
              </div>
            </div>
          </div>
          <div className="each-slide">
            <div style={{backgroundImage: `url(${img2})`}}>
              <div className="slide-text">                
                <h1>EMPREENDIMENTO</h1>
                <p>Procuramos entregar o melhor serviço para nossos clientes.</p>
              </div>
            </div>
          </div>
        </Slide>
      </div>
    );
}