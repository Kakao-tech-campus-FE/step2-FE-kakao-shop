import { useEffect, useRef, useState } from "react";
import { useQuery } from "react-query";
import _ from "lodash";
import Container from "../atoms/Container";
import ProductGrid from "../organisms/ProductGrid";
import { fetchProducts } from "../../api/product";

/** 상품 목록 템플릿
 *
 * @return {JSX.Element}
 */
const ProductSectionTemplate = () => {
  const bottomObserver = useRef(null);
  const isFirstLoad = useRef(true);
  const [products, setProducts] = useState([]);
  const [isEnd, setIsEnd] = useState(false);
  const [page, setPage] = useState(0);

  const { data, error, isLoading } = useQuery([page], () =>
    fetchProducts(page)
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isEnd) {
            // eslint-disable-next-line no-shadow
            setPage((page) => page + 1);
          }
        });
      },
      { root: null, threshold: 1 }
    );
    const currentObserver = bottomObserver.current;
    if (currentObserver && !isFirstLoad.current && !isLoading) {
      observer.observe(bottomObserver.current);
    }

    return () => {
      // eslint-disable-next-line no-shadow
      const currentObserver = bottomObserver.current;
      if (currentObserver) observer.unobserve(currentObserver);
    };
  }, [isLoading, isEnd]);

  useEffect(() => {
    if (!isLoading && data) {
      setProducts(_.uniqBy([...products, ...data.data.response], "id"));
      if (data?.data?.response?.length < 9) setIsEnd(() => true);
    }
  }, [data, isLoading]);

  useEffect(() => {
    isFirstLoad.current = false;
  }, []);

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
