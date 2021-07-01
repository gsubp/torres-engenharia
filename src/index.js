import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Favicon from "react-favicon";
import ico from "./images/favicon.ico";
import Footer from "./components/Footer";

ReactDOM.render(
  <React.StrictMode>
    <Favicon url={ico} />
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
