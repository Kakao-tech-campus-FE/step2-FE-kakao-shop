import styled from '@emotion/styled';
import { ReactElement } from 'react';

import { BannerImageItem } from './lib/bannerImages';

type BannerImageListItemProps = {
  imageItem: BannerImageItem;
  imageWidth: number;
  imagePadding: number;
};

function BannerImageListItem({ imageItem, imageWidth, imagePadding }: BannerImageListItemProps): ReactElement {
  const { imageUrl } = imageItem;

  return (
    <BannerImageListItemBlock imagePadding={imagePadding} imageWidth={imageWidth}>
      <ItemImage src={imageUrl} imageWidth={imageWidth} />
    </BannerImageListItemBlock>
  );
}

type IBannerImageItemStyled = {
  imageWidth: number;
  imagePadding: number;
};

const BannerImageListItemBlock = styled.div<IBannerImageItemStyled>`
  width: ${props => props.imageWidth}px;
  height: 100%;

  box-sizing: content-box; // gloabl border-box 제거
  padding: 0 ${props => props.imagePadding}px;
`;

const ItemImage = styled.img<{ imageWidth: number }>`
  width: ${props => props.imageWidth}px;
  height: 300px;

  object-fit: cover;
  vertical-align: top;
`;

export default BannerImageListItem;
