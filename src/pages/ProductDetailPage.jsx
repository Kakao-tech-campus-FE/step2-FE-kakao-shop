import { useParams } from "react-router-dom";
import Loader from "../components/atoms/Loader";
import { getProductById } from "../services/product";
import { useQuery } from "react-query";
import ProductDetailTemplate from "../components/templates/ProductDetailTemplate";
import ErrorPage from "./ErrorPage";

const ProductDetailPage = () => {
  const { id } = useParams(); //string

  const { data, error, isLoading } = useQuery(`product/${id}`, () =>
    getProductById(id)
  ); //구분자, API 요청 함수
  //console.log(detail.data.response);
  const product = data?.data?.response;
  /*const showLoader = () => {
    loader.show();
  };

  const hideLoader = () => {
    loader.hide();
  };
  useEffect(() => {
    if (!isLoading) hideLoader();
    else showLoader();
  }, [isLoading]);*/
  return (
    <div>
      {isLoading && <Loader />}
      {error && <ErrorPage />}
      {data && <ProductDetailTemplate product={product} />}
    </div>
  );
};
export default ProductDetailPage;
