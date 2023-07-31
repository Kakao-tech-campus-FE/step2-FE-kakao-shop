import trickImg from '@assets/trick.webp';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { Button, CustomSuspense, Photo } from '@components/atom';
import LoginModal from '@components/molecules/LoginModal';
import PageLoader from '@components/molecules/PageLoader';
import DeliveryInfo from '@components/page/ProductDetail/DeliveryInfo';
import OptionListSection from '@components/page/ProductDetail/OptionListSection';
import PurchaseButtons from '@components/page/ProductDetail/PurchaseButtons';
import RenderStar from '@components/page/ProductDetail/RenderStar';
import SelectResult from '@components/page/ProductDetail/SelectResult';

import useViewport, { IsMobile } from '@hooks/@common/useViewport';
import { useProductDetail } from '@hooks/page/ProductDetail/_useProductDetailPage';

import { comma } from '@utils/comma';

const ProductDetail = () => {
  const { isMobile } = useViewport();
  const {
    state: { isLoading, error, product, options, totals, isOpenList, isModal },
    handler: {
      onSelectOption,
      onDeleteOption,
      onIncreaseQuantity,
      onDecreaseQuantity,
      onToggle,
      onAddCart,
      onNavigateCart,
      onModalClose,
      onModalConfirm,
    },
  } = useProductDetail();

  return (
    <CustomSuspense isLoading={isLoading} error={error} fallback={<PageLoader />}>
      <S.LayoutSplit isMobile={isMobile}>
        <S.ProductSection isMobile={isMobile}>
          <S.PhotoContainer isMobile={isMobile}>
            {isMobile ? (
              <Photo
                src={`${process.env.REACT_APP_IMAGE_CDN}${product?.image?.replace(
                  '/images',
                  '',
                )}?w=430&h=430&f=webp&q=80`}
                alt={'HERO 이미지'}
              />
            ) : (
              <Photo
                imageClassName={S.PhotoSize}
                src={`${process.env.REACT_APP_IMAGE_CDN}${product?.image?.replace(
                  '/images',
                  '',
                )}?w=430&h=430&f=webp&q=80`}
                alt={'HERO 이미지'}
              />
            )}
          </S.PhotoContainer>

          <S.InfoContainer isMobile={isMobile}>
            {!isMobile && <RenderStar starCount={product?.starCount} />}
            <S.Tit>{product?.productName}</S.Tit>
            {!isMobile ? (
              <Button css={S.ButtonCSS}>{comma(product?.price)}원</Button>
            ) : (
              <S.ButtonContainer>
                <Button css={S.ButtonCSS}>{comma(product?.price)}원</Button>
              </S.ButtonContainer>
            )}
            <Photo imageClassName={S.TrickImgCSS(isMobile)} src={trickImg} alt={''} />
            {/* 위 포토 이미지는 트릭이미지입니다. 퍼블리싱보다 설계나 로직에 시간을 더 투자하고 싶었습니다. */}
          </S.InfoContainer>
        </S.ProductSection>

        <S.OptionCotainer>
          <OptionListSection
            isOpenList={isOpenList}
            options={options}
            onSelectOption={onSelectOption}
            onDeleteOption={onDeleteOption}
            onIncreaseQuantity={onIncreaseQuantity}
            onDecreaseQuantity={onDecreaseQuantity}
            onToggle={onToggle}
          />
          <DeliveryInfo />
          <SelectResult totals={totals} />
          <PurchaseButtons onAddCart={onAddCart} onNavigateCart={onNavigateCart} />
        </S.OptionCotainer>
      </S.LayoutSplit>
      <LoginModal visible={isModal} onModalClose={onModalClose} onModalConfirm={onModalConfirm} />
    </CustomSuspense>
  );
};

export default ProductDetail;

const S = {
  LayoutSplit: styled.div<{ isMobile: boolean }>`
    ${({ isMobile }) => css`
      display: ${isMobile ? 'grid' : 'flex'};
      grid-template-columns: ${isMobile ? '1fr' : 'none'};
      width: ${isMobile ? '100vw' : '1280px'};

      margin: ${isMobile ? '0' : '0 auto'};
      /* padding: ${isMobile ? '0' : '0'}; */
    `}
  `,

  ProductSection: styled.section<{ isMobile: boolean }>`
    ${({ isMobile }) => css`
      display: ${isMobile ? 'grid' : 'flex'};
      gap: ${isMobile ? '0' : '30px'};
      grid-template-columns: ${isMobile ? '1fr' : 'none'};

      width: ${isMobile ? '100vw' : '890px'};

      padding: ${isMobile ? '0' : ' 40px 29px 150px 0;'};
    `}
  `,

  PhotoContainer: styled.div<{ isMobile: boolean }>`
    ${({ isMobile }) => css`
      width: ${isMobile ? '100vw' : '430px'};
    `}
  `,

  InfoContainer: styled.div<{ isMobile: boolean }>`
    ${({ isMobile }) => css`
      display: flex;
      flex-direction: column;

      width: ${isMobile ? '100vw' : '430px'};
    `}
  `,

  Tit: styled.h1`
    margin-top: 7px;
    padding: 0;

    font-size: 26px;
    line-height: 35px;
    color: #111;
    word-break: break-all;

    @media (max-width: 768px) {
      max-width: 300px;

      margin: 16px auto 0;

      font-size: 18px;
      color: #222;
      line-height: 25px;
      letter-spacing: -0.03em;
      text-align: center;
    }
  `,

  OptionCotainer: styled.section`
    width: 324px;

    margin-left: 31px;
    padding: 30px 0 100px 32px;

    border-left: 1px solid #f5f5f5;
    background-color: #fff;

    & > img {
      width: inherit;
    }

    @media (max-width: 768px) {
      width: auto;

      margin-left: 0;
      padding: 30px 12px;

      border-left: none;
    }
  `,

  PhotoSize: css`
    width: 430px;
    height: 430px;

    border-radius: 10px;
  `,

  ButtonCSS: css`
    width: 120px;
    height: 45px;

    margin: 12px 0;

    background-color: #1e1e1e;
    border-radius: 23px;

    vertical-align: top;
    font-size: 20px;
    letter-spacing: -0.025em;
    text-align: center;
    color: rgba(255, 255, 255, 0.9);

    @media (max-width: 768px) {
      width: fit-content;
      height: fit-content;

      padding: 10px 15px;

      font-size: 16px;
      vertical-align: top;
      letter-spacing: -0.053em;
    }
  `,

  TrickImgCSS: (isMobile: boolean) => css`
    width: ${isMobile ? '100vw' : '430px'};
    height: ${isMobile ? 'auto' : '380px'};
  `,

  ButtonContainer: styled.div`
    margin: 0 auto;
  `,
};
