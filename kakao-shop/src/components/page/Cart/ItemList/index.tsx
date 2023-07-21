import styled from '@emotion/styled';

import Item from '@components/page/Cart/Item';

const ItemList = () => {
  return (
    <S.Root>
      <Item />
      <Item />
    </S.Root>
  );
};

export default ItemList;

const S = {
  Root: styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
  `,
};
