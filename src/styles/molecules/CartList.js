import styled from 'styled-components';

export const ListContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
`

export const ListBox = styled.div`
    width: 60em;
    margin-left: 8em;
    margin-right: 8em;
    @media only screen and (max-width: 800px) {
        margin-left: 7vw;
        margin-right: 7vw;
    }
`

export const Title = styled.div`
    border: 2px solid #FFE6EB;
    font-size: 1.1em;
    font-weight: bold;
    text-align: center;
    padding: 1em;
    border-bottom: 2px solid #FFE6EB;
`
export const OptionContainer = styled.div`
    border: 2px solid #FFE6EB;
    border-top: none;
`

export const TotalPrice = styled.div`
    margin-top: 1em;
    padding: 1em 1em;
    display: flex;
    border-top: 2px solid #FFE6EB;
    border-left: 2px solid #FFE6EB;
    border-right: 2px solid #FFE6EB;
    justify-content: space-between;
    font-size: 1.1em;
    font-weight: bold;
`

export const OrderButton = styled.button`
    background-color: #FEE500;
    border: none;
    width: 100%;
    height: 3em;
    font-size: 1.1em;
    font-weight: bold;
`