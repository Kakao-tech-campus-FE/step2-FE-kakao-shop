import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import _ from "lodash";
import Container from "../atoms/Container";
import ProductGrid from "../organisms/ProductGrid";
import { fetchProducts } from "../../api/product";

const ProductSectionTemplate = () => {
  const bottomObserver = useRef(null);

  const { page } = useParams();
  const [pageNumber, setPageNumber] = useState(
    // eslint-disable-next-line no-restricted-globals
    !isNaN(page) ? parseInt(page, 10) : 0
  );

  const [products, setProducts] = useState([]);
  const [isEnd, setIsEnd] = useState(false);

  const { data, error, isLoading } = useQuery([pageNumber], () =>
    fetchProducts(pageNumber)
  );

  useEffect(() => {
    if (data) {
      setProducts((prevProducts) =>
        _.uniqBy([...prevProducts, ...data.data.response], "id")
      );
      setIsEnd(data.data.response.length < 9);
    }
  }, [data]);

  useEffect(() => {
    const options = { threshold: 1 };
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !isEnd) {
        setPageNumber((prev) => prev + 1);
      }
    }, options);

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
      <ProductGrid products={products} loading={isLoading} />
      <div ref={bottomObserver} />
    </Container>
  );
};

export default ProductSectionTemplate;
