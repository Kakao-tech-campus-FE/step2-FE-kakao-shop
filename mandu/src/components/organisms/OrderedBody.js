import {useQuery} from "react-query";
import {getOrders} from "../../services/apis";
import LoadingPage from "../../pages/LoadingPage";
import ErrorPage from "../../pages/ErrorPage";
import {priceFormat} from "../../util/Format";

const OrderedBody = ({orderedId}) => {
    const {
        isLoading,
        isError,
        data,
        error
    } = useQuery(["ordered", orderedId], () => getOrders(orderedId), {retry: 1});

    if (isLoading) return <LoadingPage/>
    if (isError) return <ErrorPage error={error}/>
    return (
        //showdata
        <div className="border-2 my-4">
            <h1 className="text-xl font-bold bg-white text-gray-800 text-center py-2 mb-4 border-b">주문 상품 정보</h1>
            <div className="divide-y-8 divide-white">
                {
                    data.products.map((product, index) => {
                            const {productName, items} = product;
                            return (
                                <div key={index} className="p-2">
                                    <h2 className="ordered-product text-lg font-bold">{productName}</h2>
                                    {
                                        items.map((item, index) => {
                                            const {optionName, quantity, price} = item;
                                            return (
                                                <div key={index}>
                                                    <p className="font-semibold">{"옵션. " + optionName}</p>
                                                    <p>{quantity}개</p>
                                                    <p>{priceFormat(price)}</p>
                                                </div>
                                            );
                                        })
                                    }
                                </div>
                            );
                        }
                    )
                }
            </div>
            <div className="flex justify-between border-t p-4">
                <p className="font-semibold">결제 금액</p>
                <p className="font-bold text-blue-700">{priceFormat(data.totalPrice)}</p>
            </div>
        </div>


    );
}

export default OrderedBody;
