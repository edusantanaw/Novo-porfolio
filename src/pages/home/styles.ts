import styled from "styled-components";

export const Container = styled.section`
    width: 100%;
    min-height: 100vh;
    display: flex;
    justify-content: space-between;
    padding: 0 9%;
    align-items: center;
    color: #fff;
    h2{
        font-size: 5em;
        color: ${props => props.theme.colors.primary};
        padding-bottom: 0.1em;
    }
    p{
        max-width: 28em;
        font-size: 1.5em;
        font-weight: 400;
    }
    a{
        background-color: ${props => props.theme.colors.primary};
        padding: 0.9em 6em;
        border-radius: 5px;
        border: 1px solid #000;
        text-decoration: none;
        color: #fff;
        font-weight: bold;
        transition: 0.4s ease-in-out;
        &:hover{
            background-color: ${props => props.theme.title === "light" ?  '#fff' : '#fff'};
            color: ${props => props.theme.colors.primary}
        }

    }
    .moon{
        width: 18em;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100vh;
    }

    @media (max-width: 960px){
        padding-top: 1em;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;

        .home{
            text-align:center;
        }
    }

    @media (max-width: 800px){
        h2{
            font-size: 4em;
        }
    }

    @media (max-width: 650px){
        padding-top: 4em;
        h2{
            font-size: 3em;
        }
        p{
            font-size: 1.2em;
        }
        a{
            padding:  1.2em  6em;
        }
    }
`