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

    const { data: productList, isLoading, error, isFetching } = useQuery(
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
            {isFetching && <Loader />} {/* 글로벌 로더 적용 */}
            <div className="product-grid">
                {productList.pages.map((page) =>
                    page.data.map((product) => (
                        <ProductCard
                            key={product.id}
                            product={product}
                            isLoading={isLoading}
                        />
                    ))
                )}
            </div>
            {error && <div>Error: {error.message}</div>}
        </div>
    );
};

export default HomePage;
