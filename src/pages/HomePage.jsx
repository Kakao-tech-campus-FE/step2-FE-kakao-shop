import React, { useEffect } from "react";
import MainProductTemplate from "../components/templates/MainProductTemplate";
import { loader } from "react-global-loader";
import { useSelector } from "react-redux";

const HomePage = () => {
  const loading = useSelector((state) => state.product.loading);

  useEffect(() => {
    if (loading) {
      loader.show();
    } else {
      loader.hide();
    }
  }, [loading]);

  return <MainProductTemplate />;
};

export default HomePage;
