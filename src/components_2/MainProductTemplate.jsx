import Container from "./atoms/Container";
import { useSelector, useDispatch } from "react-redux";
import ProductGrid from "./organisms/ProductGrid";
import { Suspense, useEffect } from "react";
import { getProducts } from "../../store/modules/products";

const MainProductTemplate = () => {
  const [page, setPage] = useState(0);
  const dispatch = useDispatch();
  const product = useSelector((state) => state.products);
  const loading = useSelector((state) => state.loading);
  const error = useSelector((state) => state.error);
  const bottomObserver = useRef(null);
  const isEnd = useSelector((state) => state.isEnd);

  const io = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !isEnd) {
          setPage((Page) => Page + 1);
        }
      });
    },
    {
      threshold: 1,
    }
  );

  useEffect(() => {
    if (loading === false && pape !== 0) {
      io.observe(bottomObserver.current);
    }
  }, [loading, pape]);

  useEffect(() => {
    dispatch(getProducts(page));
  }, [dispatch, page]);

  return (
    <Container>
      {/* <Suspense fallback={<div>Loading...</div>}> */}
      <ProductGrid product={product} />
      <div ref={bottomObserver}></div>
      {/* </Suspense> */}
    </Container>
  );
};

export default MainProductTemplate;
