import styled from "styled-components";

export const Container = styled.section`
  margin-top: 2em;
  padding: 0 7.8em;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: space-between;
 align-items:center;
  p {
    margin-top: 1em;
    max-width: 30em;
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

  img{
    height: 70%;
    filter: saturate(0);
    border-radius: 5px;
  }
`;
