import React from "react";
import 'bulma/css/bulma.min.css';
import { Helmet } from "react-helmet";
import {Header} from "../elementos/Header";
import {Titulo} from "../elementos/Titulo";
import { Link } from "react-router-dom";
import "bulma/css/bulma.min.css";
import {Formulario, Input} from "../elementos/Formulario";


const RegistroUsuarios = () => {
    return (
        <>
            <Helmet>
                <title>Crear Cuenta</title>
            </Helmet>
            <Header className="level">
                <div className="level-left">
                    <Titulo>Crear Cuenta</Titulo>
                </div>
                <div className="level-right">
                    <Link className="button is-primary is-focused" to="/inicio-sesion">Iniciar Sesion</Link>
                </div>
            </Header>  
            <Formulario>
            <div className="columns">
            <img src="/inicioSesion2.jpg" alt="imagen de registro"></img>
                <div className="column is-three-fifths is-offset-one-fifth">
                    <Input className="input is-medium is-focus is-primary" type="email" name="email" placeholder="Correo Electronico"></Input>
                    <Input className="input is-medium is-focus is-primary" type="password" name="password" placeholder="Contraseña"></Input>
                    <Input className="input is-medium is-focus is-primary" type="password" name="password2" placeholder="Repetir contraseña"></Input>
                    <button className="button is-danger is-medium is-fullwidth" type="submit">Crear Cuenta</button>
                </div>    
            </div>
            </Formulario>
        </>

        

        
    );
}


 
export default RegistroUsuarios;
