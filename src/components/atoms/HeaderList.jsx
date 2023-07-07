import React from 'react';
import styled from 'styled-components';
const HeaderListStyle = styled.div`
    margin-right: 1rem;
    margin-bottom: 0.5rem;
    font-size: 14px;

`



const HeaderList = ({ name, onClick, slash }) => {
    return (<>


        <HeaderListStyle>
            <div onClick={onClick}>{name}</div>
        </HeaderListStyle>
        <HeaderListStyle>
            {slash ? '/' : ''}
        </HeaderListStyle>
    </>



    );
};

export default HeaderList;