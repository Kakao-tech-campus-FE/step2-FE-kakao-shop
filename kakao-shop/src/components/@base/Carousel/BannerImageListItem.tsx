import { IBannerImageItem } from "./lib/bannerImages";
import { ReactElement } from "react";
import styled from "@emotion/styled";

interface BannerImageListItemProps {
  imageItem: IBannerImageItem;
  isCenter: boolean;
  imageWidth: number;
  imagePadding: number;
}

function BannerImageListItem({
  imageItem,
  isCenter,
  imageWidth,
  imagePadding,
}: BannerImageListItemProps): ReactElement {
  const { imageUrl } = imageItem;

  return (
    <BannerImageListItemBlock
      isCenter={isCenter}
      imagePadding={imagePadding}
      imageWidth={imageWidth}
    >
      <ItemBox>
        <ItemImage src={imageUrl} isCenter={isCenter} imageWidth={imageWidth} />
      </ItemBox>
    </BannerImageListItemBlock>
  );
}

interface IBannerImageItemStyled {
  isCenter: boolean;
  imageWidth: number;
  imagePadding: number;
}

const BannerImageListItemBlock = styled.div<IBannerImageItemStyled>`
  width: ${(props) => props.imageWidth}px;
  padding: 0 ${(props) => props.imagePadding}px;
  box-sizing: content-box;
  float: left;
  height: 100%;
  min-height: 1px;
`;

const ItemBox = styled.div`
  position: relative;
`;

const ItemImage = styled.img<{ isCenter: boolean; imageWidth: number }>`
  width: ${(props) => props.imageWidth}px;
  height: 300px;
  object-fit: cover;
  vertical-align: top;
`;

export default BannerImageListItem;
