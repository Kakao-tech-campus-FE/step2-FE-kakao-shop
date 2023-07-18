import { useState } from "react";
import OptionList from "../atoms/OptionList";
import { comma } from "../../utils/convert";
import Counter from "../atoms/Counter";
import { useMutation } from "react-query";
import { addCart } from "../../services/cart";
import Button from "../atoms/Button";

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
                        // quantity: stableValueHash,
                    };
                }
                return el;
            });
        });
    }

    const { mutate } = useMutation({
        mutationFn: addCart,
    });



    return (
    <div className="option-column">
        <h3>옵션 선택</h3>
        <OptionList
            options={product.options}
            onclick={handleOnClickOption} />
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
            <ol key={option.id} className="selected-option-list">
                <li className="slected-option">
                    <Counter 
                        onIncrease={(count) => handleOnChange(count, option.id)}
                        onDecrease={(count) => handleOnChange(count, option.id)}
                    />
                    <span className="name">{option.name}</span>
                    <span className="price">{comma(option.price)}원</span>
                </li>
            </ol>
        ))}
        <div className="button-group">
            <Button
                onClick={() => {
                    mutate(
                        selectedOptions.map((el) => {
                            return {
                                optionId: el.id,
                                quantity: el.quantity,
                            };
                        }), {
                            onSuccess: () => {
                                alert("장바구니에 담겼습니다.")

                            },
                            onError: () => {
                                alert("장바구니 담기에 실패했습니다.")

                            }
                        }
                    );
                }}
                ></Button>
        </div>
    </div>)
}

export default OptionColumn;