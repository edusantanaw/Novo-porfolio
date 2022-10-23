import styled from "styled-components";

export const Container = styled.section`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: space-between;
    padding: 0 7.8em;
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
    .moon{
        width: 18em;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100vh;
    }
`