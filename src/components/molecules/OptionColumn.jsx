import { useState, useEffect } from "react";
import { comma } from "../../utils/convert";
import { useMutation } from "react-query";
import { addCart } from "../../services/cart";
import { useNavigate } from "react-router";
import styles from "./OptionColumn.module.css";

import Counter from "../atoms/Counter";
import OptionList from "../atoms/OptionList";

const OptionColumn = ({ product }) => {
    const cartUpdateMutation = useMutation({
        mutationFn: (data) => addCart(data),
        onSuccess: () => {
            alert("장바구니에 담겼습니다.");
            // navigate("/cart");
        },
        onError: () => {
            alert("장바구니 담기에 실패했습니다.");
        } 
    });
    const [selectedOptions, setSelectedOptions] = useState([]);
    const [totalCount, setTotalCount] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);
    const navigate = useNavigate();



    useEffect(() => {
        console.log('selectedOptions', selectedOptions);
        const totalValue = selectedOptions.reduce((acc, curr) => {
            acc.totalCount += curr.quantity;
            acc.totalPrice += curr.price * curr.quantity;
            return acc;
        }, {totalCount: 0, totalPrice: 0});

        setTotalCount(totalValue.totalCount);
        setTotalPrice(totalValue.totalPrice);
    }, [selectedOptions]);  

    const handleOnClickOption = (option) => {
        // 이미 선택된 옵션인지 확인
        const isSelectedOption = selectedOptions.find(
            (selectedOption) => selectedOption.optionId === option.id
        );

        if(isSelectedOption) {
            alert("이미 선택된 옵션입니다.");
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
        ]);
    }

    const handleOnChange = (value, optionId) => { // TODO: 덜 복잡하게 수정
        setSelectedOptions(prev => {
            return prev.map(el => {
                if(el.optionId === optionId){
                    return {
                        ...el,
                        quantity: value,
                    }
                }
                return el;
            })
        })
    }

    

    return (
        <div className={styles.option_column}>
            <div className={styles.product_option}>
                <span>옵션 선택</span>
                <OptionList
                    options={product.options}
                    onClick={handleOnClickOption}/>
                <div className={styles.ship_info}>
                    <div>
                        <span><strong>배송방법</strong></span>
                        <span> 택배배송</span>
                    </div>
                    <div>
                        <span><strong>배송비</strong></span>
                        <input value={"무료배송"} disabled/>
                        <span>제주 추가 {comma(3000)}원, 제주 외 도서지역 추가 {comma(6000)}원</span>
                    </div>
                </div>
                <ol className={styles.selected_option_list}>
                    {selectedOptions.map((option) => (
                        <li key={`selected-option-key-${option.optionId}`}>
                            <span>선택한 상품 : {option.name}</span>
                            <div>
                                <Counter
                                    onChange={(count) => handleOnChange(count, option.optionId)}
                                />
                            </div>
                        </li>
                    ))}
                </ol>
                <div className={styles.selection_result}>
                    <div className={styles.result_count}>총 수량 : {totalCount} 개</div>
                    <div className={styles.result_price}>총 주문금액 : <strong>{comma(totalPrice)}</strong> 원</div>
                </div>
                <div className={styles.button_group}>
                    <button
                        className={styles.cart_button}
                        onClick={() => {
                            cartUpdateMutation.mutate(selectedOptions.map(el => {
                                return {
                                    optionId: el.optionId,
                                    quantity: el.quantity,
                                };
                            }));
                        }}
                    >장바구니 담기</button>
                    <button
                        className={styles.talkdeal_button}
                        onClick={() => {
                            navigate("/order");
                        }}
                    >톡딜가로 구매하기</button>
                </div>
            </div>
        </div>
    )
}

export default OptionColumn;