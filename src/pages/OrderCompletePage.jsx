import { useQuery } from "@tanstack/react-query";
import { Suspense } from "react";
import { useParams } from "react-router-dom";
import Loader from "../components/atoms/Loader";
import Page from "../components/atoms/Page";
import OrderCompleteTemplate from "../components/templates/OrderCompleteTemplate";
import { getOrderFromId } from "../services/order";

const OrderCompletePage = () => {
    const { orderId } =  useParams();
    const { data } = useQuery(['order_result'], () => getOrderFromId(orderId));

    return <Suspense fallback={<Loader />}><Page>{data && <OrderCompleteTemplate data={data} />}</Page></Suspense>;
}
export default OrderCompletePage;