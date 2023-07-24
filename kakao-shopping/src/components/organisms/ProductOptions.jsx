import Button from "../atoms/Button";
import { useState } from "react";
import SelectedOption from "../molecules/SelectedOption";
import DeliveryInformation from "../molecules/DeliveryInformation";
import OptionsList from "../molecules/OptionsList";
import { useSelector } from "react-redux";
import { addCart } from "../../apis/api";
import { clearItem } from "../../redux/cartRedux";
import { useDispatch } from "react-redux";

const ProductOptions = ({ product }) => {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const sumOptionPrice = selectedOptions.reduce((acc, cur) => acc + cur.sumPrice, 0);
  const sumOptionCount = selectedOptions.reduce((acc, cur) => acc + cur.sumCount, 0);

  const dispatch = useDispatch();
  const options = product.options;

  const cartItems = useSelector((state) => state.cart.cartItems);

  const handleAddCartClick = () => {

    addCart(cartItems)
    .then((res) => {
      console.log(res);
      dispatch(clearItem());
      setSelectedOptions([]);
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
        <Button className="w-2/5 p-2 mr-1 text-sm h-10 bg-gray-900 rounded-md text-white" onClick={handleAddCartClick}>장바구니 담기</Button>
        <Button className="w-3/5 p-2 text-sm h-10 bg-yellow-300 rounded-md">톡딜가로 구매하기</Button>
      </div>
    </div>
  )
}

export default ProductOptions;