import { comma } from '../../utils/convert';
import Box from './Box';
import Card from './Card';
import Counter from './Counter';
import Container from './Container';
import Text from './Text';

// 각 상품별 장바구니 항목
// 여러 옵션이 저장될 수 있음
const CartItem = ({ key, item, onChange }) => {
    return (
        <Container
            className="cart-item-box width-100"
            direction="column"
            gap={'1rem'}
            align="flex-start"
        >
            <Text className="text-base font-semibold">{item.productName}</Text>
            {item.carts.map((cart) => (
                <Box key={cart.id} className="cart" direction="column" align="flex-start">
                    <div className="option-name">
                        <Text className="base">{cart.option.optionName}</Text>
                    </div>
                    <div className="flex justify-between w-full p-3 mt-2">
                        <Counter
                            onIncrease={(count) => {
                                onChange(cart.id, count, cart.option.price);
                            }}
                            onDecrease={(count) => {
                                onChange(cart.id, count, -cart.option.price);
                            }}
                            initValue={cart.quantity}
                        />
                        <div className="price">
                            <span>{comma(cart.option.price * cart.quantity)}원</span>
                        </div>
                    </div>
                </Box>
            ))}
        </Container>
    );
};

export default CartItem;
