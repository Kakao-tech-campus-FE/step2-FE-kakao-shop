import { useQuery } from "react-query";
import { getCart } from "../services/cart";
import { Suspense, useMemo } from "react";
import CartList from "../components/molecules/CartList";
import Loader from "../components/atoms/Loader";


const CartPage = () => {
    const { data } = useQuery(
        "cart", 
        getCart, 
        {
            onError: (err) => {
                alert('장바구니 로딩 에러');
            }
        }
    );
    const validData = useMemo(() => {
        console.log('data filtering ...');
        console.log('before filtering', data?.data?.response);

        const filteredData = {
            products: [],
            totalPrice: data?.data?.response.totalPrice
        };

        data?.data?.response.products.map(productItem => {
            const newCarts = [];
            productItem.carts.map(optionItem => {
                if(optionItem.quantity > 0)
                    newCarts.push(optionItem);
            });

            if(newCarts.length > 0){
                filteredData.products.push({
                    ...productItem,
                    carts: newCarts,
                });
            };
        });

        return filteredData;
    }, [data]);

    return (
        <div className="bg-bg_gray">
            <Suspense fallback={<Loader />}>
                <CartList data={validData} /> 
            </Suspense>
        </div>
    );
};

export default CartPage;