import { useParams } from "react-router-dom";
import Loader from "../components/atoms/Loader";
import { useQuery } from "react-query";
import { getProductById } from "../services/product";

const ProductDetailPage = () => {
  const { id } = useParams();
  const { data, error, isLoading } = useQuery(`product/${id}`, () =>
    getProductById(id)
  );

  // const testFetchProducts = async () => {
  //   try {
  //     const response = await getProductById(id);
  //     console.log(response);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  // testFetchProducts();

  console.log(typeof id);

  return (
    <div className="pt-40">
      {/* {isLoading && <Loader />} */}
      {!isLoading && <Loader />}
      {error && <div>{error.message}</div>}
      {data && <div>{data["data"].response.productName}</div>}
    </div>
  );
};

export default ProductDetailPage;
