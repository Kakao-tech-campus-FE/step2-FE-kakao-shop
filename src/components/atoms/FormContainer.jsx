import React from 'react';
import styled from 'styled-components';   

const Div = styled.div`
    display: flex;
    flex-direction: column;
    align-items: stretch;
    box-shadow: 0px 0px 5px rgb(199, 199, 199);
    border-radius: 5px;
    width: 420px;
    margin: 15px;
    padding: 10px 0;
`

const RegiContainer = (props) => {
    return (
        <Div id={props.id}>{props.children}</Div>
    );
};

export default RegiContainer;