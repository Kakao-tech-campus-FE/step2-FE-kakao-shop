import { useQuery } from "@tanstack/react-query";
import { ordersComplete } from "../services/order";
import { useParams } from "react-router-dom";

const CompletOrderPage = () => {
  const { id } = useParams();
  const { data, error, isLoading } = useQuery(["ordersComplete"], () =>
    ordersComplete(id)
  );

  return (
    <>
      <div>구매완료 페이지</div>
    </>
  );
};

export default CompletOrderPage;
