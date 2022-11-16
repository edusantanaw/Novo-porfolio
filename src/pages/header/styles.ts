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
  #menu {
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
    svg{
      display: none;
    }
    li {
      padding: 0.1em;
      list-style: none;
      font-size: 1.1em;
      font-weight: 500;
      position: relative;
      cursor: pointer;

      a:hover {
        transition: 0.3s;
        color: ${(props) => props.theme.colors.primary};
      }
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
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-weight: bold;
    text-decoration: none;
    color: ${(props) => props.theme.colors.primary}
  }
  a {
      text-decoration: none;
      color: ${props=> props.theme.title === "dark" ? '#fff' : props.theme.colors.secundary};
    }
  #close {
    font-size: 2.5em;
    position: absolute;
    top: 0.5em;
    left: 80%;
    cursor: pointer;
  }
  .theme_switcher{
    position: absolute;
    right: 0;
    margin-top: 5em;
    background-color:${props => props.theme.colors.secundary};
    width:3em;
    height: 3em;
    display: flex;
    justify-content: center;
    transition: 0.6s;
    border-radius: 5px 0px 0px 5px;
    cursor: pointer;
    svg{
      font-size: 1.9em;
      color: ${props=> props.theme.title === "light" ? '#fff' : props.theme.colors.primary}
    }
  }

  @media (max-width: 650px) {
    padding: 0.5em 9%;
    ul {
      display: none;

      svg{
      display: block;
    }
  }
    #menu {
      display: block;
      font-size: 2.5em;
      cursor: pointer;
      animation-name: menu;
      animation-duration: 1s;
      animation-timing-function: cubic-bezier(0.19, 1, 0.22, 1);   
    }
    

    .show {
      display: flex;
      flex-direction: column;
      width: 50%;
      height: 100vh;
      background-color: ${(props) =>
        props.theme.title === "light" ? "#545677" : "#02010A"};
      box-shadow: 1px 1px 3px 1px #fff;
      position: fixed;
      top: 0;
      left: 50%;
      padding: 2em;
      transition: 0.2s;
      align-items: flex-start;
      animation-name: menu;
      animation-duration: 1s;
      animation-timing-function: cubic-bezier(0.19, 1, 0.22, 1);     
      a {
        font-size: 1.4em;
      }
    }
  }

  @keyframes menu {
    from {
      transform: translate3d(100%, 0%, 0);
    }
    to {
      transform: translate3d(0, 0, 0);
    }
  }
`;
