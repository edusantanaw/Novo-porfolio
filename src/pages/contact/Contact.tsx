import { Paragraph } from "../../styles/Global";
import { Container } from "./styles";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdOutlineMailOutline } from "react-icons/md";

export default function Contact() {
  return (
    <Container id="contact">
      <div className="main">
      <div>
        <MdOutlineMailOutline color="#939292" />
        <span>E-mail</span>
        <Paragraph>eduardosantanavidal@gmail.com</Paragraph>
      </div>
      <div>
        <BsFillTelephoneFill color="#06c6ec" />
        <span>Telefone:</span>
        <Paragraph>15981026465</Paragraph>
      </div>
      <div>
        <a href="https://github.com/edusantanaw">
          <FaGithub color="#e40808" />
        </a>
        <span>Github</span>
        <Paragraph>edusatanaw</Paragraph>
      </div>
      <div>
        <a href="https://www.linkedin.com/in/eduardo-santana-7a4926245/">
          <FaLinkedin color="#0d14db" />
        </a>
        <span>Linkedin</span>
        <Paragraph>Eduardo Santana</Paragraph>
      </div>
      <div>
        <a href="https://www.instagram.com/edusantanaw/">
          <FaInstagram color="#fd04e0" />
        </a>
        <span>Instagram</span>
        <Paragraph>edusatanaw</Paragraph>
      </div>
      </div>
    </Container>
  );
}
