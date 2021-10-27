import styled from "styled-components";

export const Title = styled.h1`
  font-size:3.2rem;
  color:${props => props.theme.title};
`;

export const CalcContainer = styled.section`
  display:grid;
  grid-template-rows: 44px 128px 480px;
  row-gap: 24px;
`

export const TitleContainer = styled.div`
  display:flex;
  align-items: center;
  justify-content: space-between;
  color:${props => props.theme.white};
`;

export const ResultContainer = styled.p`
  text-align:right;
  background-color: ${props => props.theme.bg};
  color: ${props => props.theme.white};
  padding:1.3rem 2rem 0 0;
`;

export const ButtonsContainer = styled.div`
  display:grid;
  grid-template-columns:repeat(4,1fr);
  grid-template-rows:repeat(5,1fr);
  grid-template-areas: ${({ areas }) =>
    areas.map(r => `'${r.join(" ")}'`).join(" ")};
  gap: 2.5rem;
  background-color:${props => props.theme.bg};
  padding:3.2rem 3rem;
`;