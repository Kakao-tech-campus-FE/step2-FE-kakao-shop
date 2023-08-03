import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import paymentInstance from "../apis/payment";
import useCart from "../hooks/useCart";

const staticServerUri = process.env.REACT_APP_PATH || "";

export default function PayRedirectPage() {
  const navigate = useNavigate();
  const { orderCart } = useCart();

  useEffect(() => {
    const approveReq = async () => {
      const urlParams = new URL(window.location.href).searchParams;
      const pg_token = urlParams.get("pg_token");
      const address = urlParams.get("address");
      const request = urlParams.get("request");

      try {
        await paymentInstance.payApproveRequest(pg_token);
        orderCart.mutate(null, {
          onSuccess: async (data) => {
            navigate("/result", {
              replace: true,
              state: {
                address,
                request,
                orderId: data.data.response.id,
              },
            });
          },
        });
      } catch (error) {
        console.log(error);
      }
    };
    approveReq();

    return () => window.localStorage.removeItem("tid");
  }, [navigate, orderCart]);

  return (
    <div className="flex flex-col justify-center items-center gap-3 h-cart">
      <p className="text-lg font-semibold">결제 승인 요청중</p>
      <span className="text-sm text-gray-400">잠시만 기다려 주세요.</span>
    </div>
  );
}
