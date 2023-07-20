import starImg from '@assets/star.webp';
import trickImg from '@assets/trick.webp';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { Button, Photo } from '@components/atom';
import DeliveryInfo from '@components/page/Detail/DeliveryInfo';
import OptionListSection from '@components/page/Detail/OptionListSection';
import PurchaseButtons from '@components/page/Detail/PurchaseButtons';
import SelectResult from '@components/page/Detail/SelectResult';

import { useOptionForm } from '@hooks/page/Detail/useOptionForm';

import { comma } from '@utils/comma';

const renderStar = (starCount?: number) => {
  if (!starCount) return null;

  const stars = Array.from({ length: starCount }, (_, index) => {
    return <Photo imageClassName={S.StarCSS} key={index} src={starImg} alt={'평점 별'} />;
  });

  return <div>{stars}</div>;
};

const Detail = () => {
  const {
    state: { product, options, totals },
    handler: { onSelectOption, onDeleteOption, onIncreaseQuantity, onDecreaseQuantity },
  } = useOptionForm();

  return (
    <S.LayoutSplit>
      <S.ProductSection>
        <S.PhotoContainer>
          <Photo
            imageClassName={S.PhotoSize}
            src={`${process.env.REACT_APP_PUBLIC_URL}${product?.image}`}
            alt={'HERO 이미지'}
          />
        </S.PhotoContainer>

        <S.InfoContainer>
          {renderStar(product?.starCount)}
          <S.Tit>{product?.productName}</S.Tit>
          <Button css={S.ButtonCSS}>{comma(product?.price)}원</Button>
          <Photo imageClassName={S.TrickImgCSS} src={trickImg} alt={''} />
        </S.InfoContainer>
      </S.ProductSection>

      <S.OptionCotainer>
        <OptionListSection
          options={options}
          onSelectOption={onSelectOption}
          onDeleteOption={onDeleteOption}
          onIncreaseQuantity={onIncreaseQuantity}
          onDecreaseQuantity={onDecreaseQuantity}
        />
        <DeliveryInfo />
        <SelectResult totals={totals} />
        <PurchaseButtons />
      </S.OptionCotainer>
    </S.LayoutSplit>
  );
};

export default Detail;

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

  StarCSS: css`
    width: 26px;
    height: 26px;
    margin-right: 2px;
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
