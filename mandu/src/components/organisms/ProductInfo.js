import StarRank from "../atoms/StarRank";
import {priceFormat} from "../../util/Format";
import OptionList from "../molecules/OptionList";
import SelectedOptionList from "../molecules/SelectedOptionList";
import {ElevatedButton, OutlinedButton} from "../atoms/Buttons";
import {useMutation} from "react-query";
import {addInCart} from "../../services/apis";
import {useState} from "react";
import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {convertUrl} from "../../const";

const ProductInfo = ({product, showDialog}) => {
    const {productName, price, starCount, options} = product;

    const [isOptionOpen, setIsOptionOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState([]);
    const userId = useSelector((state) => state.user.id);
    const navigate = useNavigate();


    const cartAddMutation = useMutation(() => addInCart(selectedOption), {
        onSuccess: () => {
            showDialog();
            setSelectedOption([]);
        },
        onError: (error) => {
            alert(error.message);
        },
    });

    const onOptionSelect = (id) => {
        const optionId = Number(id);
        if (isNaN(optionId)) return;
        setSelectedOption((prev) => {
            const index = prev.findIndex((prev) => prev.optionId === optionId);
            if (index === -1) {
                return [...prev, {optionId: optionId, quantity: 1}];
            } else {
                const newOption = [...prev];
                newOption[index] = {...newOption[index]};
                newOption[index].quantity += 1;
                return newOption;
            }
        });
        setIsOptionOpen(false);
    }

    const removeSelectedOption = (id) => {
        setSelectedOption((prev) => prev.filter((prev) => prev.optionId !== id));
    }

    const increaseSelectedCount = (id) => {
        setSelectedOption((prev) => {
            const index = prev.findIndex((prev) => prev.optionId === id);
            if (index === -1) return prev;
            const newOption = [...prev];
            newOption[index] = {...newOption[index]};
            newOption[index].quantity += 1;
            return newOption;
        });
    }

    const decreaseSelectedCount = (id) => {
        setSelectedOption((prev) => {
            const index = prev.findIndex((prev) => prev.optionId === id);
            if (index === -1 || prev[index].quantity < 2) return prev;
            const newOption = [...prev];
            newOption[index] = {...newOption[index]};
            newOption[index].quantity -= 1;
            return newOption;
        });
    }

    const onAddInCart = (e) => {
        if (!userId) return alert("로그인이 필요합니다.");
        e.preventDefault();
        cartAddMutation.mutate();
    }

    const onPurchase = (e) => {
        if (!userId) return alert("로그인이 필요합니다.");
        e.preventDefault();
        navigate(convertUrl("/payment"));
    }

    return (
        <div className="mx-8 w-96">
            <StarRank rank={starCount}/>
            <h1 className="text-2xl">{productName}</h1>
            <h1 className="text-2xl font-bold">{priceFormat(price)}원</h1>
            <div className="my-8">
                <h1 className="text-lg font-bold">상품 옵션 선택</h1>
                <div className="w-full border-2 border-gray-500">
                    <div>
                        <button id="option-show-btn" className="w-full bg-gray-100 flex p-3 justify-between"
                                onClick={() => setIsOptionOpen((prev) => !prev)}>
                            <p>상품 옵션을 선택해 주세요</p>
                            <span>{isOptionOpen ? "△" : "▽"}</span>
                        </button>
                        {isOptionOpen && <OptionList options={options} onSelected={onOptionSelect}/>}
                    </div>
                </div>
            </div>
            {selectedOption.length !== 0 &&
                <>
                    <div className="my-8">
                        <h1 className="text-lg font-bold">선택된 옵션</h1>
                        <div className="w-full ">
                            <SelectedOptionList rawOptions={options} selectedOptions={selectedOption}
                                                onIncrease={increaseSelectedCount}
                                                onDecrease={decreaseSelectedCount}
                                                onRemove={removeSelectedOption}
                            />
                        </div>
                    </div>
                    <div className="flex">
                        <OutlinedButton
                            id="add-cart-btn"
                            className="mr-2"
                            onClick={onAddInCart}
                            disabled={cartAddMutation.isLoading}>
                            장바구니 담기
                        </OutlinedButton>
                        <ElevatedButton className="bg-amber-300" onClick={onPurchase}>바로 구매하기</ElevatedButton>
                    </div>
                </>
            }
        </div>
    );
};

export default ProductInfo;