import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import QuemSomos from "./pages/QuemSomos";
import Contato from "./pages/Contato";
import Servicos from "./pages/Servicos";
import Arquitetonico from "./pages/Servicos/arquitetonico";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/quem-somos" exact component={QuemSomos} />
        <Route path="/contato" exact component={Contato} />
        <Route path="/servicos" exact component={Servicos} />
        <Route path="/servicos/arquitetonico" exact component={Arquitetonico} />
      </Switch>
    </BrowserRouter>
  );
}
