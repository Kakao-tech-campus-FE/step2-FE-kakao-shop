import { useQuery } from "react-query";
import { getOrder } from "api/order";
import { useNavigate } from "react-router-dom";

const path = process.env.REACT_APP_PATH || "";

const useCartData = () => {
  const navigate = useNavigate();
  const query = useQuery(["getorder"], getOrder, {
    suspense: true,
    onSuccess: (res) => {
      if (res.totalPrice === 0) {
        alert("선택된 상품이 없습니다");
        navigate(path + "/cart");
      }
    },
  });

  return query;
};

export default useCartData;
