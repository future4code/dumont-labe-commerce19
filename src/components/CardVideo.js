import React from "react";

export class CardVideo extends React.Component {
  render() {
    return (
      <div className="box-pagina-principal">
        <img src={this.props.url} alt="" />
        <h4>{this.props.tituloDoVideo}</h4>
      </div>
    );
  }
}