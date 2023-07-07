import React from 'react';
import styled from "styled-components";

const DoubleCheckStyle = styled.button`
    margin: 0;
    font-size: 12px;
    width: 4rem;
    padding: 5px 2px;

    position:relative;
    left:10.5rem;
    bottom: 4.75rem;

    background-color: #f2bd10;
    border: 0;
    color: #ffffff;
    border-radius: 10px;
    font-weight: 600;

    
`

const DoubleCheck = ({ onClick }) => {
    return (
        <DoubleCheckStyle onClick={onClick}>
            중복확인
        </DoubleCheckStyle>

    );
};

export default DoubleCheck;

//중복확인 검사 useFetch 한 후 얻은 불린값을 