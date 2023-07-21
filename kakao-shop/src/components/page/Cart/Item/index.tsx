import styled from '@emotion/styled';

import SelectOptionItemList from '@components/page/Cart/SelectOption/List';
import SelectOptionResult from '@components/page/Cart/SelectOption/Result';

const Item = () => {
  return (
    <S.Root>
      <S.Tit>샤프란 AURA 고농축 섬유유연제 대용량 5.5L 용기 7종</S.Tit>
      <SelectOptionItemList />
      <SelectOptionResult />
    </S.Root>
  );
};

export default Item;

const S = {
  Root: styled.div`
    padding: 16px 20px;

    border-top: 1px solid rgba(237, 237, 237, 0.5);
    border-bottom: 1px solid #ebebeb;
    background-color: #fff;
  `,

  Tit: styled.div`
    display: flex;
    align-items: center;

    height: 60px;

    font-weight: 700;
    font-size: 18px;
    line-height: 18px;
    color: #333;
  `,
};
