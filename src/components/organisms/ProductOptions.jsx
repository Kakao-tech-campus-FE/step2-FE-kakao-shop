import { useState } from "react";
import SelectedOption from "../molecules/SelectedOption";
import DeliveryInformation from "../atoms/DeliveryInformation";
import OptionsList from "../molecules/OptionsList";
import { useSelector } from "react-redux";
import { addCart } from "../../apis/api";
import { clearItem } from "../../redux/cartRedux";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

const staticServerUrl = process.env.REACT_APP_PATH || "";

const ProductOptions = ({ product }) => {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const cartItems = useSelector((state) => state.cart.cartItems);
  const sumOptionCount = cartItems.reduce((acc, cur) => acc + cur.quantity, 0);
  const sumOptionPrice = useSelector((state) => state.cart.cartSumPrice);

  const dispatch = useDispatch();
  const options = product.options;

  const handleAddCartClick = () => {
    const expirationTime = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')).expirationTime : null;
    if(!expirationTime || expirationTime < Date.now()) {
      alert('로그인 후 이용해주세요.');
      return;
    }

    addCart(cartItems)
    .then((res) => {
      dispatch(clearItem());
      setSelectedOptions([]);
      alert('장바구니에 담겼습니다.');
    })
    .catch((err) => {
      console.log(err);
    });
    
  }
  const navigate = useNavigate();
  const handlePurchaseClick = () => {

    addCart(cartItems)
    .then((res) => {
      dispatch(clearItem());
      setSelectedOptions([]);
    })
    .then(() => {
      navigate(staticServerUrl + '/cart');
    })
    .catch((err) => {
      console.log(err);
    });
    
  }

  return (
    <div className="flex flex-col items-center h-200 pb-96 w-96">

      <OptionsList 
        options={options} 
        selectedOptions={selectedOptions}
        setSelectedOptions={setSelectedOptions}
      />

      <DeliveryInformation />

      <div className="w-full border-t mt-4 mb-3"/>

      <div className="w-full"> 
        <ul>
          {selectedOptions.map((selectedOption, index) =>
            <SelectedOption 
              key={index}
              selectedOption={selectedOption}
              className="border border-b-0 1px first:rounded-t-lg last:rounded-b-lg last:border-b w-full"
            />
          )}
        </ul>
      </div>

      <div className="flex justify-between w-full">
        <div>총 수량 : {sumOptionCount}개</div>
        <div>총 주문금액 : {sumOptionPrice}원</div>
      </div>

      <div className="flex w-full mt-3">
        <button className="w-2/5 p-2 mr-1 text-sm h-10 bg-gray-900 rounded-md text-white" onClick={handleAddCartClick}>장바구니 담기</button>
        <button className="w-3/5 p-2 text-sm h-10 bg-yellow-300 rounded-md" onClick={handlePurchaseClick}>톡딜가로 구매하기</button>
      </div>
    </div>
  )
}

export default ProductOptions;