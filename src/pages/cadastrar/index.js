import React from 'react';
import { Container } from './styles';
import { Link } from 'react-router-dom';
export default function Cadastrar() {
   return (
      <Container>
         <div className="geral">

            <form>

               <h2>Inscreva-se com seu endereço de e-mail</h2>

               <fieldset>
                  <fieldset className="grupo">
                     <div className="campo">
                        <label htmlFor="nome">Nome:</label>
                        <input type="text" required />
                     </div>
                     <div className="campo">
                        <label htmlFor="sobrenome">Sobrenome:</label>
                        <input type="text" equired />
                     </div>
                  </fieldset>

                  <fieldset className="group">
                     <div className="campo">
                        <label htmlFor="em">Email:<input className="es" type="email" required /></label>
                     </div>
                  </fieldset>

                  <fieldset className="group">
                     <div className="campo">
                        <label htmlFor="em">Senha:<input className="es" type="password" required /></label>
                     </div>
                  </fieldset>

                  <button type="submit" className="botao">Cadastrar</button>

                  <fieldset className="group">
                     <label>Já tem uma conta? </label>
                     <Link className="link" to="./login">
                        <label className="ent" htmlFor="login">Entrar</label></Link>
                  </fieldset>

               </fieldset>
            </form>
         </div>
      </Container >
   );
}