import { useQueryClient, useQuery, useMutation } from "@tanstack/react-query";
import { Link, useNavigate } from "react-router-dom";

import { getCartReq } from "apis/cart.js";
import { orderReq } from "apis/order.js";
import { convertToPrice } from "utils/convert.js";

import Container from "components/atoms/Container.js";
import Image from "components/atoms/Image.js";
import Button from "components/atoms/Button.js";
import CartList from "components/molecules/CartList.js";

import cart from "assets/icon/cart.png";

const staticServerUri = process.env.REACT_APP_PATH || "";

export default function CartSection() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { data } = useQuery({
    queryKey: ["carts"],
    queryFn: getCartReq,
  });
  const { mutate } = useMutation({
    mutationFn: orderReq,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["carts"] });
    },
    onError: (err) => {
      console.dir("카트업데이트 오류:\n" + err);
    },
  });

  const handleButtonClick = () => {
    navigate(staticServerUri + "/");
  };

  const handleDeleteAllClick = () => {
    if (data.data.response.products.length === 0) return;
    mutate();
  };

  return (
    <div className="w-full flex-grow bg-gray-100">
      <Container className="inline-block w-[800px] mx-auto mt-4 mb-16">
        <h1 className="block py-2 bg-white border text-sm font-bold">
          장바구니
        </h1>
        {data.data.response.products.length === 0 ? (
          <div className="flex h-[20rem] bg-white flex-col justify-center items-center gap-2">
            <Image className="w-14 opacity-[15%]" src={cart} />
            <p className="text-lg">장바구니에 담긴 상품이 없습니다.</p>
            <Button
              className="px-3 py-2 bg-black border rounded text-white text-sm"
              onClick={handleButtonClick}
            >
              쇼핑하기 홈
            </Button>
          </div>
        ) : (
          <>
            <div className="flex px-4 py-2 bg-gray-50 border-x justify-between items-center text-sm">
              <span>전체 삭제</span>
              <Button
                className="px-3 py-1 bg-white border"
                onClick={handleDeleteAllClick}
              >
                삭제
              </Button>
            </div>
            <CartList products={data.data.response.products} />
            <div className="bg-white border">
              <div className="flex p-4 justify-between items-center">
                <span className="text-lg font-bold">주문 예상금액</span>
                <span className="text-lg font-bold text-blue-700">
                  {convertToPrice(data.data.response.totalPrice)}
                </span>
              </div>
              <Link
                className="block px-32 py-4 bg-yellow-300 font-bold"
                to={staticServerUri + "/order"}
              >{`${data.data.response.products.length}건 주문하기`}</Link>
            </div>
          </>
        )}
      </Container>
    </div>
  );
}
