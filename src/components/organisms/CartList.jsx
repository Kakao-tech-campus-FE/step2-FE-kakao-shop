import Box from "../atoms/Box";
import CartItem from "../atoms/CartItem";
import Card from "../atoms/Card";
import { comma } from "../../utils/convert";
import Button from "../atoms/Button";
import { useEffect, useState } from "react";
import Container from "../atoms/Container";
const CartList = ({ data }) => {
  const [cartItem, setCartItem] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    setCartItem(data?.data?.response?.products);
    setTotalPrice(data?.data?.response?.totalPrice);
  }, [data]);

  return (
    <Container className="cart-list">
      <Box>
        <h1>장바구니</h1>
      </Box>
      <Card>
        {/* 상품별 장바구니 */}
        {Array.isArray(cartItem) &&
          cartItem.map((item) => {
            return (
              <CartItem
                key={item.id}
                item={item}
                // onChange={handleOnChangeCount} //개수변경
              />
            );
          })}
      </Card>
    </Container>
  );
};

export default CartList;
