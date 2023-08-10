import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { ReactElement, useMemo, useState } from 'react';

import useCarousel from '@hooks/@common/useCarousel';
import { IsMobile } from '@hooks/@common/useViewport';
import useWindowDimensions from '@hooks/@common/useWindowDimentions';

import BannerImageListItem from './BannerImageListItem';
import { bannerImages, bannerMoblieImages } from './lib/bannerImages';

function BannerImageList({ isMobile }: IsMobile): ReactElement {
  const [imageWidth, setImageWidth] = useState(getImageWidth());
  const { width } = useWindowDimensions(); //  window 사이즈가 변화할 때마다 변경되는 width 값

  const slideImagePadding = useMemo(() => {
    if (width >= 1920) {
      setImageWidth(1920);
      return (width - 1920) / 2;
    } else if (width < 1920 && width > 1440) {
      setImageWidth(width);
      return 0;
    } else if (width < 768) {
      setImageWidth(width);
      return 0;
    } else {
      setImageWidth(width);
      return 0;
    }
  }, [width]);

  // 슬라이드 할 요소 가로 길이 (이미지 가로길이 + 왼쪽 패딩 + 오른쪽 패딩)
  const slideItemWidth = useMemo(() => {
    return imageWidth + slideImagePadding + slideImagePadding;
  }, [imageWidth, slideImagePadding]);

  const carouselOption = {
    data: isMobile ? bannerMoblieImages : bannerImages,
    slideItemWidth: slideItemWidth,
    slideCount: 1,
  };

  const {
    initialFocusSlideIndex,
    dataList,
    isAnimation,
    onChangeFlowing,
    onNextSlide,
    onPrevSlide,
    slideRef,
    isDisabled,
    onTouchEnd,
    onTouchMove,
    onTouchStart,
    touchMoveDistance,
    onMouseDown,
    onMouseMove,
    onMouseUp,
    onMouseOut,
  } = useCarousel(carouselOption);
  return (
    <Wrapper isMobile={isMobile}>
      <BannerImageListWrapper bannerWidth={slideItemWidth} isMobile={isMobile}>
        <ImageListBox
          ref={slideRef}
          isAnimation={isAnimation}
          onMouseEnter={() => onChangeFlowing(false)}
          onMouseLeave={() => onChangeFlowing(true)}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
          onTouchMove={onTouchMove}
          onMouseOut={onMouseOut}
          onDragStart={e => {
            e.stopPropagation();
            e.preventDefault();
          }}
          onMouseMove={onMouseMove}
          onMouseDown={onMouseDown}
          onMouseUp={onMouseUp}
          style={{
            left: slideItemWidth * -1 * initialFocusSlideIndex + touchMoveDistance,
          }} // 초기 슬라이더 위치 세팅
        >
          <ImageList>
            {dataList.map((image, index) => (
              <BannerImageListItem
                key={index}
                imageItem={image}
                imageWidth={imageWidth}
                imagePadding={slideImagePadding}
                isMobile={isMobile}
              />
            ))}
          </ImageList>
        </ImageListBox>

        <ArrowButtonStyled
          direction="left"
          onClick={onPrevSlide}
          onMouseEnter={() => onChangeFlowing(false)}
          onMouseLeave={() => onChangeFlowing(true)}
          disabled={isDisabled}>
          <LeftChevron src={`${process.env.REACT_APP_IMAGE_CDN}/next.webp`} alt="슬라이드 왼쪽 이동 화살표" />
        </ArrowButtonStyled>

        <ArrowButtonStyled
          direction="right"
          onClick={onNextSlide}
          onMouseEnter={() => onChangeFlowing(false)}
          onMouseLeave={() => onChangeFlowing(true)}
          disabled={isDisabled}>
          <RightChevron src={`${process.env.REACT_APP_IMAGE_CDN}/next.webp`} alt="슬라이드 오른쪽 이동 화살표" />
        </ArrowButtonStyled>
      </BannerImageListWrapper>
    </Wrapper>
  );
}

export default BannerImageList;

type IButtonDirection = {
  direction: 'left' | 'right';
};

const getImageWidth = () => {
  const width = window.innerWidth;

  if (width >= 1920) return 1920;
  else return width;
};

const Wrapper = styled.div<{ isMobile: boolean }>`
  height: ${({ isMobile }) => (isMobile ? '160px' : '300px')};
`;

const BannerImageListWrapper = styled.div<{ bannerWidth: number; isMobile: boolean }>`
  position: relative;
  margin: 0 auto;

  width: ${({ bannerWidth }) => bannerWidth}px;
  height: ${({ isMobile }) => (isMobile ? '160px' : '300px')};
`;

const ImageListBox = styled.div<{ isAnimation: boolean }>`
  position: absolute;
  width: 100%;
  ${({ isAnimation }) => isAnimation && 'transition: all 0.4s ease-in-out'}
`;

const ImageList = styled.div`
  display: flex;
`;

const ArrowButtonStyled = styled.button<IButtonDirection>`
  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  top: 145px;

  width: 50px;
  height: 50px;

  font-size: 16px;

  border: 1px solid rgba(255, 255, 255, 0.23);
  border-radius: 50px;
  background-color: rgba(255, 255, 255, 0.3);
  box-shadow: 0 2px 4px 2px rgba(0, 0, 0, 0.04);

  // 캐러셀 버튼 위치
  ${props =>
    props.direction === 'left'
      ? css`
          left: calc((100% - 1210px) / 2);
        `
      : css`
          right: calc((100% - 1200px) / 2);
        `}
`;

const LeftChevron = styled.img`
  width: 18px;
  height: 18px;
  filter: invert(100%) sepia(95%) saturate(21%) hue-rotate(321deg) brightness(105%) contrast(105%);
  transform: rotate(180deg);
`;

const RightChevron = styled.img`
  width: 18px;
  height: 18px;
  filter: invert(100%) sepia(95%) saturate(21%) hue-rotate(321deg) brightness(105%) contrast(105%);
`;
