import { useParams } from "react-router";
import { getProductById } from "../services/product";
import { useQuery } from "react-query";
import ProductInformationColumn from "../components/molecules/ProductInformationColumn";
import OptionColumn from "../components/molecules/OptionColumn";
import Loader from "../components/atoms/Loader";

const ProductDetailPage = () => {
    const { id } = useParams(); 
    const { data, isError, isLoading} = useQuery("product", () => getProductById(id));

  if(isLoading) {
    return (
      <Loader />
    )
  } else if(isError) {
    return (
      console.error("error")
    )
  }

    const product = data.data.response; 

    return (
        <div className="flex justify-around h-280">
        <ProductInformationColumn product={product}/>
        <div className="h-full border-l"/>
        <OptionColumn product={product}/>
      </div>

    );
};

export default ProductDetailPage;