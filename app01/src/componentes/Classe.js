import React from "react";

export default class Classe extends React.Component{
    constructor(props){
            super(props)

    }


    render(){

        return(
            <div>
                <h1>Primeiro componente de Classe--   da Classe ----</h1>
                <p>Canal: {this.props.canal}</p>
                <p>cursos: {this.props.cursos}</p>
                </div>

        )
    }
}
