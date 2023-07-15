import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: block;
`


const PageContainer = (props) => {
    return (
        <Container id="wrap">{props.children}</Container>
    );
};

export default PageContainer;