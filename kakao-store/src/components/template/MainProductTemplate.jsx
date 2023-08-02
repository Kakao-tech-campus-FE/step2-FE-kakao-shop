import { Suspense, useEffect, useState, useRef } from "react";
import Container from "../../components/atoms/Container";
import ProductGrid from "../../components/organisms/ProductGrid";
import SkeletonGrid from "../organisms/SkeletonGrid";
import { useSelector, useDispatch } from "react-redux";
import { getProduct } from "../../store/slices/productSlice";
import { fetchProducts } from "../../services/product";
import Loader from "../../components/atoms/Loader";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

/**
 * 메인 페이지 컴포넌트
 * 상품을 불러오는 컴포넌트
 * @returns {JSX.Element} - 메인 페이지
 */

const MainProductTemplate = () => {
  const [page, setPage] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const bottomObserver = useRef(null);
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products);
  // const [products, setProducts] = useState([]);
  const isEnd = useSelector((state) => state.product.isEnd);
  const { data, status } = useQuery([("products", page)], async () => {
    return await fetchProducts(page);
  });

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        if (entry.isIntersecting && bottomObserver.current && !isEnd) {
          io.unobserve(bottomObserver.current);
          setPage((prev) => prev + 1);
        }
      });
    },
    { threshold: 1 }
  );
  const time = 200;

  useEffect(() => {
    if (data?.data.response.length < 9) {
      io.disconnect(bottomObserver.current);
      setTimeout(() => {
        setIsLoading(false);
      }, time);
    } else {
      io.observe(bottomObserver.current);
    }
  }, [data]);

  useEffect(() => {
    dispatch(getProduct(page));
    setIsLoading(false);
  }, [dispatch, page]);

  return (
    <Container className={"product-section"}>
      <Suspense fallback={<Loader />}>
        {isLoading ? (
          <>
            <Loader />
            <SkeletonGrid products={products} />
          </>
        ) : (
          <ProductGrid products={products} />
        )}
        {status === "error" && <p>에러가 발생했습니다.</p>}
        <div ref={bottomObserver}></div>
      </Suspense>
    </Container>
  );
};

export default MainProductTemplate;
