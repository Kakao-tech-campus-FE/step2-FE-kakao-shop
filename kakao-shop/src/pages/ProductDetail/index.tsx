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

import { useProductDetail } from '@hooks/page/ProductDetail/_useProductDetailPage';

import { comma } from '@utils/comma';

const ProductDetail = () => {
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
      <S.LayoutSplit>
        <S.ProductSection>
          <S.PhotoContainer>
            <Photo
              imageClassName={S.PhotoSize}
              src={`${process.env.REACT_APP_PROD_SERVER}${product?.image}`}
              alt={'HERO 이미지'}
            />
          </S.PhotoContainer>

          <S.InfoContainer>
            <RenderStar starCount={product?.starCount} />
            <S.Tit>{product?.productName}</S.Tit>
            <Button css={S.ButtonCSS}>{comma(product?.price)}원</Button>
            <Photo imageClassName={S.TrickImgCSS} src={trickImg} alt={''} />
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
  LayoutSplit: styled.div`
    display: flex;
    width: 1280px;
    margin: 0 auto;
  `,

  ProductSection: styled.section`
    display: flex;
    gap: 30px;

    width: 890px;
    padding: 40px 29px 150px 0;
  `,

  PhotoContainer: styled.div`
    width: 430px;
  `,

  InfoContainer: styled.div`
    display: flex;
    flex-direction: column;

    width: 430px;
  `,

  Tit: styled.h1`
    margin-top: 7px;
    padding: 0;

    font-size: 26px;
    line-height: 35px;
    color: #111;
    word-break: break-all;
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
  `,

  TrickImgCSS: css`
    width: 430px;
    height: 380px;
  `,
};
