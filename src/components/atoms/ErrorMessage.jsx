import React from 'react';
import styled from 'styled-components';   

const Text = styled.div`
    margin: 0 0 10px 140px;
`

const ErrorMessage = (props) => {
    return (
        <Text style={props.style}>{props.children}</Text>
    );
};

export default ErrorMessage;