import React, { useState } from "react";
import styled from "styled-components";

const staticServerUri = process.env.REACT_APP_PATH || "";

const Photo = ({ src, alt }) => {
  const [isHovered, setIsHovered] = useState(false);
  const handleMouseEnter = () => {
    setIsHovered(true);
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const photoSrc = staticServerUri + src;

  return (
    <ImageContainer
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <picture>
        <source srcSet={photoSrc} className="h-48 w-full" />
        <Image src={photoSrc} alt={alt} isHovered={isHovered} />
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
  transition: transform 0.5s ease-in-out;
  ${(props) => props.isHovered && "transform: scale(1.1);"}
`;
