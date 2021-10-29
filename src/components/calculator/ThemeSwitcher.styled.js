import styled from "styled-components";

export const InputContainer = styled.div`
  background-color:${props => props.theme.keypadbg};
  width:7.1rem;
  height:2.6rem;
  display:flex;
  justify-content: space-around;
  align-items:center;
  border-radius:3rem;
`
export const Input = styled.input.attrs(props =>({
  type:"radio",
  name:"radio"
}))
`
  display:none;
  position:relative;
`;

export const InputLabelContainer = styled.label`
  cursor:pointer;
  position:relative;
  display:flex;
  flex-direction:row-reverse;
  border:1px solid white;
  font-size:1.2rem;
  &::after{
    position:absolute;
    content:"";
    top:-8px;
    left:-6px;
    width:16px;
    height:16px;
    color:white;
    border-radius: 50%;
    background-color:${props => props.value === props.theme.name ? props.theme.keytwo : props.theme.mainbg};
  }
  &:hover::after{
    background-color:${props => props.theme.keytwohover};
  }
`;

export const InputNumber = styled.p`
  color:${props => props.theme.texttitle};
  position:absolute;
  top:-40px;
  left:-2px;
  background-color:${props => props.theme.mainbg};
`;