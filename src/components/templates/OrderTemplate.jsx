import React, { useMemo } from "react";
import Container from "../atoms/Container";
import Box from "../atoms/Box";
import Title from "../atoms/Title";
import Text from "../atoms/Text";
import { useMutation } from "react-query";
import { order } from "../../apis/order";
import OrderOptionItem from "../molecules/OrderOptionItem";
import Button from "../atoms/Button";
import { comma } from "../../utils/convert";

export default function OrderTemplate({ data }) {
  const { mutate } = useMutation(order);
  const products = data.products;
  const totalPrice = data.totalPrice;
  const totalProductCount = useMemo(() => {
    return products.reduce((acc, cur) => {
      return (
        acc +
        cur.carts.reduce((acc, cart) => {
          return acc + cart.quantity;
        }, 0)
      );
    }, 0);
  });

  return (
    <Container className="flex items-center justify-center bg-zinc-100 w-full min-w-[1280px] border-solid border-0 border-b border-zinc-300">
      <Container className="flex flex-col w-[870px] p-5 items-center gap-3">
        {/* 주문하기, 배송지 정보 */}
        <Box className="bg-white w-full">
          <Title className="text-center text-base m-0 border-solid border-0 border-b border-zinc-300 py-3">
            주문하기
          </Title>
          <div className="p-3 flex flex-col gap-3">
            <Text className=" tracking-tight">
              <span className="font-bold text-lg">배송지 정보 </span>{" "}
              <span>(kakao 계정 제공)</span>
            </Text>
            <Box>
              <span className="font-bold">홍길동</span>
              <span className=" text-blue-500 rounded-md bg-zinc-100 tracking-tighter text-sm inline-block w-20 h-fit text-center ml-1">
                기본 배송지
              </span>
            </Box>
            <div className="text-sm">
              010-1234-5678
              <div className="flex flex-col text-zinc-600 tracking-tighter text-sm pt-1">
                <span>(99999)부산 금정구 부산대학로63번길 2</span>
                <span>제 6공학관 203호</span>
              </div>
            </div>
            <select
              name="delivery"
              id="deliver"
              className="w-full h-10 pl-2 font-semibold"
            >
              <option value="">배송 요청사항을 선택해주세요</option>
              <option value="">배송전 연락바랍니다.</option>
              <option value="">부재시 경비실에 맡겨주세요</option>
              <option value="">부재시 연락주세요.</option>
              <option value="">직접입력</option>
            </select>
            <textarea
              name=""
              id=""
              cols="30"
              rows="3"
              className="p-2"
              defaultValue={"배송시 요청사항을 입력해주세요(최대 50자)"}
            ></textarea>
          </div>
        </Box>
        {/* 주문 상품 정보 */}
        <Box className="bg-white w-full">
          <Text className=" tracking-tight px-3 py-4">
            <span className="font-bold text-lg">주문상품 정보 </span>{" "}
            <span>
              (총 <span>{totalProductCount}</span>개)
            </span>
          </Text>
          <div>
            {products.map((product) =>
              product.carts.map((cart) => (
                <OrderOptionItem
                  key={cart.id}
                  cart={cart}
                  id={product.id}
                  productName={product.productName}
                />
              ))
            )}
          </div>
        </Box>
        <Button className="w-full bg-[#ffea00] border-0 h-12 mb-10">
          <span className="text-base font-bold">
            {comma(totalPrice)}원 결제하기
          </span>
        </Button>
      </Container>
    </Container>
  );
}
