import { getCart } from "@/remotes/product";
import Txt from "../common/Txt.component";
import { useQuery } from "@tanstack/react-query";
import { Fragment, useEffect } from "react";
import ProductOptionOrderItem from "../ProductOption/ProductOptionOrderResult/ProductOptionOrderItem.component";
import { useAppDispatch, useAppSelector } from "@/hooks/useRedux";
import { clearProductOrder, initProductOrder } from "@/store/productSlice";
import flatMap from "lodash/flatMap";

const CartItem = () => {
  const { order } = useAppSelector((state) => state.productSlice);
  const { data, isLoading } = useQuery(["cart"], getCart, {
    onSuccess: (data) => {
      const { products } = data.data.response;

      const carts = flatMap(products, (product) => product.carts).map(
        (cart) => {
          return {
            optionId: cart.option.id,
            optionName: cart.option.optionName,
            price: cart.option.price,
            quantity: cart.quantity,
          };
        }
      );

      dispatch(initProductOrder(carts));
    },
  });
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(clearProductOrder());
  }, [dispatch]);

  if (!data || isLoading) {
    return <div>loading...</div>;
  }

  const { products } = data.data.response;

  return (
    <div className="w-full p-4 flex flex-col gap-4">
      {products.map((product) => (
        <Fragment key={product.id}>
          <Txt typograph="h6">{product.productName}</Txt>
          <div className="border-2 rounded-md divide-y-2">
            {product.carts.map((cart) => {
              const orderById = order.find(
                (item) => item.optionId === cart.option.id
              );
              return <ProductOptionOrderItem key={cart.id} item={orderById} />;
            })}
          </div>
        </Fragment>
      ))}
    </div>
  );
};

export default CartItem;
