import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  display: flex;
  background: ${(props) => props.theme.colors.background};
  color: ${(props) => props.theme.colors.primary};
  align-items: center;
  justify-content: space-between;
  padding: 1.5em 7.8em;
  position: fixed;
  z-index: 4;
  div {
    display: flex;
    align-items: center;
    gap: 2em;
  }
  ul {
    gap: 2em;
    display: flex;
    li {
      padding: 0.1em;
      list-style: none;
      font-size: 1.1em;
      font-weight: bold;
      position: relative;
      cursor: pointer;
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
`;
