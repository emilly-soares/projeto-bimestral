import React from 'react';
import { Container } from './styles';
import { Link } from 'react-router-dom';
export default function RecuperarAcesso() {
   return (

      <Container>

         <div className="geral">

            <form>
               <h2>Redefinição de senha</h2>
               <h4>Insira o endereço de e-mail associado à sua conta.</h4>
               <fieldset>

                  <fieldset className="grupo">
                     <div className="campo">
                        <input placeholder="E-mail" type="email" />
                     </div>
                  </fieldset>

                  <button className="botao" type=" submit">Enviar</button>
                  <fieldset className="grupo">
                     <Link className="link" to="/">
                        <label className="vt" htmlFor="login"> Voltar </label>
                     </Link>
                  </fieldset>
               </fieldset>
            </form>
         </div>

      </Container >
   );
}