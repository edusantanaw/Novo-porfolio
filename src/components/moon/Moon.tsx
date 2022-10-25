import Circus from "./Circus";
import Half1 from "./Half1";
import Half2 from "./Half2";
import styled from "styled-components";

type len = {
  width: number;
  height: number;
};

const Container = styled.div`
display:flex;
flex-direction: column;
gap: 0.5em;
color: ${props=> props.theme.colors.primary};
  svg {
    transform: rotate(90deg);
    filter: drop-shadow(2px -1px  6px ${props=> props.theme.colors.primary} );
  }

  .invert{
    transform: rotate(270deg);
    filter: drop-shadow(-2px 1px 6px ${props=> props.theme.colors.primary} );
  }
`;

export const Moon = ({ width, height }: len) => {
  return (
    <Container>
      <Half2 width={width} height={height} />
      <Half1 width={width} height={height} />
      <Circus width={width} height={height} />
      <Half1 width={width} height={height} className="invert" />
      <Half2 width={width} height={height} className="invert" />
    </Container>
  );
};
