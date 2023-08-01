import ProductGrid from "../organisms/ProductGrid";

import "../../styles/templates/mainProductTemplate.css";

import { useEffect, useMemo, useRef, useState } from "react";
import { useInfiniteQuery } from "react-query";

import useProducts from "../../hooks/useProducts";
import { fetchProductsByPage } from "../../services/product";
import ErrorSign from "../atoms/ErrorSign";
import Loader from "../atoms/Loader";

const dummy = {
  data: {
    response: [
      {
        id: -1,
        name: "dummy",
        price: 0,
      },
    ],
  },
};
const MainProductTemplate = ({ children }) => {
  const bottomObserver = useRef(null);
  const { products, addProducts } = useProducts();
  const [throat, setThroat] = useState(false);
  const [isError, setIsError] = useState(false);
  const [errorCode, setErrorCode] = useState(0);

  const { isLoading, fetchNextPage } = useInfiniteQuery(
    "products",
    async ({ pageParam = 0 }) => {
      return fetchProductsByPage(pageParam)
        .then((res) => {
          return res;
        })
        .catch((err) => {
          console.log("err", err);
          setIsError(true);
          setErrorCode(err.response.status);
          console.log("err.response.status", err.response.status);
          return dummy;
        });
    },
    {
      getNextPageParam: (lastPage, pages) => {
        if (lastPage?.data.response.length < 9) {
          return undefined;
        } else {
          return pages?.length;
        }
      },
    },
  );

  const io = useMemo(() => {
    return new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (!throat) {
            setThroat(true);
            fetchNextPage()
              .then((res) => {
                addProducts(
                  res.data.pages.flatMap((page) => page.data.response),
                );
              })
              .catch((err) => {})
              .finally(() => {
                setThroat(false);
              });
          }
        }
      },
      {
        root: null,
        threshold: 1,
        rootMargin: "80px",
      },
    );
  }, [throat, fetchNextPage, addProducts]);

  useEffect(() => {
    if (bottomObserver.current) {
      io.observe(bottomObserver.current);
    }
  }, [io]);

  return (
    <div className="main-product-template">
      {!isError && <ProductGrid products={products} isLoading={isLoading} />}
      {isLoading && <Loader />}
      {isError && <ErrorSign error={errorCode} />}
      {!throat && <div className="bottom-observer" ref={bottomObserver}></div>}
    </div>
  );
};

export default MainProductTemplate;
