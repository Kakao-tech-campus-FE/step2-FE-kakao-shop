import { postUpdateCart } from "@apis/postUpdateCart";
import Button from "@components/atoms/Button";
import CartItem from "@components/atoms/CartItem";
import { Item, Product } from "@components/organisms/CartForm";
import { useMutation } from "@tanstack/react-query";
import { comma } from "@utils/regex";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";

interface Props {
  item: Item;
}

const CartList = ({ item }: Props) => {
  const [items, setItems] = useState<Product[]>([]);

  const navigate = useNavigate();

  const { mutate } = useMutation({ mutationFn: postUpdateCart });

  useEffect(() => {
    setItems(item.products);
  }, []);

  const createPayload = (items: Product[]) => {
    const payload = items.flatMap((item) =>
      item.carts.map((cart) => ({ cartId: cart.id, quantity: cart.quantity }))
    );
    return payload;
  };

  const getTotalPrice = () =>
    items.reduce((total, product) => {
      const productTotalPrice = product.carts.reduce(
        (productTotal, cart) => productTotal + cart.price,
        0
      );
      return total + productTotalPrice;
    }, 0);

  return (
    <div>
      {items.map((item) => (
        <React.Fragment key={item.id}>
          <CartItem product={item} setItems={setItems} />
          <Gap />
        </React.Fragment>
      ))}
      <ButtonWrapper>
        <p>
          주문 예상금액 <strong>{comma(getTotalPrice())}원</strong>
        </p>
        <Button
          width={"100%"}
          height={"60px"}
          background={"#ffeb00"}
          fontSize={"18px"}
          onClick={() => {
            mutate(createPayload(items), {
              onSuccess: () => {
                navigate("/order");
              },
              onError: (error) => {
                console.log(error);
              },
            });
          }}
        >
          {items.length}건 주문하기
        </Button>
      </ButtonWrapper>
      <Gap />
    </div>
  );
};

export default CartList;

const ButtonWrapper = styled.div`
  & > p {
    padding: 24px 16px 0;
    height: 44px;
    font-size: 18px;
    font-weight: 700;

    & > strong {
      float: right;
      color: #0091ff;
    }
  }
`;

const Gap = styled.div`
  height: 20px;
  background-color: #f4f4f4;
`;
