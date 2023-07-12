import GlobalNavbar from "@/components/Navbar/GlobalNavbar.component";
import ProductGroup from "@/components/Product/ProductGroup.component";
import SkeletonLoading from "@/components/common/SkeletonLoading.component";
import { Suspense } from "react";

const HomePage = () => {
  return (
    <div className="m-auto max-w-6xl">
      <GlobalNavbar />
      <Suspense fallback={<SkeletonLoading />}>
        <ProductGroup />
      </Suspense>
    </div>
  );
};

export default HomePage;
