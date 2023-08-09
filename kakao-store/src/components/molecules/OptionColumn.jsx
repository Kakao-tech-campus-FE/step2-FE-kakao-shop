import { useState } from "react"
import OptionList from "../atoms/OptionList";
import { comma } from "../../utils/convert";
import Counter from "../atoms/Counter";
import { useMutation } from "react-query";
import Button from "../atoms/Button";
import { addCart } from "../../apis/cart";

const OptionColumn = ({ product }) => {
    const [selectedOptions, setSelectedOptions] = useState([]);

    const handleOnClickOption = (option) => {
        // 이미 선택한 옵션인지 확인
        const isOptionSelected = selectedOptions.find(
            (selectedOption) => selectedOption.optionId === option.id
        );

        if(isOptionSelected) {
            return ;
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

    const handleOnChange = (count, optionId) => {
        setSelectedOptions((prev) => {
            return prev.map((el) => {
                if(el.optionId === optionId) {
                    return {
                        ...el,
                        quantity: count,
                    };
                }
                return el;
            });
        })
    }

    // 장바구니 담기 api 처리
    const { mutate } = useMutation({
        mutationFn: addCart,
    })

    return (
        <div className="w-[400px]">
            <h3>옵션 선택</h3>
            {/* 옵션 담기를 할 수 있는 영역 */}
            <OptionList
                options={product.options}
                // 사용자가 선택한 option
                onClick={handleOnClickOption}
            />
            <div className="my-4">
                <hr />
            </div>
            {/* 담긴 옵션이 표기 */}
            {selectedOptions.map((option) => (
                <ol key={option.id} className="p-2 m-2 border">
                    <li className="w-[350px]">
                        <div className="truncate">{option.name}</div>
                        <Counter
                            initCount={1}
                            onIncrease={(count) => handleOnChange(count, option.optionId)}
                            onDecrease={(count) => handleOnChange(count, option.optionId)}
                        />
                        <span className="mx-2">{comma(option.price)}원</span>
                    </li>
                </ol>
            ))}
            <hr />
            <div className="p-2 mt-2 mx-2 w-[350px]">
                <span>
                    총 수량 : {" "}
                    {selectedOptions.reduce((acc, cur) => {
                        // acc: 이전 값
                        // cur: 현재 선택된 엘리먼트
                        return acc + cur.quantity;
                    }, 0)}개
                </span>
                <span className="float-right">
                    총 상품금액 : {" "}
                    {comma(selectedOptions.reduce((acc, cur) => {
                        return acc + cur.quantity * cur.price;
                    }, 0))}원
                </span>
            </div>
            <div>
                {/* 장바구니 담기 버튼 */}
                <Button className="p-2 mx-2 border w-[170px] bg-yellow-300 justify-center inline-flex" onClick={() => {
                    mutate(selectedOptions.map(el => {
                        return {
                            optionId: el.optionId,
                            quantity: el.quantity,
                        };
                    }), {
                        onSuccess: () => {
                            alert("장바구니에 담겼습니다.");
                        },
                        onError: () => {
                            alert("장바구니 담기에 실패했습니다.");
                        }
                    }
                    );
                }}>
                장바구니 담기
                </Button>
                {/* 톡딜가 구매: 개발 X */}
                {/* 구매 버튼 */}
                <Button className="p-2 mx-2 border w-[170px] bg-yellow-300 flex justify-center inline-flex" onClick={() => {
                    // 구매
                }}>
                즉시 구매
                </Button>
            </div>
        </div>
    );
}

export default OptionColumn;