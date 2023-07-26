import { getCart } from "../../apis/api";
import CartItemNumForm from "../organisms/CartItemNumForm";
import { useQuery } from "react-query";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import GNB from "./GNB";

const CartTemplate = () => {
  const { data : cart } = useQuery('cart', getCart, {suspense: true}); // api 호출로 카트 정보 가져오기
  const [totalPrice, setTotalPrice] = useState(cart?.data.response.totalPrice);

  useEffect(() => {
    setTotalPrice(cart.data.response.totalPrice);
  }, [cart])

  const navigate = useNavigate();
  
  const cartList = cart?.data.response.products.map((item) => {
    const optionDetails = item.carts;

    return (
      <div key={item.productName} className="border p-2">
        <h1 className="text-xl font-bold">{item.productName}</h1>
        {optionDetails.map((optionDetail) => {
          return (
            <div key={optionDetail.id} className="flex flex-col border m-2 p-2 text-sm">
              <div className="my-1 flex justify-between">
                {optionDetail.option.optionName}
              </div>

              <CartItemNumForm cartId={optionDetail.id} itemQuantity={optionDetail.quantity} itemPrice={optionDetail.option.price} setTotalPrice={setTotalPrice}/>
            </div>
          )
        })}
      </div>
    )
  })

  const handleBuyClick = () => {
    navigate('/order');
  }

  return (
    <>
      <GNB></GNB>
      <div className="py-5 border font-bold text-center">장바구니</div>
      <div className="mb-28">{cartList}</div>
      <div className="fixed bottom-0 w-full border bg-white">
        <div className="p-5 flex justify-between font-bold">
          <span>주문 예상 금액</span> 
          <span className="text-blue-700">{totalPrice} 원</span>
        </div>
        <button onClick={handleBuyClick} className="w-full text-center bg-yellow-300 py-3 font-bold"> 주문하기 </button>
      </div>
    </>
  )
}
export default CartTemplate;