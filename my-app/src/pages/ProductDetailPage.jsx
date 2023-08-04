import { useNavigate, useParams } from "react-router-dom";
import Loader from "../components/atoms/Loader";
import { getProductById } from "../services/product";
import { useQuery } from "react-query";
import ProductDetailTemplate from "../components/templates/ProductDetailTemplate";
import Container from "../components/atoms/Container";

const staticServerUri = process.env.REACT_APP_PATH || "";

const ProductDetailPage = () => {
  const { id } = useParams();
  const { data, error, isLoading } = useQuery(`/product/${id}`, () =>
    getProductById(id)
  );
  const product = data?.data?.response;
  const navigate = useNavigate();

  const RenderPage = ({ error, product }) => {
    if (error) {
      // id - status / message - error message
      const id = error.response.data.error.status;
      const errorMessage = error.response.data.error.message;
      navigate(staticServerUri + `/error/${id}/${errorMessage}`);
    }
    if (product) {
      return <ProductDetailTemplate product={product} />;
    }
  };

  return (
    <Container className="mx-auto my-4">
      {isLoading && <Loader />}
      <RenderPage error={error} product={product} />
    </Container>
  );
};

export default ProductDetailPage;
