import styled from "styled-components"

const Container = styled.div`
    width: 100%;
    margin-top: 2em;
    justify-content: center;
    color: #fff;
    padding: 0.5em;
    display: flex;
    font-size: 1.1em;
    align-items: center;
    p{
        color: violet;
    }
    span{
        color: ${props => props.theme.colors.primary}
    }
`

export default function Footer(){
    return <Container><p>&copy;</p><span>edusantanaw</span></Container>
}