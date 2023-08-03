import { useNavigate } from "react-router-dom"


const OrderCompleteTemplate = ({data})=> {
    const navigate = useNavigate();

    const example = data?.data


    // const example = {
    //     success: true,
    //     response: {
    //         id:1,
    //         products: [
    //             {
    //                 productName: "상품명",
    //                 items: [
    //                     {
    //                         id:1,
    //                         optionName: "옵션명1"
    //                     }
    //                 ]
    //             },
    //         ],
    //         totalPrice: 1000,
    //     },
    //     error:null
    // }

    //이 페이지를 공유하게 된다면
    //공유링크의 제목: 구매완료 - 쇼핑몰 이름

    return <section>
{/* 구매완료 */}
{/* 구매가 정상적으로 완료됐습니다 */}
<div className="complete-message">
    <h1> 구매완료! </h1>
    <h2>구매가 정상적으로 완료됐습니다.</h2>
</div>
<div className="detail-box">
    <div className="header">
        주문상품 정보
    </div>
    <div className="product-list">
        {example.products.map((product)=> {
            return <div className="product">
                <div className="label">상품명</div>
                {product.items.map((item)=>{
                    return (
                        <div key={item.id}>
                            <div className="label">옵션{idx+1}</div>
                            <p>{item.optionName}</p>
                            <div className="label">구매수량</div>
                            <p>{item.quantity}</p>
                            <div className="label">금액</div>
                            <p>{item.price*item.quantity}</p>
                        </div>
                    )
                })}
        </div>})}
        </div>
<button

onClick={()=>{
    navigate("/")

}}></button>



</div>
    </section>
}

export default OrderCompleteTemplate