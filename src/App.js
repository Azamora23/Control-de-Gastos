import React from "react";
import "bulma/css/bulma.min.css";
import {Helmet} from "react-helmet";
import {Header} from "./elementos/Header";
import { Titulo } from "./elementos/Titulo";
import { Link } from "react-router-dom";

const App = () => {
  return (
    <>
    <Helmet>
      <title>Agregar Gastos</title>
    </Helmet>
    <Header className="level">
      <div className="level-left">
       <Titulo>Agregar Gastos</Titulo>
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
 
export default App;
