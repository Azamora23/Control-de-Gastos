import React, {useState} from "react";
import 'bulma/css/bulma.min.css';
import { Helmet } from "react-helmet";
import {Header} from "../elementos/Header";
import {Titulo} from "../elementos/Titulo";
import { Link } from "react-router-dom";
import "bulma/css/bulma.min.css";
import {Formulario, Input} from "../elementos/Formulario";
import Boton from "../elementos/Boton"
import {auth} from "./../firebase/FirebaseConfig";
import { useHistory } from "react-router";
import Alertas from "../elementos/Alertas";



const RegistroUsuarios = () => {
    const history = useHistory();
    const [correo, establecerCorreo] = useState("");
    const [password, establecerPassword] = useState("");
    const [password2, establecerPassword2] = useState("");
    const [estadoAlerta, cambioEstadoAlerta] = useState (false);
    const [alerta, cambiarAlerta] = useState ({});

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

        if (correo === "" || password === "" || password2 === ""){
            cambioEstadoAlerta(true);
            cambiarAlerta({
                tipo: "error",
                mensaje: "Por favor ingresar todos los campos"
            })
            return;
        }

        if(password !== password2){
            cambioEstadoAlerta(true);
            cambiarAlerta({
                tipo: "error",
                mensaje: "Las contraseñas no coinciden"
            })
            return;
        }
        
        try{
            await auth.createUserWithEmailAndPassword(correo, password);
            history.push("/");
        } catch(error){
            cambioEstadoAlerta(true);
            
            let mensaje;
            switch(error.code){
                case 'auth/invalid-password':
                    mensaje = 'La contraseña tiene que ser de al menos 6 caracteres.'
                    break;
                case 'auth/email-already-in-use':
                    mensaje = 'Ya existe una cuenta con el correo electrónico proporcionado.'
                break;
                case 'auth/invalid-email':
                    mensaje = 'El correo electrónico no es válido.'
                break;
                default:
                    mensaje = 'Hubo un error al intentar crear la cuenta.'
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
                    <Boton className="button is-medium is-fullwidth" type="submit">Crear Cuenta</Boton>
                </div>    
            </div>
            </Formulario>
            <Alertas tipo={alerta.tipo} mensaje={alerta.mensaje} estadoAlerta={estadoAlerta} cambioEstadoAlerta={cambioEstadoAlerta}></Alertas>
        </>

    

        
    );
}




 
export default RegistroUsuarios;
