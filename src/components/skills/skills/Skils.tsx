import { Title } from "../../../styles/Global";
import { Container } from "./styles";
import Card from "../SkillCard";
import {
  DiNodejsSmall,
  DiReact,
  DiPostgresql,
  DiMongodb,
  DiJavascript,
  DiCss3,
  DiHtml5,
} from "react-icons/di";
import { SiStyledcomponents, SiTypescript } from "react-icons/si";

export default function Skill() {
  return (
    <Container>
      <div className="tecn">
        <Card
          Element={DiReact}
          color="blue"
          title="React"
        />
        <Card Element={DiPostgresql} color="blue" title="Postgress" />
        <Card Element={DiJavascript} color="yellow" title="Javascript" />
        <Card Element={SiTypescript} color="blue" title="TypeScript" />
        <Card Element={DiMongodb} color="green" title="MongoDB" />
        <Card Element={DiHtml5} color="orange" title="Html" />
        <Card Element={DiCss3} color="blue" title="Css" />
        <Card Element={DiNodejsSmall} color="green" title="NodeJs" />
        <Card
          Element={SiStyledcomponents}
          color="violet"
          title="Styled-components"
        />
      </div>
    </Container>
  );
}
