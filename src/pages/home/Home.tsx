import { Container } from "./styles";
import {Moon} from "../../components/Moon";
import { Paragraph } from "../../styles/Global";

export const Home: React.FC = () => {
  return (
    <Container>
      <div className="home">
        <h2>Olá, eu sou o Edu.</h2>
        <Paragraph>
          Eu sou um desenvoldedor, atualmente estou focado em aprimorar as
          minhas habilidades frontend e conseguir a minha primeira oportunidade
          no mercado de trabalho.{" "}
        </Paragraph>
      </div>
        <Moon width={100} height={100}  />
    </Container>
  );
};

export default Home;
