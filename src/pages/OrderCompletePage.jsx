import { useQuery } from "react-query";
import OrderCompletTemplate from "../components/templates/OrderCompleteTemplate";
import { useParams } from "react-router-dom";
import { getOrderFromId } from "../apis/order";
import Loader from "../components/atoms/Loader";
import ErrorPage from './ErrorPage';

const OrderCompletePage = () => {
    const {id} = useParams();
    const {data, isLoading, isError} = useQuery([`/orders/${id}`], () => getOrderFromId(id));

    return (
        <>
            {isError ? <ErrorPage /> : null}
            {isLoading ? <Loader /> : <OrderCompletTemplate data={data.data} id={id}/>}
        </>

    );
};

export default OrderCompletePage;