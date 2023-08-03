import { useParams } from "react-router-dom";
import Loader from "../atoms/Loader";
import { getProductById } from "../../services/product";
import { useQuery } from "react-query";
import ProductDetailTemplate from "../templates/ProductDetailTemplate";
import ErrorSign from "../atoms/ErrorSign";
import Alert from "../atoms/Alert";
import { createContext, useState } from "react";

const staticServerUri = process.env.REACT_APP_PATH || "";

export const AlertContext = createContext(null);

const ProductDetailPage = () => {
  const id = useParams().id;
  const { isLoading, error, data } = useQuery(`product${id}`, () =>
    getProductById(id),
  );

  const [alertIsOpened, setAlertIsOpened] = useState(false);

  const RequireLoginModal = ({ isOpen }) => (
    <Alert
      message={"로그인이 필요한 서비스입니다."}
      buttonText={"로그인"}
      onClickButton={() => {
        window.location.href = staticServerUri + "/login";
      }}
      className={"require-login-alert"}
      isOpen={isOpen}
      onClose={() => {
        setAlertIsOpened(false);
      }}
    />
  );

  return (
    <AlertContext.Provider value={{ alertIsOpened, setAlertIsOpened }}>
      <div className={"product-detail-page page w-max-[1024px] flex flex-col"}>
        <RequireLoginModal isOpen={alertIsOpened} />

        {data && (
          <div
            className={
              "border-b-light-gray flex h-28 w-full  items-center justify-center"
            }
          >
            <h1 className={"text-3xl font-bold"}>상품 페이지</h1>
          </div>
        )}
        <div className={"f-full flex flex-col items-center"}>
          {isLoading && <Loader />}
          {error && <ErrorSign error={error.response} />}
          {data && <ProductDetailTemplate product={data.data.response} />}
        </div>
      </div>
    </AlertContext.Provider>
  );
};

export default ProductDetailPage;
