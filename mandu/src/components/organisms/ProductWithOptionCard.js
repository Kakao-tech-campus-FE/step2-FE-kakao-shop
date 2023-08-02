import CartOptionCard from "../molecules/CartOptionCard";
import PaymentOptionCard from "../molecules/PaymentOptionCard";

const ProductWithOptionCard = ({id, productName, carts, canControl = true}) => {
    const imageUrl = process.env.REACT_APP_API_URL + "/images/" + id + ".jpg";

    return (
        <div className="cart-product-card">
            <div className="flex items-center p-2">
                <img src={imageUrl} alt={"상품 사진"} className="w-20 h-20 mr-2"/>
                <p className="product-name text-md font-bold text-gray-800">{productName}</p>
            </div>
            {carts.map((cart) => (
                canControl ?
                    <CartOptionCard key={"cartOption" + cart.id} cart={cart}/>
                    :
                    <PaymentOptionCard key={"paymentOption" + cart.id} cart={cart}/>
            ))}
        </div>
    );


};

export default ProductWithOptionCard;