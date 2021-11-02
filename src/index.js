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

WebFont.load({
  google: {
    families: ['Roboto: 500', 'sans-serif']
  }
});

const Index = () => {
  return (
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
        <App />
      </Contenedor>
    </BrowserRouter>
  );
}
 
ReactDOM.render(<Index/>, document.getElementById("root"));


