import GlobalNavbar from "@/components/Navbar/GlobalNavbar.component";
import ProductDetail from "@/components/ProductDetail/ProductDetail.component";

const ProductDetailPage = () => {
  return (
    <>
      <GlobalNavbar isSmall={true} />
      <ProductDetail />
    </>
  );
};

export default ProductDetailPage;
