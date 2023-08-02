import { useQuery } from "@tanstack/react-query";
import API from "@/constants/API.js";
import cartAPI from "@/api/cartAPI.js";

function useGetCartItemsQuery() {
  const { data } = useQuery(
    [API.KEYS.GET_CART_ITEMS],
    async () => {
      const { data } = await cartAPI.getCartItems();
      return data.response;
    },
    {
      onError: (err) => {
        console.log(err.response.status);
      },
      suspense: true,
    }
  );

  return { data };
}

export default useGetCartItemsQuery;
