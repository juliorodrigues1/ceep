import { ListaNotas } from "./components/listaNotas/listaNotas";
import {FormularioCadastro} from "./components/formularioCadastro/formularioCadastro";
import { Component } from "react";
import "./assets/App.css";
import './assets/index.css';

export class App extends Component {

  constructor(){
    super();
    this.notas =[];
    this.state = {
      notas:[]
    };
  }

  criarNota(titulo, texto){
    const novaNota = {titulo, texto};
    this.notas.push(novaNota);
    this.setState({
      notas:this.notas
    });
  }

  render(){
    return (
      <section className="conteudo">
        <FormularioCadastro criarNota={this.criarNota.bind(this)}/>
        <ListaNotas notas={this.notas}/>
      </section>
    );
  }
}