import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setOrderId } from "../../redux/cartRedux";
import { orderProducts } from "../../apis/api";

const OrderCheckGroup = ({totalPrice}) => {

  const checkPaymentRef = useRef();
  const checkPrivacyRef = useRef();
  const checkAllRef = useRef();

  const navigate = useNavigate();

  const handleCheckAllChange = () => {
    const checkAllChecked = checkAllRef.current.checked;
    checkPaymentRef.current.checked = checkAllChecked;
    checkPrivacyRef.current.checked = checkAllChecked;
  }

  const handleCheckChange = (e) => {
    checkAllRef.current.checked = checkPaymentRef.current.checked && checkPrivacyRef.current.checked;
  }
  
  const dispatch = useDispatch();

  const handleOnClick = async () => {
    if(checkAllRef.current.checked === false) {
      alert("약관에 동의해주세요.");
      return;
    }
    try {
      const res = await orderProducts();
      dispatch(setOrderId(res.data.response.id));
      alert('주문이 완료되었습니다.');
      navigate('/ordercomplete');
    } catch (e) {
      // 실제 PG 서비스 연결이 안 되어있으니, 실제 에러가 발생하는 장바구니가 비어있는 경우로 가정
      alert('장바구니가 비어있는지 확인해주세요');
      navigate('/cart');
    }
  }

  return (

    <div className="border rounded-md my-5">
    <div className="flex justify-between font-bold py-4 px-3 border-b">
      <span>
      총 주문 금액
      </span>
      <span className="text-blue-500">
        {totalPrice} 원
      </span>
    </div>
    
    <div className="font-bold text-xl border-b py-5 px-3">
      <input className='mr-3' type="checkbox" ref={checkAllRef} id="checkAll" onChange={handleCheckAllChange} />
      <label htmlFor="checkAll">전체동의</label>
    </div>
    <div className="p-3">
      <input className='mr-3' type="checkbox" ref={checkPaymentRef} id="checkPayment" onChange={handleCheckChange} />
      <label htmlFor="checkPayment">구매조건 확인 및 결제 진행 동의</label>
    </div>
    <div className="p-3">
      <input className='mr-3' type="checkbox" ref={checkPrivacyRef} id="checkPrivacy" onChange={handleCheckChange} />
      <label htmlFor="checkPrivacy">개인정보 제3자 제공 동의</label>
    </div>

    <div className="p-3 text-sm border-t">
      <div className="font-bold">
        법적고지
      </div>
      <span >
        (주)카카오에서 판매하는 상품 중에는 개별 판매자가 판매하는 상품이 포함되어 있습니다. 개별 판매자가 판매하는 상품에 대해 (주)카카오는 통신중개자로서 중개 서비스만을 제공하고 있습니다. 개별 판매자가 판매하는 상품과 관련하여서는 개별 판매자가 책임을 부담하고, (주)카카오는 일체의 책임을 지지 않습니다.
      </span>
    </div>

    <button className="w-full text-center bg-yellow-300 py-3 font-bold" onClick={handleOnClick}>
      결제하기
    </button>
  </div>
  )
}

export default OrderCheckGroup;