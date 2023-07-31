import { comma } from "../Utils/convert";
import Box from "../Components/Atoms/Box";
import "../Styles/Card.css";
import { useNavigate, useParams } from "react-router-dom";
import { getOrderFromId } from "../Servicies/order";
import { useQuery } from "@tanstack/react-query";
import Container from "../Components/Atoms/Container";

const OrderCompletePage = () => {
  const { id } = useParams();
  const { data } = useQuery(["getOrder"], () => getOrderFromId(id));

  const products = data?.data?.response?.products;
  const totalPrice = data?.data?.response?.totalPrice;

  const navigate = useNavigate();

  const OrderItems = () => {
    let renderComponent = [];
    if (products && totalPrice) {
      products.forEach((pro) => {
        renderComponent.push(
          pro.items.map((item) => {
            return (
              <div className="m-5">
                <div key={item.id} className="p-5 border border-stone-200 rounded">
                  <div className="product-name">
                    <div className="text-sm font-bold">{pro.productName} </div>
                    <div className="text-xs">{`[옵션] 상품선택: ${item.optionName}, ${comma(item.quantity)}개`}</div>
                  </div>
                  <div className="font-semibold text-sm">
                    <span>{comma(item.price)}원</span>
                  </div>
                </div>
              </div>
            );
          })
        );
      });
    }
    return renderComponent;
  };

  return (
    <div className="bg-stone-100 flex min-h-screen justify-center items-center">
      <Container className="mx-auto w-3/5 h-1/2 border-solid my-auto">
        <Box className="card p-5">
          <div className="text-center font-bold text-2xl p-3">구매 완료!</div>
          <div className="text-center">상품의 구매가 정상적으로 완료되었습니다.</div>
          <hr className="m-3" />
          <OrderItems />
        </Box>
        <Box className="card">
          <div className="flex justify-between items-center p-5">
            <div className="text-lg">최종 결제금액</div>
            <div className="price font-bold text-xl text-black">{comma(totalPrice)}원</div>
          </div>
        </Box>
        <button
          onClick={() => {
            navigate("/");
          }}
          className="w-full p-4 text-lg bg-yellow-300 text-black"
        >
          쇼핑 계속하기
        </button>
      </Container>
    </div>
  );
};

export default OrderCompletePage;
