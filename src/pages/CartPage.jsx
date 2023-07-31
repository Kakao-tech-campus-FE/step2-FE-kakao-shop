import { useQuery } from "react-query";
import { getCart } from "../apis/cart";
import { Suspense } from "react";
import Loader from "../components/atoms/Loader";
import CartList from "../components/molecules/CartList";
import { useNavigate } from "react-router-dom";

// 장바구니 페이지
const CartPage = () => {
    const {data, isError, isLoading} = useQuery("cart", getCart);
    
    const navigate = useNavigate();
    if(isError) {
        alert('장바구니가 비어있습니다.');
        navigate('/');
    };
    
    return(
        isLoading ? <Loader /> : <CartList data={data}/>
    );
};

export default CartPage;