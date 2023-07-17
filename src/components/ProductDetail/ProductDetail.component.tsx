import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const { productId } = useParams();
  return <div>{productId}</div>;
};

export default ProductDetail;
