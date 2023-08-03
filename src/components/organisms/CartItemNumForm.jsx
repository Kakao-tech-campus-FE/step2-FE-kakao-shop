import { useState, useEffect } from "react";
import { modifyCart } from "../../apis/api";
import Modal from "../molecules/Modal";

const CartItemNumForm = ({ cartId, itemQuantity, itemPrice, setTotalPrice }) => {
  const [quantity, setQuantity] = useState(itemQuantity);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  useEffect(() => {
    setQuantity(itemQuantity);
  }, [itemQuantity])
  
  const price = itemPrice * quantity;

  const handleClick = (num) => {
    if(quantity + num < 0) return;

    modifyCart([{
      cartId,
      quantity: quantity + num
    }]).catch((err) => {
      alert("수량 변경에 실패했습니다.");
    });

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
      {
      isModalOpen && 
      <Modal handleCancelDelete={handleCancelDelete} handleConfirmDelete={handleConfirmDelete} modalText="해당 상품 장바구니에서 삭제하시겠습니까?" />
      }
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