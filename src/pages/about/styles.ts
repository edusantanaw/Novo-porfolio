import styled from "styled-components";

export const Container = styled.section`
  margin-top: 2em;
  padding: 0 7.8em;
  width: 100%;
  height: 100vh;

  p {
    margin-top: 1em;
    max-width: 37em;
  }
  .infos {
    margin-top: 2em;
    p {
      margin-top: 0.9em;
    }
    span {
      font-weight: ${props => props.theme.colors.span};
    }
  }
`;
