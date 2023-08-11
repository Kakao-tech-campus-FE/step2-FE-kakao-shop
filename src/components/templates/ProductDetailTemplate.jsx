import Container from "../atoms/Container";
import ProductInformationColumn from "../molecules/ProductInformationColumn";
import OptionColumn from "../molecules/OptionColumn";
import { ToastContainer } from "react-toastify";

const ProductDetailTemplate = ({ product }) => {
  return (
    <>
      <Container className="flex">
        <ProductInformationColumn product={product}/>
        <OptionColumn product={product}/>
      </Container>
      <ToastContainer
        position="botton-center"
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  )
}

export default ProductDetailTemplate;