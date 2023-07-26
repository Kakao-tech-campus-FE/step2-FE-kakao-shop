import styled from 'styled-components';

export const Container = styled.div`
    padding: 0.7em;
    border: 2px solid #FFE6EB;
    border-top: none;
    display: flex;
    flex-direction: column;
    gap: 1em;
`

export const OneProductContainer = styled.div`
    padding-bottom: 1em;
    border-bottom: 2px solid #FFE6EB;
`

export const ProductName = styled.div`
    font-weight: bold;
    font-size: 1em;
    margin-bottom: 0.5em;
`

export const OptionContainer = styled.div`
    padding-left: 1em;
    font-size: 0.9em;
`
export const Option = styled.div`
    margin-bottom: 1em;
`

export const OptionQuantityPrice = styled.div`
    display: flex;
    justify-content: space-between;
    font-weight: bold;
`