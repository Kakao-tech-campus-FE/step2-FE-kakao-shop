import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../..';
import { styled } from 'styled-components';
import colors from '../../../constants/colors';
import { addCart } from '../../../api/Products';
import { optionState } from '../../../modules/options';
import { reset } from '../../../modules/options';
import ToastBox, { IToastData } from '../../common/ToastBox';
import { useNavigate } from 'react-router-dom';
export interface cartData {
  optionId: number;
  quantity: number;
}

function AddCartBtn() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { options } = useSelector((state: RootState) => state.optionReducer);
  const { isLogin } = useSelector((state: RootState) => state.authReducer);
  const [toast, setToast] = useState<IToastData[]>([]);
  const buttonHandler = async () => {
    if (isLogin) {
      const optionData = options.reduce(
        (prev: cartData[], option: optionState) => (option ? [...prev, { optionId: option.id, quantity: option.quantity }] : prev),
        []
      );
      try {
        await addCart(optionData);
        setToast([...toast, { id: Math.random(), content: '장바구니에 상품이 담겼습니다.' }]);
        dispatch(reset());
      } catch (e) {
        throw new Error('장바구니에 담기를 실패하였습니다.');
      }
    } else {
      navigate('/login');
    }
  };

  return (
    <>
      <Wrap type="button" onClick={buttonHandler}>
        장바구니 담기
      </Wrap>
      <ToastBox contents={toast} position="bottom-center" bgcolor="black" color="white" setToastContents={setToast} />
    </>
  );
}

export default AddCartBtn;

const Wrap = styled.button`
  width: 100%;
  margin-top: 10px;
  border-radius: 10px;
  font-weight: 700;
  background-color: ${colors.yellow};
  color: ${colors.white};
  padding: 15px;
`;
