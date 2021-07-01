import React from "react";
import ReactDOM from "react-dom";
import Favicon from "react-favicon";
import App from "./App";
import ico from "./assets/favicon.ico";

ReactDOM.render(
  <React.StrictMode>
    <Favicon url={ico} />
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
