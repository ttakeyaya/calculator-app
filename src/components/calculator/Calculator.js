import React, {useState} from 'react';
import { withTheme } from 'styled-components';
import { Title, CalcContainer, TitleContainer, ResultContainer, ButtonsContainer, Button, ThemeContainer, ThemeTitle } from './Calculator.styled';
import ThemeSwitcher from '../../common/ThemeSwitcher';

const Calculator = (props) =>{
  const classNameAndNums = {
    one: 1,
    two: 2,
    three: 3,
    four:4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
    zero: 0,
    dot: ".",
    plus: "+",
    minus: "-",
    times: "×",
    reset: "RESET",
    divide: "/",
    del: "DEL",
    equal: "="
  };

  const [total, setTotal] = useState(0);
  const [number, setNumber] = useState('0');
  const [operation, setOperation] = useState(null);
  
  const onClickHandler = (value) =>{
    if(isNaN(parseInt(value))){
      handleOperation(value);
    }else{
      handleNumber(value);
    }
  }

  const handleNumber = (value) => {
    if(number === '0'){
      setNumber(value);
    }else{
      let input = number + value.toString();
      setNumber(input);
    }
  }

  const handleOperation = (value) => {
    switch(value){
      case 'RESET':
        setTotal(0);
        setNumber('0');
        setOperation(null);
        break;
      case 'DEL':
        let numberStored = number;
        let digitLength = numberStored.toString().length;
        let slicedNumber = numberStored.toString().slice(0, digitLength - 1);
        setNumber(slicedNumber);
        break;
      case '.':
        setNumber(number+'.');
        break;
      case '=':
        if(operation === null){
          return;
        }
        calculate(parseFloat(number));
        setOperation(null);
        setNumber('0');
        break;
      default:
        doMath(value);
        setOperation(value);
        break;
    }
  }

  const doMath = (value) => {
    if(total === 0){
      setTotal(parseFloat(number));
      setNumber('0');
    }else{
      setNumber('0');
      calculate(parseFloat(number));
    }
  }

  const calculate = (currentNumber) =>{
    if(operation === '+'){
      setTotal(parseFloat(total + currentNumber));
    }else if(operation === '-'){
      setTotal(parseFloat(total - currentNumber));
    }else if(operation ==='x'){
      setTotal(parseFloat(total*currentNumber));
    }else if(operation === '/'){
      setTotal(parseFloat(total/currentNumber));
    }
  }

  const formatNumber = (number) =>{
    return new Intl.NumberFormat().format(number);
  }

  // Create styled buttons depending upon key name.
  const buttons = Object.entries(classNameAndNums).map(([key,value])=>{
    if(key === "del" || key === "reset"){
      return <Button 
                gridName={key}
                color={"white"}
                bg={props.theme.keyone} 
                bgshadow={props.theme.keyoneshadow} 
                className={key} 
                font={20} 
                hover={props.theme.keythreehover}
                onClick={() => onClickHandler(value)}>
                  {value}
              </Button>
    }else if(key ==="equal"){
      return <Button 
                gridName={key} 
                color={props.theme.texttwo} 
                bg={props.theme.keytwo} 
                bgshadow={props.theme.keytwoshadow} className={key} 
                hover={props.theme.keytwohover} 
                onClick={() => onClickHandler(value)}>{value}
              </Button>
    }
      return <Button 
                gridName={key} 
                color={props.theme.textone} 
                bg={props.theme.keythree} 
                bgshadow={props.theme.keythreeshadow} className={key} 
                hover={props.theme.keyonehover}
                onClick={() => onClickHandler(value)}>{value}
              </Button>
    }
  );

  return(
    <CalcContainer>
      <TitleContainer>
        <Title>calc</Title>
        <ThemeContainer>
          <ThemeTitle>theme</ThemeTitle>
          <ThemeSwitcher click={props.click}/>
        </ThemeContainer>
      </TitleContainer>
      <ResultContainer>
        {number === '0' ? formatNumber(total) : formatNumber(number)}
      </ResultContainer>
      <ButtonsContainer
        areas={[
          ["seven","eight","nine", "del"],
          ["four", "five", "six", "plus"],
          ["one","two","three","minus"],
          ["dot", "zero", "divide", "times"],
          ["reset","reset","equal", "equal"]
        ]}
      >
        {buttons}
      </ButtonsContainer>
    </CalcContainer>
  );
}

export default withTheme(Calculator);