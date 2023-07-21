import Box from "./Box";
import Counter from './Counter';
import { comma } from "../../utils/comma";
import { Button } from "react-bootstrap";
import { styled } from "styled-components";

const CartItem = ({ item, onChange, onDelete }) => {

    return (
        <CartItemBox>
            <h5>{item.productName}</h5>
            {/* item의 carts에 담긴 장바구니 목록을 빼와서 사용 */}
            {item.carts.map((cart) => (
                <CartItemOptionBox key={cart.id}>
                <div className="option-name">
                    <span>{cart.option.optionName}</span>
                </div>
                <OptionButtons>
                <Button onClick={() => {onDelete(cart.id, 0, cart.option.price * cart.quantity);}}>
                    삭제하기
                </Button>
                    <Counter className="counter"
                        initialCount={cart.quantity}
                        onIncrease={(count) => {
                            // onChange - 아이디 / 변경 수량 / 해당 옵션 상품의 가격
                            onChange(cart.id, count, cart.option.price);
                        }}
                        onDecrease={(count) => {
                            onChange(cart.id, count, -cart.option.price);
                        }}
                    />
                    <PriceBox className="price-box">
                        <span>{comma(cart.option.price * cart.quantity)}원</span>
                    </PriceBox>
                </OptionButtons>
            </CartItemOptionBox>
            ))}
            <Box className="total-price">
                <div className="row">
                    <h5>주문금액</h5>
                    <div className="price">
                        {/* 여기서 item.carts는 옵션들이 저장된 배열이다! */}
                        {comma(
                            item.carts.reduce((acc, cur) => {
                                return acc + cur.option.price * cur.quantity;
                            }, 0)
                        )}원
                    </div>
                </div>
            </Box>
        </CartItemBox>
    );
};

export default CartItem;

const OptionButtons = styled.div`
    display: flex;
    & > .counter {
        margin : 0 10px 0 10px;
    }
    & > .price-box {
        justify-content: flex-end;
    }
`

const CartItemBox = styled.div`
    border: 1px solid #ddd;
    margin-bottom: 20px;
    padding : 10px;
    background-color: #fff;
`
const CartItemOptionBox = styled.div`
    border: 1px solid #ddd;
    background-color: #9a9a9a1d;
    padding : 10px;
    margin : 10px 0 10px 0;
`

const PriceBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`