import { Item } from '@apis/Order';
import styled from '@emotion/styled';

import OptionItem from '@components/page/PayResult/OptionItem';

type Props = {
  productName: string;
  items: Item[];
};

const OptionList = ({ productName, items }: Props) => {
  return (
    <S.Container>
      {items.map(item => {
        if (item.quantity === 0) return null;
        return <OptionItem key={item.id} productName={productName} {...item} />;
      })}
    </S.Container>
  );
};

export default OptionList;

const S = {
  Container: styled.ul`
    border-top: 1px solid rgba(237, 237, 237, 0.5);
  `,
};
