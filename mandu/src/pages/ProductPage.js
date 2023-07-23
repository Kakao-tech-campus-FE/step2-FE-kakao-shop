import {useRef, useState} from "react";
import {Link, useParams} from "react-router-dom";
import {useMutation, useQuery} from "react-query";
import {addInCart, getDetailProduct} from "../services/apis";
import LoadingPage from "./LoadingPage";
import ErrorPage from "./ErrorPage";
import StarRank from "../components/atoms/StarRank";
import OptionList from "../components/molecules/OptionList";
import SelectedOptionList from "../components/molecules/SelectedOptionList";
import ElevatedButton from "../components/atoms/Buttons";
import {useSelector} from "react-redux";

const ProductPage = () => {
    const {productId} = useParams();
    const [isOptionOpen, setIsOptionOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState([]);
    const modalRef = useRef();
    const userId = useSelector((state) => state.user.id);

    const {
        isLoading,
        isError,
        data,
        error
    } = useQuery(['product', productId], () => getDetailProduct(productId), {retry: 1});

    const cartAddMutation = useMutation(() => addInCart(selectedOption), {
        onSuccess: () => {
            modalRef.current.showModal();
            setSelectedOption([]);
        },
        onError: (error) => {
            alert(error.response.data.message);
        },
    });

    const onOptionSelect = (id) => {
        const optionId = Number(id);
        console.log("name", optionId)
        console.log("isNaN(name)", isNaN(optionId))
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
        console.log("onAddInCart");
        if (!userId) return alert("로그인이 필요합니다.");
        e.preventDefault();
        cartAddMutation.mutate();
    }

    if (isLoading) return <LoadingPage/>
    if (isError) return <ErrorPage error={error}/>

    const {productName, image, price, starCount, options} = data;

    return (
        <div className="flex py-10 flex-wrap justify-center">
            <div className="mx-8 w-96">
                <div className="h-96 border-2 overflow-hidden">
                    <img src={process.env.REACT_APP_API_URL + image} alt=""/>
                </div>
            </div>
            <div className="mx-8 w-96">
                <StarRank rank={starCount}/>
                <h1 className="text-2xl">{productName}</h1>
                <h1 className="text-2xl font-bold">{Number(price).toLocaleString()}원</h1>
                <div className="my-8">
                    <h1 className="text-lg font-bold">상품 옵션 선택</h1>
                    <div className="w-full border-2 border-gray-500">
                        <div>
                            <button className="w-full bg-gray-100 flex p-3 justify-between"
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
                        <ElevatedButton
                            className="bg-amber-300"
                            onClick={onAddInCart}
                            disabled={cartAddMutation.isLoading}>
                            장바구니 담기
                        </ElevatedButton>
                    </>
                }
            </div>
            <dialog ref={modalRef}>
                <div className="w-72">
                    <div className="text-md">장바구니에 추가되었습니다.</div>
                    <div className="text-md pb-4">장바구니로 이동하시겠습니까?</div>
                    <div className="flex">
                        <button onClick={() => modalRef.current.close()} className="flex-grow py-1">
                            취소
                        </button>
                        <div className="bg-gray-600 w-0.5"></div>
                        <Link to="/cart" className="flex-grow py-1 text-gray-800 font-bold text-center">
                            이동
                        </Link>
                    </div>
                </div>
            </dialog>
        </div>
    );
}

export default ProductPage;
