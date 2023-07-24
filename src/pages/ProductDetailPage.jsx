import { useParams } from "react-router"
import { useQuery } from "react-query";
import { getProductById } from "../services/product";
import Loader from "../components/atoms/Loader";
import ProductDetailTemplate from "../components/templates/ProductDetailTemplate";

const ProductDetailPage = () => {
    const { id } = useParams();
    const { data, error, isLoading } = useQuery(`product`, () => getProductById(id));    

    if(isLoading) return <Loader />
    if(error) return <div>{error.message}</div>

    return (
        <div className="flex w-[1280px] mx-auto">
            <ProductDetailTemplate product={data?.data?.response}/>
        </div>
    );
}

export default ProductDetailPage;