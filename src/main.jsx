import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { AboutProject } from "./components/about-project";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <main className="flex flex-col">
      <span>[Coloque aqui o hero]</span>
      <span>[Coloque aqui a sessão de benefits]</span>
      <span>[Coloque aqui a sesão de tech-and-lang]</span>
      <span>[Coloque aqui a sesão de team]</span>
      <AboutProject />
      <span>[Coloque aqui a sesão de coments]</span>
      <span>[Coloque aqui o cabecalho]</span>
    </main>
  </React.StrictMode>
);
