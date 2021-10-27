import styled from "styled-components";

export const Button = styled.button`
  grid-area: ${props => props.gridName};
  min-width:10.1rem;
  height:6.4rem;
  background-color:${props => props.bgColor};
  color:${props => props.color};
  font-size:3.2rem;
  font-weight: bold;
  cursor:pointer;
  border-radius:1rem;
`;