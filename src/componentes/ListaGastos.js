import React from "react";
import { Helmet } from "react-helmet";
import {Header} from "../elementos/Header";
import {Titulo} from "../elementos/Titulo";
import "bulma/css/bulma.min.css";
import BotonRegresar from "../elementos/BotonRegresar";

const ListaGastos = () => {
    return (
        <>
         <Helmet>
            <title>Lista de Gastos</title>
            </Helmet>
            <Header className="level">
                <div className="level-left">
                    <BotonRegresar></BotonRegresar>
                </div>
                <div className="level-right">
                    <Titulo>Lista de Gastos</Titulo>
                </div>
            </Header>   
        </>
    );
}
 
export default ListaGastos;