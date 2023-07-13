import { useParams } from "react-router-dom";
import Loader from "../components/atoms/Loader";
import { useQuery } from "react-query";
import { getProductById } from "../services/product";

const ProductDetailPage = () => {
  const { id } = useParams();
  const { data, error, isLoading } = useQuery(`product/${id}`, () =>
    getProductById(id)
  );

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="pt-40">
      {error && <div>{error.message}</div>}
      {data && <div>{data.data.response.productName}</div>}
    </div>
  );
};

export default ProductDetailPage;
