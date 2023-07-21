import React from 'react';
import CounterBtn from '../atoms/CounterBtn';
import { useDispatch } from 'react-redux';
import { deleteOption, optionState } from '../../../modules/options';
import { plusOptionQuantity, minusOptionQuantity } from '../../../modules/options';
import { styled } from 'styled-components';
import colors from '../../../constants/colors';

function SelectedOptionCard({ option }: { option: optionState }) {
  const dispatch = useDispatch();
  const plusActionHandler = () => {
    dispatch(plusOptionQuantity({ ...option, quantity: option.quantity + 1 }));
  };
  const minusActionHandler = () => {
    dispatch(minusOptionQuantity({ ...option, quantity: option.quantity - 1 }));
  };
  const deleteActionHandler = () => {
    dispatch(deleteOption(option));
  };
  return (
    <Wrap>
      <TitleWrap>
        <span>선택한 상품: {option.name}</span>
        <button type="button" onClick={deleteActionHandler} />
      </TitleWrap>
      <CounterWrap>
        <CounterBtn type="-" disabled={option.quantity === 1} onClick={minusActionHandler} />
        <Quantity>{option.quantity}</Quantity>
        <CounterBtn type="+" onClick={plusActionHandler} />
      </CounterWrap>
    </Wrap>
  );
}

export default SelectedOptionCard;

const Wrap = styled.div`
  border: 1px solid ${colors.gray};
  padding: 10px;
  font-size: 14px;
`;
const TitleWrap = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Quantity = styled.span`
  flex: 1;
  text-align: center;
`;
const CounterWrap = styled.span`
  display: flex;
  width: 80px;
  align-items: center;
`;
