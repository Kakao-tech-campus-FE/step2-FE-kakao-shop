import { useState } from "react";
import OptionList from "../atoms/OptionList";

const OptionColumn = ({ product }) => {
    const [selectedOptions, setSelectedOptions] = useState([]);

    const handleOnClickOption = (option) => {

        const isOptionSelected = selectedOptions.find(
            (el) => el.optionId === option.id
        );

        // 이미 선택된 옵션이면 수량 증가시킴
        if (isOptionSelected) {
            setSelectedOptions((prev) =>
            prev.map((el) =>
                el.optionId === option.id
                    ? {...el, quantity: el.quantity +1} : el
                    )
                    );
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
    }

    return <div className="option-column">
        <h3>옵션 선택</h3>
        <OptionList
            options={product.options}
            onclick={handleOnClickOption} />
        <hr />
        <div className="total-price">
            <span>총 상품 금액</span>
        </div>
        <div className="button-group"></div>
    </div>
}

export default OptionColumn;