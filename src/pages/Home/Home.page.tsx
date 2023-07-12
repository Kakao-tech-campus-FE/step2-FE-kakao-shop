import GlobalNavbar from "@/components/Navbar/GlobalNavbar.component";
import ProductGroup from "@/components/Product/ProductGroup.component";

const HomePage = () => {
  return (
    <div className="m-auto max-w-6xl">
      <GlobalNavbar />
      <ProductGroup />
    </div>
  );
};

export default HomePage;
