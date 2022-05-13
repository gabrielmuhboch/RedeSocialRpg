import React from "react";
import {BrowserRouter, Route, Switch } from "react-router-dom";

import Principal from './pages/Principal';
import Login from './pages/Login';
import Cadastro from './pages/Cadastro';
import Perfil from './pages/Perfil';
import Postar from './pages/Postar';
import Grupos from './pages/Grupos';

//import NotFound from 'v../../pages/NotFound';
//<Route path="*" component={NotFound} />

const Rotas = () => {

  return (
    <BrowserRouter>
      <Switch>
        <Route exact={true} path="/Principal" component={Principal} />

        <Route exact={true} path="/" component={Login} />
        <Route exact={true} path="/Cadastro" component={Cadastro} />
        <Route exact={true} path="/Perfil" component={Perfil} />
        <Route exact={true} path="/Postar" component={Postar} />
        <Route exact={true} path="/Grupos" component={Grupos} />

      </Switch>
    </BrowserRouter>
  )
}
export default Rotas;
