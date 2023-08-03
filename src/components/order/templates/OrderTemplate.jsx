import React, { useState } from "react";
import Container from "../../common/atoms/Container";
import Box from "../../common/atoms/Box";
import Title from "../../common/atoms/Title";
import { useMutation } from "react-query";
import { order } from "../../../apis/order";
import Button from "../../common/atoms/Button";
import { comma } from "../../../utils/convert";
import { useDispatch } from "react-redux";
import { initializeCart } from "../../../store/slices/cartSlice";
import UserInfo from "../molecules/OrderUserInfo";
import OrderProductInfo from "../organisms/OrderProductInfo";
import DiscountInfo from "../atoms/DiscountInfo";
import PayRadioGroup from "../molecules/PayRadioGroup";
import PaymentInfo from "../atoms/PaymentInfo";
import AgreeCheckBoxGroup from "../molecules/AgreeCheckBoxGroup";
import Text from "../../common/atoms/Text";
import { PAYMENT_AGREE_OPTION } from "../../../utils/constant";
import { useNavigate } from "react-router-dom";
import Modal from "../../common/atoms/Modal";

export default function OrderTemplate({ data }) {
  const [isUserInfoOpen, setIsUserInfoOpen] = useState(true);
  const [isOrderProductInfoOpen, setIsOrderProductInfoOpen] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { mutate } = useMutation(order);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [checkboxState, setCheckboxState] = useState(() => {
    const newState = {};
    for (const option of PAYMENT_AGREE_OPTION) {
      newState[option.id] = false;
    }
    return newState;
  });
  const products = data.products;
  const totalPrice = data.totalPrice;
  const totalProductCount = products.reduce((acc, cur) => {
    return (
      acc +
      cur.carts.reduce((acc, cart) => {
        return acc + cart.quantity;
      }, 0)
    );
  }, 0);

  return (
    <Container className="flex w-full min-w-[1280px] items-center justify-center border-0 border-b border-solid border-zinc-300 bg-zinc-100">
      {isModalOpen && (
        <Modal
          setIsModalOpen={setIsModalOpen}
          children={
            "카카오페이 구매조건(결제조건)확인 및 개인정보 제 3자 제공 동의를 체크해주세요."
          }
        />
      )}
      <Container className="flex w-[870px] flex-col items-center gap-3 p-5">
        <Box className="w-full bg-white">
          <Title className="m-0 border-0 border-b border-solid border-zinc-300 py-3 text-center text-base">
            주문하기
          </Title>
          {/* 주문자 정보 */}
          <UserInfo
            isUserInfoOpen={isUserInfoOpen}
            setIsUserInfoOpen={setIsUserInfoOpen}
          />
        </Box>
        {/* 주문 상품 정보 */}
        <OrderProductInfo
          isOrderProductInfoOpen={isOrderProductInfoOpen}
          setIsOrderProductInfoOpen={setIsOrderProductInfoOpen}
          products={products}
          totalProductCount={totalProductCount}
        />
        {/* 할인 정보 */}
        <DiscountInfo />
        {/* 결제 수단 */}
        <PayRadioGroup />
        {/* 결제 정보 */}
        <PaymentInfo
          totalPrice={totalPrice}
          totalProductCount={totalProductCount}
        />
        {/* 동의하기 */}
        <AgreeCheckBoxGroup
          options={PAYMENT_AGREE_OPTION}
          checkboxState={checkboxState}
          setCheckboxState={setCheckboxState}
        />
        {/* 결제하기 */}
        <Box className="w-full ">
          <Text className="flex flex-col gap-1 bg-zinc-50 p-3 text-xs">
            <span className="font-bold">법적고지</span>
            <span>
              (주)카카오에서 판매하는 상품 중에는 개별 판매자가 판매하는 상품이
              포함되어 있습니다. 개별 판매자가 판매하는 상품에 대해 (주)카카오는
              통신중개 판매업자로서 통신판매의 당사자가 아니며 상품의 주문, 배송
              및 환불 등과 관련한 의무와 책임은 각 판매자에게 있습니다.
            </span>
          </Text>
          <Button
            className="mb-10 h-12 w-full cursor-pointer border-0 bg-[#ffea00]"
            onClick={() => {
              // 모두 체크되어있는지 확인
              if (!Object.values(checkboxState).every((checked) => checked)) {
                setIsModalOpen(true);
                return;
              }
              mutate(null, {
                onSuccess: (res) => {
                  const id = res.data.response.id;
                  dispatch(initializeCart());
                  navigate(`/orders/complete/${id}`);
                },
                onError: (error) => {
                  alert(error.response.data.message);
                },
              });
            }}
          >
            <span className="text-base font-bold">
              {comma(totalPrice)}원 결제하기
            </span>
          </Button>
        </Box>
      </Container>
    </Container>
  );
}
