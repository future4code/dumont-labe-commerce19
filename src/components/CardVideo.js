import React from "react";

export class CardVideo extends React.Component {
  render() {
    return (
      <div className="box-pagina-principal">
        <img src={this.props.url} alt="" />
        <h4>{this.props.tituloDoVideo}</h4>
        <p className="preco-video">{this.props.precoDoVideo}</p>
        <button className="botao-adicionar-carrinho">{this.props.adicionarCarrinho}</button>
      </div>
    );
  }
}