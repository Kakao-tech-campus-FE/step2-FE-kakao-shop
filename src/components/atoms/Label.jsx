import React from 'react';
import styled from 'styled-components';  

const LabelStyle = styled.label`
    min-width: 120px;
`

  const Label = ( { htmlFor, className, children } ) => {
    return (
        <LabelStyle 
            htmlFor={htmlFor}
            className={className}>
        {children}
        </LabelStyle>
    );
};

  export default Label;