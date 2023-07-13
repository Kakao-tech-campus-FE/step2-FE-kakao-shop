import Loader from "components/atoms/loader.js";
import Skeleton from "components/atoms/skeleton";
import GNB from "components/organisms/GNB.js";
import ProductSection from "components/templates/ProductSection.js";
import "styles/atoms/loader.css";
import "styles/atoms/skeleton.css";

export default function Products() {
  return (
    <>
      <GNB />
      <ProductSection />
      <Loader />
      <Skeleton />
    </>
  );
}
