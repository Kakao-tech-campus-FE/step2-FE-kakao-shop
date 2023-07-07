import React from 'react';
import styled from 'styled-components';   

const Text = styled.div`
    margin: 0 0 10px 143px;
    font-size: 0.8rem;
`

const FormatCheck = (props) => {
    return (
        <Text style={props.style}>{props.children}</Text>
    );
};

export default FormatCheck;