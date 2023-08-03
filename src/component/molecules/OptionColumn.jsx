import { useState } from "react";
import { addCart } from "../../services/cart";
import { comma } from "../../utils/convert";
import Counter from "../atoms/Counter";
import OptionList from "../atoms/OptionList";
import Button from "../atoms/Button";
import { Link, useNavigate } from "react-router-dom";
import Photo from "../atoms/Photo";


const OptionColumn = ({ product }) => {
    
    const navigate = useNavigate();
    const [selectedOptions, setSelectedOptions] = useState([]);
    const email = localStorage.getItem("email");

    const handleOnClickOption = (option) => {
        // 동일한 옵션 선택을 방지해주는 코드
        const isOptionSelected = selectedOptions.find(
            (el) => el.optionId === option.id
            );

            if (!isOptionSelected) {
                //옵션이 선택 되어있지 않음
                setSelectedOptions((prev) => [
                ...prev,
                {
                    optionId: option.id,
                    quantity: 1,
                    price: option.price,
                    name: option.optionName,
                }
            ])
            return;
        } else {
            //옵션이 선택되어 있음.
            setSelectedOptions((prev) =>
                prev.map((el) =>
            el.optionId === option.id ? { ...el, quantity: el.quantity } : el
            )
        );
    }};
        
    const handleOnChange = (count, option) => {
        setSelectedOptions((prev) => {
            return prev.map((el) => {
                if (el.optionId === option.optionId) {
                    return {
                        ...el,
                        quantity: count,
                    };  
                }
            return el;
            });
        });
    }

    let addCartArr = selectedOptions.map((el) => {
        return {
            optionId: el.optionId,
            quantity: el.quantity
        }
    });


    const addCartReq = async () => {
        if (email) {
            if (addCartArr && addCartArr.length === 0) {
                alert("담을 상품이 없습니다.");
                return
            } else {
                await addCart(addCartArr)
                    .then(response => {
                        alert("장바구니에 담았습니다.")
                        navigate("/cart")
                    }).catch(err => {
                        alert("장바구니 담기에 실패했습니다.")});
                }
        }else {
            alert("로그인 하세요");
    }}

    const purchase = async () => {
        if (email) {
            if (addCartArr && addCartArr.length === 0) {
                alert("구매할 상품이 없습니다.");
                return
            } else {
                await addCart(addCartArr)
                    .then(response => {
                        navigate("/order");
                    }).catch(err => {
                        alert("구매를 실패했습니다.")});
                }
        }else {
            alert("로그인 하세요");
    }}

    return <div className="p-8 border-l w-1/3">
        <h3 className="font-semibold mb-6 text-xl">옵션 선택</h3>
        {/* 옵션 담기 영역 */}
        <OptionList 
            options={product.options}
            onClick={handleOnClickOption}    
        />
        {/* 담긴 옵션이 표기 */}
        <div className="mb-6">
            {selectedOptions.map((option) => (
                <ol className = "mt-8 border border-solid p-2 bg-stone-100" key = {option.optionId}>
                    <li className="selected-option">
                        <span className="name">{option.name}</span>
                        <span className="price">{comma(option.price)}원</span>
                        <Counter
                            option={option}
                            onIncrease={handleOnChange}
                            onDecrease={handleOnChange}
                        />
                    </li>
                </ol>
            ))}
        </div>
        <hr/>
        <div className="flex place-content-between mb-8">
            <span className="text-lg">총 수량: {" "} {
                comma(selectedOptions.reduce((arr, cur) => {
                    return arr+cur.quantity;
                }, 0 ))}개
            </span>
            <span className="text-lg">총 상품금액: 
                <span className="text-red-500 font-semibold">
                    {comma(selectedOptions.reduce((arr, cur) => {
                        return arr+cur.quantity * cur.price;
                    }, 0 ))}
                </span>
                원
            </span>
        </div>
        <div className="flex align-center m-auto w-80 justify-between">
            {/* 장바구니 담기 버튼 */}
            <Button className="w-10" onClick={addCartReq}>
                <Photo className="w-10" src="/cart.png" />
            </Button>
            <Button className="w-40 h-16 text-xl text-center rounded bg-#ffeb00" 
                onClick={purchase}
            >구매하기</Button>
        </div>
    </div>
}

export default OptionColumn;