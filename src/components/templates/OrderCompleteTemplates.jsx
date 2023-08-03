import { useNavigate } from "react-router-dom";
import { comma } from "../../utils/convert";

const OrderCompleteTemplate = ({ data }) => {
  const example = data?.data?.response ? data?.data?.response : null;
  const navigate = useNavigate();
  return (
    <section className="py-10 my-10 mx-auto max-w-[500px] bg-white w-full">
      <div className="text-center py-10">
        <h1 className="text-xl font-bold">구매 완료</h1>
        <h2 className="text-lg">구매가 정상적으로 완료되었습니다.</h2>
      </div>
      <div className="border border-gray-300">
        <div className=" border-b-2 p-4 border-gray-300 text-center font-bold">
          주문 상품 정보
        </div>
        <div>
          {example.products.map((product, idx) => {
            if (!product.items.reduce((acc, cur) => acc + cur.quantity, 0))
              return null;
            return (
              <div key={idx} className="flex flex-col gap-2">
                <div className="font-bold text-sm border-t-2">상품명</div>
                <p className="text-lg text-gray-400">{product.productName}</p>
                {product.items.map((item, idx) => {
                  return (
                    <div key={item.id} className="flex flex-col gap-2">
                      <div className="font-bold text-sm">옵션 {idx + 1}.</div>
                      <p className="text-lg text-gray-400 ">
                        {item.optionName}
                      </p>
                      <div className="font-bold text-sm">구매 수량</div>
                      <p className="text-lg text-gray-400 ">{item.quantity}</p>
                      <div className="font-bold text-sm">
                        금액 (옵션 금액 * 수량)
                      </div>
                      <p className="text-lg text-gray-400 ">
                        {`${comma(item.price * item.quantity)}원`}
                      </p>
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
        <div className="pt-4 border-t-2 font-bold text-lg">총 금액</div>
        <p className="text-lg">{comma(example.totalPrice)}원</p>
      </div>
      <div className="border">
        <div className="flex justify-between p-4">
          <span className="font-bold text-xl">일반 결제 금액</span>
          <span className="font-bold text-xl text-indigo-500">
            {comma(example.totalPrice)}원
          </span>
        </div>

        <button
          className="block bg-yellow-400 w-full p-4 text-black font-bold text-xl"
          onClick={() => {
            navigate("/");
          }}
        >
          쇼핑 계속 하기
        </button>
      </div>
    </section>
  );
};

export default OrderCompleteTemplate;
