import { useState, useEffect, useRef, Suspense } from "react";
import { useQuery } from "react-query";
import ProductGrid from "../organisms/ProductGrid";
import Loader from "../atoms/Loader";
import { fetchProducts } from "../../services/product";
import { useParams } from "react-router-dom";
import _ from "lodash";

const MainProductTemplate = () => {
  const bottomObserver = useRef(null);

  const { page } = useParams();
  const [pageNumber, setPageNumber] = useState(
    !isNaN(page) ? parseInt(page, 10) : 0
  );

  const [products, setProducts] = useState([]);
  const [isEnd, setIsEnd] = useState(false);

  const { data, error, isLoading } = useQuery(["myData", pageNumber], () =>
    fetchProducts(pageNumber)
  );

  const loadMore = async () => {
    setPageNumber((prev) => prev + 1);
  };

  useEffect(() => {
    if (data) {
      setProducts((prevProducts) =>
        _.uniqBy([...prevProducts, ...data.data.response], "id")
      );
      setIsEnd(data.data.response.length < 9);
    }
  }, [data]);

  useEffect(() => {
    const options = {
      threshold: 1.0,
    };

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !isEnd) {
        loadMore();
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
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="w-full mx-auto px-32 pt-20">
      {isLoading && <Loader />}
      <Suspense fallback={<Loader />}>
        <ProductGrid products={products} loading={isLoading} />
        <div ref={bottomObserver}></div>
      </Suspense>
    </div>
  );
};

export default MainProductTemplate;
