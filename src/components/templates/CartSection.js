import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";

import { getCartReq } from "apis/cart";
import { orderReq } from "apis/order";
import { convertToPrice } from "utils/convert";

import Container from "components/atoms/Container";
import Loader from "components/atoms/Loader";
import Button from "components/atoms/Button";
import CartList from "components/molecules/CartList";

export default function CartSection() {
  const { isLoading, error, data, refetch } = useQuery({
    queryKey: ["carts"],
    queryFn: getCartReq,
  });

  const handleDeleteAllClick = async () => {
    if (data.data.response.products.length === 0) return;
    await orderReq();
    refetch();
  };

  return (
    <Container className="">
      {/* 장바구니 */}
      <div>
        <h1>장바구니</h1>
      </div>
      {isLoading && <Loader />}
      {error && <div>{error}</div>}
      {data &&
        (data.data.response.products.length === 0 ? (
          <div>장바구니에 담긴 상품이 없습니다.</div>
        ) : (
          <>
            {/* 전체삭제 */}
            <div>
              <Button onClick={handleDeleteAllClick}>전체삭제</Button>
            </div>
            {/* 카트 리스트 */}
            <CartList
              products={data.data.response.products}
              refetch={refetch}
            />
            {/* 주문 예상금액 및 주문하기 */}
            <div>
              <span>주문 예상금액</span>
              <span>{convertToPrice(data.data.response.totalPrice)}</span>
              <Link to="/order">{`${data.data.response.products.length}건 주문하기`}</Link>
            </div>
          </>
        ))}
    </Container>
  );
}
