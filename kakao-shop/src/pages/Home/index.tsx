import asideImage from '@assets/asideImage.webp';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { getProductsRequestAction, resetHomeStateAction, setPageStateAction } from '@store/Home/reducers';
import { RootState } from '@store/index';
import { Fragment, useEffect, useMemo, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { FallbackErrorBoundary } from '@components/@common/FallbackErrorBoundary';
import { CustomSuspense } from '@components/atom';
import BannerImageList from '@components/atom/Carousel/BannerImageList';
import Loading from '@components/atom/Loader';
import { CardList } from '@components/page/Home/CardList';
import CardListFallback from '@components/page/Home/CardListFallback';

import useViewport from '@hooks/@common/useViewport';

const LAST_PAGE = 2;

const Home = () => {
  const { isMobile, width } = useViewport();
  const dispatch = useDispatch();
  const products = useSelector((state: RootState) => state.home.products);
  const isLoading = useSelector((state: RootState) => state.home.isLoading);
  const error = useSelector((state: RootState) => state.home.error);
  const page = useSelector((state: RootState) => state.home.page);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // 현재는 2페이지까지만 불러오도록 설정
    // 확장성을 고려한다면 백엔드에 hasNext 라는 다음 페이지가 존재하는지 여부를 받아와서 처리해야한다고 생각이 듭니다.
    if (isLoading || page >= LAST_PAGE) return;
    dispatch(getProductsRequestAction(page));
  }, [page]); // TLDR; isLoding 무한루프 / isLoading 을 deps에 넣어주면 setProductData 가 발생하고 isLoading 이 false가 될때 다시 호출되어 무한루프에 빠진다.

  const endOfContentObserver = useMemo(() => {
    return new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        if (isLoading) return;
        if (page >= LAST_PAGE) return;
        dispatch(setPageStateAction(page + 1));
      }
    });
  }, [isLoading, page, dispatch]);

  useEffect(() => {
    if (!endRef.current) return;
    endOfContentObserver.observe(endRef.current);

    return () => {
      if (!endRef.current) return;
      endOfContentObserver.unobserve(endRef.current);
    };
  }, [products, endOfContentObserver]);

  useEffect(() => {
    return () => {
      dispatch(resetHomeStateAction());
    };
  }, []);

  return (
    <Fragment>
      <S.TopBannerBlock>
        <BannerImageList isMobile={isMobile} />
      </S.TopBannerBlock>

      <S.LayoutSplit isMobile={isMobile} width={width}>
        <S.ProductSection>
          <S.InnerTxtContainer>
            <S.InnerTxt>오늘의 딜</S.InnerTxt>
          </S.InnerTxtContainer>

          <FallbackErrorBoundary fallback={CardListFallback}>
            <CustomSuspense
              fallback={CardList.Skeleton({ isMobile })}
              isLoading={isLoading && page === 0}
              error={error}>
              <CardList isMobile={isMobile} products={products} />
            </CustomSuspense>
          </FallbackErrorBoundary>

          {isLoading && page !== 0 && <Loading />}
        </S.ProductSection>

        {!isMobile && (
          <S.TodayProductSection>
            <img width={320} height={310} src={asideImage} alt="아이스크림" />
          </S.TodayProductSection>
        )}
      </S.LayoutSplit>

      <S.InfinityScrollSection ref={endRef} />
    </Fragment>
  );
};

export default Home;

const S = {
  TopBannerBlock: styled.div`
    width: 100%;
    overflow: hidden;
  `,

  LayoutSplit: styled.div<{ isMobile: boolean; width: number }>`
    ${({ isMobile }) => css`
      position: ${isMobile ? 'relative' : 'static'};
      z-index: ${isMobile ? '1' : '0'};
      top: ${isMobile ? '-10px' : '0'};

      display: ${isMobile ? 'grid' : 'flex'};
      grid-template-columns: ${isMobile ? '1fr' : 'none'};
      width: ${isMobile ? '100vw' : '1280px'};

      margin: ${isMobile ? '0' : '0 auto'};
      padding: ${isMobile ? '0 20px' : '0'};

      background-color: #fff;
      border-radius: ${isMobile ? '15px 15px 0 0' : '0'};
    `}
  `,

  ProductSection: styled.section`
    padding: 40px 0 120px;
  `,

  InnerTxtContainer: styled.div`
    margin-bottom: 30px;
  `,

  InnerTxt: styled.span`
    position: relative;
    font-weight: 700;
    font-size: 22px;
    line-height: 24px;
    color: #333;

    &::before {
      content: '';
      position: absolute;
      top: 24px;
      left: 0;
      right: 0;

      height: 3px;

      background-color: #fff13f;
    }
  `,

  TodayProductSection: styled.section`
    width: 324px;
    height: 310px;

    margin-left: 31px;
    padding: 30px 0 100px 32px;

    border-left: 1px solid #f5f5f5;
    background-color: #fff;

    & > img {
      width: inherit;
    }
  `,
  InfinityScrollSection: styled.section`
    // -50px 만큼 위로 이동시켜서 다음 페이지 로딩이 최하점에서 50px 위에서 발생하도록 합니다.
    transform: translateY(-50px);
  `,
};
