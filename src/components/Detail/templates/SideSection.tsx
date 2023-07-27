import React, { useEffect } from 'react';
import type { ProductDetail } from '../../../types/Product';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../..';
import OptionBox from '../molecules/OptionBox';
import Delivery from '../atoms/Delivery';
import SelectedOptionCard from '../molecules/SelectedOptionCard';
import TotalCount from '../atoms/TotalCount';
import TotalPrice from '../atoms/TotalPrice';
import { reset } from '../../../modules/options';
import { styled } from 'styled-components';
import colors from '../../../constants/colors';
import AddCartBtn from '../atoms/AddCartBtn';

function SideSection({ options }: Pick<ProductDetail, 'options'>) {
  const dispatch = useDispatch();

  const { options: selectedOption, totalCount, totalPrice } = useSelector((state: RootState) => state.optionReducer);
  useEffect(() => {
    dispatch(reset());
  }, []);

  return (
    <Wrap>
      <OptionBox options={options} />
      <Delivery />
      <div className="mt-3">{selectedOption.map((option) => option && <SelectedOptionCard key={option.id} option={option} />)}</div>
      <div className="flex justify-between">
        <TotalCount count={totalCount} />
        <TotalPrice price={totalPrice} />
      </div>
      <AddCartBtn />
    </Wrap>
  );
}

export default SideSection;

const Wrap = styled.div`
  border-left: 1px solid ${colors.gray};
  padding-left: 20px;
`;
