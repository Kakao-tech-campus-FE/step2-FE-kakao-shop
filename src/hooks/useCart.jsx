import { useMutation, useQuery, useQueryClient } from "react-query";
import cartInstance from "../apis/cart";
import orderInstance from "../apis/order";

export default function useCart() {
  const queryClient = useQueryClient();

  const cartsQuery = useQuery(["carts"], cartInstance.getCart, {
    staleTime: 1000 * 60,
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
