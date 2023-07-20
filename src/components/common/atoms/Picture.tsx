import React from 'react';
import { styled } from 'styled-components';

interface PictureProps {
  src: string;
  alt: string;
  width: number;
  height: number;
}
function Picture({ src, alt, width, height }: PictureProps) {
  return (
    <picture>
      <Wrap width={width} height={height}>
        <Img src={src} loading="lazy" alt={alt} />
      </Wrap>
    </picture>
  );
}

export default Picture;

const Wrap = styled.div<Pick<PictureProps, 'width' | 'height'>>`
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  border-radius: 10px;
  overflow: hidden;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  &:hover {
    scale: 1.2;
  }
  transition: 0.3s;
`;
