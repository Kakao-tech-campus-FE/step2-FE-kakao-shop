import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { useQuery } from "react-query";
import Loader from "../components/atoms/Loader";
import ProductCard from "../components/molecules/ProductCard";
import { getProductList } from "../services/product";
import { setPage } from "../store/slices/productSlice";
import "../styles/Pages/HomePage.css"

const HomePage = () => {
    const dispatch = useDispatch();
    const { page } = useParams();

    const navigate = useNavigate();

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
                            onClick={() => navigate(`/product/${product.id}`)} // onClick 핸들러를 추가합니다
                        />
                    ))
                )}
            </div>
            {error && <div>Error: {error.message}</div>}
        </div>
    );
};

export default HomePage;
