import React, {useEffect} from "react";
import styled, {keyframes} from "styled-components";

const slideDown = keyframes`
    0% {
        transform: translateY(-1.25rem);
        opacity: 0;
    }

    10% {
        transform: translateY(1.25rem);
        opacity: 1;
    }

    90% {
        transform: translateY(1.25rem);
        opacity: 1;
    }

    100% {
        transform: translateY(1.25rem);
        opacity: 0;
    } 
`;
 
const ContenedorAlerta = styled.div`
    z-index: 1000;
    width: 100%;
    left: 0;
    top: 1.25rem; 
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    animation: ${slideDown} 4s ease forwards;
 
    p {
        background: ${(props) => {
            if(props.tipo === 'error'){
                return "hsl(348, 100%, 61%)";
            } else if (props.tipo === 'exito') {
                return "hsl(141, 53%, 53%)";
            } else {
                return "hsl(0, 0%, 21%)";
            }
        }};
        color: #fff;
        padding: 1.25rem 2.5rem;
        border-radius: 0.31rem;
        box-shadow: 0px 0px 15px rgba(0,0,0,.1);
        text-align: center;
    }
`;

const Alertas = ({tipo, mensaje, estadoAlerta, cambioEstadoAlerta}) => {
    useEffect(() => {
        let tiempo;

        if(estadoAlerta === true){
            tiempo = setTimeout (() => {
                cambioEstadoAlerta(false);
            }, 2000);
        }
        return (() => clearTimeout(tiempo));
    }, [estadoAlerta, cambioEstadoAlerta]);    
    
    return (
        <>
            {estadoAlerta &&
                <ContenedorAlerta tipo={tipo}>
                    <p>{mensaje}</p>
                </ContenedorAlerta>
            }
        </>
    );
}
 
export default Alertas;