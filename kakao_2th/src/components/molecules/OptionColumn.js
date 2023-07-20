import "../../styles/Molecules/OptionColumn.css"
import React, { useState } from "react";
import OptionList from "../atoms/OptionList";
import Counter from "../atoms/Counter";
import { comma } from "../../utils/convert";
import Button from "../atoms/Button";
import { useMutation } from "react-query";
import { addCart } from '../../services/cart';

const OptionColumn = ({ product }) => {
    const [selectedOptions, setSelectedOptions] = useState([]);

    const handleOnClickOption = (option) => {
        const isOptionSelected = selectedOptions.find((el) => el.optionId === option.id);

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
            },
        ]);
    };

    const handleOnChange = (count, optionId) => {
        setSelectedOptions((prev) =>
            prev.map((el) =>
                el.optionId === optionId
                    ? {
                        ...el,
                        quantity: count,
                    }
                    : el
            )
        );
    };

    const { mutate, isLoading, isError } = useMutation(addCart, {
        onSuccess: () => {
            alert("장바구니에 담겼습니다.");
        },
        onError: () => {
            alert("장바구니 담기에 실패했습니다.");
        },
    });

    return (
        <div className="option-column">
            <h3>옵션 선택</h3>
            <OptionList options={product.options} onClick={handleOnClickOption} />
            {selectedOptions.map((option) => (
                <ol key={option.optionId} className="selected-option-list">
                    <li className="selected-option">
                        <Counter
                            onIncrease={(count) => handleOnChange(count, option.optionId)}
                            onDecrease={(count) => handleOnChange(count, option.optionId)}
                        />
                        <span className="name">{option.name}</span>
                        <span className="price">{comma(option.price)}원</span>
                    </li>
                </ol>
            ))}
            <hr />
            <div className="total-price">
                <span>
                    총 수량: {comma(selectedOptions.reduce((acc, cur) => acc + cur.quantity, 0))}개
                </span>
                <span>
                    총 상품금액:{" "}
                    {comma(
                        selectedOptions.reduce((acc, cur) => acc + cur.quantity * cur.price, 0)
                    )}원
                </span>
            </div>
            <div className="button-group">
                <Button
                    onClick={() => {
                        mutate(
                            selectedOptions.map((el) => ({
                                optionId: el.optionId,
                                quantity: el.quantity,
                            }))
                        );
                    }}
                    disabled={isLoading}
                >
                    {isLoading ? "처리 중..." : "장바구니 담기"}
                </Button>
                {isError && <div>에러가 발생했습니다.</div>}
            </div>
        </div>
    );
};

export default OptionColumn;
