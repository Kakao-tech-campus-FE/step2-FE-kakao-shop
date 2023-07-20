import { useSelector, useDispatch } from "react-redux";
import Container from "../atoms/Container";
import ProductGrid from "../organisms/ProductGrid";
import { Suspense } from "react";
import { useEffect, useRef, useState } from "react";
import { getProducts } from "../../redux/product/productSlice";
import Loader from "../atoms/Loader";

const MainProductTemplate = () => {
  const [page, setPage] = useState(0);

  const products = useSelector((state) => state.product.products);
  const loading = useSelector((state) => state.product.loading);
  const error = useSelector((state) => state.product.error);
  const isEnd = useSelector((state) => state.product.isEnd);

  const dispatch = useDispatch();
  const bottomObserver = useRef(null);

  const io = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (
          !loading &&
          entry.isIntersecting &&
          bottomObserver.current &&
          !isEnd
        ) {
          setPage(page + 1);
        }
      });
    },
    {
      threshold: 1,
    }
  );

  useEffect(() => {
    io.observe(bottomObserver.current);
  }, []);

  useEffect(() => {
    dispatch(getProducts(page));
  }, [dispatch, page]);

  return (
    <Container className="whitespace-break-spaces mx-auto w-5/6">
      <Suspense fallback={<Loader />}>
        <ProductGrid products={products} isLoading={loading} />
        <div ref={bottomObserver}></div>
      </Suspense>
    </Container>
  );
};

export default MainProductTemplate;
