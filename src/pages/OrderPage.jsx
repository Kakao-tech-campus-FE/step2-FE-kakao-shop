import { Suspense } from "react";
import Loader from "../components/atoms/Loader";
import Button from "../components/atoms/Button";
import GNB from "../components/atoms/GNB";

const OrderPage = () => {
  return (
    <Suspense fallback={<Loader />}>
      <GNB />
      <div className="flex justify-center items-center h-screen">
        <Button
          className="w-40 h-10 mb-40 rounded-md text-black bg-yellow-300"
          onClick={() => {}}
        >
          결제하기
        </Button>
      </div>
    </Suspense>
  );
};

export default OrderPage;
