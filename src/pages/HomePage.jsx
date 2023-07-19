import { useEffect } from "react";
import ProductSection from "../components/templates/ProductSection";
import { loader } from "react-global-loader";
import { useSelector } from "react-redux";
const HomePage = () => {
  const loading = useSelector((state) => state.product.loading);
  const showLoader = () => {
    loader.show();
  };

  const hideLoader = () => {
    loader.hide();
  };

  useEffect(() => {
    if (!loading) hideLoader();
    else showLoader();
  }, [loading]);
  return <ProductSection />;
};

export default HomePage;
