import styled from "styled-components";

export const Title = styled.h1`
  font-size:3.2rem;
  color:${props => props.theme.texttitle};

`;

export const CalcContainer = styled.section`
  display:grid;
  grid-template-columns:repeat(1, minmax(327px, 540px));
  grid-template-rows: 44px 128px 480px;
  row-gap: 0px;
  padding:0 20px;
  margin-top:2rem;
`

export const TitleContainer = styled.div`
  display:flex;
  align-items: center;
  justify-content: space-between;
  
`;

export const ResultContainer = styled.p`
  text-align:right;
  background-color: ${props => props.theme.screenbg};
  color: ${props => props.theme.texttitle};
  padding:1.3rem 2rem 0 0;
  border-radius:1rem;
`;

export const ButtonsContainer = styled.div`
  display:grid;
  grid-template-columns:repeat(4,minmax(60px, 101px));
  grid-template-rows:repeat(5,64px);
  grid-template-areas: ${({ areas }) =>
    areas.map(r => `'${r.join(" ")}'`).join(" ")};
  gap:6%;
  background-color:${props => props.theme.keypadbg};
  padding: 7% 7%;
  border-radius:1rem;
`;

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

export const ThemeContainer = styled.div`
  width:150px;
  display:flex;
  align-items: center;
  justify-content: space-around;
`;
export const ThemeTitle = styled.p`
  font-size:1.2rem;
  text-transform: uppercase;
  color:${props => props.theme.texttitle};
  font-weight:bold;
`;