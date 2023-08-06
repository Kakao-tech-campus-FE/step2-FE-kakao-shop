import ProductOptionSelector from "@/components/ProductOption/ProductOptionSelector/ProductOptionSelector.component";
import ProductOptionOrderResult from "@/components/ProductOption/ProductOptionOrderResult/ProductOptionOrderResult.component";
import { useNavigate, useParams } from "react-router-dom";
import { addProductToCart, getProductDetailById } from "@/remotes/product";
import { PRODUCT } from "@/assets/product.ko";
import { ERROR } from "@/assets/error.ko";
import { useQuery } from "@tanstack/react-query";
import type { ProductOption } from "@/dtos/product.dto";
import { useOrder } from "@/hooks/useOrder";
import { URL } from "@/assets/url.ko";
import Button from "../common/Button.component";

const ProductOption = () => {
  const { order, addOrder, removeOrder, updateOrder, resetOrder } = useOrder();
  const { productId } = useParams<{ productId: string }>();
  const navigate = useNavigate();

  const { data } = useQuery(
    ["product", productId],
    () => getProductDetailById(Number(productId)),
    { enabled: !!productId }
  );

  const onAddCart = async () => {
    if (order.length === 0) {
      return alert(ERROR.CHECK_OPTION);
    }

    const carts = order.map((item) => ({
      optionId: item.id,
      quantity: item.quantity,
    }));

    try {
      await addProductToCart(carts);
      alert(PRODUCT.ADD_CART_SUCCESS);
      resetOrder();
      navigate(URL.CART);
    } catch (error) {
      alert(ERROR.ADD_CART_FAILED);
      navigate(URL.HOME);
      return;
    }
  };

  return (
    <>
      <ProductOptionSelector
        options={data?.data?.response?.options}
        addOrder={addOrder}
      />
      <ProductOptionOrderResult
        order={order}
        removeOrder={removeOrder}
        updateOrder={updateOrder}
      />
      <div className="flex gap-2">
        <Button
          color="dark"
          className="text-center rounded-lg flex-1 py-4"
          onClick={onAddCart}
        >
          {PRODUCT.ADD_CART}
        </Button>
        <Button
          onClick={onAddCart}
          className="text-center rounded-lg flex-[2_0_0] py-4"
        >
          {PRODUCT.BUY_BY_TOC}
        </Button>
      </div>
    </>
  );
};

export default ProductOption;
