import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import WebFont from "webfontloader";
import Contenedor from "./elementos/Contenedor";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import EditarGasto from "./componentes/EditarGasto";
import GastosCategoria from "./componentes/GastosCategoria";
import InicioSesion from "./componentes/InicioSesion";
import ListaGastos from "./componentes/ListaGastos";
import RegistroUsuario from "./componentes/RegistroUsuario";
import "bulma/css/bulma.min.css";
import {Helmet} from "react-helmet";
import Svg from "./elementos/Fondo";



WebFont.load({
  google: {
    families: ['Roboto: 500', 'sans-serif']
  }
});

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Mis gastos</title>
      </Helmet>
      <BrowserRouter>
        <Contenedor>
          <Switch>
            <Route path="/inicio-sesion" component={InicioSesion}></Route>
            <Route path="/crear-cuenta" component={RegistroUsuario}></Route>
            <Route path="/categorias" component={GastosCategoria}></Route>
            <Route path="/lista-categorias" component={ListaGastos}></Route>
            <Route path="/editar" component={EditarGasto}></Route>
            <Route path="/" component={App}></Route>
          </Switch>
        </Contenedor>
      </BrowserRouter>
      <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none"><path fill="#0099ff" fill-opacity="1" d="M0,32L26.7,48C53.3,64,107,96,160,101.3C213.3,107,267,85,320,101.3C373.3,117,427,171,480,160C533.3,149,587,75,640,69.3C693.3,64,747,128,800,160C853.3,192,907,192,960,197.3C1013.3,203,1067,213,1120,197.3C1173.3,181,1227,139,1280,106.7C1333.3,75,1387,53,1413,42.7L1440,32L1440,320L1413.3,320C1386.7,320,1333,320,1280,320C1226.7,320,1173,320,1120,320C1066.7,320,1013,320,960,320C906.7,320,853,320,800,320C746.7,320,693,320,640,320C586.7,320,533,320,480,320C426.7,320,373,320,320,320C266.7,320,213,320,160,320C106.7,320,53,320,27,320L0,320Z"></path></Svg>
    </>
  );
}
 
ReactDOM.render(<Index/>, document.getElementById("root"));


