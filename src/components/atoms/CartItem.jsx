import { comma } from "../../utils/convert";
import Box from "./Box"
import Counter from "./Counter";
import * as Cart from '../../styles/atoms/CartItem';

const CartItem = ({item, onChange, onDelete}) => {
    return(
        <Box>
            {item.carts.some((cart) => cart.quantity !== 0) ? <Cart.ItemTitle>{item.productName}</Cart.ItemTitle> : null}
            {item.carts.map((cart) => cart.quantity !== 0 ? (
                <Cart.ItemOption key={cart.id}>
                    <Cart.ItemOptionTitle>
                        <span>{cart.option.optionName}</span>
                        <Cart.ItemOptionDelete onClick={() => onDelete(cart.id, cart.quantity,cart.option.price)}>X</Cart.ItemOptionDelete>
                    </Cart.ItemOptionTitle>
                    <Cart.ItemCountPriceContainer>
                        <Counter 
                            value={cart.quantity}
                            onIncrease={(count) => {
                                onChange(cart.id, count, cart.option.price);
                            }}
                            onDecrease={(count) => {
                                onChange(cart.id, count, -cart.option.price);
                            }}/>
                        <span>
                            <span style={{fontWeight: 'bold'}}>{comma(cart.option.price * cart.quantity)}원</span>
                        </span>
                    </Cart.ItemCountPriceContainer>
                </Cart.ItemOption>
            ) : null)}
        </Box>
    );
};

export default CartItem;