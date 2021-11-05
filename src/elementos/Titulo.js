import styled from "styled-components";

const Titulo = styled.h1`
    font-size: 2.5rem;
    font-weight: bold;
    text-shadow: 1px 1px 2px black, 0 0 25px #F2C12E, 0 0 5px #F2C12E;

    @media(max-width: 950px){
        font-size: 2rem;
    }
`;

export {Titulo};