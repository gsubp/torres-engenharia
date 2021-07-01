import React from "react";
import { Link } from "react-router-dom";
import ChevronDown from "../images/chevron-down.svg";
import "../styles/dropdown.scss";

export default function Dropdown() {
  return (
    <div className="dropdown">
      <button className="dropbtn">
        <Link to="/servicos">Serviços</Link>
        <img src={ChevronDown} />
      </button>
      <div className="dropdown-content">
        <Link to="/servicos/arquitetonico">Projeto Arquitetônico</Link>
        <Link to="/servicos/eletrico">Projeto Elétrico</Link>
        <Link to="/servicos/estrutural">Projeto Estrutural</Link>
        <Link to="/servicos/incendio">
          Projeto de Prevenção e Combate a Incêndio
        </Link>
        <Link to="/servicos/hidrossanitario">Projeto Hidrossanitário</Link>
        <Link to="/servicos/gerenciamento">Gerenciamento</Link>
        <Link to="/servicos/laudo">Laudo Técnico</Link>
        <Link to="/servicos/acompanhamento">Acompanhamento de Obra</Link>
        <Link to="/servicos/orçamento">Orçamento</Link>
      </div>
    </div>
  );
}
