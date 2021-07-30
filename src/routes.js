import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Contato from "./pages/Contato";
import Home from "./pages/Home";
import QuemSomos from "./pages/QuemSomos";
import Servicos from "./pages/Servicos";
import Arquitetonico from "./pages/Arquitetonico";
import Eletrico from "./pages/Eletrico";
import Estrutural from "./pages/Estrutural";
import Incendio from "./pages/Incendio";
import Hidrossanitario from "./pages/Hidrossanitario";
import Gerenciamento from "./pages/Gerenciamento";
import Laudo from "./pages/Laudo";
import Acompanhamento from "./pages/Acompanhamento";
import Orcamento from "./pages/Orcamento";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/sobre" exact component={QuemSomos} />
        <Route path="/contato" exact component={Contato} />
        <Route path="/servicos" exact component={Servicos} />
        <Route path="/servicos/arquitetonico" exact component={Arquitetonico} />
        <Route path="/servicos/eletrico" exact component={Eletrico} />
        <Route path="/servicos/estrutural" exact component={Estrutural} />
        <Route path="/servicos/incendio" exact component={Incendio} />
        <Route path="/servicos/gerenciamento" exact component={Gerenciamento} />
        <Route path="/servicos/laudo" exact component={Laudo} />
        <Route path="/servicos/orcamento" exact component={Orcamento} />
        <Route
          path="/servicos/acompanhamento"
          exact
          component={Acompanhamento}
        />
        <Route
          path="/servicos/hidrossanitario"
          exact
          component={Hidrossanitario}
        />
      </Switch>
    </BrowserRouter>
  );
}
