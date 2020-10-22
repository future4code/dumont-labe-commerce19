import React from "react";
import "./components/styles.css";
import { CardVideo } from "./components/CardVideo";
//import { Topico } from "./components/Topico";
import { Header } from "./components/Header";

export default function App() {
  return (
    <div className="App">
      <div class="tela-inteira">
        <Header tituloDoHeader={"Quantidade de Produtos: 8"} />

        <main>
          {/*<nav class="menu-vertical">
            <ul>
              <Topico tituloDoTopico={"Início"} />
              <Topico tituloDoTopico={"Em alta"} />
              <Topico tituloDoTopico={"Inscrições"} />
              <Topico tituloDoTopico={"Originais"} />
              <hr />
              <Topico tituloDoTopico={"Biblioteca"} />
              <Topico tituloDoTopico={"Histórico"} />
            </ul>
          </nav>*/ }

          <section class="painel-de-videos">
            <CardVideo
              url={"https://picsum.photos/400/400?a=1"}
              tituloDoVideo={"Item E"}
            />
            <CardVideo
              url={"https://picsum.photos/400/400?a=2"}
              tituloDoVideo={"Item D"}
            />
            <CardVideo
              url={"https://picsum.photos/400/400?a=3"}
              tituloDoVideo={"Item B"}
            />
            <CardVideo
              url={"https://picsum.photos/400/400?a=4"}
              tituloDoVideo={"Item C"}
            />
            <CardVideo
              url={"https://picsum.photos/400/400?a=5"}
              tituloDoVideo={"Título 4"}
            />
            <CardVideo
              url={"https://picsum.photos/400/400?a=6"}
              tituloDoVideo={"Título 5"}
            />
            <CardVideo
              url={"https://picsum.photos/400/400?a=7"}
              tituloDoVideo={"Título 6"}
            />
            <CardVideo
              url={"https://picsum.photos/400/400?a=8"}
              tituloDoVideo={"Título 7"}
            />
          </section>
        </main>

      </div>
    </div>
  );
}