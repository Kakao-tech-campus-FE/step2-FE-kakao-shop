import { useParams } from "react-router-dom";
import Loader from "../components/atoms/Loader";
import { getProductById } from "../services/product";
import Container from "../components/atoms/Container";
import { useQuery } from "react-query";
import ProductDetailTemplate from "../components/templates/ProductDetailTemplate";

/*
ProductDetailPage
|_id
|_data
|_error
|_isLoading
|_product
|_requiredKeys
|_keys

  return
  |_div
    |_Loader(isLoading)
    |_div (error message)
    |_ProductDetailTemplate

*/


const ProductDetailPage = () => {
  const { id } = useParams(); //string,
  const { data, error, isLoading } = useQuery(
    `product/${id}`,
    () => getProductById(id) // id parameter to get product data
  );

  const product = data?.data?.response;
  const validate = () => {
    if (!product) {
      // product object validiate
      return false;
    }

    const requiredKeys = ["id", "productName"]; // necessary keys
    const keys = Object.keys(product); //Object.prototype.methods
    // iterate `requiredKeys` array
    for (let i = 0; i < requiredKeys.length; i++) {
      const requiredKeys = requiredKeys[i];
      if (!keys.includes(requiredKeys)) {
        alert(`product 객체에 ${requiredKeys}가 존재하지 않습니다.}`);
        return false;
      }
    }
  };

  return (
    <div className="mt-10">
      {isLoading && <Loader />}
      {error && <div>{error.message}</div>}
      {product && <ProductDetailTemplate product={product} />}
    </div>
  );
};

export default ProductDetailPage;
