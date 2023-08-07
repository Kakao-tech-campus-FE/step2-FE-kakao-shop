import { useNavigate, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

import { getOrderResultReq } from "apis/order.js";

import Button from "components/atoms/Button.js";
import ResultInformation from "components/molecules/ResultInformation.js";

const staticServerUri = process.env.REACT_APP_PATH || "";

export default function ResultSection() {
  const { orderId } = useParams();
  const navigate = useNavigate();
  const { data } = useQuery({
    queryKey: ["result", orderId],
    queryFn: () => getOrderResultReq(orderId),
  });

  const handleButtonClick = () => {
    navigate(staticServerUri + "/");
  };

  return (
    <div className="w-full flex-grow bg-gray-100">
      <div className="inline-block w-[800px] mx-auto mt-4 mb-16">
        <div className="mb-2 py-8 bg-white border">
          <p className="text-lg font-bold">구매완료!</p>
          <p className="mb-3">구매가 정상적으로 완료되었습니다.</p>
          <Button
            className="px-2 py-1 bg-black border rounded text-white"
            onClick={handleButtonClick}
          >
            쇼핑 계속하기
          </Button>
        </div>
        <ResultInformation data={data.data.response} />
      </div>
    </div>
  );
}
