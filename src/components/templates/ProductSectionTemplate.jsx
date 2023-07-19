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
  const [products, setProducts] = useState([]);
  const [isEnd, setIsEnd] = useState(false);
  const [page, setPage] = useState(0);

  const { data, error, loading } = useQuery([page], () => fetchProducts(page));

  useEffect(() => {
    if (data) {
      setProducts((prevProducts) =>
        _.uniqBy([...prevProducts, ...data.data.response], "id")
      );
      setIsEnd(data.data.response.length !== 9);
    }
  }, [data]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isEnd) {
          setPage((prev) => prev + 1);
        }
      },
      { threshold: 1 }
    );

    if (bottomObserver.current) {
      observer.observe(bottomObserver.current);
    }

    return () => {
      if (bottomObserver.current) {
        observer.unobserve(bottomObserver.current);
      }
    };
  }, [bottomObserver, isEnd]);

  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <Container className="product-section flex max-w-none mx-auto w-[1280px] mt-[80px]">
      <ProductGrid products={products} loading={loading} />
      <div ref={bottomObserver} />
    </Container>
  );
};

export default ProductSectionTemplate;
