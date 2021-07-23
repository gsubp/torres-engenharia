import React from "react";
import "../styles/header.scss";
import { Link } from "react-router-dom";
import Dropdown from "./DropServicos";
import DropdownSolucoes from "./DropSolucoes";
import logo from "../assets/logo-full.png";

export default function Header() {
  return (
    <header className="header">
      <nav className="nav">
        <Link to="/">
          <img src={logo} alt="" className="logo" />
        </Link>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/quem-somos">Quem Somos</Link>
          <Link to="/">Portfólio</Link>
          <Dropdown />
          <DropdownSolucoes />
          <Link to="/contato">Contato</Link>
        </div>
      </nav>
    </header>
  );
}
