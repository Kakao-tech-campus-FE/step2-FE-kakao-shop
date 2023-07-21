import CartOptionItem from "./CartOptionItem";
import styles from "./CartItem.module.css";
import Box from "./Box";
import { comma } from "../../utils/convert";
import { useState, useEffect } from "react";

const CartItem = ({ item, onChange }) => {
    const [isEmpty, setIsEmpty] = useState(false);

    useEffect(() => {
        // option의 quantity의 합계가 0이면 isEmtpy
        let sum = 0;
        item.carts.forEach(option => {
            sum += option.quantity;
        })
        if(sum === 0) setIsEmpty(true);
    }, [item]);

    if(isEmpty) return;
    return (
        <Box className={styles.cart_item}>
            <h5 className={styles.product_name}>{item.productName}</h5>
            {item.carts.map((cart) => {
                return <CartOptionItem key={cart.id} optionItem={cart} onChange={(optionQuantity) => {
                    onChange(cart.id, optionQuantity);
                }}/>
            })}
        </Box>        
    );
};

export default CartItem;