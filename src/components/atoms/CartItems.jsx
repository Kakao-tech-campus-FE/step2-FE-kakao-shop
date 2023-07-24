import { Card } from "@material-tailwind/react";
import Box from "./Box";
import Counter from "./Counter";
import { comma } from "../../utils/convert";

//각 상품별 장바구니 항목
//여러 옵션이 저장될 수 있음.
const CartItems = ({item,onChange}) => {
    return (
       <Box>
        <h5>{item.productName}</h5>
        {item.carts.map((cart)=>{
            <Card key={cart.id}>
                <div>
                    <span>{cart.option.optionName}</span>
                </div>
                <Counter
                onIncrease={(count)=>{
                    onChange(cart.id,count,cart.option.price)
                }}
                onDecrease={(count)=>{
                    onChange(cart.id,count,-cart.option.price)}}/>
                <div>
                    <span>{comma(cart.option.price * cart.quantity)} 원</span>
                </div>
            </Card>
        })}
         <Card>
            <h5>주문금액</h5>
            <div>{comma(
                item.carts.reduce((acc,cur)=>{
                    return acc+cur.option.price* cur.quantity;
                },0)
            )}</div>
            </Card>
       </Box>
    );
};

export default CartItems;