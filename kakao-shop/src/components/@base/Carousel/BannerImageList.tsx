import useCarousel from "../../../hooks/useCarousel";
import useWindowDimensions from "../../../hooks/useWindowDimensitons";
import { bannerImages } from "./lib/bannerImages";
import { ReactElement, useMemo, useState } from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import BannerImageListItem from "./BannerImageListItem";

interface IButtonDirection {
  direction: "left" | "right";
}

const getImageWidth = () => {
  const width = window.innerWidth;

  if (width >= 1920) {
    return 1920;
  } else return width;
};

function BannerImageList(): ReactElement {
  const [imageWidth, setImageWidth] = useState(getImageWidth());
  const { width } = useWindowDimensions(); //  window 사이즈가 변화할 때마다 변경되는 width 값

  const slideImagePadding = useMemo(() => {
    if (width >= 1920) {
      setImageWidth(1920);
      return (width - 1920) / 2;
    } else if (width < 1920 && width > 1440) {
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
    data: bannerImages,
    slideItemWidth: slideItemWidth,
    slideCount: 1,
  };

  const {
    initialFocusSlideIndex,
    dataList,
    isAnimation,
    isCenterIndex,
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
    <Wrapper>
      <BannerImageListWrapper bannerWidth={slideItemWidth}>
        <ImageListBox
          ref={slideRef}
          isAnimation={isAnimation}
          onMouseEnter={() => onChangeFlowing(false)}
          onMouseLeave={() => onChangeFlowing(true)}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
          onTouchMove={onTouchMove}
          onMouseOut={onMouseOut}
          onDragStart={(e) => {
            e.stopPropagation();
            e.preventDefault();
          }}
          onMouseMove={onMouseMove}
          onMouseDown={onMouseDown}
          onMouseUp={onMouseUp}
          style={{
            left:
              slideItemWidth * -1 * initialFocusSlideIndex + touchMoveDistance,
          }}
        >
          <ImageList>
            {dataList.map((image, index) => (
              <BannerImageListItem
                key={index}
                imageItem={image}
                isCenter={index === isCenterIndex}
                imageWidth={imageWidth}
                imagePadding={slideImagePadding}
              />
            ))}
          </ImageList>
        </ImageListBox>

        <ArrowButtonStyled
          direction="left"
          onClick={onPrevSlide}
          onMouseEnter={() => onChangeFlowing(false)}
          onMouseLeave={() => onChangeFlowing(true)}
          disabled={isDisabled}
        >
          <LeftChevron />
        </ArrowButtonStyled>

        <ArrowButtonStyled
          direction="right"
          onClick={onNextSlide}
          onMouseEnter={() => onChangeFlowing(false)}
          onMouseLeave={() => onChangeFlowing(true)}
          disabled={isDisabled}
        >
          <RightChevron />
        </ArrowButtonStyled>
      </BannerImageListWrapper>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  height: 300px;
`;

const BannerImageListWrapper = styled.div<{ bannerWidth: number }>`
  width: ${({ bannerWidth }) => bannerWidth}px;
  margin: 0 auto;
  position: relative;
  height: 300px;
`;

const ImageListBox = styled.div<{ isAnimation: boolean }>`
  width: 100%;
  position: absolute;
  ${({ isAnimation }) => isAnimation && "transition: all 0.4s ease-in-out"};
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
  font-size: 16px;

  width: 50px;
  height: 50px;
  border: 1px solid rgba(255, 255, 255, 0.23);
  border-radius: 50px;
  background-color: rgba(255, 255, 255, 0.3);
  box-shadow: 0 2px 4px 2px rgba(0, 0, 0, 0.04);

  ${(props) =>
    props.direction === "left"
      ? css`
          left: calc((100% - 1210px) / 2);
        `
      : css`
          right: calc((100% - 1200px) / 2);
        `}
`;

const LeftChevron = styled.span`
  font-size: 0;
  background: url("https://st.kakaocdn.net/commerce_ui/front-talkstore/real/20230628/140055/ico_store_pc.82c1fd4bf8ec030b.svg")
    no-repeat;
  background-size: 800px 500px;
  vertical-align: top;
  background-position: -760px 0;

  width: 9px;
  height: 18px;
`;

const RightChevron = styled.span`
  font-size: 0;
  background: url("https://st.kakaocdn.net/commerce_ui/front-talkstore/real/20230628/140055/ico_store_pc.82c1fd4bf8ec030b.svg")
    no-repeat;
  background-size: 800px 500px;
  vertical-align: top;
  background-position: -770px 0;
  width: 9px;
  height: 18px;
`;
export default BannerImageList;
