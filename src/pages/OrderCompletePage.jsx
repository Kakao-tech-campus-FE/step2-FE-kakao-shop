import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { getOrderFromId } from "../apis/order";
import Loader from "../components/common/atoms/Loader";
import OrderCompleteTemplete from "../components/ordercomplete/templates/OrderCompleteTemplate";

export default function OrderCompletePage() {
  // 완료된 결제 정보를 불러오기
  // 결제 정보를 불러오는 동안 로딩 화면을 보여주기
  const { id } = useParams();
  const parseId = parseInt(id);
  const { data, isLoading } = useQuery([`orders/${id}`, parseId], () =>
    getOrderFromId(parseId),
  );

  if (isLoading) return <Loader />;
  return <div>{data && <OrderCompleteTemplete data={data} />}</div>;
}
