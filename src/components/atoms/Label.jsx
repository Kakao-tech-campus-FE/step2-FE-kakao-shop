import React from 'react';
import styled from 'styled-components';  

const LabelStyle = styled.label`
    min-width: 120px;
`

  const Label = ( props ) => {
    return (
        <LabelStyle 
            htmlFor={props.htmlFor}
            className={props.className}>
        {props.children}
        </LabelStyle>
    );
};

  export default Label;