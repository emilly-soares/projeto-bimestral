import styled from 'styled-components';

export const Container = styled.div`
  @import url("https://fonts.googleapis.com/css?family=K2D:800&display=swap");
  height: 100%;
  width: 100%;
    form{
        width: 100%;
        max-width: 500px;
        padding: 20px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    input{
        width: 380px;
        height: 35px;
        background-color:rgba(108,166,205,0.3);
        border:0;
    }

    ::-webkit-input-placeholder { 
        color: #fff;
    }

    .vt{
        cursor: pointer;
        font-size: 20px;
    }

    label.vt:hover {
      color: #00F5FF;
    }

    label,
    button {
        width: 100%;
        font-size: 20px;
    }

    .geral {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        position:absolute
        background-image: linear-gradient(#0B2F3A, #236B8E, #0B2F3A);
    }

    h2{
        padding-bottom: 15px;
        color:#fff;
    }

    h4{
        font-size:15px;
        color: #fff;
    }

    fieldset {
        border: 0;
    }

    .campo {
        margin-bottom: 10px;
    }

    .campo label {
        display: block;
    }

    fieldset.grupo .campo {
        float:  left; 
    }

    .campo input[type="email"],
    .campo input[type="password"]{
        padding: 5px;
        display: block;
    }

    .campo input:focus {
        background:#6CA6CD;
    }

    .botao {
        padding-left:30px;
        width: 380px;
        height: 40px;
        background: #fff;
        border-radius: 15px;
        margin-bottom: 10px;
        color:#003399;
        padding: 5px 9px;
    }

    .botao:hover {
        color: #00F5FF;
    }

    .botao{
        cursor: pointer;
    } 
    @media (max-width: 400px){
        input{
        width: 90%;
    }
    .botao {
        width: 90%;
    }

`;