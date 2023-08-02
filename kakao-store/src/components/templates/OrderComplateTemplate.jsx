import { useNavigate } from "react-router-dom";
import OptionItem from "../atoms/OptionItem";

const ProductItems = (products) => products.map((product) => {
    return (
        <div className="product" key={product.id}>
            <div className="label">상품명</div>
            <p>{product.productName}</p>
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
        <section className="py-10 my-10 mx-auto max-w-[500px] w-full bg-gray-100">
            <div className="complete-message">
                <h1>구매완료!</h1>
                <h2>구매가 정상적으로 완료됐습니다.</h2>
            </div>
            <div className="detail-box">
                <div className="header">
                    주문상품 정보
                </div>
                <div className="product-list">
                    {ProductItems(data.data.response.products)}  
                    <div className="label">총 금액</div>
                    <p>{data.data.totalPrice}</p>
                </div>
            </div>
            <div className="payment-box">
                <div className="header">일반 결제 금액</div>
                <button
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