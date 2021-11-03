import React from "react";
import "bulma/css/bulma.min.css";
import {Helmet} from "react-helmet";
import Header from "./elementos/Header";

const App = () => {
  return (
    <>
    <Helmet>
      <title>Agregar Gastos</title>
    </Helmet>
    <Header></Header>
    </>
  );
}
 
export default App;
