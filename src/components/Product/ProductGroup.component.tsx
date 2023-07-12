import { Product } from "@/dtos/product.dto";
import ProductCard from "./ProductCard.component";
import { commonAxios } from "@/functions/axios";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

const ProductGroup = () => {
  const [pageIndex, setPageIndex] = useState(0);

  const getProducts = () =>
    commonAxios
      .get(`/products?page=${pageIndex}`)
      .then((res) => res.data.response);

  const { data, isLoading } = useQuery<Product[]>({
    queryKey: ["products"],
    queryFn: () => getProducts(),
    keepPreviousData: true,
    suspense: true,
  });

  if (isLoading || !data) {
    return <></>;
  }

  return (
    <div className="grid grid-cols-4 gap-6">
      {data.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductGroup;
