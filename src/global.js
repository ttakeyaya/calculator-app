import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before{
    box-sizing:border-box;
  }

  html{
    font-size:62.5%;
  }

  body{
    font-size:3.2rem;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin:0;
    padding:0;
    background:${({theme}) => theme.body};
  }
`;