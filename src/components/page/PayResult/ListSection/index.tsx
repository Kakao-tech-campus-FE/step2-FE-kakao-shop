import { OrderProduct } from '@apis/Order';
import arrow from '@assets/arrow.webp';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { Button, Photo } from '@components/atom';
import List from '@components/page/PayResult/List';

import { useToggle } from '@hooks/@common';

type Props = {
  orderProducts: OrderProduct[];
};

const ListSection = ({ orderProducts }: Props) => {
  const [isOpen, , onToggle] = useToggle(true);
  const totalQuantity = orderProducts?.reduce((acc, product) => {
    return acc + product.items.reduce((total, cart) => total + cart.quantity, 0);
  }, 0);

  return (
    <S.Root>
      <InfoButton isOpen={isOpen} onToggle={onToggle} totalQuantity={totalQuantity} />
      {isOpen && <List orderProducts={orderProducts} />}
    </S.Root>
  );
};

export default ListSection;

type InfoButtonProps = {
  isOpen: boolean;
  onToggle: () => void;
  totalQuantity: number;
};

const InfoButton = ({ isOpen, onToggle, totalQuantity }: InfoButtonProps) => {
  return (
    <Button css={S.ButtonCSS} onClick={onToggle}>
      <div>
        <span>주문상품 정보</span>
        <span>{`총 ${totalQuantity}개`}</span>
      </div>
      <Photo imageClassName={isOpen ? S.ArrowDownIconCSS : S.ArrowUpIconCSS} src={arrow} alt={'화살표'} />
    </Button>
  );
};

const S = {
  Root: styled.div``,

  ButtonCSS: css`
    display: flex;
    justify-content: space-between;
    align-items: center;

    height: 60px;

    padding: 16px;

    border-top: 1px solid #ebebeb;
    border-bottom: 1px solid #ebebeb;
    background-color: #fff;

    font-weight: 700;
    font-size: 15px;
    line-height: 44px;
    color: #333;

    & > div > span:nth-of-type(1) {
      margin-right: 6px;

      font-size: 20px;
      font-weight: 700;
      line-height: 21px;
      color: #333;
    }

    & > div > span:nth-of-type(2) {
      font-weight: 400;
      font-size: 16px;
      line-height: 21px;
      color: #333;
      letter-spacing: -0.057em;
    }
  `,

  ArrowDownIconCSS: css`
    display: block;

    width: 18px;
    height: 18px;

    transform: rotate(270deg);
  `,

  ArrowUpIconCSS: css`
    display: block;

    width: 18px;
    height: 18px;

    transform: rotate(90deg);
  `,
};
