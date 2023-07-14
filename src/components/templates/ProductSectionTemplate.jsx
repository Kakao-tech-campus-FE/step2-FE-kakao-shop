import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef, useState } from "react";
import Container from "../atoms/Container";
import ProductGrid from "../organisms/ProductGrid";
import { getProducts } from "../../store/slices/productsSlice";

const ProductSectionTemplate = () => {
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector((state) => state?.products);
  const [page, setPage] = useState(0);
  const bottomObserver = useRef(null);
  const prevPage = useRef(null);
  const isEnd = useSelector((state) => state.products.isEnd);

  const io = new IntersectionObserver(
    // eslint-disable-next-line no-unused-vars
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        if (!loading && entry.isIntersecting && bottomObserver.current) {
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

  return (
    <Container className="product-section flex max-w-none mx-auto w-[1280px] mt-[80px]">
      {loading && <p>Loading...</p>}
      {error && <p>Error</p>}
      <ProductGrid products={products} />
      <div ref={bottomObserver} />
    </Container>
  );
};

export default ProductSectionTemplate;
