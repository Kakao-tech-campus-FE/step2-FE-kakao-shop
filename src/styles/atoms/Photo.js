import styled from 'styled-components';

export const ImageContainer = styled.picture`
  .card {
    width: 20rem;
    height: 13rem;
    object-fit: cover;
    border-radius: 10px;
  }
  img {
    width: inherit;
  }
  .productItem {
    width: 22rem;
    object-fit: cover;
    border-radius: 5px;
  }
`;
