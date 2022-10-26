import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  height: 30vh;
  padding: 10em 9%;

  .main{
    display: flex;
    align-items: flex-start;
    justify-content: space-around;
    div{
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0.3em;
      svg{
        font-size: 3em;
        background-color: rgba(255, 255, 255, 0.1);
        padding: 0.2em;
        border-radius: 50%;
        cursor: pointer;
      }
    }
  }
 
  p{
    padding: 0 0 0.5em 0;
    font-size: 1em;
  }
  span{
    font-weight: ${props => props.theme.colors.span};
    color: ${props => props.theme.colors.primary};
  }

  @media (max-width: 900px){
    padding-top: 1em;
    height: 80vh;
    .main{
    height: auto;
    flex-direction: column;
  }
}
`;
