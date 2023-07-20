import {useState} from "react";
import {useMutation} from "react-query";

import Counter from "../atoms/Counter";
import OptionList from "../atoms/OptionList";

import {comma} from "../../utils/convert";
import {addCart} from "../../services/cart";
import {RxCross2} from "react-icons/rx";

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
            console.log("error", error)
            alert(error.response.data.error.message)
        }
    })

    return (
        <div className="option-column h-full w-1/4 p-2 border-l sticky top-20">
            <h3 className={"font-medium text-lg"}>옵션 선택</h3>
            <div className={"overflow-y-auto h-80 pe-3"}>
                <OptionList
                    options={product.options}
                    onClick={handleOnClickOption}/>

                {selectedOption.map((option) => (
                    <ol key={option.id} className="selected-option-list w-full">
                        <li className="selected-option bg-red-100">
                            <div className={"flex flex-row justify-between p-1"}>
                                <span
                                    className="block option-name text-ellipsis text-justify whitespace-nowrap overflow-hidden">{option.optionName}</span>
                                <button className={"delete-button"} onClick={
                                    () => setSelectedOption((prev) => prev.filter((el) => el.id !== option.id))
                                }>
                                    <RxCross2/>
                                </button>
                            </div>
                            <div className={"flex flex-row justify-between p-1"}>
                                <span
                                    className="text-sm block option-price">{comma(option.price * option.quantity)}원</span>
                                <div className={"w-1/3"}>
                                    <Counter
                                        value={option.quantity}
                                        handleOnChange={(count) => handleOnChangeQuantity(count, option.id)}
                                    />
                                </div>
                            </div>
                        </li>
                    </ol>
                ))}
            </div>

            <div className={"button-group bottom-0 relative"}>
                <div className={"total-price"}>
                    <div className={"flex flex-row justify-between px-1"}>
                        <span>
                            총 수량 : {selectedOption.reduce((acc, cur) => acc + cur.quantity, 0)}개
                        </span>
                        <span>총 상품금액 :
                            {comma(selectedOption.reduce((acc, cur) => acc + cur.quantity * cur.price, 0))}원
                        </span>
                    </div>
                </div>

                <button className={"w-full cursor-pointer bg-kakao-yellow rounded-lg py-2"}
                    // onClick={
                    //     () => mutate({
                    //         productId: product.id,
                    //         options: selectedOption.map((option) => {
                    //             return {
                    //                 optionId: option.id,
                    //                 quantity: option.quantity,
                    //             }
                    //         })
                    //     })
                    // }
                        onClick={
                            () => {
                                mutate(selectedOption.map((option) => {
                                    return {
                                        optionId: option.id,
                                        quantity: option.quantity,
                                    }
                                }))
                            }}>
                    장바구니 담기
                </button>
            </div>
        </div>
    )
}

export default OptionColumn;