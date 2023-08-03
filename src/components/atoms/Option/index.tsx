import { Cart, Product } from "@components/organisms/CartForm";
import { comma } from "@utils/regex";
import { styled } from "styled-components";
import Counter from "../Counter";

interface Props {
  cart: Cart;
  setItems: React.Dispatch<React.SetStateAction<Product[]>>;
}

const Option = ({ cart, setItems }: Props) => {
  const { quantity, id } = cart;
  const { price } = cart.option;

  const handleOnChange = (count: number) => {
    setItems((prev) => {
      return prev.map((item) => {
        return {
          ...item,
          carts: item.carts.map((cart) => {
            if (cart.id === id) {
              return {
                ...cart,
                price: price * count,
                quantity: count,
              };
            }
            return cart;
          }),
        };
      });
    });
  };

  return (
    <>
      <OptionWrapper>
        <h5>{cart.option.optionName}</h5>
        <Row>
          <Counter
            init={quantity}
            onChange={(count) => {
              handleOnChange(count);
              console.log(cart);
            }}
          />
          <span>{comma(cart.option.price * cart.quantity)}원</span>
        </Row>
      </OptionWrapper>
    </>
  );
};

export default Option;

const OptionWrapper = styled.div`
  margin-top: 16px;
  padding: 11px;
  border-radius: 3px;
  border: 1px solid #e6e6e6;

  h5 {
    padding-bottom: 12px;
    font-size: 14px;
    color: #555;
  }
`;

const Row = styled.div`
  display: flex;
  align-items: center;

  & > span {
    margin-top: 8px;
    margin-left: auto;
    font-weight: 700;
    font-size: 15px;
  }
`;
