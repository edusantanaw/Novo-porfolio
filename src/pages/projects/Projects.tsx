import {Container} from './styles'
import { Title } from '../../styles/Global' 
import ProjectCard from '../../components/project/ProjectCard'
import  smartift from '../../assets/projects/smartfit.webp'

export default function Project(){
    return(
        <Container>
            <Title>Projetos</Title>
            <div className='projects'>
                <ProjectCard img={smartift} alt="smartfit project" title ="Smartfit" link = "/" />
            </div>
        </Container>
    )
}