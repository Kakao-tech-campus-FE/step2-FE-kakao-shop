import Counter from "./Counter"
import Box from "./Box"
import Card from "./Card"
import { comma } from "../../utils/convert"

const CartItem = ({item,onChange}) => {
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
            <h5>주문예상금액</h5>
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

export default CartItem;