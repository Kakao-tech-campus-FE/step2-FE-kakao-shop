import React from 'react';
import { styled } from 'styled-components';
import colors from '../../../constants/colors';
import { useDispatch, useSelector } from 'react-redux';
import { addOption } from '../../../modules/options';
import { RootState } from '../../..';

interface optionCardProps {
  id: number;
  optionName: string;
  price: number;
  index: number;
}

function OptionCard({ index, id, optionName, price }: optionCardProps) {
  const dispatch = useDispatch();
  const { options: selectedOption } = useSelector((state: RootState) => state.optionReducer);
  const optionHandler = () => {
    dispatch(addOption({ id, name: optionName, price, quantity: selectedOption[id] ? selectedOption[id].quantity + 1 : 1 }));
  };
  return (
    <Wrap onClick={optionHandler}>
      <Title>
        {index}.{optionName}
      </Title>
      <p>{price}원</p>
    </Wrap>
  );
}

export default OptionCard;

const Wrap = styled.li`
  padding: 10px;
  list-style: none;
  border-bottom: 1px solid ${colors.gray};
  font-size: 14px;
  &:last-child {
    border-bottom: none;
  }
  box-sizing: border-box;
`;
const Title = styled.p`
  font-weight: 500;
`;
