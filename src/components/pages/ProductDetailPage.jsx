import {useParams} from "react-router-dom";
import Loader from "../atoms/Loader";
import {getProductById} from "../../services/product";
import {useQuery} from "react-query";
const ProductDetailPage = () => {
    const id= useParams().id;
    const {isLoading, error, data} = useQuery(`product${id}`, () => getProductById(id));

    if (isLoading) return <Loader/>
    if (error) return <div className={"error-msg"}>{error.message}</div>
    if (data) return (
        <div>
            <button onClick={ () => {
                console.log("data.response", data.data.response)
                console.log("error", error)
                console.log("loading", isLoading)
            }
            }>
                info
            </button>
        </div>
    )
}

export default ProductDetailPage;