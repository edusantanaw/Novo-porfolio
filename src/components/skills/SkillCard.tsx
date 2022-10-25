import styled, { IntrinsicElementsKeys } from "styled-components";

const Container = styled.div`
  background-color: violet;
  width: 10em;
  font-size: 5em;

  #icons{
    color: ${color => color.color}
  }
`;

interface Props {
  title: string;
  content: string;
  Element: React.FC;
}

 const Card: React.FC<Props> = ({ title , Element, content, color }) => {
  return (
    <Container>
      <div>
        <Element color={`${color}`} id="icon"/>
        <h3>{title}</h3>
      </div>
      <p>{content}</p>
    </Container>
  );
}

export default Card
