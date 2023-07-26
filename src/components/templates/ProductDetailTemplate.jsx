import ProductInformationColumn from "../molecules/ProductInformationColumn";
import OptionColumn from "../molecules/OptionColumn";
import { ToastContainer } from "react-toastify";

const ProductDetailTemplate = ({ product }) => {
  return (
    <>
      <div className="flex">
        <ProductInformationColumn product={product} />
        <OptionColumn product={product} />
      </div>
      <ToastContainer
        position="bottom-center"
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
};

export default ProductDetailTemplate;
