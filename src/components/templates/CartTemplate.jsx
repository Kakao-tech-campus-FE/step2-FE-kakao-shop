import { getCart } from "../../apis/api";
import { useQuery } from "react-query";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import GNB from "./GNB";
import CartLIst from "../organisms/CartList";

const staticServerUrl = process.env.REACT_APP_PATH || "";

const CartTemplate = () => {
  const { data : cart } = useQuery('cart', getCart, {suspense: true}); // api 호출로 카트 정보 가져오기
  const [totalPrice, setTotalPrice] = useState(cart?.data.response.totalPrice);

  useEffect(() => {
    setTotalPrice(cart.data.response.totalPrice);
  }, [cart])

  const navigate = useNavigate();

  const handleBuyClick = () => {
    navigate(staticServerUrl + '/order');
  }

  return (
    <>
      <GNB></GNB>
      <div className="py-5 border font-bold text-center">장바구니</div>
      <CartLIst cart={cart} setTotalPrice={setTotalPrice}></CartLIst>
      <div className="fixed bottom-0 w-full border bg-white">
        <div className="p-5 flex justify-between font-bold">
          <span>주문 예상 금액</span> 
          <span className="text-blue-700">{totalPrice} 원</span>
        </div>
        {totalPrice === 0 ?
        <button className='w-full text-center bg-yellow-300 py-3 font-bold text-gray-400 cursor-not-allowed'> 주문하기 </button> :
        <button onClick={handleBuyClick} className='w-full text-center bg-yellow-300 py-3 font-bold'> 주문하기 </button>}
      </div>
    </>
  )
}
export default CartTemplate;