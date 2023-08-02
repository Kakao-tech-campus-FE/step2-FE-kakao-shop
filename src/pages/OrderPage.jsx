import { Suspense } from "react";
import GNB from "../components/atoms/GNB";
import { useMutation } from "react-query";
import Loader from "../components/atoms/Loader";
import Button from "../components/atoms/Button";

const checkout = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ success: true });
    }, 1000);
  });
};

const OrderPage = () => {
  const { mutate, isLoading } = useMutation({
    mutationFn: checkout,
  });

  return (
    <Suspense fallback={<Loader />}>
      <GNB />
      <div className="flex justify-center items-center">
        <Button
          className="rounded-full bg-yellow-500 text-black"
          onClick={() => {
            mutate();
          }}
        >
          {isLoading ? "결제 처리중..." : "결제하기"}
        </Button>
      </div>
    </Suspense>
  );
};

export default OrderPage;
