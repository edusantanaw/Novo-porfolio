import React, {useContext} from "react"
import Switch from 'react-switch'
import {ThemeContext} from 'styled-components'
import {Container} from './styles'

interface Props {
    toggleTheme(): void
}


export const  Header: React.FC<Props> = ({toggleTheme}) =>{
const {title, colors} = useContext(ThemeContext)

    return (
        <Container>
            <h1>Eduardo</h1>
            <div>
            <ul>
                <li>Inicio</li>
                <li>Sobre</li>
                <li>Projetos</li>
                <li>Habilidades</li>
                <li>Contato</li>
            </ul>
            <Switch
            onChange={toggleTheme}
            checked = {title === 'dark'}
            checkedIcon= {false}
            uncheckedIcon= {false}
            height = {18}
            width ={40}
            handleDiameter = {15}
            offColor="#000"
            onColor = '#000'
            />
            </div>
        </Container>
    )
}