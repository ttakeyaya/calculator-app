import { createGlobalStyle } from "styled-components";
import { fadein } from "./modules/animation";

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
    overflow-x:hidden;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin:0;
    padding:0;
    background:${({theme}) => theme.mainbg};
    animation:${fadein} 1s ease 0s normal;
  }
`;