import styled from 'styled-components';

export const LoginError = styled.div`
    background-color: #F6F6F6;
    border: 1px solid #F6F6F6;
    color: gray;
    .login-error {
        font-size: 0.8em;
        color: red;
        padding: 1.5em;
    }
    @media only screen and (max-width: 700px) {
        margin-left: 10vw;
        margin-right: 10vw;
    }
`