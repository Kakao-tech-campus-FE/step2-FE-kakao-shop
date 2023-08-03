import { SerializedStyles } from '@emotion/react';
import styled from '@emotion/styled';
import { PropsWithChildren } from 'react';

type Props = {
  src: string;
  alt: string;
  pictureClassName?: SerializedStyles;
  imageClassName?: SerializedStyles;
};

const Photo = ({ pictureClassName, imageClassName, src, alt }: PropsWithChildren<Props>) => {
  return (
    <S.Picture css={pictureClassName}>
      <S.Image css={imageClassName} src={src} alt={alt} />
    </S.Picture>
  );
};

export default Photo;

const S = {
  Picture: styled.picture``,

  Image: styled.img`
    width: 99%;
    aspect-ratio: 16/9;

    @media (max-width: 768px) {
      aspect-ratio: auto;
    }
  `,
};
