import React from "react";

export default class Carro extends React.Component {
  constructor(props) {
    super(props);
    this.modelo = 'golf';
    this.state = {
      ligado: false,
      velAtual: 0
    };
    this.ligarDesligar = this.ligarDesligar.bind(this);
  }

  ligarDesligar() {
    this.setState({ ligado: !this.state.ligado });
  }

  acelerar() {
    this.setState(
      (state, props) => ({
        velAtual: state.velAtual + props.fator
      })
    );
  }

  componentDidMount() {
    console.log("o Carro foi criado");
  }

  componentDidUpdate() {
    console.log("o carro foi atualizado");
  }

  componentWillUnmount() {
    console.log("o carro foi removido");
  }

  render() {
    return (
      <div>
        <h1>Meu Carro</h1>
        <p>modelo: {this.modelo}</p>
        <p>Ligado: {this.state.ligado ? "Sim" : "Não"}</p>
        <p>Vel Atual: {this.state.velAtual}</p>
        <button onClick={this.ligarDesligar}>
          {this.state.ligado ? "Desligar Carro" : "Ligar Carro"}
        </button>
        <button onClick={() => this.acelerar()}>
          Acelerar
        </button>
      </div>
    );
  }
}