import styled from 'styled-components';

export const Container = styled.div`
    margin-top: 3em;
    display:flex;
    flex-direction: column;
    width: 23em;
`

export const Title = styled.div`
    font-weight: bold;
    font-size: 0.9em;
`

export const Delivery = styled.div`
    font-size: 0.9em;
`

export const DeliveryTitle = styled.span`
    font-weight: bold;
    margin: 0.3em 0;
    margin-right: 0.5em;
`

export const DeliveryPrice = styled.div`
    background-color: #FFE3EE;
    border-radius: 4px;
    border: 1px solid #bebebe;
    font-size: 0.9em;
    padding: 0.3em;
    padding-left: 0.5em;
    color: #828282;
`   

export const AddPrice = styled.div`
    border-bottom: 1px solid #D8D8D8;
    padding-bottom: 1.3em;
`
export const Result = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 0.7em;
`

export const Purchase = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 1em;
    height: 3em;
    font-size: 0.9em;
    .cartButton {
        width: 9em;
        color: white;
        background-color: black;
        border-radius: 8px;
    }
    .talkButton {
        width: 16.2em;
        background-color: #FEE500;
        border: none;
        border-radius: 8px;
    }
`

export const SelectedOption = styled.div`
    border: 1px solid #D8D8D8;
    padding: 0.5em;
    font-size: 0.9em;
`

export const CounterContainer = styled.div`
    display: flex;
    justify-content: space-between;
`