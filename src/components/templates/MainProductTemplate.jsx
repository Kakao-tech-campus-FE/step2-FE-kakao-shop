import Container from "../atoms/Container";
import ProductGrid from "../organisms/ProductGrid";
import { useEffect, useState, useRef } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchProducts } from "../../apis/product";
import Loader from "../atoms/Loader";

const MainProductTemplate = () => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(0);
  const targetRef = useRef(null);

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }
        if (entry.isIntersecting && targetRef.current && !isLoading) {
          console.log("관측!!!");
          setPage((prev) => prev + 1);
        }
      });
    },
    {
      threshold: 1,
    }
  );

  const { isLoading, data, isError, error } = useQuery(
    ["products", page],
    async () => {
      return await fetchProducts(page);
    },
    {
      staleTime: 600000,
      cacheTime: 600000,
      onSuccess: (data) => {
        setProducts((prev) => [
          ...prev.slice(0, prev.length - 9),
          ...data.data.response,
        ]);
      },
    }
  );

  useEffect(() => {
    if (data?.data.response.length < 9) {
      observer.unobserve(targetRef.current);
    } else {
      observer.observe(targetRef.current);
    }
    return () => {
      if (targetRef.current) {
        observer.unobserve(targetRef.current);
      }
    };
  }, [data]);

  useEffect(() => {
    if (isLoading && page !== 0) {
      setProducts((prev) => [...prev, ...Array(9).fill("skeleton")]);
    }
  }, [isLoading, page]);

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <Container>
      <ProductGrid products={products} />
      <div ref={targetRef}></div>
    </Container>
  );
};

export default MainProductTemplate;
