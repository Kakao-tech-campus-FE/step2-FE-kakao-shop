import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useMutation, useQueryClient } from "react-query";
import paymentInstance from "../apis/payment";
import cartInstance from "../apis/cart";

export default function PayRedirectPage() {
  const navigate = useNavigate();
  const { mutate } = useMutation({
    mutationFn: cartInstance.order,
  });
  const queryClient = useQueryClient();

  useEffect(() => {
    const approveReq = async () => {
      const urlParams = new URL(window.location.href).searchParams;
      const pg_token = urlParams.get("pg_token");
      try {
        await paymentInstance.payApproveRequest(pg_token);
        mutate(null, {
          onSuccess: async () => {
            await queryClient.invalidateQueries(["carts"]);
            navigate("/result");
          },
        });
      } catch (error) {
        console.log(error);
      }
    };
    approveReq();

    return () => window.localStorage.removeItem("tid");
  }, [navigate, mutate, queryClient]);

  return (
    <div className="flex flex-col justify-center items-center gap-3 w-full h-full">
      <p className="text-lg font-semibold">결제 승인 요청중</p>
      <span className="text-sm text-gray-400">잠시만 기다려 주세요.</span>
    </div>
  );
}
