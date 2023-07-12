import { useState, useEffect, useRef } from "react";
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

  const { data, isLoading, isError, isFetching } = useQuery(
    ["myData", pageNumber],
    () => fetchProducts(pageNumber)
  );

  const loadMore = async () => {
    setPageNumber((prev) => prev + 1);
  };

  useEffect(() => {
    if (data) {
      setProducts((prevProducts) =>
        _.uniqBy([...prevProducts, ...data.data.response], "id")
      );
      setIsEnd(data.data.response.length < 10);
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

  if (isLoading || isFetching) {
    return <Loader />;
  }

  if (isError) {
    return <div>Error: Failed to fetch data</div>;
  }

  return (
    <div className="w-full mx-auto px-20 pt-20">
      <ProductGrid products={products} />
      <div ref={bottomObserver}></div>
    </div>
  );
};

export default MainProductTemplate;
