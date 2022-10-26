import styled from "styled-components";

export const Container = styled.section`
    width: 100%;
    margin-bottom: 2em;
    .tecn{
        margin-top: 1em;
        display: flex;
        gap: 1em;
        flex-wrap: wrap;
    }

    @media (max-width: 960px){
        .tecn{
        justify-content: center;
    }
}
`