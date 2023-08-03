import { Suspense, useMemo } from "react";
import { useLocation } from "react-router";
import { useQuery } from "react-query";
import { getOrderResult} from "../services/order";
import OrderResultTemplate from "../components/templates/OrderResultTemplate";
import Loader from "../components/atoms/Loader";

export default function OrderSuccessPage() {
    const location = useLocation();
    const orderId = location.state?.orderId;
    const { data } = useQuery(
        ["orderResult", orderId],
        getOrderResult,
        {
            onError: (err) => {
                console.log(err);
            }
        }
    );
    const validData = useMemo(() => {
        
        console.log(data?.data?.response);
        const filteredData = {
            id: data?.data?.response.id,
            products: [],
            totalPrice: data?.data?.response.totalPrice
        }

        data?.data?.response.products.map(productItem => {
            const newItems = [];
            productItem.items.map(item => {
                if(item.quantity > 0)
                    newItems.push(item);
            });

            if(newItems.length > 0){
                filteredData.products.push({
                    ...productItem,
                    items: newItems,
                });
            };
        });

        return filteredData;
    }, [data]);
  
    return (
        <div className="bg-bg_gray">
            <Suspense fallback={<Loader />}>
                <OrderResultTemplate data={validData}/>
            </Suspense>
        </div>
    );
}