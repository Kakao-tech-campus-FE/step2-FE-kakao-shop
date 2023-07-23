import { useState, useEffect } from "react";
import { modifyCart } from "../../apis/api";

const CartItemNumForm = ({ cartId, itemQuantity, itemPrice, setTotalPrice }) => {
  const [quantity, setQuantity] = useState(itemQuantity);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  useEffect(() => {
    setQuantity(itemQuantity);
  }, [itemQuantity])
  
  const price = itemPrice * quantity;

  const handleClick = (num) => {
    if(quantity + num < 0) return;
    const a = modifyCart([{
      cartId,
      quantity: quantity + num
    }]);
    console.log(a);
    setQuantity(prev => prev + num);
    setTotalPrice((prev) => prev + num * itemPrice);
  }

  /*  삭제 + 모달  */
  const handleDeleteClick = () => {
    setIsModalOpen(true);
  };

  const handleConfirmDelete = () => {
    setIsModalOpen(false);
    modifyCart([
      {
        cartId,
        quantity: 0,
      },
    ]);
    setTotalPrice((prev) => prev - quantity * itemPrice);
    setQuantity(0);
  };

  const handleCancelDelete = () => {
    setIsModalOpen(false);
  };
 
  return (
    <div className="flex items-center justify-between my-1">
      {isModalOpen && (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-600 bg-opacity-50">
          <div className="bg-white p-6 rounded">
            <p className="">해당 상품 장바구니에서 삭제하시겠습니까?</p>
            <div className="mt-4 flex justify-around">
              <button onClick={handleCancelDelete}>
                취소
              </button>
              <button onClick={handleConfirmDelete}>
                확인
              </button>
            </div>
          </div>
        </div>
      )}
      <div className="flex">
        <button onClick={handleDeleteClick} className="border border-black font-bold rounded-lg px-1 w-12 h-8 mr-4">
          삭제
        </button>
        <button className="text-xs px-1 border border-black rounded-l-lg font-bold w-8 h-8" onClick={() => handleClick(-1)}>
          -
        </button>
        <div className="w-8 h-8 flex justify-center items-center border">
        {quantity}
        </div>
        <button className="text-xs px-1 border border-black rounded-r-lg font-bold w-8 h-8" onClick={() => handleClick(1)}>
          +
        </button>
      </div>
      <span className="font-bold">{price}원</span>
    </div>
  )
}
export default CartItemNumForm;