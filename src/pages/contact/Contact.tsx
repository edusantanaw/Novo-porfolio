import { Title, Paragraph } from "../../styles/Global";
import { Container } from "./styles";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Contact() {
  return (
    <Container>
      <Title>Contatos</Title>
      <Paragraph>
        <span>Email:</span> eduardosantanavidal@gmail.com
      </Paragraph>
      <Paragraph>
        <span>Telefone:</span> 15981026465
      </Paragraph>
      <div className="icons">
        <FaGithub color="#a707cf" />
        <FaLinkedin color ="#0d14db" />
        <FaInstagram color="#ce01b6" />
      </div>
    </Container>
  );
}
