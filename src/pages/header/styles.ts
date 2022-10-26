import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  display: flex;
  background: ${(props) => props.theme.colors.background};
  color: ${(props) => props.theme.colors.primary};
  align-items: center;
  justify-content: space-between;
  padding: 1.5em 9%;
  position: fixed;
  z-index: 4;
  #menu{
    display: none;
  }
  div {
    display: flex;
    align-items: center;
    gap: 2em;
  }
  ul {
    gap: 2em;
    display: flex;
    align-items: center;
    li {
      padding: 0.1em;
      list-style: none;
      font-size: 1.1em;
      font-weight: bold;
      position: relative;
      cursor: pointer;
    }
    a{
      text-decoration: none;
      color: ${(props) => props.theme.colors.primary};
    }
    li::after {
      content: " ";
      width: 0%;
      background-color: ${(props) => props.theme.colors.primary};
      height: 2px;
      bottom: 0;
      left: 0;
      position: absolute;
      transition: 0.3s ease-in-out;
    }
    li:hover::after {
      width: 100%;
    }
  }
  h1 {
    font-size: 2em;
    font-weight: bold;
  }

  #close{
    font-size: 2.5em;
    position: absolute;
    top: 0.5em;
    left: 80%;
    cursor: pointer;
  }

  @media (max-width: 650px){
   padding: 0.5em 9%;
    ul{
      display: none;
    }
    #menu{
      display: block;
      font-size: 2.5em;
      cursor: pointer;
    }

    .show{
      display: flex;
      flex-direction: column;
      width: 50%;
      height: 100vh;
      background-color: ${ props => props.theme.title === 'light' ? '#545677'  : '#02010A'};
      box-shadow: 1px 1px 3px 1px #fff;
      position: fixed;
      top: 0;
      left: 50%;
      padding: 2em;
      align-items: flex-start;
      a{
        font-size: 1.4em;
      }
    }
  }
`;
