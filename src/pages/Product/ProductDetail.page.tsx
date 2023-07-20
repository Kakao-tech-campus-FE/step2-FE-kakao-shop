import GlobalNavbar from "@/components/Navbar/GlobalNavbar.component";
import ProductDetail from "@/components/ProductDetail/ProductDetail.component";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import GlobalLoading from "@/components/common/GlobalLoading.component";
import { getProductDetailById } from "@/remotes/product";

const ProductDetailPage = () => {
  const { productId } = useParams<{ productId: string }>();

  const { isLoading } = useQuery(["product", productId], () =>
    getProductDetailById(Number(productId))
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
