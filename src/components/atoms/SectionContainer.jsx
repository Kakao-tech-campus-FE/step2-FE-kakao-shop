import React from 'react';
import styled from 'styled-components';   

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px 0;
`

const SectionContainer = (props) => {
    return (
        <Container>{props.children}</Container>
    );
};

export default SectionContainer;