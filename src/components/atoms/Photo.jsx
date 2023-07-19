import React, { useState } from "react";
import styled from "styled-components";

const Photo = ({ src, alt }) => {
  const [isHovered, setIsHovered] = useState(false);
  const handleMouseEnter = () => {
    setIsHovered(true);
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  src = process.env.REACT_APP_API_URL + src;

  return (
    <ImageContainer
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <picture>
        <source srcSet={src} />
        <Image src={src} alt={alt} isHovered={isHovered} />
      </picture>
    </ImageContainer>
  );
};

export default Photo;

const ImageContainer = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 0.25rem;
`;

const Image = styled.img`
  object-fit: fill;
  height: 12rem;
  width: 100%;
  transition: transform 0.5s ease-in-out;

  ${(props) => props.isHovered && "transform: scale(1.1);"}
`;
