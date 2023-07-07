import React from 'react';
import styled from 'styled-components';   

const ContainerStyle = styled.div`
`

const PageContainer = ( {children}) => {
    return (
        <ContainerStyle>{children}</ContainerStyle>
    );
};

export default PageContainer;