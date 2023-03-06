import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
@font-face {
    font-family:'Roboto', sans-serif ;
    src: url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;500;700&display=swap');
}    
* {
    
        align-items: center;
        font-family: 'Roboto', sans-serif;
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        color: #dce0e8;
    
        background-color:  #13131f;
        
    }
    body {
        body {
  margin: 0;
  display: flex;
  place-items: center;
  min-width: 320px;
  min-height: 100vh;
}
    }

`;
