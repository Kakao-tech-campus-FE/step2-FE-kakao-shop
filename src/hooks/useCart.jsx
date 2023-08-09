import { useMutation, useQuery, useQueryClient } from "react-query";
import cartInstance from "../apis/cart";
import orderInstance from "../apis/order";
import { useSelector } from "react-redux";

export default function useCart() {
  const user = useSelector((state) => state.user.isLoggedIn);
  const queryClient = useQueryClient();

  const cartsQuery = useQuery(["carts"], cartInstance.getCart, {
    staleTime: 1000 * 60,
    enabled: !!user,
  });
  const addCart = useMutation(cartInstance.addCart, {
    onSuccess: () => queryClient.invalidateQueries(["carts"]),
  });
  const updateCart = useMutation(cartInstance.updateCart, {
    onSuccess: () => queryClient.invalidateQueries(["carts"]),
  });
  const orderCart = useMutation(orderInstance.order, {
    onSuccess: () => queryClient.invalidateQueries(["carts"]),
  });

  return { cartsQuery, addCart, updateCart, orderCart };
}
