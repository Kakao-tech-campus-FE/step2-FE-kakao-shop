import ProductGrid from "../organisms/ProductGrid";

import { useEffect, useMemo, useRef, useState } from "react";
import { useInfiniteQuery } from "react-query";

import useProducts from "../../hooks/useProducts";
import { fetchProductsByPage } from "../../services/product";
import ErrorSign from "../atoms/ErrorSign";
import Loader from "../atoms/Loader";
import Carousel from "../molecules/Carousel";

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

const IMAGES = [
  "/images/carousel/carouselItem1.jpeg",
  "/images/carousel/carouselitem2.jpeg",
  "/images/carousel/carouselitem3.jpeg",
];

const MainProductTemplate = ({ children }) => {
  const bottomObserver = useRef(null);
  const { products, addProducts } = useProducts();
  const [throat, setThroat] = useState(false);
  const [isError, setIsError] = useState(false);
  const [errorInfo, setErrorInfo] = useState(0);

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
          setErrorInfo(err.response);
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
    <div className="main-product-template flex max-w-[1380px] flex-col items-center justify-center gap-4">
      <Carousel images={IMAGES} />
      {!isError && <ProductGrid products={products} isLoading={isLoading} />}
      {isLoading && <Loader />}
      {isError && <ErrorSign error={errorInfo} />}
      {!throat && <div className="bottom-observer" ref={bottomObserver}></div>}
    </div>
  );
};

export default MainProductTemplate;
