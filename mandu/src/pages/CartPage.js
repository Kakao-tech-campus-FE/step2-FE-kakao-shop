import {useQuery} from "react-query";
import {getCart} from "../services/apis";
import ErrorPage from "./ErrorPage";
import LoadingPage from "./LoadingPage";
import ProductWithOptionCard from "../components/organisms/ProductWithOptionCard";
import {ElevatedButton} from "../components/atoms/Buttons";
import {useNavigate} from "react-router-dom";
import MdLayOut from "../components/templates/MdLayOut";
import {convertUrl} from "../const";

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
        navigate(convertUrl("/payment"));
    }

    return (
        <MdLayOut>
            <h1 className="text-xl font-bold bg-white text-gray-800 text-center py-2 mb-4">장바구니</h1>
            <ProductWithOptionList products={data.products}/>
            {data.products.length !== 0 &&
                <ElevatedButton id="payment-route-btn" className="bg-amber-300 mt-4"
                                onClick={onPurchase}>주문하기</ElevatedButton>
            }
        </MdLayOut>
    )
}

const ProductWithOptionList = ({products}) => {
    if (products.length === 0) {
        return (
            <div className="flex flex-col items-center justify-center h-64">
                <p className="text-2xl font-bold text-gray-800">장바구니가 비었습니다.</p>
                <p className="text-lg text-gray-600">상품을 추가해주세요.</p>
            </div>
        );
    }
    return (
        <div className="divide-y-8 divide-gray-100 bg-white">
            {
                products.map((item) => {
                    let filteredCarts = item.carts.filter((cart) => cart.quantity > 0);
                    if (filteredCarts.length !== 0) {
                        return (
                            <ProductWithOptionCard key={"cartItem_" + item.id} id={item.id}
                                                   productName={item.productName}
                                                   carts={filteredCarts}/>);
                    }
                    return null;
                })}
        </div>
    );

}

export default CartPage;
