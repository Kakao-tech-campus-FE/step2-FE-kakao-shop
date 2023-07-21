import ProductOptionSelector from "@/components/ProductOption/ProductOptionSelector/ProductOptionSelector.component";
import ProductOptionOrderResult from "@/components/ProductOption/ProductOptionOrderResult/ProductOptionOrderResult.component";
import { Link, useParams } from "react-router-dom";
import { addProductToCart, getProductDetailById } from "@/remotes/product";
import { PRODUCT } from "@/assets/product.ko";
import { ERROR } from "@/assets/error.ko";
import { useQuery } from "@tanstack/react-query";
import type { ProductOption } from "@/dtos/product.dto";
import { useOrder } from "@/hooks/useOrder";
import { URL } from "@/assets/url.ko";

const ProductOption = () => {
  const { order, addOrder, removeOrder, updateOrder, resetOrder } = useOrder();
  const { productId } = useParams<{ productId: string }>();

  const { data } = useQuery(["product", productId], () =>
    getProductDetailById(Number(productId))
  );

  const onAddCart = () => {
    if (order.length === 0) {
      return alert(ERROR.CHECK_OPTION);
    }

    const carts = order.map((item) => ({
      optionId: item.id,
      quantity: item.quantity,
    }));

    addProductToCart(carts)
      .then(() => {
        alert(PRODUCT.ADD_CART_SUCCESS);
        resetOrder();
      })
      .catch(() => {
        alert(ERROR.ADD_CART_FAILED);
      });
  };

  return (
    <>
      <ProductOptionSelector
        options={data?.data.response.options}
        addOrder={addOrder}
      />
      <ProductOptionOrderResult
        order={order}
        removeOrder={removeOrder}
        updateOrder={updateOrder}
      />
      <div className="flex gap-2">
        <Link
          className="bg-black hover:bg-gray-900 text-white text-center rounded-lg flex-1 py-4"
          onClick={onAddCart}
          to={URL.CART}
        >
          {PRODUCT.ADD_CART}
        </Link>
        <Link
          onClick={onAddCart}
          to={"#"}
          className="text-center bg-blue-500 hover:bg-blue-600 text-white rounded-lg flex-[2_0_0] py-4"
        >
          {PRODUCT.BUY_BY_TOC}
        </Link>
      </div>
    </>
  );
};

export default ProductOption;
