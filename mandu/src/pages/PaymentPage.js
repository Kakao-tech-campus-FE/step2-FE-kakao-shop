import {useMutation, useQuery} from "react-query";
import {getCart, saveOrder} from "../services/apis";
import LoadingPage from "./LoadingPage";
import ErrorPage from "./ErrorPage";
import MdLayOut from "../components/templates/MdLayOut";
import PaymentSectionCard from "../components/molecules/PaymentSectionCard";
import {useEffect, useState} from "react";
import cookie from "react-cookies";
import ProductWithOptionCard from "../components/organisms/ProductWithOptionCard";
import {priceFormat} from "../util/Format";
import {ElevatedButton} from "../components/atoms/Buttons";
import {useNavigate} from "react-router-dom";
import {convertUrl} from "../const";

const PaymentPage = () => {
        const {isLoading, isError, data, error} = useQuery(['cart'],
            getCart, {
                retry: 1,
            }
        );
        const navigate = useNavigate();

        const orderMutation = useMutation(saveOrder, {
            onSuccess: (data) => {
                if (data.id === undefined || typeof data.id !== "number") {
                    alert("응답이 잘못되었습니다.");
                    return;
                }
                navigate(convertUrl(`/ordered/${data.id}`));
            },
            onError: () => {
                alert("주문에 실패하였습니다.");
            },
        });

        const [user, setUser] = useState(null);

        useEffect(() => {
            const cookieUserId = cookie.load('user_id');
            if (cookieUserId) {
                setUser(cookieUserId);
            }
        }, []);


        if (isLoading) return <LoadingPage/>
        if (isError) return <ErrorPage error={error}/>

        const {products, totalPrice} = data;

        const totalQuantity = products.reduce((acc, cur) => {
            return acc + cur.carts.reduce((acc, cur) => {
                return acc + cur.quantity;
            }, 0);
        }, 0);


        return (
            <MdLayOut>
                <h1 className="text-xl font-bold bg-white text-gray-800 text-center py-2 mb-4">결제</h1>
                <PaymentSectionCard key="shipAddress" title="배송지" description="배송지를 선택해주세요.">
                    <div className="flex justify-between mx-4 pb-2">
                        <div className="flex flex-col">
                            <p>{user}님</p>
                            <p className="font-semibold text-lg">부산시 기장군 정관면</p>
                        </div>
                        <button>변경</button>
                    </div>
                </PaymentSectionCard>
                <PaymentSectionCard key="productInfo" title="주문 상품 정보" description={`총 ${totalQuantity}개`}>
                    <div className="divide-y-4">
                        {
                            products.map((item) => {
                                let filteredCarts = item.carts.filter((cart) => cart.quantity > 0);
                                if (filteredCarts.length !== 0) {
                                    return (
                                        <div className="p-2">
                                            <ProductWithOptionCard key={"cartItem_" + item.id} id={item.id}
                                                                   productName={item.productName}
                                                                   carts={filteredCarts} canControl={false}/>
                                        </div>
                                    );
                                }
                                return null;
                            })}
                    </div>
                </PaymentSectionCard>
                <div className="bg-white flex p-4 justify-between">
                    <h3 className="font-semibold text-2xl">총 결제금액</h3>
                    <h3 className="font-semibold text-2xl">{priceFormat(totalPrice)}</h3>
                </div>
                <ElevatedButton id="payment-btn" className="bg-amber-300 my-4 py-4 font-bold"
                                disabled={totalQuantity === 0 || orderMutation.isLoading}
                                onClick={() => {
                                    orderMutation.mutate();
                                }}>
                    결제하기
                </ElevatedButton>
            </MdLayOut>
        );
    }
;

export default PaymentPage;