import styled from 'styled-components';

export const Container = styled.div`
 @import url("https://fonts.googleapis.com/css?family=K2D:800&display=swap");
  height: 100%;
  width: 100%;
    .geral{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        position:absolute
        background-image: linear-gradient(#0B2F3A, #236B8E, #0B2F3A);
    }
    form{
        width: 100%;
        max-width: 500px;
        padding:25px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    
    h2{
        padding-bottom: 15px;
    }

    fieldset {
        border: 0;
    }

    label,
    input,
    button {
        width: 100%;
        font-size: 16px;
    }

    .campo {
        margin-bottom: 10px;
        display: inline-block;
        margin-right: 10px;
    }

    .campo label {
        margin-bottom: 10px;
        color: #fff;
    }

    .campo input[type="text"],
    .campo input[type="email"],
    .campo input[type="date"],
    .campo input[type="tel"],
    .campo input[type="password"]{
        padding: 5px;
        display: block;
    }

    .campo input:focus {
        background:#6CA6CD;
    }


    label{
        margin-right: 10px;
    }

    .botao {
        width: 380px;
        height: 40px;
        background: #fff;
        border-radius: 15px;
        margin-bottom: 10px;
        color:#003399;
        font-size:20px;
        padding: 5px 9px;
    }

    .botao:hover {
        color: #00F5FF;
    }

    .botao, label.ent{
        cursor: pointer;
    }

    label.ent:hover {
      color: #00F5FF;
    }
    input{
        height: 35px;
        background-color:rgba(108,166,205,0.3);
        border:0;
    }
`;