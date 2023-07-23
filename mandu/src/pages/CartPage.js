import {useQuery} from "react-query";
import {getCart} from "../services/apis";
import ErrorPage from "./ErrorPage";
import LoadingPage from "./LoadingPage";
import CartProductCard from "../components/organisms/CartProductCard";
import {ElevatedButton} from "../components/atoms/Buttons";
import {useNavigate} from "react-router-dom";

const CartPage = () => {

    const {isLoading, isError, data, error} = useQuery(['cart'],
        getCart, {
            retry: 1,
        });
    const navigate = useNavigate();

    if (isLoading) return <LoadingPage/>
    if (isError) return <ErrorPage error={error}/>

    const onPurchase = (e) => {
        e.preventDefault();
        navigate("/payment");
    }

    return (
        <div className="bg-gray-100 py-8 min-h-screen">
            <div className="max-w-screen-md w-full  mx-auto ">
                <h1 className="text-xl font-bold bg-white text-gray-800 text-center py-2 mb-4">장바구니</h1>
                <div className="divide-y-8 divide-gray-100 bg-white">
                    {
                        data.products.map((item) => {
                            let filteredProduct = item.carts.filter((cart) => cart.quantity > 0);
                            if (filteredProduct.length !== 0) {
                                return (
                                    <CartProductCard key={"cartItem_" + item.id} id={item.id}
                                                     productName={item.productName}
                                                     carts={item.carts}/>);
                            }
                        })}
                </div>
                s
                <ElevatedButton className="bg-amber-300" onClick={onPurchase}>주문하기</ElevatedButton>
            </div>

        </div>
    )
}

export default CartPage;
