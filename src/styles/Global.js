import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
@import url('http://fonts.googleapi.com/css?family=Allan:100,300,400,500&display=swap');
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font: 14px 'Allan', sans-serif;
  -webkit-font-smoothing: antialiased !important;
}

html, body, #root {
  height: 100%;
}

h1{
  font-size: 2em;
  font-weight: bold;
  color: #fff;
}
h2{
  color: #fff;
  font-size: 1.6em;
  font-weight: bold;
}
a{
  color: #FFF;
  text-decoration:none;
}
label{
  color: #fff;
}
`;