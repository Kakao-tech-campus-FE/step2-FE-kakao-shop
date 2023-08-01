import styled from 'styled-components';

export const Container = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 5em auto;
    min-width: 700px;
`

export const HeadContainer = styled.div`
    text-align: center;
`

export const Head = styled.h1`
    font-size: 1.7em;
    font-weight: 600;
`

export const HeadText = styled.div`
    font-size: 1em;
    margin-bottom: 3em;
`

export const ProductsInfo = styled.div`
    border: 2px solid #FFE6EB;
    text-align: center;
    padding: 1em;
    min-width: 700px;
    font-weight: bold;
`

export const Payment = styled.div`
    display: flex;
    justify-content: space-between;
    font-size: 1.2em;
    font-weight: bold;
    .price {
        color: #288CFF;
    }
    margin-top: 1em;
    border: 2px solid #FFE6EB;
    padding: 1em;
`

export const Button = styled.button`
    display: inline-block;
    width: 700px;
    padding: 0.7em;
    font-weight: bold;
    border: none;
    background-color: #FEE500;
`