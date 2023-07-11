import { useSelector, useDispatch } from "react-redux";
import Container from "../atoms/Container";
import ProductGrid from "../organisms/ProductGrid";
import { Suspense } from "react";

const MainProductTemplate = () => {
  const [page, setPage] = useState(0);
  const products = useSelector((state) => state.product.products);
  const dispatch = useDispatch();
  const bottomObserver = useRef(null);

  const io = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // 페이지를 증가시키는 액션
          setPage((page) => page + 1);
        }
      });
    },
    {
      threshold: 0.5,
    }
  );

  useEffect(() => {
    dispatch(getProducts(page));
  }, [dispatch, page]);

  return (
    <Container>
      <Suspense fallback={<div>Loading...</div>}>
        <ProductGrid products={products} />
        <div ref={bottomObserver}></div> // 하단이 될 빈 div
      </Suspense>
    </Container>
  );
};

export default MainProductTemplate;
