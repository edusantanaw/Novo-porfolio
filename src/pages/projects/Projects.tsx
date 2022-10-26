import { Container } from "./styles";
import { Title } from "../../styles/Global";
import ProjectCard from "../../components/project/ProjectCard";
import smartift from "../../assets/projects/smartfit.webp";
import article from "../../assets/projects/Projeto1.webp";
import taslks from "../../assets/projects/tasks.png";
import port from "../../assets/projects/port.png";
import fylo from "../../assets/projects/fylo.webp";
import loop from "../../assets/projects/loop.webp";

export default function Project() {
  return (
    <Container id="projects">
      <Title>Projetos</Title>
      <div className="projects">
        <ProjectCard
          img={article}
          alt="article project"
          title="Sitema de artigos"
          link="https://sistema-de-artigos.netlify.app/"
          details="Sistema de criação de artigos com autenticação de usuario, desenvolvido em nodeJs e react"
        />
        <ProjectCard
          img={smartift}
          alt="smartfit project"
          title="Smartfit challenge"
          link="https://smartfitchallenge.netlify.app"
          details="Challenge da smartfit, filtragem de itens pelo horario de abertura, consumo de api, react hooks, styled-components "
        />
        <ProjectCard
          img={taslks}
          alt="tasks project"
          title="Minhas tarefas"
          link="https://63583ea9e15c782c9b9c0be8--resplendent-faloodeh-db0845.netlify.app/"
          details="Criação de tarefas com sub tarefas, react, localstorage, react hooks e styled-components"
        />
        <ProjectCard
          img={port}
          alt="tasks project"
          title="Minhas tarefas"
          link="https://63583ea9e15c782c9b9c0be8--resplendent-faloodeh-db0845.netlify.app/"
          details="Meu primeiro portfolio, desenvolvido quando eu estava inciando no react"
        />
        <ProjectCard
          img={fylo}
          alt="fylo project"
          title="Fylo lading page"
          link="https://fylo-edusantanaw.netlify.app/"
          details="Lading page fylo, desenvolvido em react e styled-components"
        />
        <ProjectCard
          img={loop}
          alt="fylo project"
          title="Loopstudios lading page"
          link="https://vrpage.netlify.app"
          details="Lading page loopstudios, desenvolvido em react e styled-components"
        />
      </div>
    </Container>
  );
}
