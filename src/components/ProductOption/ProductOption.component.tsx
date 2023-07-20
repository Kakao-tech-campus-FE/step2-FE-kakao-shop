import ProductOptionSelector from "@/components/ProductOption/ProductOptionSelector/ProductOptionSelector.component";
import ProductOptionOrderResult from "@/components/ProductOption/ProductOptionOrderResult/ProductOptionOrderResult.component";
import { Link } from "react-router-dom";
import Button from "../common/Button.component";
import { useAppSelector } from "@/hooks/useRedux";
import { addProductToCart } from "@/remotes/product";
import { PRODUCT } from "@/assets/product.ko";
import { ERROR } from "@/assets/error.ko";

const ProductOption = () => {
  const { order } = useAppSelector((state) => state.productSlice);

  const onAddCart = () => {
    if (order.length === 0) {
      return alert(ERROR.CHECK_OPTION);
    }

    const orderForCart = order.map((item) => {
      return { optionId: item.id, quantity: item.count };
    });
    addProductToCart(orderForCart);
  };

  return (
    <>
      <ProductOptionSelector />
      <ProductOptionOrderResult />
      <div className="flex gap-2">
        <Button
          color="dark"
          className="text-center rounded-lg flex-1 py-4"
          onClick={onAddCart}
        >
          {PRODUCT.ADD_CART}
        </Button>
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
