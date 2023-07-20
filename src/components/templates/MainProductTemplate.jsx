import Container from "../atoms/Container";
import ProductGrid from "../organisms/ProductGrid";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState, useRef, useMemo } from "react";
import { getProducts } from "../../store/slices/productSlice";
import Carousel from "../molecules/Carousel";
import CardSkeleton from "../atoms/CardSkeleton";
import { loader } from "react-global-loader";

const MainProductTemplate = () => {
  const [page, setPage] = useState(0);
  const bottomObserver = useRef(null);
  const dispatch = useDispatch();
  const { products, loading, isEnd } = useSelector((state) => state.product);

  const io = useMemo(
    () =>
      new IntersectionObserver(
        (entries, observer) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setPage((page) => page + 1);
            }
          });
        },
        {
          threshold: 1,
        }
      ),
    []
  );

  const showLoader = () => {
    loader.show();
  };

  const hideLoader = () => {
    loader.hide();
  };

  useEffect(() => {
    io.observer(bottomObserver.current);
  }, [io]);

  useEffect(() => {
    if (!isEnd) dispatch(getProducts(page));
  }, [dispatch, page, isEnd]);

  useEffect(() => {
    if (!loading) hideLoader();
    else showLoader();
  }, [loading]);

  return (
    <Container>
      <Carousel />
      {loading && <CardSkeleton arr={new Array(8).fill(1)} />}
      {products && <ProductGrid products={products} />}
      <div ref={bottomObserver}></div>
    </Container>
  );
};

export default MainProductTemplate;
