import React from "react";
import { useHistory } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faArrowAltCircleLeft} from "@fortawesome/free-solid-svg-icons";


const BotonRegresar = ({ruta = "/"}) => {
    const history = useHistory()
    
    return (
        <button className="button is-dark is-outlined" onClick={() => history.push(ruta)}><FontAwesomeIcon icon={faArrowAltCircleLeft} style={{fontSize:"3rem"}}></FontAwesomeIcon></button>
    );
}
 
export default BotonRegresar;
