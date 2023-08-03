import Container from "../../components/atoms/Container";
import { Suspense, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../store/slices/productSlice";
import ProductGrid from "../organisms/ProductGrid";
import Loader from "../atoms/Loader";
import { fetchProducts } from "../../services/product";
import { useQuery } from "react-query";

const MainProductTemplate = () => {
  const [page, setPage] = useState(0);
  const bottomObserver = useRef(null);
  const dispatch = useDispatch();
  const { isLoading } = useQuery("products", () => fetchProducts());
  const products = useSelector((state) => state.product.products);
  const isEnd = useSelector((state) => state.product.isEnd);

  const io = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        if (entry.isIntersecting && isEnd) {
          setPage((page) => page + 1);
        }
      });
    },
    {
      threshold: 0.5,
    }
  );

  useEffect(() => {
    io.observe(bottomObserver.current);
  }, []);

  useEffect(() => {
    dispatch(getProducts(page));
  }, [dispatch, page]);

  return (
    <Suspense fallback={<Loader />}>
      <Container className="bg-[#fafafa]">
        <ProductGrid products={products} isLoading={isLoading} />
        <div ref={bottomObserver}></div>
        {isLoading && <Loader />}
      </Container>
    </Suspense>
  );
};

export default MainProductTemplate;
