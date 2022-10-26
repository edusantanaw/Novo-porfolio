import { Container } from "./styles";
import {Moon} from "../../components/moon/Moon";
import { Paragraph } from "../../styles/Global";
import Skill from "../../components/skills/skills/Skils";

export const Home: React.FC = () => {
  return (
    <Container id="home">
      <div className="home" >
        <h2>Olá, eu sou o Edu.</h2>
        <Paragraph>
          Eu sou um desenvoldedor frontend, atualmente estou focado em aprimorar as
          minhas habilidades e conseguir a minha primeira oportunidade
          no mercado de trabalho.{" "}
        </Paragraph>
        <Skill />
        <a href=""download>Baixar CV</a>
      </div>
        <Moon width={100} height={100} />
    </Container>
  );
};

export default Home;
