import React, {Component} from "react";
import {CardNota} from "../cardNota/cardNota";
import "./estilo.css";

export class ListaNotas extends Component{
    render(){
        return (
            <ul className="lista-notas">
                {this.props.notas.map((nota, index) => {
                    return (
                        <li className="lista-notas_item" key={index}>
                            <CardNota nota={nota}/>
                        </li>
                    );
                })}
            </ul>
        );
    }
}