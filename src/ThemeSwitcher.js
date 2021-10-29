import React from 'react';
import { InputContainer, Input, InputLabelContainer, InputNumber } from './components/calculator/ThemeSwitcher.styled';
import { withTheme } from 'styled-components';

const ThemeSwitcher = (props) => {
  return(
    <InputContainer>
      <InputLabelContainer value={"darkBlue"}>
        <InputNumber>1</InputNumber>
        <Input value="darkBlue" onClick={props.click}/>
      </InputLabelContainer>
      <InputLabelContainer value={"lightGray"}>
        <InputNumber>2</InputNumber>
        <Input value="lightGray" onClick={props.click}/>
      </InputLabelContainer>
      <InputLabelContainer value={"violet"}>
      <InputNumber>3</InputNumber>
        <Input value="violet" onClick={props.click}/>
      </InputLabelContainer>
    </InputContainer>
  );
}

export default withTheme(ThemeSwitcher);