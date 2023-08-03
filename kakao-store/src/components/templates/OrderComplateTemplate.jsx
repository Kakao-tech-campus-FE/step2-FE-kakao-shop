import { useNavigate } from "react-router-dom";
import OptionItem from "../atoms/OptionItem";
import { comma } from "../../utils/convert";

const ProductItems = (products) => products.map((product) => {
    return (
        <div className="p-2 product" key={product.id}>
            <p className="font-bold">{product.productName}</p>
            <OptionItem key={product.id} items={product.items} />
        </div>
    );
})

const OrderComplateTemplate = ({data}) => {
    // data: 주문 정보
    // 만약에 이 페이지를 공유하게 된다면
    // 공유 링크의 제목: 구매완료 - 쇼핑몰 이름
    // 특정 사용자에게만 보호되어야 하는 URL

    const navigate = useNavigate();

    return (
        <section className="my-5 mx-auto max-w-[700px] w-full">
            <div className="complete-message">
                <h1 className="m-2 text-xl font-bold text-center">구매완료!</h1>
                <h2 className="m-2 text-center text-bs">구매가 정상적으로 완료됐습니다.</h2>
            </div>
            <div className="m-5 border detail-box">
                <div className="p-4 font-bold text-center border header">
                    주문상품 정보
                </div>
                <div className="product-list">
                    {ProductItems(data.data.response.products)} 
                </div>
            </div>
            <div className="m-5 payment-box">
                <div className="flex justify-between p-4 border">
                    <div className="font-bold header">일반 결제 금액</div>
                    <p className="font-bold text-blue-600">{comma(data.data.response.totalPrice)}원</p>
                </div>
                <button 
                    className="w-full p-4 font-bold bg-yellow-300"
                    onClick={() => {                        
                        // 주문 완료 후 메인 페이지로 이동
                        navigate("/")
                    }}
                >쇼핑 계속하기</button>
            </div>
        </section>
    );
}

export default OrderComplateTemplate;