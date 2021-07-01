import React from "react";
import "../styles/header.scss";
import { Link } from "react-router-dom";
import Dropdown from "./DropServicos";
import DropdownSolucoes from "./DropSolucoes";
import logo from "../images/icon-white.png";

export default function Header() {
  return (
    <header>
      <Link to="/">
        <img src={logo} alt="" className="logo" />
      </Link>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/quem-somos">Quem Somos</Link>
        <Dropdown />
        <DropdownSolucoes />
        <Link to="/portfolio">Portfólio</Link>
        <Link to="/contato">Contato</Link>
      </nav>
    </header>
  );
}