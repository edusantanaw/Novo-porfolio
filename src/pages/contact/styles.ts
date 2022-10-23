import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  height: 50vh;
  padding: 0 7.8em;

  p:first-child{
      margin-top: 1em;
  }
  .icons {
    margin-top: 0.5em;
    display: flex;
    gap: 0.5em;
    font-size: 1.8em;
    color: ${(props) => props.color};
    cursor: pointer;
    svg {
      background-color: rgba(255, 255, 255, 0.01);
      border-radius: 3px;
      padding: 0.2em;
    }
  }
`;
