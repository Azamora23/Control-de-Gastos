import React, {useState} from "react";
import 'bulma/css/bulma.min.css';
import { Helmet } from "react-helmet";
import {Header} from "../elementos/Header";
import {Titulo} from "../elementos/Titulo";
import { Link } from "react-router-dom";
import "bulma/css/bulma.min.css";
import {Formulario, Input} from "../elementos/Formulario";
import Boton from "../elementos/Boton";
import { useHistory } from "react-router";
import { auth } from "../firebase/FirebaseConfig";
import Alertas from "../elementos/Alertas";

const InicioSesion = () => {
    const history = useHistory();
    const [correo, establecerCorreo] = useState("");
    const [password, establecerPassword] = useState("");
    const [estadoAlerta, cambioEstadoAlerta] = useState (false);
    const [alerta, cambiarAlerta] = useState ({});

    const change = (e) => {
        if (e.target.name === "email"){
            establecerCorreo(e.target.value);
        } else if (e.target.name === "password"){
            establecerPassword(e.target.value);
        }
    }

    //funcion enviar datos
    const submit = async (e) => {
        e.preventDefault();
        cambioEstadoAlerta(false);
        cambiarAlerta({});
        
        //validacion de corro del lado del cliente
        const expresionRegular = /[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+/;
        if (!expresionRegular.test(correo)) {
            cambioEstadoAlerta(true);
            cambiarAlerta({
                tipo: "error",
                mensaje: "Por favor ingresar un correo valido"
            })
            return;
        }

        if (correo === "" || password === ""){
            cambioEstadoAlerta(true);
            cambiarAlerta({
                tipo: "error",
                mensaje: "Por favor ingresar todos los campos"
            })
            return;
        }
        
        try{
            await auth.signInWithEmailAndPassword(correo, password);
            history.push("/");
        } catch(error){
            cambioEstadoAlerta(true);

            let mensaje;
            switch(error.code){
                case "auth/wrong-password":
                    mensaje = "La contraseña no es correcta";
                    break;
                case "auth/user-not-found":
                    mensaje = "No se encontro ninguna cuenta con este correo electronico";
                    break;
                default:
                    mensaje = "Hubo un erro al ingresar a la cuenta, por favor volver a intentar";
                    break;    
            }
            cambiarAlerta({
                tipo: "error",
                mensaje: mensaje
            })
        }
    }

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
            <Formulario onSubmit={submit}>
            <div className="columns">
            <img src="/registro1.jpg" alt="imagen de registro"></img>
                <div className="column is-three-fifths is-offset-one-fifth">
                    <Input className="input is-medium is-focus is-primary" type="email" name="email" placeholder="Correo Electronico" value={correo} onChange={change}></Input>
                    <Input className="input is-medium is-focus is-primary" type="password" name="password" placeholder="Contraseña" value={password} onChange={change}></Input>
                    <Boton className="button is-medium is-fullwidth" type="submit">Iniciar Sesión</Boton>
                </div>    
            </div>
            </Formulario>
            <Alertas tipo={alerta.tipo} mensaje={alerta.mensaje} estadoAlerta={estadoAlerta} cambioEstadoAlerta={cambioEstadoAlerta}></Alertas>
        </>
    );
}
 
export default InicioSesion;