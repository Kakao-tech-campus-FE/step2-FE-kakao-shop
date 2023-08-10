import { useEffect, useMemo, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { useInfiniteQuery } from "react-query";
import _ from "lodash";
import Container from "../atoms/Container";
import ProductGrid from "../organisms/ProductGrid";
import { fetchProducts } from "../../api/product";
import SideSection from "../organisms/SideSection";

/** 상품 목록 템플릿
 *
 * @return {JSX.Element}
 */
const ProductSectionTemplate = () => {
  const bottomObserver = useRef(null);
  const { page } = useParams();

  const [products, setProducts] = useState([]);
  const [isEnd, setIsEnd] = useState(false);
  const pageNumber = useMemo(
    // eslint-disable-next-line no-restricted-globals
    () => (!isNaN(page) ? parseInt(page, 10) : 0),
    [page]
  );

  const { data, error, isLoading, fetchNextPage, hasNextPage } =
    useInfiniteQuery("main", ({ pageParam = 0 }) => fetchProducts(pageParam), {
      getNextPageParam: (lastPage) => {
        return lastPage.data.response.length === 9 ? pageNumber + 1 : null;
      },
    });

  useEffect(() => {
    if (data) {
      // eslint-disable-next-line no-shadow
      const newProducts = data.pages.flatMap((page) => page.data.response);
      setProducts((prevProducts) =>
        _.uniqBy([...prevProducts, ...newProducts], "id")
      );
      setIsEnd(!hasNextPage);
    }
  }, [data, hasNextPage]);

  useEffect(() => {
    const options = {
      threshold: 1.0,
    };
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !isEnd) {
        fetchNextPage();
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
  }, [bottomObserver, fetchNextPage, isEnd]);

  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <>
      <Container className="product-section flex max-w-none mx-auto w-[1280px]">
        <div className="w-[892px]">
          <ProductGrid products={products} loading={isLoading} />
        </div>
        <div className="w-[388px]">
          <SideSection />
        </div>
      </Container>
      <div ref={bottomObserver} />
    </>
  );
};

export default ProductSectionTemplate;
