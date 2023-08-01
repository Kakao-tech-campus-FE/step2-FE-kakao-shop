import styled from 'styled-components';

export const ImageContainer = styled.picture`
    .card {
        width: 20em;
        height: 13em;
        object-fit: cover;
        border-radius: 10px;
    }
    img {
        width: inherit;
    }
    .productItem {
        width: 22em;
        object-fit: cover;
        border-radius: 5px;
    }
`