import { useNavigate, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

import { getOrderResultReq } from "apis/order";

import Loader from "components/atoms/Loader";
import ResultInformation from "components/molecules/ResultInformation";

export default function ResultSection() {
  const { orderId } = useParams();
  const navigate = useNavigate();
  const { isLoading, error, data } = useQuery({
    queryKey: ["result", orderId],
    queryFn: () => getOrderResultReq(orderId),
  });

  const handleButtonClick = () => {
    navigate("/");
  };

  return (
    <>
      {isLoading && (
        <div>
          <Loader />
        </div>
      )}
      {error && <span>Error</span>}
      {data && (
        <div className="flex-grow bg-gray-100">
          <div className="inline-block w-[800px] mx-auto mt-4 mb-16">
            <div className="mb-2 py-8 bg-white border">
              <p className="text-lg font-bold">구매완료!</p>
              <p className="mb-3">구매가 정상적으로 완료되었습니다.</p>
              <button
                className="px-2 py-1 bg-black border rounded text-white"
                onClick={handleButtonClick}
              >
                쇼핑 계속하기
              </button>
            </div>
            <ResultInformation data={data.data.response} />
          </div>
        </div>
      )}
    </>
  );
}
