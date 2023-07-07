import React from 'react';
import styled from 'styled-components';   

const BoxStyle = styled.div`
    display: flex;
`

const UnderInputBox = (props) => {
    return (
        <BoxStyle>{props.children}</BoxStyle>
    );
};

export default UnderInputBox;