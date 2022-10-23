import styled, { createGlobalStyle } from "styled-components";

export const Global = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body{
        font-family: 'Roboto', sans-serif;
        background: ${(props) => props.theme.colors.background};
    }
`;

export const Title = styled.h2`
  color: ${(props) => props.theme.colors.primary};
  font-size: 3em;
`;

export const Paragraph = styled.p`
  color: ${(props) => props.theme.colors.secundary};
  font-size: 1.3em;
  font-weight: ${props => props.theme.colors.weight};
  letter-spacing: 1.4px;
`;
