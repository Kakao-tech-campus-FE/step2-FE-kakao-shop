import { useEffect, useState } from "react";
import OptionList from "../atoms/OptionList";
import { comma } from "../../utils/convert";
import Counter from "../atoms/Counter";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AiOutlineClose } from "react-icons/ai";
import { BiCart } from "react-icons/bi";
import { useMutation } from "@tanstack/react-query";
import { addCart } from "../../apis/cart";
import { useSelector } from "react-redux";
import Modal from "../moleclules/Modal";
import { useNavigate } from "react-router-dom";

const OptionColumn = ({ product }) => {
  const email = useSelector((state) => state.user.email);
  const navigate = useNavigate();

  const [modal, setModal] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [optionMenu, setOptionMenu] = useState(true);

  const handleOnClickOption = (option) => {
    const isOptionSelected = selectedOptions.find(
      (el) => el.optionId === option.id
    );

    if (isOptionSelected) {
      setToastMessage("이미 선택된 옵션입니다.");
      return;
    }

    setOptionMenu(false);

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
    setSelectedOptions((prev) => {
      return prev.map((el) => {
        if (el.optionId === optionId) {
          return {
            ...el,
            quantity: count,
          };
        }
        return el;
      });
    });
  };

  const handleOptionDelete = (optionId) => {
    setSelectedOptions((prev) => {
      return prev.filter((option) => option.optionId !== optionId);
    });
  };

  useEffect(() => {
    if (toastMessage) {
      toast(toastMessage);
    }
  }, [toastMessage]);

  const { mutate } = useMutation({
    mutationFn: addCart,
  });

  return (
    <>
      <div className="mt-3 w-auto border-t px-4 pt-7 lg:mt-0 lg:h-screen lg:w-[28%] lg:border-l lg:border-t-0 lg:border-gray-300 lg:px-0 lg:pl-7">
        <div className="overflow-y-auto">
          <h3 className="ml-1 text-[17px] font-extrabold">옵션 선택</h3>
          <OptionList
            options={product.options}
            onClick={handleOnClickOption}
            optionMenu={optionMenu}
            setOptionMenu={setOptionMenu}
          />
          {selectedOptions.map((option) => (
            <ol key={option.optionId}>
              <li className="relative my-2 bg-gray-50 p-4 text-[#111] ">
                <p className="mb-4 pr-4 text-sm">{option.name}</p>
                <button
                  className="absolute right-3 top-3 text-lg text-gray-400"
                  onClick={() => {
                    handleOptionDelete(option.optionId);
                  }}
                >
                  <AiOutlineClose />
                </button>
                <div className="flex justify-between">
                  <Counter
                    value={option.quantity}
                    onIncrease={(count) =>
                      handleOnChange(count, option.optionId)
                    }
                    onDecrease={(count) =>
                      handleOnChange(count, option.optionId)
                    }
                  />
                  <span>{comma(option.price * option.quantity)}원</span>
                </div>
              </li>
            </ol>
          ))}
        </div>
        <div className="mt-8">
          <div className="mb-3 flex">
            <div className="w-[70px] text-sm font-bold">배송방법</div>{" "}
            <div className="text-sm">택배배송</div>
          </div>
          <div className="flex items-center">
            <div className="w-[70px] text-sm font-bold">배송비</div>
            <div className="flex-1 border border-gray-200 bg-gray-50 px-2 py-1 text-sm text-gray-500">
              무료
            </div>
          </div>
          <p className="mb-2 p-3 text-end text-xs text-gray-400">
            제주 추가 3,000원, 제주 외 도서지역 추가 6,000원
          </p>
        </div>
        <hr />
        <div className="mt-4 flex justify-between">
          <span className="text-lg">
            총 수량{" "}
            {selectedOptions?.reduce((acc, cur) => (acc += cur.quantity), 0)}개
          </span>
          <span className="text-lg">
            총 주문금액
            <span className="font-bold text-[#ff5959]">
              {" "}
              {comma(
                selectedOptions?.reduce(
                  (acc, cur) => (acc += cur.price * cur.quantity),
                  0
                )
              )}
            </span>{" "}
            원
          </span>
        </div>
        <div className="my-5 flex w-full">
          <button
            className="flex h-[60px] w-1/4 items-center justify-center rounded-lg bg-black"
            onClick={() => {
              if (!selectedOptions.length) {
                setToastMessage("옵션을 먼저 선택해주세요.");
                return;
              }
              if (email) {
                mutate(
                  selectedOptions.map((el) => {
                    return {
                      optionId: el.optionId,
                      quantity: el.quantity,
                    };
                  }),
                  {
                    onSuccess: () => {
                      setToastMessage("장바구니에 상품이 담겼습니다.");
                    },
                    onError: () => {
                      alert("장바구니 담기에 실패했습니다.");
                    },
                  }
                );
              } else {
                setModal(true);
              }
            }}
          >
            <BiCart color="white" size="40" />
          </button>
          <button className="ml-2 h-[60px] w-3/4 rounded-lg bg-kakao text-[17px]">
            톡딜가로 구매하기
          </button>
        </div>
      </div>
      <ToastContainer
        position="bottom-center"
        autoClose={3000}
        hideProgressBar={true}
        newestOnTop={true}
        closeButton={false}
        pauseOnFocusLoss={false}
        theme="dark"
        style={{
          width: "60%",
        }}
      />
      {modal && (
        <Modal
          contentText={"로그인이 필요한 메뉴입니다."}
          type={"two"}
          buttonText={"로그인"}
          secondButton={"취소"}
          onClick={() => {
            navigate("/login");
          }}
          setModal={setModal}
        ></Modal>
      )}
    </>
  );
};

export default OptionColumn;
