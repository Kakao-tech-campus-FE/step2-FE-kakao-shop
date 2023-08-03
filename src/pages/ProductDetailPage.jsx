import { useNavigate, useParams } from "react-router-dom";
import { getDetail } from "../store/slices/detailSlice";
import Loader from "../components/atoms/Loader";
import { useQuery } from "react-query";
import { getProductById } from "../services/product";
import ProductDetailTemplate from "../components/templates/ProductDetailTemplate";

const staticServerUrl = process.env.REACT_APP_PATH || "";

const ProductDetailPage = () => {
  const { id } = useParams(); //Params로 받은 값은 언제나 string
  const navigate = useNavigate();
  const { data, error, isLoading } = useQuery(`product/${id}`, () =>
    getProductById(id)
  );

  const product = data?.data?.response;

  // product에 우리가 원하는 데이터가 정확히 존재하는지?
  // 검증함수: data 정확히 들어왔는지 체크, validate function
  const validate = () => {
    if (!product) {
      return false;
    }
    const requiredKeys = ["id", "productName"];

    const keys = Object.keys(product);
    for (let i = 0; i < requiredKeys.length; i++) {
      const requiredKeys = requiredKeys[i];
      if (!keys.includes(requiredKeys)) {
        alert(`product 객체에 ${requiredKeys}가 존재하지 않습니다!`);
        return false;
      }
    }
    return true;
  };

  const handleOnError = (error) => {
    console.error("Error occurred:", error);
    navigate(staticServerUrl + "/error"); // 404 페이지로 이동합니다.
  };

  return (
    <div className="product-detail-page">
      {isLoading && <Loader />}
      {error && handleOnError}
      {product && <ProductDetailTemplate product={product} />}
      {/* ?사용하면 해당 객체 안에 값이 존재하면 접근하고, 안하면 처리를 해주는 표기법 => ? */}
    </div>
  );
};
export default ProductDetailPage;
