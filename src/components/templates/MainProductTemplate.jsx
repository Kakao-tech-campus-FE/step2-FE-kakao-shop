import Container from "../atoms/Container";
import ProductGrid from "../organisms/ProductGrid";
import { useEffect, useState, useRef } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchProducts } from "../../apis/product";

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
      cacheTime: 0,
      onSuccess: (data) => {
        setProducts((prev) => [...prev, ...data.data.response]);
      },
    }
  );

  useEffect(() => {
    if (data?.data.response.length < 9) {
      observer.disconnect(targetRef.current);
    } else {
      observer.observe(targetRef.current);
    }
  }, [data]);

  if (isError) {
    console.log("error");
    return <div>Error: {error.message}</div>;
  }

  return (
    <Container>
      <ProductGrid products={products} />
      <div ref={targetRef}>관측지</div>
    </Container>
  );
};

export default MainProductTemplate;
