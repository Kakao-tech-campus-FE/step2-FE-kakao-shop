import React from 'react';
import styled from 'styled-components';  

const InputStyle = styled.input`
  flex-grow: 1;
  height: 30px;

`

  const Input = ( { id, className, value, type, placeholder, onChange } ) => {
    return (
        <InputStyle 
          id={id}
          className={className} 
          value={value} 
          type={type} 
          placeholder={placeholder}
          onChange={onChange}
          />
    );
};

  export default Input;