import { useState } from "react";
import _ from "lodash";

const useProducts = (initialProducts = [], initPage = 0) => {
  const [products, setProducts] = useState(initialProducts);

  const addProducts = (newProducts) => {
    setProducts((prev) => {
      // prev와 합친 후 중복 제거
      return _.uniqBy([...prev, ...newProducts], "id");
    });
  };

  return { products, addProducts };
};

export default useProducts;
