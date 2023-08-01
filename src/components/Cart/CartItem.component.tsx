import { FC, Fragment } from "react";
import ProductOptionOrderItem from "../ProductOption/ProductOptionOrderResult/ProductOptionOrderItem.component";
import Txt from "@components/common/Txt.component";
import { Link } from "react-router-dom";
import { CART } from "@/assets/product.ko";
import { COMMON } from "@/assets/common.ko";
import { ProductOrder } from "@/dtos/product.dto";
import { Order } from "@/hooks/useOrder";

const EmptyCart = () => (
  <>
    <Txt>{CART.CART_EMPTY}</Txt>
    <Link
      to={"/"}
      className="bg-blue-500 hover:bg-blue-600 text-white rounded-lg py-2 px-4 w-fit"
    >
      {COMMON.GO_SHOPPING}
    </Link>
  </>
);

const CartItemSkeleton = () => (
  <>
    <div className="animate-pulse flex flex-col gap-4 p-4">
      <div className="w-1/2 h-6 bg-gray-300 rounded"></div>
      <div className="flex justify-between">
        <div className="w-full h-12 bg-gray-300 rounded"></div>
      </div>
      <div className="w-1/2 h-6 bg-gray-300 rounded"></div>
      <div className="flex justify-between">
        <div className="w-full h-12 bg-gray-300 rounded"></div>
      </div>
      <div className="w-1/2 h-6 bg-gray-300 rounded"></div>
      <div className="flex justify-between">
        <div className="w-full h-12 bg-gray-300 rounded"></div>
      </div>
    </div>
  </>
);

interface ProductShowProps {
  product: ProductOrder;
  removeOrder: (cartId: number) => void;
  updateOrder: (order: Order) => void;
}

const ProductShow: FC<ProductShowProps> = ({
  product,
  removeOrder,
  updateOrder,
}) => {
  return (
    <Fragment key={product.id}>
      <Txt typograph="h6">{product.productName}</Txt>
      <div className="border-2 rounded-md divide-y-2">
        {product.carts.map((cart) => (
          <ProductOptionOrderItem
            key={cart.id}
            item={{
              id: cart.id,
              optionName: cart.option.optionName,
              price: cart.option.price,
              quantity: cart.quantity,
            }}
            removeOrder={removeOrder}
            updateOrder={updateOrder}
          />
        ))}
      </div>
    </Fragment>
  );
};

interface CartItemProps {
  products: ProductOrder[];
  isLoading: boolean;
  removeOrder: (cartId: number) => void;
  updateOrder: (order: Order) => void;
}

const CartItem: FC<CartItemProps> = ({
  products,
  isLoading,
  removeOrder,
  updateOrder,
}) => {
  if (!products || isLoading) {
    return <CartItemSkeleton />;
  }

  const isEmptyOrder = products.every((product) =>
    product.carts.every((cart) => cart.quantity === 0)
  );

  if (isEmptyOrder) {
    return <EmptyCart />;
  }

  return (
    <>
      {products.map(
        (product) =>
          isEmptyOrder || (
            <ProductShow
              key={product.id}
              {...{ product, removeOrder, updateOrder }}
            />
          )
      )}
    </>
  );
};

export default CartItem;
