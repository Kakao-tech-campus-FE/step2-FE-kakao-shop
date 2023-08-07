import CartOptionItem from "./CartOptionItem";
import styles from "./CartItem.module.css";
import Box from "./Box";
import { comma } from "../../utils/convert";
import { useState, useEffect } from "react";
import Photo from "./Photo";

const staticServerUri = process.env.REACT_APP_PATH || "";

const CartItem = ({ item, onChange }) => {
    const [isEmpty, setIsEmpty] = useState(false);

    useEffect(() => {
        setIsEmpty(
            item.carts.every(option => option.quantity === 0)
        );
    }, [item]);

    if(isEmpty) return;
    return (
        <Box className={styles.cart_item}>
            <div className={styles.cart_item_title}>
                <span className={styles.cart_item_image}>
                    <Photo
                        className="rounded-[4px]"
                        src={
                            staticServerUri ?
                            staticServerUri + `/images/${item.id}.jpg`
                            :
                            `${process.env.REACT_APP_API_URL}images/${item.id}.jpg`
                        }
                        alt={item.productName}
                    />
                </span>
                <div className={styles.cart_item_name}>
                    <strong className={styles.product_name}>{item.productName}</strong>
                </div>
            </div>
            {item.carts.map((cart) => {
                return <CartOptionItem key={cart.id} optionItem={cart} onChange={(optionQuantity) => {
                    onChange(cart.id, optionQuantity);
                }}/>
            })}
        </Box>        
    );
};

export default CartItem;