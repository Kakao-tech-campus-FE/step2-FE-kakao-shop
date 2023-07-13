import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    padding: 1.4em 2em;
`

export const Header = styled.header`
    position: fixed;
    width: 100%;
    border-bottom: 1px solid #D8D8D8;
`

export const MenuUtil = styled.span`
    display: flex;
    align-items: center;
    margin-left: auto;
    .header-login {
        font-size: .9em;
        padding-left: 1.5em;
        border-left: 1px solid #D8D8D8;
    }
    .header-cart {
        padding-right: 1.5em;
    }
`