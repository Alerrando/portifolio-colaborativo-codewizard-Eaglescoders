import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { HeroSection } from "./components/hero";
import { AboutProject } from "./components/about-project";
import Benefits from "./components/benefits";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <main className="flex flex-col  bg-blueBg-0">
      {/* Não mexer aqui por favor! */}
      <HeroSection />
      <Benefits />
      <span>[Coloque aqui a sesão de tech-and-lang]</span>
      <span>[Coloque aqui a sesão de team]</span>
      <AboutProject />
      <span>[Coloque aqui a sesão de coments]</span>
      <span>[Coloque aqui o cabecalho]</span>
    </main>
  </React.StrictMode>
);
