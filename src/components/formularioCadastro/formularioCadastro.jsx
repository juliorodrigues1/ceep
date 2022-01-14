import React, {Component} from "react";
import "./estilo.css";
export class FormularioCadastro extends Component{

    constructor(props){
        super(props);
        this.titulo = "";
        this.texto = "";
    }

    handleMundancaTitulo(evento){
        this.titulo = evento.target.value;
    }

    handleMundancaTexto(evento){
        this.texto = evento.target.value;
    }

    criarNota(evento){
        evento.preventDefault();
        evento.stopPropagation();
        this.props.criarNota(this.titulo, this.texto);
      }

    render (){
        return(
            <form className="form-cadastro" onSubmit={this.criarNota.bind(this)} >
                <input
                    type="text"
                    placeholder="Título"
                    className="form-cadastro_input"
                    onChange={this.handleMundancaTitulo.bind(this)}
                />
                <textarea
                    rows={15}
                    placeholder="Escreva sua nota..."
                    className="form-cadastro_input"
                    onChange={this.handleMundancaTexto.bind(this)}
                />
                <button className="form-cadastro_input form-cadastro_submit">
                Criar Nota
                </button>
            </form>
        );
    }
}