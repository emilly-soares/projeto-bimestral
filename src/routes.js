import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Login from './pages/login';
import Cadastrar from './pages/cadastrar';
import RecuperarAcesso from './pages/recuperarAcesso';

export default function Routes() {
   return (

      <BrowserRouter>

         <Route exact path="/login" component={Login} />
         <Route path="/cadastrar" component={Cadastrar} />
         <Route path="/recuperarAcesso" component={RecuperarAcesso} />

      </BrowserRouter>
   );
}