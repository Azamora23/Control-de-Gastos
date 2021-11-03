import React from "react";
import "bulma/css/bulma.min.css";
import styled from "styled-components";
import {Link} from "react-router-dom";

const Header = () => {
  return (
    <Cabeza className="level">
      <div className="level-left">
      <Titulo>Agregar Gastos</Titulo>
      </div>
      <div className="level-right buttons">
        <Link className="button is-primary is-outlined" to="/categorias">Categoria</Link>
        <Link className="button is-primary is-outlined" to="/lista-categorias">Lista de Gastos</Link>
      </div>
      
    </Cabeza>
  );
}

const Cabeza = styled.header`
    padding: 2rem 2rem 0rem;
`;

const Titulo = styled.h1`
    font-size: 2.5rem;
    font-weight: bold;
`;

export default Header;
