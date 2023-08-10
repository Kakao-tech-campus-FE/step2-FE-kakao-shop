import { useQuery } from "@tanstack/react-query";
import { getCart } from "../apis/cart";
import { getCookie } from "../storage/Cookie";

function useCartNum() {
  const userEmail = getCookie("email");
  const { data } = useQuery(["cartNum"], getCart, { enabled: !!userEmail });

  const getTotalCounts = (products) => {
    if (!products) return 0;
    return products.reduce((totalQuantity, item) => {
      return (
        totalQuantity + item.carts.reduce((acc, cart) => acc + cart.quantity, 0)
      );
    }, 0);
  };

  const products = data?.data?.response?.products ?? [];
  const totalCounts = getTotalCounts(products);

  return {
    userEmail,
    totalCounts,
  };
}

export default useCartNum;
