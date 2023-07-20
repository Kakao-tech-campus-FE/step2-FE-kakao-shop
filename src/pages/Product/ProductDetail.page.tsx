import GlobalNavbar from "@/components/Navbar/GlobalNavbar.component";
import ProductDetail from "@/components/ProductDetail/ProductDetail.component";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import GlobalLoading from "@/components/common/GlobalLoading.component";
import { getProductDetailById } from "@/remotes/product";

const ProductDetailPage = () => {
  const { productId } = useParams<{ productId: string }>();
  const queryClient = useQueryClient();

  const { isLoading } = useQuery(
    ["product", productId],
    () => getProductDetailById(Number(productId)),
    {
      onSuccess: (data) => {
        queryClient.setQueryData(["product", productId], data);
        if (data.data.response === null) return;
      },
    }
  );

  return (
    <>
      <GlobalLoading isLoading={isLoading} />
      <GlobalNavbar isSmall={true} />
      <div className="px-12 min-w-[1200px]">
        <ProductDetail />
      </div>
    </>
  );
};

export default ProductDetailPage;
