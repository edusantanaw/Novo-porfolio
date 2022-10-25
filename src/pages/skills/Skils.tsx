import { Title } from "../../styles/Global";
import { Container } from "./styles";
import Card from "../../components/skills/SkillCard";
import {
  DiNodejsSmall,
  DiReact,
  DiPostgresql,
  DiMongodb,
  DiJavascript,
  DiCss3,
  DiHtml5
} from "react-icons/di";
import {SiStyledcomponents, SiTypescript} from 'react-icons/si'

export default function Skill() {
  return (
    <Container>
      <Title>Tecnologias</Title>
      <div className="tecn">
        <Card title="React" Element={DiReact} content="" color =  "blue" />
        <Card title="Node" Element={DiNodejsSmall} content="green" />
        <Card title ="Typescript" Element={SiTypescript} content="" />
        <Card title ="Javascript" Element={DiJavascript} content= "" />
        <Card title ="MongoDB" Element={DiMongodb} content = "" />
        <Card title = "Postgres" Element={DiPostgresql} cotent = "" />
        <Card title = "Css" Element={DiCss3} content = "" /> 
        <Card title= "Html" Element={DiHtml5} content = ""  />
        <Card title = "Styled" Element={SiStyledcomponents} content = "" />
      </div>
    </Container>
  );
}
