import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import Loader from "../components/atoms/Loader";
import ProductCard from "../components/molecules/ProductCard";
import { getProductList } from "../services/product";
import { setPage } from "../store/slices/productSlice";

const HomePage = () => {
    const dispatch = useDispatch();
    const { page } = useParams();

    const { data: productList, isLoading, error } = useQuery(
        ["productList", page],
        () => getProductList(page),
        { keepPreviousData: true }
    );

    useEffect(() => {
        dispatch(setPage(Number(page)));
    }, [dispatch, page]);

    return (
        <div>
            <h1>Home Page</h1>
            {isLoading ? (
                <Loader />
            ) : error ? (
                <div>Error: {error.message}</div>
            ) : (
                <div className="product-grid">
                    {productList.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default HomePage;
