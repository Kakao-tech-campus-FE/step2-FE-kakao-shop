import { useMutation } from "react-query";
import { useEffect } from "react";
import { orderSave } from "../services/order";
import { useNavigate, useSearchParams } from "react-router-dom";

const OrderTempPage = () => {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();

    console.log(searchParams);

    const orderSaveMutation = useMutation({
        mutationFn: orderSave,
        onSuccess: (res) => {
            console.log('order save res', res);
            // alert(res.data.response.id);
            navigate("/order/success", {
                state: {
                    orderId: res.data.response.id,
                }
            });
            console.log(res.data?.response);
        },
        onError: (err) => {
            console.log('order save err', err)
            alert("주문 진행 중 에러가 발생했습니다.");
            navigate("/order/fail", {
                replace: true,
                state: {
                    ...searchParams
                }
            });
        }
    });

    useEffect(() => {
        orderSaveMutation.mutate();
    }, []);

    return (
        <div>
            <span>결제 진행 중...</span>
            <span>
                {}
            </span>
        </div>
    );
}

export default OrderTempPage;