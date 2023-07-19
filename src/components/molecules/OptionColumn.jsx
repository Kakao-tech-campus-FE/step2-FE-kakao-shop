import {useState} from "react";
import {useMutation} from "react-query";

import Counter from "../atoms/Counter";
import Button from "../atoms/Button";
import OptionList from "../atoms/OptionList";

import {comma} from "../../utils/convert";
import {addCart} from "../../services/cart";

const OptionColumn = ({product}) => {
    const [selectedOption, setSelectedOption] = useState([]);

    const handleOnClickOption = (option) => {
        console.log("option", option)
        if (selectedOption.find((el) => el.id === option.id)) {
            setSelectedOption((prev) => {
                return prev.map((el) => {
                    if (el.id === option.id) {
                        console.log("이미 선택된 옵션입니다", el)
                    }
                    return el;
                })
            })
            return;
        }

        setSelectedOption((prev) => [
            ...prev,
            {
                id: option.id,
                quantity: 1,
                price: option.price,
                optionName: option.optionName,
            }
        ])
    }

    const handleOnChangeQuantity = (value, optionId) => {
        setSelectedOption((prev) => {
            return prev.map((el) => {
                if (el.id === optionId) {
                    return {
                        ...el,
                        quantity: value,
                    }
                } else {
                    return el;
                }
            })
        })
    }

    const {mutate} = useMutation({
        mutationFn: addCart,
        onSuccess: () => {
            alert("장바구니에 추가되었습니다.")
        },
        onError: (error) => {
            alert(error.response.data.message)
        }
    })

    return (
        <div className="option-column">
            <h3>옵션 선택</h3>

            <OptionList
                options={product.options}
                // 사용자가 선택한 옵션
                onClick={handleOnClickOption}/>
            <hr/>
            <div className={"total-price"}>
                <button onClick={
                    () => {
                        console.log("selectedOption", selectedOption)
                    }
                }>
                    selected?
                </button>
                <span>
                    총 수량 : {selectedOption.reduce((acc, cur) => acc + cur.quantity, 0)}개
                </span>
                <span>총 상품금액 :
                    {comma(selectedOption.reduce((acc, cur) => acc + cur.quantity * cur.price, 0))}원
                </span>
            </div>

            {selectedOption.map((option) => (
                <ol key={option.id} className="selected-option-list">
                    <li className="selected-option">
                        <Counter
                            value={option.quantity}
                            handleOnChange={(count) => handleOnChangeQuantity(count, option.id)}
                        />
                        <span className="option-name">{option.optionName}</span>
                        <span className="option-price">{comma(option.price * option.quantity)}원</span>
                    </li>
                </ol>
            ))}

            <div className={"button-group"}>
                <Button
                    onClick={
                        () => mutate({
                            productId: product.id,
                            options: selectedOption.map((option) => {
                                return {
                                    optionId: option.id,
                                    quantity: option.quantity,
                                }
                            })
                        })}>
                    장바구니 담기
                </Button>
            </div>
        </div>
    )
}

export default OptionColumn;