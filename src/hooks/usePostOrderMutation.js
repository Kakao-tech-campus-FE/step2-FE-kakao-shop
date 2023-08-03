import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import API from "@/constants/API.js";
import orderAPI from "@/api/orderAPI.js";
import routes from "@/constants/routes.js";

function usePostOrderMutation() {
  const navigate = useNavigate();
  const { mutate } = useMutation(
    [API.KEYS.POST_ORDER],
    async () => {
      const { data } = await orderAPI.postOrder();
      return data.response;
    },
    {
      onSuccess: (data) => {
        console.log(data);
        navigate(`${routes.orderResult}/${data.id}`);
      },
    }
  );

  return { mutate };
}

export default usePostOrderMutation;
