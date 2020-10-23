import React from "react";
import "./components/styles.css";
import { CardVideo } from "./components/CardVideo";
//import styled from 'styled-components';
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
              tituloDoVideo={"Item A"}
              precoDoVideo={"R$ 40.50"}
              adicionarCarrinho={"Adicionar ao Carrinho"}
            />
            <CardVideo
              url={"https://picsum.photos/400/400?a=2"}
              tituloDoVideo={"Item B"}
              precoDoVideo={"R$ 55.90"}
              adicionarCarrinho={"Adicionar ao Carrinho"}
            />
            <CardVideo
              url={"https://picsum.photos/400/400?a=3"}
              tituloDoVideo={"Item C"}
              precoDoVideo={"R$ 80.00"}
              adicionarCarrinho={"Adicionar ao Carrinho"}
            />
            <CardVideo
              url={"https://picsum.photos/400/400?a=4"}
              tituloDoVideo={"Item D"}
              precoDoVideo={"R$ 99.00"}
              adicionarCarrinho={"Adicionar ao Carrinho"}
            />
            <CardVideo
              url={"https://picsum.photos/400/400?a=5"}
              tituloDoVideo={"Item E"}
              precoDoVideo={"R$ 199.00"}
              adicionarCarrinho={"Adicionar ao Carrinho"}
            />
            <CardVideo
              url={"https://picsum.photos/400/400?a=6"}
              tituloDoVideo={"Item F"}
              precoDoVideo={"R$ 210.00"}
              adicionarCarrinho={"Adicionar ao Carrinho"}
            />
            <CardVideo
              url={"https://picsum.photos/400/400?a=7"}
              tituloDoVideo={"Item G"}
              precoDoVideo={"R$ 499.99"}
              adicionarCarrinho={"Adicionar ao Carrinho"}
            />
            <CardVideo
              url={"https://picsum.photos/400/400?a=8"}
              tituloDoVideo={"Item H"}
              precoDoVideo={"R$ 501.00"}
              adicionarCarrinho={"Adicionar ao Carrinho"}
            />
          </section>
        </main>

      </div>
    </div>
  );
}