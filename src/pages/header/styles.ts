import styled from "styled-components";

export const Container = styled.header`
    width:100%;
    display: flex;
    background: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.primary};
    align-items:center;
    justify-content:space-between;
    padding: 1.5em 7.8em;
    position: fixed;
    z-index: 4;
    div{
        display: flex;
        align-items: center;
        gap:2em;
    }
    ul{
        gap: 2em;
        display: flex;
        li{
            list-style: none;
            font-size: 1.1em;
            font-weight: bold;
            cursor: pointer;
        }
    }
    h1{
    font-size: 2em;
    font-weight: bold;
    }
   
    
`