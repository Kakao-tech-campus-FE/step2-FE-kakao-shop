import styled from 'styled-components';
import OptionItem from '../atoms/OptionItem';
import { comma } from '../../utils/convert';
import { useNavigate } from 'react-router-dom';


const ProductList = styled.div`
    padding: 1rem;
    .label {
        font-size: 0.8rem;
        font-weight: bold;
    }
    p {
        font-size: 1.2rem;
        line-height: 1.5;
    }
`;

{/* products 가 원래 다 product 였음. 추후 보완 필요 */}
const productItems = (products) => {
    return products.map((product) => {
        return (
            <div className="flex flex-col gap-2 mb-4" key={product.id}>
                <div className="font-bold text-sm">상품명</div>
                <p className="text-lg text-gray-400">{product.productName}</p>
                <OptionItem items={product.items} />
            </div>
        );
    });
};


const OrderCompleteTemplate = ({ data }) => {
    const navigate = useNavigate();
    // console.log(data.data.response);
    // data : 주문 완료 정보

    const example = data?.data;

    if (!example) {
        return <></>
    }


    const ProductItems = productItems(example.response.products);

return (
<section className="py-10 my-10 mx-auto max-w-[500px] w-full">
    <div className="text-center py-10">
        <h1 className="text-xl font-bold">구매완료</h1>
        <h2 className="text-lg">구매가 정상적으로 완료됐습니다.</h2>
    </div>
    <div className="border mb-4">
        <div className="text-sm border-b-0 p-4 border-gray-200 text-center font-bold">
            주문상품 정보
        </div>
        <ProductList>
            {productItems(example.response.products) }
                <div className="font-bold text-lg">총 금액</div>
                <p className="text-xl">{comma(example.response.totalPrice)}원</p>
        </ProductList>
    </div>
    <div className="border">
        <div className="flex justify-between p-4">
            <span className="font-bold text-xl">일반 결제 금액</span>
            <span className="font-bold text-xl text-indigo-700">
                {comma(example.response.totalPrice)}원</span>
            </div>
        <button 
            className="w-full py-4 text-black font-bold text-xl bg-yellow-400"
            onClick={() => {
                navigate("/");
            }}
        >쇼핑 계속하기</button>
    </div>
</section>
)}

export default OrderCompleteTemplate;