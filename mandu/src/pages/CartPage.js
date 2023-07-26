import {useQuery} from "react-query";
import {getCart} from "../services/apis";
import ErrorPage from "./ErrorPage";
import LoadingPage from "./LoadingPage";
import ProductWithOptionCard from "../components/organisms/ProductWithOptionCard";
import {ElevatedButton} from "../components/atoms/Buttons";
import {useNavigate} from "react-router-dom";
import MdLayOut from "../components/templates/MdLayOut";

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
        <MdLayOut>
            <h1 className="text-xl font-bold bg-white text-gray-800 text-center py-2 mb-4">장바구니</h1>
            {data.products.length !== 0 &&
                <>
                    <div className="divide-y-8 divide-gray-100 bg-white">
                        {
                            data.products.map((item) => {
                                let filteredProduct = item.carts.filter((cart) => cart.quantity > 0);
                                if (filteredProduct.length !== 0) {
                                    return (
                                        <ProductWithOptionCard key={"cartItem_" + item.id} id={item.id}
                                                               productName={item.productName}
                                                               carts={item.carts}/>);
                                }
                            })}
                    </div>
                    <ElevatedButton className="bg-amber-300" onClick={onPurchase}>주문하기</ElevatedButton>
                </>
            }
        </MdLayOut>
    )
}

export default CartPage;
