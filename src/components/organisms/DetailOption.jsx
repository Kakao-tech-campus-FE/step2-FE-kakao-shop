import React, { useEffect, useState } from "react";

import OptionSelected from "components/molecules/DetailPageOption/OptionSelected";
import ChoiceList from "components/molecules/DetailPageOption/ChoiceList";
import TotalPrice from "components/molecules/TotalPrice";
import Counter from "components/molecules/Counter";
import SubmitButton from "components/atoms/SubmitButton";
import {
  OptionContainer,
  SelectedItemBox,
  ButtonContainer,
  SelectedItemsContainer,
} from "components/atoms/option/";

import { useSelector } from "react-redux";
import { addToCart } from "api/cart";
import { useToast } from "components/molecules/Toast";

/**
 * 상품 상세 페이지의 옵션 선택 부분
 * @param {object} props
 * @param {array} props.options - react query로 받아온 상품 데이터 중, 옵션 정보 배열
 * @returns
 */
const DetailOption = (props) => {
  const initialList = props.options.map((item) => {
    return {
      id: item.id,
      quantity: 0,
      optionName: item.optionName,
      price: item.price,
    };
  });

  const [selected, setSelected] = useState([]);
  const [open, setOpen] = useState(true);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalQuantity, setTotalQuantity] = useState(0);
  const loginState = useSelector((state) => state.login);

  const setToast = useToast();

  /**
   * 옵션 목록(initialList) 에서 옵션id에 해당하는 항목을 찾아서, 선택 목록 (selected)에 추가
   * @param {string} id - 옵션id
   * @returns
   */
  const selectOption = (id) => {
    if (!loginState.islogin) {
      setToast("로그인 해주세요.", "/login");
      return;
    }
    setOpen((prev) => false);

    // 이미 선택된 옵션인지 먼저 확인
    for (const item of selected) {
      if (item.id === id && item.quantity > 0) {
        setToast("이미 선택된 옵션입니다.");
        return;
      }
    }
    // 선택안된 옵션일때 : initialList 에서 정보 찾아와서 추가
    for (const item of initialList) {
      if (item.id === id) {
        setSelected((prev) => [...prev, { ...item, quantity: 1 }]);
        return;
      }
    }
  };

  /**
   * 수량 변경 : 선택 목록 (selected) 에서 id로 항목을 찾아 수량을 변경
   * @param {string} id
   * @param {number} newQuantity
   * @param {boolean} clear
   * @returns
   */
  const changeQuantity = (id, newQuantity, clear = false) => {
    if ((newQuantity === 0 && !clear) || Number.isNaN(newQuantity)) {
      return;
    }

    const newSelected = [...selected];

    // selected 에서 id로 항목 찾아서 수량 바꾸기
    for (let i = 0; i < selected.length; i++) {
      if (selected[i].id === id) {
        if (clear) {
          newSelected.splice(i, 1);
        } else {
          newSelected[i] = { ...selected[i], quantity: newQuantity };
        }

        setSelected((prev) => newSelected);
        return;
      }
    }
  };

  // 선택, 삭제, 변경 시 총금액, 총수량 변경
  useEffect(() => {
    let p = 0;
    let q = 0;
    for (const item of selected) {
      if (item.quantity > 0) {
        p += item.quantity * item.price;
        q += item.quantity;
      }
    }
    setTotalPrice((prev) => p);
    setTotalQuantity((prev) => q);
  }, [selected]);

  const submitHandler = () => {
    if (!loginState.islogin) {
      setToast("로그인 해주세요.", "/login");
      return;
    }
    if (totalQuantity === 0) {
      setToast("옵션을 선택해 주세요.", "/login");
      return;
    }

    const newList = selected.map((item) => ({
      optionId: item.id,
      quantity: item.quantity,
    }));

    addToCart(newList).then((res) => {
      setSelected((prev) => []);
      setToast("장바구니에 상품을 담았습니다.", "/cart");
    });
  };

  return (
    <OptionContainer>
      <ChoiceList
        open={open}
        titleOnClick={() => setOpen((prev) => !prev)}
        listOnClickHandler={selectOption}
        options={props.options}
      />

      <SelectedItemsContainer>
        {selected.map((item) =>
          item.quantity === 0 ? null : (
            <SelectedItemBox key={item.optionName}>
              <OptionSelected
                optionName={item.optionName}
                price={item.quantity * item.price}
                clear={() => changeQuantity(item.id, 0, true)}
                counterComponent={
                  <Counter
                    id={item.id}
                    value={item.quantity}
                    valueUpdateHandler={changeQuantity}
                  />
                }
              />
            </SelectedItemBox>
          )
        )}
      </SelectedItemsContainer>

      <TotalPrice price={totalPrice} quantity={totalQuantity} />

      <ButtonContainer>
        <SubmitButton
          activeColor="white"
          disabledColor="white"
          className="border border-solid border-amber-400"
          onClick={submitHandler}
        >
          장바구니
        </SubmitButton>
        <SubmitButton>구매하기</SubmitButton>
      </ButtonContainer>
    </OptionContainer>
  );
};

export default DetailOption;
