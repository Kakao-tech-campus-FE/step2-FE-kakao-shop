import { useState } from "react";
import OptionList from "../atoms/OptionList";
import { comma } from "../../utils/convert";
import Counter from "../atoms/Counter";
import { useMutation } from "react-query";
import { addCart } from "../../services/cart";
import Button from "../atoms/Button";
import '../../styles/molcules/OptionColumn.css'
import cart from '../../img/cart_white.png';

const OptionColumn = ({ product }) => {
    const [selectedOptions, setSelectedOptions] = useState([]);

    const handleOnClickOption = (option) => {

        const isOptionSelected = selectedOptions.find(
            (el) => el.optionId === option.id
        );

        // 이미 선택된 옵션이면 수량 증가시킴
        if (isOptionSelected) {
            return;
        }

        setSelectedOptions((prev) => [
            ...prev,
            {
                optionId: option.id,
                quantity: 1,
                price: option.price,
                name: option.optionName,
            }
        ])
    };

    const handleOnChange = (count, optionId) => {
        setSelectedOptions((prev) => {
            return prev.map((el) => {
                if (el.optionId === optionId) {
                    return {
                        ...el,
                        quantity: count,
                    };
                }
                return el;
            });
        });
    };

    const { mutate } = useMutation({
        mutationFn: addCart,
    });


    const buttonStyle = {
        width: '200px',   // 버튼의 너비를 200px로 설정
        height: '50px',   // 버튼의 높이를 50px로 설정
        background: '#F7F738', // 배경색을 파란색으로 설정
        color: 'black',   // 글자 색을 흰색으로 설정
        border: 'black',   // 테두리를 없앰
        borderRadius: '4px', // 버튼 모서리를 둥글게 설정
        cursor: 'pointer',
        fontsize: '20px',

    }




    return (
    <div className="option-column">
        <h3>옵션선택</h3>
        <div className="dropdown-btn">종류선택</div>
        <div className="dropdown-item">
        <OptionList 
            options={product.options}
            onclick={handleOnClickOption} />
        </div>
        <hr />
        <div className="total-price">
            <span>
                총 수량: {" "}
                {comma(selectedOptions.reduce((acc, cur) => {
                    return acc + cur.quantity;
                }, 0))}
                개
             </span>
            <span>총 상품 금액: 
                {comma(selectedOptions.reduce((acc, cur) => {
                    return acc + cur.quantity * cur.price;
                }, 0))}
                원
            </span>
        </div>
        {selectedOptions.map((option) => (
            <ol key={option.optionId} className="selected-option-list">
                <li className="selected-option">
                    <Counter 
                        quantity = {option.quantity}
                        onIncrease={() => handleOnChange(option.quantity + 1, option.optionId)}
                        onDecrease={() => handleOnChange(option.quantity - 1, option.optionId)}
                    />
                    <span className="name">{option.name}</span>
                    <span className="price">{comma(option.price)}원</span>
                </li>
            </ol>
        ))}
        <div className="button-group">
            {/* <div className="button-cart"> */}
            <button className="button-cart"
                onClick={() => {
                    mutate(
                        selectedOptions.map((el) => {
                            return {
                                optionId: el.optionId,
                                quantity: el.quantity,
                            };
                        }), {
                            onSuccess: () => {
                                alert("장바구니에 담겼습니다.")
                                window.location.reload();

                            },
                            onError: (error) => {
                                console.error("장바구니 담기 오류:", error);
                                alert("장바구니 담기에 실패했습니다.")

                            }
                        }
                        
                    );
                }}
                ><img src={cart} alt="cart" height={40}/></button>
                {/* </div> */}
               <button style={buttonStyle} className="buy-now">바로구매</button>
              
        </div>
    </div>)
}

export default OptionColumn;