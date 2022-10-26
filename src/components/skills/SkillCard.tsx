import styled, { IntrinsicElementsKeys } from "styled-components";

const Container = styled.div`
position: relative;
 #icon {
    color: ${(color) => color.color};
    font-size: 2em;
    content: ${props => props.title};
  }
`;

interface Props {
  Element: any;
  color: string;
  title: string;
}

const Card: React.FC<Props> = ({ Element, color, title }) => {
  return (
    <Container>
      <Element color={color} id="icon" title= {title} />
    </Container>
  );
};

export default Card;
