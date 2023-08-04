// import { Card } from "@material-tailwind/react";
import Card from "./Card";
import Box from "./Box";
import Counter from "./Counter";
// import { comma } from "../../utils/convert";

//각 상품별 장바구니 항목
//여러 옵션이 저장될 수 있음.
const CartItems = ({item,onChange}) => {
    return (
       <Box>
        <h5>{item.productName}</h5>
        {item.carts.map((cart)=>{
           return(
            <Card key={cart.id}>
                <div>
                    {cart.option.optionName}
                </div>
                <Counter
                onIncrease={(count)=>{
                    onChange(cart.option.id,count,cart.option.price)
                }}
                onDecrease={(count)=>{
                    onChange(cart.option.id,count,-cart.option.price)}}/>
                <div>
                    <span>{cart.option.price * cart.quantity} 원</span>
                </div>
            </Card>
           )
            
        })}
         <Card>
            <h5>주문금액</h5>
            <div>{
                item.carts.reduce((acc,cur)=>{
                    return acc+cur.option.price* cur.quantity;
                },0)
            }</div>
            </Card>
            <hr></hr>
       </Box>
    );
};

export default CartItems;