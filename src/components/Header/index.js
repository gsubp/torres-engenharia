import React from "react";
import "./styles.css";
import { Link } from "react-router-dom";
import Dropdown from "../../components/Dropdown";
import DropdownSolucoes from "../../components/DropdownSolucoes";
import logo from "../../images/icon-white.png";

export default function Header() {
  return (
    <header>
      <Link to="/">
        <img src={logo} alt="" />
      </Link>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/quem-somos">Quem Somos</Link>
        </li>
        <li>
          <Dropdown />
        </li>
        <li>
          <DropdownSolucoes />
        </li>
        <li>
          <Link to="/portfolio">Portfólio</Link>
        </li>
        <li>
          <Link to="/cursos">Cursos</Link>
        </li>
        <li>
          <Link to="/contato">Contato</Link>
        </li>
      </ul>
    </header>
  );
}
