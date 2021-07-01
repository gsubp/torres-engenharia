import React from "react";
import { Link } from "react-router-dom";
import ChevronDown from "../assets/chevron-down.svg";
import "../styles/dropdown.scss";

export default function Dropdown() {
  return (
    <div className="dropdown">
      <button className="dropbtn">
        <Link to="/solucoes">Soluções</Link>
        <img src={ChevronDown} />
      </button>
      <div className="dropdown-content">
        <Link to="/solucoes/construir">Construir</Link>
        <Link to="/solucoes/reformar">Reformar</Link>
        <Link to="/solucoes/regularizar">Regularizar</Link>
      </div>
    </div>
  );
}
