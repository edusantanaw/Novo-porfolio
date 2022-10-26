import styled from "styled-components";

export const Container = styled.section`
  padding: 1em 9%;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
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
      font-weight: ${(props) => props.theme.colors.span};
      color: ${props => props.theme.colors.primary};
    }
  }

  img {
    height: 70%;
    filter: saturate(0);
    border-radius: 5px;
  }

  @media (max-width: 1100px){
    img{
      height: 50%;
    }
  }

  @media (max-width: 960px){
    img{
      display: none;
    }
    display: flex;
    justify-content: center;

  }
`;
