import GlobalNavbar from "@/components/Navbar/GlobalNavbar.component";
import ProductGroup from "@/components/Product/ProductGroup.component";
import { Product } from "@/dtos/product.dto";
import { commonAxios } from "@/functions/axios";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";

const HomePage = () => {
  const { data, isLoading, isError, error } = useQuery<Product[]>({
    queryKey: ["products"],
    queryFn: () =>
      commonAxios.get("/products").then((res) => res.data.response),
  });

  return (
    <div className="m-auto max-w-7xl">
      <GlobalNavbar />
      <ProductGroup products={data} />
    </div>
  );
};

export default HomePage;
