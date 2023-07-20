import React from 'react';
import '../../styles/Atoms/Box.css';
import { styled } from 'styled-components';

const StyledBox = styled.div`
  border: 1px solid #ddd;
`;

const Box = ({ children, className = 'red' }) => {
    return <StyledBox className={`box ${className}`}>{children}</StyledBox>;
};

export default Box;
