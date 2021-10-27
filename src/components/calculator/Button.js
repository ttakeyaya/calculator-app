import React from 'react';

export const Button =(props) =>{
  let value = props.value;
  return (

    <button 
      key={props.value}
      className={value}
      onClick={() =>props.click(value)}>{value}
    </button>
  );
}