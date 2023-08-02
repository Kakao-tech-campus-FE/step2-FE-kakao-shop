import { useMutation } from "@tanstack/react-query";
import { comma } from "../../utils/convert";
import { order } from "../../services/order";
import { useNavigate } from "react-router-dom";
import { useState, useRef } from "react";

const OrderTemplate = ({ data }) => {
  const [selectedItem, setSelectedItem] = useState("");

  const handleSelectChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedItem(event.target.value);

    if (selectedValue === "item1") {
      const selectElement = event.target;
      const item1Option = Array.from(selectElement.options).find((option) => option.value === "item1");
      if (item1Option) {
        item1Option.disabled = true;
      }
    }
  };

  const getPlaceholderText = () => {
    switch (selectedItem) {
      case "item2":
        return "배송전 연락바랍니다.";
      case "item3":
        return "부재시 경비실에 맡겨주세요.";
      case "item4":
        return "부재시 연락주세요.";
      case "item5":
        return "직접입력";
      default:
        return "배송 요청사항을 입력해주세요 (최대 50자)";
    }
  };

  const handleOrderButtonClick = () => {
    // 동의가 이뤄지지 않았을 경우 처리
    if (agreePayment === false || agreePolicy === false) {
      alert("동의가 이뤄지지 않았습니다.");
      return;
    }

    // POST: /orders/save
    // DB: 장바구니에 있는 모든 항목이 결제로 저장
    // 장바구니는 비워짐
    // 페이지 이동 -> 주문완료 페이지(리턴 받은 주문 아이디)
    // /orders/complete/:id

    mutate(null, {
      onError: (error) => {
        // console.log(error);
        // alert("주문에 실패하였습니다.");
        if (error.response.status === 404) {
          // 엉뚱한 product 정보
          navigate("/error");
        } else {
          // 서버사이드 에러
          alert("주문에 실패하였습니다. 다시 시도해주세요.");
        }
      },
      onSuccess: (res) => {
        console.log(res.data.response.id);
        const { id } = res.data.response;
        alert("주문이 완료되었습니다.");
        navigate(`/orders/${id}`);
      },
    });
  };

  // 사용자의 장바구니 목록을 조회해서 보여주는 것
  const { products, totalPrice } = data?.data?.response ?? {};
  const navigate = useNavigate();

  const [agreePayment, setAgreePayment] = useState(false);
  const [agreePolicy, setAgreePolicy] = useState(false);

  const handleAllAgree = (e) => {
    const value = e.target.checked;

    setAgreePayment(value);
    setAgreePolicy(value);
  };

  const handleAgreement = (e) => {
    const { name, checked } = e.target;

    if (name === "payment-agree") {
      setAgreePayment(checked);
    } else if (name === "policy-agree") {
      setAgreePolicy(checked);
    }
  };

  const { mutate } = useMutation({
    mutationKey: ["order"],
    mutationFn: order,
  });

  const OrderItems = () => {
    let renderComponent = [];

    // forEach, map 동기 함수
    if (products && Array.isArray(products)) {
      products.forEach((item) => {
        renderComponent.push(
          item.carts.map((cart) => {
            return (
              <div key={cart.id} className='border-t bg-white p-4'>
                <div className='produce-name font-bold'>
                  <span>{`${item.productName} - ${item.carts[0].option.optionName}`}</span>
                </div>
                <div className='quantity'>
                  <span>{comma(cart.quantity)}개</span>
                </div>

                <div className='price font-bold'>
                  <span>{comma(cart.price * cart.quantity)}원</span>
                </div>
              </div>
            );
          })
        );
      });
    }

    return renderComponent;
  };

  return (
    <div className='bg-kakao_gray py-10'>
      <div className='mx-auto flex w-[100%] max-w-[1024px] flex-col gap-4 '>
        <div className='border bg-white'>
          <h1 className='p-2 text-center text-base font-extrabold'>주문하기</h1>
          <div className=' border-t p-4'>
            <div>
              <span className='mr-2 text-xl font-extrabold'>배송지 정보</span>
              <span>(kakao 계정 제공)</span>
            </div>

            <div className='mt-3 flex flex-col'>
              <div>
                <span className='mr-3 text-xl font-extrabold'>박지호</span>
                <span className='rounded-md bg-blue-100 p-2 text-xs text-blue-400'>박지호</span>
              </div>
              <span> 010-0000-0000 </span>
              <span> 부산광역시 남구 문현동 000-00 </span>
            </div>

            <div className='flex flex-col gap-2 '>
              <label>배송 요청사항 선택</label>
              <select
                className='rounded border border-r-4 p-2 text-sm'
                value={selectedItem}
                onChange={handleSelectChange}
              >
                <option value='item1'>배송 요청사항을 선택해주세요.</option>
                <option value='item2'>배송전 연락바랍니다.</option>
                <option value='item3'>부재시 경비실에 맡겨주세요.</option>
                <option value='item4'>부재시 연락주세요.</option>
                <option value='item5'>직접입력</option>
              </select>
              <textarea
                className='h-[75px] rounded border border-r-4 p-2 text-sm'
                type='text'
                placeholder={getPlaceholderText()}
              />
            </div>
          </div>
        </div>

        <div className='border bg-white '>
          <h2 className='p-4 text-xl font-bold'>주문상품 정보</h2>
          <OrderItems />
        </div>
        {/* 각 주문의 정보 */}

        {/* 총 주문금액 */}
        <div className='flex items-center justify-between border bg-white p-4'>
          <h3 className='text-lx font-bold'>총 주문 금액</h3>
          <span className='price text-xl text-kakao_blue'>{comma(totalPrice)}원</span>
        </div>
        {/* 전체 동의, 구매조건 확인 및 결제 진행 동의 */}
        <div className='flex flex-col gap-4 border bg-white p-4'>
          <div className='flex gap-2'>
            <input
              type='checkbox'
              id='all-agree'
              name='all-agree'
              checked={agreePayment && agreePolicy}
              onChange={handleAllAgree}
            />
            <label htmlFor='all-agree' className='text-x1 font-bold'>
              전체 동의
            </label>
          </div>
          <div className='flex gap-2'>
            <input type='checkbox' id='agree' name='payment-agree' checked={agreePayment} onChange={handleAgreement} />
            <label htmlFor='agree' className='text-sm'>
              구매조건 확인 및 결제 진행 동의
            </label>
          </div>
          <div className='flex gap-2'>
            <input type='checkbox' id='policy' name='policy-agree' checked={agreePolicy} onChange={handleAgreement} />
            <label htmlFor='policy' className='text-sm'>
              개인정보 제 3자 제공동의
            </label>
          </div>

          {/* 결제하기 버튼 */}
          <button
            onClick={handleOrderButtonClick}
            className={`w-full rounded p-4 font-medium ${
              agreePayment && agreePolicy ? " bg-kakao_yellow text-black" : " bg-gray-300 text-gray-500"
            }`}
          >
            결제하기
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderTemplate;
