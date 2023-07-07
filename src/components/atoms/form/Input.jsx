import React from 'react';
import styled from 'styled-components';  

const InputStyle = styled.input`
  flex-grow: 1;
  height: 30px;

`

  const Input = ( props ) => {
    return (
        <InputStyle 
          id={props.id}
          value={props.value} 
          type={props.type} 
          placeholder={props.placeholder}
          onChange={props.onChange}
          />
    );
};

  export default Input;