import { useQuery } from "react-query";
import { getCart } from "../apis/cart";
import Loader from "../components/atoms/Loader";
import CartList from "../components/molecules/CartList";
import { useNavigate } from "react-router-dom";
import ErrorPage from "./ErrorPage";

// 장바구니 페이지
const CartPage = () => {
    const {data, isError, isLoading, error} = useQuery("cart", getCart);
    
    const navigate = useNavigate();
    if(isError) {
        alert(`${error.status} error`);
        navigate('/');
    };
    
    return(
        <>
            {isError ? <ErrorPage error={error.status}/> : null}
            {isLoading ? <Loader /> : <CartList data={data}/>}
        </>

    );
};

export default CartPage;