import styled from 'styled-components';
import {Link} from "react-router-dom";

export const Container = styled.div`
    text-align: center;
    margin: 3em;
`

export const List = styled.span`
    margin-right: 1em;
    &:hover{
        color: burlywood;
    }
`

export const Nav = styled(Link)`
    color: black;
    text-decoration: none;
    &:hover{
        color: burlywood;
    }
`

export const Head = styled.div`
    text-align: center;
    margin-top: 3em;
    font-size: 0.7em;
    font-weight: bold;
`