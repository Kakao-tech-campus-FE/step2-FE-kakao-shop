const CartOptionCard = ({cart}) => {
    const {id, option, quantity, price} = cart;
    return (
        <div className="bg-gray-200 mb-4 p-2">
            <div className="flex justify-between">
                <h3>{option?.optionName}</h3>
                <button>X</button>
            </div>
            <div className="flex justify-between items-center">
                <div className="flex items-center">
                    <button className="px-2 m-2">-</button>
                    <p className="px-2">{quantity}</p>
                    <button className="px-2 m-2">+</button>
                </div>
                <p>{(Number(price)).toLocaleString() + '원'}</p>
            </div>
        </div>
    );
}

export default CartOptionCard;