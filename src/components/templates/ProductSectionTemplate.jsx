import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Container from "../atoms/Container";
import ProductGrid from "../organisms/ProductGrid";
import { getProducts } from "../../store/slices/productsSlice";

/** 상품 목록 템플릿
 *
 * @return {JSX.Element}
 */
const ProductSectionTemplate = () => {
  const dispatch = useDispatch();
  const { products, isLoading, error } = useSelector(
    (state) => state?.products
  );
  const [page, setPage] = useState(0);
  const bottomObserver = useRef(null);
  const prevPage = useRef(null);
  const isEnd = useSelector((state) => state.products.isEnd);

  const io = new IntersectionObserver(
    // eslint-disable-next-line no-unused-vars
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        if (!isLoading && entry.isIntersecting && bottomObserver.current) {
          // eslint-disable-next-line no-shadow
          setPage((page) => page + 1);
        }
      });
    },
    { threshold: 1 }
  );

  useEffect(() => {
    io.observe(bottomObserver.current);
  }, []);

  useEffect(() => {
    if (prevPage.current === page || isEnd) return;
    dispatch(getProducts(page));
    prevPage.current = page;
  }, [dispatch, page]);

  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <Container className="product-section flex max-w-none mx-auto w-[1280px] mt-[80px]">
      <ProductGrid products={products} loading={isLoading} />
      <div ref={bottomObserver} />
    </Container>
  );
};

export default ProductSectionTemplate;
