import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getProductById } from "../services/product";

const ProductDetailPage = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const { data, error, isLoading } = useSWR(`/product/${id}`, getProductById);

    useEffect(() => {
        dispatch(getDetail(id));
    }, [dispatch, id]);

    const parsedId = parseInt(id, 10);
    return (
        <div>
            <h1>Product Detail Page</h1>
        </div>
    );
};
