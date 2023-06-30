import React from 'react';
import styled from 'styled-components';

// Carousel의 Carouselslide로부터 props를 전달받아 IMG를 렌더링
const Carouselslide = ({ img }) => {
    return (
        <>
            <IMG src={img} />
        </>
    );
};

const IMG = styled.img`
    max-width: 100%;
    height: 225px;
`;

export default Carouselslide;