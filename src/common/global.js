import { createGlobalStyle } from "styled-components";
import { fadein } from "./animation";

export const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Spartan:wght@700&display=swap');

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
    overflow-x:hidden;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin:0;
    padding:0;
    font-family: 'Spartan', sans-serif;
    background:${({theme}) => theme.mainbg};
    animation:${fadein} 1s ease 0s normal;
  }
`;