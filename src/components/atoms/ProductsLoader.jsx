import { GridLoader } from "react-spinners";

const override = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
};

const ProductsLoader = () => {
  return <GridLoader color="#bbb" cssOverride={override} size={30} />;
};

export default ProductsLoader;
