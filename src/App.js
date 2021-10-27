import React, {useState} from 'react';
import Calculator from './components/calculator/Calculator';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './global';
import { darkBlue } from './theme';

export const App = () =>{
  const [theme, setTheme] = useState(darkBlue);
  return(
    <ThemeProvider theme={theme}>
      <Calculator/>
      <GlobalStyles />
    </ThemeProvider>
  );
};