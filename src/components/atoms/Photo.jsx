import React from "react";
import styled from "styled-components";

const ImageContainer = styled.picture`
  .card {
    width: 18em;
    height: 11em;
    object-fit: cover;
    border-radius: 5px;
  }
  img {
    width: inherit;
  }
`;

const Photo = ({ className, src, alt }) => {
  return (
    <ImageContainer>
      <source media="(min-width: 650px)" srcSet={src} />
      <img src={src} alt={alt} className={className} />
    </ImageContainer>
  );
};

export default Photo;