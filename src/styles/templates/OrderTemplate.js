import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const Box = styled.div`
    width: 55vw;
    margin: 3em 0;
    min-width: 700px;
`

export const Title = styled.h1`
    border: 2px solid #FFE6EB;
    font-size: 1.1em;
    font-weight: bold;
    text-align: center;
    padding: 1em;
    margin-bottom: 0;
`
export const DeliveryContainer = styled.div`
    border: 2px solid #FFE6EB;
    border-top: none;
    padding: 0.7em;
`

export const DeliveryInfoTitle = styled.h2`
    font-size: 1.1em;
    font-weight: bold;
    border: 2px solid #FFE6EB;
    border-top: none;
    padding: 0.7em;
    margin: 0;
`

export const DeliveryInfoName = styled.div`
    display: flex;
    gap: 10px;
    margin-bottom: 0.3em;
`

export const DeliveryDefalt = styled.span`
    background-color: #CDECFA;
    border-radius: 5px;
    padding: 0.3em;
    font-size: 0.7em;
    color: blue;
`

export const ProductInfo = styled.div`
    margin-top: 1em;
    font-size: 1.1em;
    font-weight: bold;
    border: 2px solid #FFE6EB;
    padding: 0.7em;
`

export const TotalPriceContainer = styled.div`
    display: flex;
    justify-content: space-between;
    font-size: 1.1em;
    font-weight: bold;
    .price {
        color: #288CFF;
    }
    margin-top: 1em;
    border: 2px solid #FFE6EB;
    padding: 0.7em;
`

export const CheckBoxContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    label {
        padding-left: 0.4em;
    }
    border: 2px solid #FFE6EB;
    border-bottom: none;
    margin-top: 1em;
`

export const TotalAgree = styled.div`
    font-size: 1.1em;
    font-weight: bold;
    border-bottom: 2px solid #FFE6EB;
    padding: 0.7em;
`
export const Checkbox = styled.div`
    padding: 0.7em;
    display: flex;
    flex-direction: column;
    gap: 10px;
`

export const PolicyTitle = styled.div`
    font-weight: bold;
    padding-left: 0.5em;
`

export const PolicyText = styled.div`
    font-size: 0.9em;
    padding: 0.5em;
    margin-bottom: 1.5em;
`

export const Button = styled.button`
    padding: 0.8em;
    width: 100%;
    background-color: #FEE500;
    border: none;
    font-weight: bold;
    pointer-events:${(props)=>props.disabled?'none':null};
`
