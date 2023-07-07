import React from 'react';
import styled from 'styled-components';   

const ContainerStyle = styled.div`
`

const PageContainer = (props) => {
    return (
        <ContainerStyle>{props.children}</ContainerStyle>
    );
};

export default PageContainer;