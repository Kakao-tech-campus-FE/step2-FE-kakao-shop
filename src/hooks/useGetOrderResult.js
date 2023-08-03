import { useQuery } from "@tanstack/react-query";
import API from "@/constants/API.js";
import orderAPI from "@/api/orderAPI.js";
import { useParams } from "react-router-dom";

function useGetOrderResult() {
  const { orderId } = useParams();

  const { data } = useQuery(
    [API.KEYS.GET_ORDER_RESULT],
    async () => {
      const { data } = await orderAPI.getOrderResult({ orderId });
      return data.response;
    },
    {
      suspense: false,
    }
  );

  return { data };
}

export default useGetOrderResult;
