import React from "react";

export  class Etapa1 extends React.Component{
    render(){
        return(
            <div>
            <h1>Dados gerais</h1>
            <div>
                <p>1.Qual seu nome ??</p>
                <input/>
                <p>2.Qual sua idade ??</p>
                <input/>
                <p>3.Digite seu email!!</p>
                <input/>
            </div>
            <div>
                <p>4.selecione sua escolaridade </p>
            <select>
                <option value="ensino médio completo">ensino médio completo</option>
                <option value="ensino médio incompleto">ensino médio incompleto</option>
                <option value="ensino superio completo">ensino médio completo</option>
                <option value="ensino superior incompleto">ensino superior incompleto</option>
                </select>
            </div>
            
            
        </div>
          

        );
    }}