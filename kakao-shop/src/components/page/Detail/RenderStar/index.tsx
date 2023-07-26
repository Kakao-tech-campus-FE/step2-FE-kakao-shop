import starImg from '@assets/star.webp';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { Photo } from '@components/atom';

type Props = {
  starCount?: number;
};

const RenderStar = ({ starCount }: Props) => {
  if (!starCount) return null;

  return (
    <S.Root>
      {Array.from({ length: starCount }, (_, index) => {
        return <Photo imageClassName={S.StarCSS} key={index} src={starImg} alt={'평점 별'} />;
      })}
    </S.Root>
  );
};
export default RenderStar;

const S = {
  Root: styled.div`
    display: flex;
  `,

  StarCSS: css`
    width: 26px;
    height: 26px;
    margin-right: 2px;
  `,
};
