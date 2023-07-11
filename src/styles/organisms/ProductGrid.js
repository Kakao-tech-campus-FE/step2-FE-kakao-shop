import styled from 'styled-components';

export const Product = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 2em;
    margin: 3em 0;
    width: 100%;
    max-width: inherit;
    @media screen and (max-width: 700px) {
        grid-template-columns: repeat(2, 1fr);
        width: 80vw;
        margin-left: 10vw;
        margin-right: 10vw;
    }
`