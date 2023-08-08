import { useState, useRef, useEffect, useMemo } from "react";
import Container from "../atoms/Container";
import ProductGrid from "../organisms/ProductGrid";
import { fetchProducts } from "../../services/product";
import { useQuery } from "react-query";
import Loader from "../atoms/Loader";
import "../../styles/templates/MainProductTemplate.css";
import { union } from "lodash";
import { handleAPIError, useAxiosInterceptor } from "../../services/errorcatch";

/*
MainProductTemplate
|_page
|_isEnd
|_allProduct
|_bottomObserver
|_data
  |_products
  |_isLoading
  |_isFetched


|_setAllProduct 
|_setIsEnd
|_io
  |_IntersectionObserver

return 
|_div
  |_Container
    |_Loader(is Loading)
    |_ProductGrid
    |_div(bottomObserver)
*/


const MainProductTemplate = () => {
  const [page, setPage] = useState(0);
  const [isEnd, setIsEnd] = useState(false);
  const [allProduct, setAllProduct] = useState([]);
  const bottomObserver = useRef(null);

  // using interceptor
  useAxiosInterceptor();

  //Query data with 'usequery'
  //Error data catching
  const {
    data: products,
    isLoading,
    isError,
    isFetching,
    isFetched,
  } = useQuery([`products/${page}`], () => fetchProducts(page), {
    onError: handleAPIError,
    throwOnError: true,
  });

  // Merge existing query and new query list
  useEffect(() => {
    setAllProduct((prevProducts) =>
      union(prevProducts, products?.data.response)
    );
  }, [products]);

  // define end of infinite scroll(setIsEnd)
  useEffect(() => {
    if (products?.data.response.length < 9) {
      setIsEnd(true);
    } else {
      setIsEnd(false);
    }
  }, [isFetched, products?.data.response.length]);

  // page+=1 if bottomobserver 100% visible
  const io = useMemo(() => {
    return new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isEnd && !isLoading) {
            setPage((page) => page + 1);
          }
        });
      },
      { threshold: 1 }
    );
  }, [isEnd, isLoading, page]);

  useEffect(() => {
    if (bottomObserver.current) {
      io.observe(bottomObserver.current);
    }
    return () => {
      io.disconnect();
    };
  }, [io]);

  //layout
  return (
    <div className="layout_splits">
      <Container className="main_sections">
        {isLoading ? (
          <Loader />
        ) : (
          <ProductGrid products={allProduct} isLoading={isLoading} />
        )}
        <div ref={bottomObserver}></div>
      </Container>
    </div>
  );
};

export default MainProductTemplate;
