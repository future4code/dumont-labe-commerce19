import React from "react";

export function Header(props) {
  return (
    <header>
      <p>{props.tituloDoHeader}</p>
      <select>
        <option value="preco-crescente">Preço: Crescente</option>
        <option value="preco-decrescente">Preço: Decrescente</option>
      </select>
    </header>
  );
}