import React, {useState} from "react";
import 'bulma/css/bulma.min.css';
import { Helmet } from "react-helmet";
import {Header} from "../elementos/Header";
import {Titulo} from "../elementos/Titulo";
import { Link } from "react-router-dom";
import "bulma/css/bulma.min.css";
import {Formulario, Input} from "../elementos/Formulario";
import {auth} from "./../firebase/FirebaseConfig";


const RegistroUsuarios = () => {
    
    const [correo, establecerCorreo] = useState("");
    const [password, establecerPassword] = useState("");
    const [password2, establecerPassword2] = useState("");

    //funcion onchange
    const change = (e) => {
        switch(e.target.name){
            case "email":
                establecerCorreo(e.target.value);
                break;
            case "password":
                establecerPassword(e.target.value);
                break; 
            case "password2":
                establecerPassword2(e.target.value);
                break;       
            default:
                break;    
        }
    }

    //funcion enviar datos
    const submit = (e) => {
        e.preventDefault();
        
        //validacion de corro del lado del cliente
        const expresionRegular = /[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+/;
        if (!expresionRegular.test(correo)) {
            console.log ("correo no valido");
            return;
        }

        if (correo === "" || password === "" || password2 === ""){
            console.log("ingresar todos los campos");
            return;
        }

        if(password !== password2){
            console.log("las contraseñas no coinciden");
            return;
        }

        try{
            auth.createUserWithEmailAndPassword(correo, password);
        } catch (error){
            console.log(error);
        }

    }


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
            <Formulario onSubmit={submit}>
            <div className="columns">
            <img src="/inicioSesion2.jpg" alt="imagen de registro"></img>
                <div className="column is-three-fifths is-offset-one-fifth">
                    <Input className="input is-medium is-focus is-primary" type="email" name="email" placeholder="Correo Electronico" value={correo} onChange={change}></Input>
                    <Input className="input is-medium is-focus is-primary" type="password" name="password" placeholder="Contraseña" value={password} onChange={change}></Input>
                    <Input className="input is-medium is-focus is-primary" type="password" name="password2" placeholder="Repetir contraseña" value={password2} onChange={change}></Input>
                    <button className="button is-danger is-medium is-fullwidth" type="submit">Crear Cuenta</button>
                </div>    
            </div>
            </Formulario>
        </>

        

        
    );
}


 
export default RegistroUsuarios;
