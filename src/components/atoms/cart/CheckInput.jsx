import React from 'react'
import styled from 'styled-components';  

const StyledInput = styled.input`
  accent-color: yellow;
  margin-right: 10px;
`
const CheckBox = (props) => {
    return (
        <StyledInput
            type="checkbox"
            defaultChecked={props.defaultChecked} 
            onChange={props.onChange}/>
    );
};

export default CheckBox