import GlobalNavbar from "@/components/Navbar/GlobalNavbar.component";
import ProductDetail from "@/components/ProductDetail/ProductDetail.component";

const ProductDetailPage = () => {
  return (
    <>
      <GlobalNavbar isSmall={true} />
      <div className="px-12 min-w-[1200px]">
        <ProductDetail />
      </div>
    </>
  );
};

export default ProductDetailPage;
