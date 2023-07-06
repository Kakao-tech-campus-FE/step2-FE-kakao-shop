import React from 'react';
import styled from 'styled-components';   

const Div = styled.div`
    display: flex;
    flex-direction: column;
    align-items: stretch;
    border: 1px solid black;
    max-width: 420px;
    border-radius: 15px;
    margin: 15px;
    padding: 10px 0;
`

const RegiContainer = ( {id, children}) => {
    return (
        <Div id={id}>{children}</Div>
    );
};

export default RegiContainer;