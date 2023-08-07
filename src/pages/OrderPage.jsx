import { Suspense, useMemo } from "react";
import OrderTemplate from "../components/templates/OrderTemplate";
import Loader from "../components/atoms/Loader";
import { useQuery } from "react-query";
import { getCart } from "../services/cart";

const OrderPage = () => {
    const { data } = useQuery('getCart', getCart, {
        onError: () => {
            alert("결제 중 문제가 발생하였습니다.");
        }
    });
    const validData = useMemo(() => {
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
            }
        });

        return filteredData;
    }, [data]);

    return (
        <div className="bg-bg_gray">
            <Suspense fallback={<Loader />}>
                <OrderTemplate data={validData}/>
            </Suspense>
        </div>
    );

};

export default OrderPage;