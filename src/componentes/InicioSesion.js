import React from "react";
import 'bulma/css/bulma.min.css';
import { Helmet } from "react-helmet";
import {Header} from "../elementos/Header";
import {Titulo} from "../elementos/Titulo";
import { Link } from "react-router-dom";
import "bulma/css/bulma.min.css";
import {Formulario, Input} from "../elementos/Formulario";

const InicioSesion = () => {
    return (        
        <>
            <Helmet>
                <title>Iniciar Sesion</title>
            </Helmet>
            <Header className="level">
                <div className="level-left">
                    <Titulo>Iniciar Sesión</Titulo>
                </div>
                <div className="level-right">
                    <Link className="button is-primary is-focused" to="/crear-cuenta">Registrarse</Link>
                </div>
            </Header>  
            <Formulario>
            <div className="columns">
            <img src="/registro1.jpg" alt="imagen de registro"></img>
                <div className="column is-three-fifths is-offset-one-fifth">
                    <Input className="input is-medium is-focus is-primary" type="email" name="email" placeholder="Correo Electronico"></Input>
                    <Input className="input is-medium is-focus is-primary" type="password" name="password" placeholder="Contraseña"></Input>
                    <button className="button is-danger is-medium is-fullwidth" type="submit">Iniciar Sesión</button>
                </div>    
            </div>
            </Formulario>
        </>
    );
}
 
export default InicioSesion;