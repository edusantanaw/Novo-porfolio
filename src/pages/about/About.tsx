import { Container } from "./styles";
import { Title } from "../../styles/Global";
import { Paragraph } from "../../styles/Global";
import me from '../../assets/me.png'

export default function About() {
  return (
    <Container id="about">
      <div>
      <Title>Sobre mim</Title>
      <Paragraph>
        Eu sou o Eduardo, tenho 19 anos e atualmente estou cursando analise e
        desenvolvimentos de sitemas, 4 semestre, estudo sobre programação a um
        ano e meio, a alguns meses atras tive um primeiro contato com
        programação voltado para web, no qual despertou bastante o meu
        interesse, atualmente estou estudando sobre react, node , typescript e
        arriscando um pouco na criação de interfaces.
      </Paragraph>
      <div className="infos">
        <Paragraph><span>Nome:</span> Eduardo Santana Vidal</Paragraph>
        <Paragraph><span>Cidade:</span> Sorocaba-SP</Paragraph>
        <Paragraph><span>Idade:</span> 19 Anos</Paragraph>
        <Paragraph><span>Status:</span> Disponivel para uma primeira oportunidade!</Paragraph>
      </div>
      </div>
      <img src={me} alt="foto de eduardo santana" />
    </Container>
  );
}
