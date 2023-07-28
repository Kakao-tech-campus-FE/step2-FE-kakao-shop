import { useMutation } from "react-query";
import { useEffect } from "react";
import { orderSave } from "../services/order";
import { useNavigate } from "react-router";

const OrderTempPage = () => {
    const navigate = useNavigate();

    const orderSaveMutation = useMutation({
        mutationFn: orderSave,
        onSuccess: (res) => {
            console.log('order save res', res);
            navigate("/order/success");
        },
        onError: (err) => {
            console.log('order save err', err)
            alert("주문 진행 중 에러가 발생했습니다.");
            navigate("/order/fail");
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