import styled from 'styled-components';

export const OptionItemId = styled.span`
    font-weight: 400;
`

export const OptionItem = styled.div`
    border: 1px solid #D8D8D8;
    padding: 0.5em;
    font-size: 0.9em;
    font-weight: bold;
    cursor: pointer;
`

export const OptionPrice = styled.div`
    padding-left: 1.3em;
    font-weight: 400;
`

export const Container = styled.div`
    padding: 0.5em 0;
    > * {
        &:first-child {
            border-top-right-radius: 8px;
            border-top-left-radius: 8px;
        }

        &:last-child {
            border-bottom-right-radius: 8px;
            border-bottom-left-radius: 8px;
        }
    }
`