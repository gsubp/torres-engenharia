import React from "react";
import { Link } from "react-router-dom";
import ChevronDown from "../assets/chevron-down.svg";
import "../styles/dropdown.scss";

export default function Dropdown() {
  return (
    <div className="dropdown">
      <button className="dropbtn">
        <Link to="/servicos" className="line-title">
          Serviços
        </Link>
        <img src={ChevronDown} />
      </button>
      <div className="dropdown-content">
        <Link to="/servicos/arquitetonico" className="line-title">
          Projeto Arquitetônico
        </Link>
        <Link to="/servicos/eletrico" className="line-title">
          Projeto Elétrico
        </Link>
        <Link to="/servicos/estrutural" className="line-title">
          Projeto Estrutural
        </Link>
        <Link to="/servicos/incendio" className="line-title">
          Projeto de Prevenção e Combate a Incêndio
        </Link>
        <Link to="/servicos/hidrossanitario" className="line-title">
          Projeto Hidrossanitário
        </Link>
        <Link to="/servicos/gerenciamento" className="line-title">
          Gerenciamento
        </Link>
        <Link to="/servicos/laudo" className="line-title">
          Laudo Técnico
        </Link>
        <Link to="/servicos/acompanhamento" className="line-title">
          Acompanhamento de Obra
        </Link>
        <Link to="/servicos/orcamento" className="line-title">
          Orçamento
        </Link>
      </div>
    </div>
  );
}
