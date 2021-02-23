import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
 

  html {
    box-sizing: border-box;
    font-size: 62.5%;
  }

  html,a,p,li {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  }



  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  body {
    margin: 0;
    padding: 8rem 6rem 0;
    padding: 8rem 0 0 0;
    font-family: 'Montserrat';
   
  }

  button {
    padding: 0;
    cursor: pointer;
    font-family: 'Montserrat';
  }
  
  p,h1 {
    font-size: 16px;
  }
  
  ul {
    padding: 0;
    margin: 0;
  }
`

export default GlobalStyle
