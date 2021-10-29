import styled from "styled-components";

export const Button = styled.button`
  grid-area: ${props => props.gridName};
  width:100%;
  height:100%;
  background-color:${props => props.bg};
  color:${props => props.color};
  font-size:${props=>props.font ||"3.2rem"};
  font-weight: bold;
  cursor:pointer;
  border-radius:1rem;
  border:transparent;
  box-shadow: 1px 3px 2px ${props=> props.bgshadow};
  &:hover{
    background-color:${props => props.hover};
  }
`;