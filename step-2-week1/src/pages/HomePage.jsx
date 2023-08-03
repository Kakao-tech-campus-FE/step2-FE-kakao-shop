import ProductGrid from "../component/organisms/ProductGrid";
import { useQuery } from "react-query";
import { fetchProducts } from "../services/product";
import Loader from "../component/atoms/Loader";

const HomePage = () => {
  const { data: products, isLoading } = useQuery(["products"], fetchProducts, {
    onError: (error) => {
      console.log(error);
    },
  });


  return (
    <div>
      <h1>Home Page</h1>
        {isLoading ? ( <Loader /> ) : ( <ProductGrid productsData={products} /> )}
    </div> 
    );

  };


export default HomePage;