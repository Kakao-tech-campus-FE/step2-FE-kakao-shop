import OptionList from "../atoms/OptionList"
import "../../styles/Molecules/OptionColumn.css"
import { useState } from "react"
import Counter from "../atoms/Counter"
import { comma } from "../../utils/convert"
import { useMutation } from "react-query"
import Button from "../atoms/Button"
import { addCart } from "../services/cart"; // Import the addCart function from cart.js

const OptionColumn = ({ product }) => {
    const [selectedOptions, setSelectedOptions] = useState([])

    const handleOnClickOption = (option) => {

        const isOptionSelected = selectedOptions.find(
            (el) => el.optionId === option.id
        )

        if (isOptionSelected) {
            return
        }

        setSelectedOptions((prev) => [
            ...prev,
            {
                optionId: option.id,
                quantity: 1,
                price: option.price,
                name: option.optionName
            }
        ])
    }

    const handleOnChange = (count, optionId) => {
        setSelectedOptions((prev) => {
            return prev.map((el) => {
                if (el.optionId === optionId) {
                    return {
                        ...el,
                        quantity: count,
                    }
                }
                return el;
            })
        })
    }

    const { mutate } = useMutation({
        mutationFn: addCart,
    })

    return (
        <div className="option-column">
            <h3>옵션 선택</h3>
            {/* 옵션 담기 영역 */}
            <OptionList
                options={product.options}

                onClick={handleOnClickOption}
            />
            {/* 담긴 옵션이 표기 */}
            {selectedOptions.map((option) => (
                <ol key={option.id} className="selected-option-list">
                    <li className="selected-option">
                        <Counter
                            onIncrease={(count) => handleOnChange(count, option.id)}
                            onDecrease={(count) => handleOnChange(count, option.id)}
                        />
                        <span className="name">{option.name}</span>
                        <span className="price">{comma(option.price)}원</span>
                    </li>
                </ol>
            ))}
            <hr />
            <div className="total-price">
                <span>
                    총 수량:{" "}
                    {comma(selectedOptions.reduce((acc, cur) => {
                        return acc + cur.quantity
                    }, 0))}
                    개
                </span>
                <span>총 상품금액
                    {comma(selectedOptions.reduce((acc, cur) => {
                        return acc + cur.quantity * cur.price
                    }, 0))}
                    개
                </span>
            </div>
            <div className="button-group">
                <Button
                    onClick={() => {
                        mutate(
                            selectedOptions.map((el) => {
                                return {
                                    optionId: el.id,
                                    quantity: el.quantity
                                }
                            }), {
                            onSuccess: () => {
                                alert("장바구니에 담겼습니다.")
                            },
                            onError: () => {
                                alert("장바구니 담기에 실패했습니다.")
                            }
                        }

                        )
                    }}>

                </Button>
            </div>
        </div>
    )
}

export default OptionColumn