import React, {useState} from 'react';
import Calculator from './components/calculator/Calculator';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './global';
import { darkBlue, lightGray, violet } from './theme';

const themes = { darkBlue, lightGray, violet};


export const App = () =>{
  const [theme, setTheme] = useState(themes["darkBlue"]);

  const onChangeThemeHandler = (e) =>{
    let themeName = e.target.value;
    setTheme(themes[themeName]);
  }
  return(
    <ThemeProvider theme={theme}>
      <Calculator click={onChangeThemeHandler}/>
      <GlobalStyles />
    </ThemeProvider>
  );
};