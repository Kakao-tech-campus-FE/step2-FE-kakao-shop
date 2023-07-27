import CartOptionCard from "../molecules/CartOptionCard";

const CartProductCard = ({id, productName, carts}) => {
    const imageUrl = process.env.REACT_APP_API_URL + "/images/" + id + ".jpg";

    return (
        <div>
            <div className="flex items-center justify-center">
                <img src={imageUrl} alt={"상품 사진"} className="w-20 h-20"/>
                <p className="text-sm font-bold text-gray-800">{productName}</p>
            </div>
            {carts.map((cart) => (
                <CartOptionCard key={"cartOption" + cart.id} cart={cart}/>
            ))}
        </div>
    );


};

export default CartProductCard;