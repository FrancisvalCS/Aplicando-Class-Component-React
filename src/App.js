import React, { Component } from 'react';

/*Constantes*/
class Equipe extends Component{
    render(){
        return(
            <div>
                <h2>Olá sou o(a) {this.props.nome}</h2>
                <h3>Cargo: {this.props.cargo}</h3>
                <h3>idade: {this.props.idade}</h3>
            </div>
        );
    }
}

/*Funcção*/
function App(){
    return (
        <div>
            <h1>Conheça nossa equipe:</h1>
            <Equipe nome="Metheus" cargo="Programador" idade="24"/>
        </div>
    );
}

export default App;