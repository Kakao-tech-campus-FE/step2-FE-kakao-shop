import {useMutation, useQueryClient} from "react-query";
import {updateCart} from "../../services/apis";
import {priceFormat} from "../../util/Format";

const CartOptionCard = ({cart}) => {
    const {id, option, quantity, price} = cart;
    const queryClient = useQueryClient();

    //updataCart
    const cartUpdateMutation = useMutation(updateCart, {
        onSuccess: () => {
            queryClient.invalidateQueries('cart');
        }
    });

    const deleteCart = () => {
        const data = [{cartId: id, quantity: 0}];
        cartUpdateMutation.mutate(data);
    }

    const increaseSelectedCount = () => {
        const data = [{cartId: id, quantity: quantity + 1}];
        cartUpdateMutation.mutate(data);
    }
    const decreaseSelectedCount = () => {
        const data = [{cartId: id, quantity: quantity - 1}];
        cartUpdateMutation.mutate(data);
    }

    return (
        <div className="border-2 border-gray-300 m-2 p-2">
            <div className="option-name flex justify-between">
                <h3>{option?.optionName}</h3>
                <button onClick={deleteCart}>X</button>
            </div>
            <div className="flex justify-between items-center">
                <div className="flex items-center">
                    <button className="px-2 m-2" onClick={decreaseSelectedCount}>-</button>
                    <p className="option-quantity px-2">{quantity}</p>
                    <button className="px-2 m-2" onClick={increaseSelectedCount}>+</button>
                </div>
                <p>{priceFormat(price)}</p>
            </div>
        </div>
    );
}

export default CartOptionCard;