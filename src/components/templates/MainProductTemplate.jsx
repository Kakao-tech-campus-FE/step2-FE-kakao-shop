import { useDispatch, useSelector } from "react-redux";
import Container from "../atoms/Container";
import ProductGrid from "../organisms/ProductGrid";
import { getProducts } from "../../store/slices/productSlice";
import { useEffect, useRef, useState } from "react";
import Loader from "../atoms/Loader";
import { useQuery } from "react-query";
import { fetchProducts } from "../../services/product";

const MainProductTemplate = () => {
  const [page, setPage] = useState(0);
  const bottomObserver = useRef(null);
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products);
  const loading = useSelector((state) => state.product.loading);
  const error = useSelector((state) => state.product.error);
  const isEnd = useSelector((state) => state.product.isEnd);

  // const { data, error, isError, isLoading } = useQuery(`/products?page=${page}`, () =>
  //   fetchProducts(page)
  // );

  const io = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !isEnd) {
          setPage((page) => page + 1);
        }
      });
    },
    {
      threshold: 0.1,
    }
  );

  useEffect(() => {
    if (!loading && page === 0) {
      io.observe(bottomObserver.current);
    }
  }, [loading]);

  useEffect(() => {
    dispatch(getProducts(page));
  }, [dispatch, page]);

  return (
    <Container>
      {loading ? (
        <Loader />
      ) : (
        <ProductGrid products={products} loading={loading} />
      )}
      <div ref={bottomObserver}></div>
    </Container>
  );
};

export default MainProductTemplate;
