import React from 'react';
import styled from 'styled-components';   

const ContainerStyle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px 0;
`

const ContentContainer = (props) => {
    return (
        <ContainerStyle>{props.children}</ContainerStyle>
    );
};

export default ContentContainer;