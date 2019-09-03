import React from 'react';
import { Container } from './styles';
import { Link } from 'react-router-dom';
export default function Login() {
   return (

      <Container>
         <div className="geral">

            <form>
               <h2>Entrar</h2>
               <fieldset>

                  <fieldset className="grupo">
                     <div className="campo">
                        <label htmlFor="email">Email: <input type="email" /></label>
                     </div>
                  </fieldset>

                  <fieldset className="grupo">
                     <div className="campo">
                        <label htmlFor="senha">Senha: <input type="password" /></label>
                     </div>
                  </fieldset>

                  <fieldset className="grupo">
                     <Link className="link" to="./recuperarAcesso">
                        <label className="rec" htmlFor="esq">Esqueceu a Senha?</label>
                     </Link>
                  </fieldset>

                  <button type="submit" className="botao">Entrar</button>

                  <fieldset className="grupo">
                     <label htmlFor="nconta">Não tem uma Conta?</label>
                     <Link className="link" to="/cadastrar">
                        <label className="rec" htmlFor="cadastrar"> Inscreva-se</label>
                     </Link>
                  </fieldset>

               </fieldset>
            </form>
         </div >
      </Container >
   );
}