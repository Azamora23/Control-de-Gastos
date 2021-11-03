import React from "react";
import { Helmet } from "react-helmet";
import {Header} from "../elementos/Header";
import {Titulo} from "../elementos/Titulo";
import { Link } from "react-router-dom";

const GastosCategoria = () => {
    return (
        <>
        <Helmet>
        <title>Gastos por Categoria</title>
        </Helmet>
        <Header className="level">
            <div className="level-left">
                <Titulo>Gastos de Categoria</Titulo>
            </div>
            <div className="level-right buttons">
                <Link className="button is-primary is-outlined" to="/categorias">Categoria</Link>
                <Link className="button is-primary is-outlined" to="/lista-categorias">Lista de Gastos</Link>
                <Link className="button is-primary is-outlined">x</Link>
            </div>
        </Header>
    </>
    );
}
 
export default GastosCategoria;