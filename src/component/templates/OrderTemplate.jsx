import { useMutation, useQuery } from "react-query";
import { getCart } from "../../services/addCart";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const staticServerUrl = "https://user-app.krampoline.com/k9d43d0d3ffc5a/"

const OrderTemplate=({data})=>{
  const products = data?.data?.response?.products;
  const totalPrice = data?.data?.response?.totalPrice;
  const navigate = useNavigate();
  const route = useNavigate();
    //const [allAgree, setAllAgree] = useState(false);
    const [agreePayment, setAgreePayment] = useState(false);
    const [agreePolicy, setAgreePolicy] = useState(false);
    console.log(data);


const allAgreeRef = useRef(null);
const agreePaymentRef = useRef(null);
const agreePolicyRef = useRef(null);

    const handleAllAgree=(e)=>{
        console.log(e.target.checked);
        const value =e.target.checked;
        setAgreePayment(value);
        setAgreePolicy(value);
    }
    const handleAgreement = (e) => {
        const {name, checked} = e.target;

        if (name === "payment-agree"){
            setAgreePayment(checked);
        } else if (name === "policy-agree"){
            setAgreePolicy(checked);
        }
    }


    const {mutate} = useMutation({
      mutationFn: order,
    })
    //상품명 적절히 표기
    //그에ㄸ라 가격, 수량

    //products 안에 있는 item
    //`${item.productName} = ${item.carts[0].option.optionName}`
    //1개당 가격: item.carts[0].price * item.carts[0].quantity

    const OrderItems = ()=> {
      return products?.map((item) => {
        // 해당 상품의 모든 옵션의 상품 수량이 0이라면 표현하지 않는다
        if (!item?.carts.every((option) => option.quantity === 0))
            //item: 각 상품, carts: 옵션이 담김 {
              return (
                <div key={item.id} className="border rounded bg-white p-4 my-2">
                  {item.carts.map((option) => {
                    // 수량이 0인 옵션은 표현하지 않는다
                    if (option.quantity !== 0) {
                      return (
                        <div className="flex items-center gap-3 py-2" key={option.id}>
                          <img
                            className="w-[80px] h-[80px] border rounded-lg"
                            src={`${staticServerUrl}/images/${item.id}.jpg`}
                            alt=""
                          />
                          <div className="product-info">
                            <div className="product-name-option-quantity">
                              <p className="font-semibold">{item.productName}</p>
                              <span className="text-sm">
                                [옵션] {option.option.optionName},{" "}
                              </span>
                              <span>{option.quantity}개</span>
                            </div>
                            <div className="price">
                              <p className="text-[17px] font-bold">
                                {comma(option.price)}원
                              </p>
                            </div>
                          </div>
                        </div>
                      );
                    }
                  })}
                  <hr />
                  <div className="pt-4 text-center text-blue-500">
                    <BsTruck className="inline text-2xl" />
                    <span className="px-1 font-bold">무료배송</span>
                  </div>
                </div>
              );
          });
        };
 
        if (!!!products) return <ErrorTypo />;
        return (
          <div className="pt-[15px] pb-[50px] bg-[#F4F4F4] bg-opacity-70">
            <div className="block mx-auto max-w-[870px] w-full ">
              <div className="border rounded py-4 text-center bg-white">
                <h1 className="text-xl font-bold">주문하기</h1>
              </div>
              {products.length === 0 ? (
                <div className="ship-info-not-found border rounded my-2 bg-white">
                  <div className="h-[600px] min-h-fit flex flex-col items-center justify-center">
                    <BsFillQuestionSquareFill className="text-8xl text-neutral-400" />
                    <p className="mt-10 mb-6 text-2xl text-neutral-600">
                      주문할 상품이 존재하지 않습니다.
                    </p>
                    <div className="flex w-fit mx-auto my-4">
                      <button
                        className="w-[100px] mx-2 px-3 py-2 rounded border border-neutral-300 bg-white"
                        onClick={() => route(-1)}
                      >
                        <span className="text-sm text-black">이전화면</span>
                      </button>
                      <button
                        className="w-[100px] mx-2 px-3 py-2 rounded bg-black"
                        onClick={() => route("/")}
                      >
                        <span className="text-sm text-white">쇼핑하기 홈</span>
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                <div>
                  <div className="ship-info border rounded my-2 bg-white">
                    <div className=" p-4 pb-3">
                      <h1 className="text-xl font-bold">배송지 정보</h1>
                    </div>
                    <div className="user-ship-info flex flex-col gap-2 px-4 pb-4">
                      <div className="">
                        <h1 className="flex items-center gap-2 text-lg font-bold">
                          홍길동
                          <span className=" text-blue-400 bg-blue-100 rounded text-xs p-1">
                            기본 배송지
                          </span>
                        </h1>
                      </div>
                      <div className="text-[15px]">
                        <span>010-0000-0000</span>
                      </div>
                      <div className="text-[14px]">
                        <span>서울특별시 도곡동 000-00</span>
                      </div>
                      <textarea
                        className="border rounded h-16 p-3"
                        placeholder="배송시 요청사항을 입력해주세요 (최대 50자)"
                      />
                    </div>
                  </div>
                  {/* 각 주문의 정보 */}
                  <div className="border rounded p-4 bg-white">
                    <span className="text-lg font-bold">주문상품 정보 </span>
                    {/* <span className="font">(총 `${}`개)</span> */}
                  </div>
                  <OrderItems />
                  {/* 총 주문 금액 */}
                  <div className="flex items-center justify-between border p-4 bg-white">
                    <span className="text-xl font-bold">총 주문 금액</span>
                    <span className="price text-xl font-bold">
                      {comma(totalPrice)}원
                    </span>
                  </div>
                  {/* 전체 동의, 구매조건 확인 및 결제 진행 동의 */}
                  <div className="flex flex-col gap-4 border rounded my-2 p-4 bg-white">
                    <div className="flex items-center gap-2">
                      <input
                        className="h-5 w-5"
                        type="checkbox"
                        id="all-agree"
                        ref={allAgreeRef}
                        checked={agreePayment && agreePolicy}
                        onChange={handleAllAgree}
                      />
                      <label htmlFor="all-agree" className="text-lg font-bold">
                        전체 동의
                      </label>
                    </div>
                    <hr />
                    <div className="flex items-center gap-2">
                      <input
                        className="h-5 w-5"
                        type="checkbox"
                        id="agree"
                        ref={agreePaymentRef}
                        checked={agreePayment}
                        name="payment-agree"
                        onChange={handleAgreement}
                      />
                      <label htmlFor="agree" className="text-base ">
                        구매조건 확인 및 결제 진행 동의
                      </label>
                    </div>
                    <div className="flex items-center gap-2">
                      <input
                        className="h-5 w-5"
                        type="checkbox"
                        id="policy"
                        ref={agreePolicyRef}
                        checked={agreePolicy}
                        name="policy-agree"
                        onChange={handleAgreement}
                      />
                      <label htmlFor="policy" className="text-base">
                        개인정보 제 3자 동의
                      </label>
                    </div>
                  </div>
                  <div className="border rounded my-2 p-4 bg-slate-50">
                    <span className="text-base font-bold">법적고지 </span>
                    <p className="text-sm text-neutral-500">
                      (주)카카오에서 판매하는 상품 중에는 개별 판매자가 판매하는
                      상품이 포함되어 있습니다. 개별 판매자가 판매하는 상품에 대해
                      (주)카카오는 통신중개 판매업자로서 통신판매의 당사자가 아니며
                      상품의 주문, 배송 및 환불 등과 관련한 의무와 책임은 각
                      판매자에게 있습니다.
                    </p>
                  </div>
                  {/* 결제하기 버튼 */}
                  <button
                    className={`border rounded w-full my-4 p-4 font-medium ${
                      agreePayment && agreePolicy
                        ? "bg-[#feeb00] hover:bg-yellow-300"
                        : "bg-neutral-300 text-neutral-500"
                    }`}
                    onClick={() => {
                      if (agreePayment === false || agreePolicy === false) {
                        alert("모든 항목에 동의가 필요합니다.");
                        return;
                      }
                      // POST: /orders/save
                      // DB: 장바구니에 있는 모든 항목이 결제로 저장
                      // 장바구니는 비워짐
                      // 페이지 이동 -> 주문완료 페이지(리턴 받은 주문 아이디)
                      // /orders/complete/:id
                      mutate(null, {
                        onError: (e) => {
                          alert(
                            "주문에 실패했습니다. 재로그인 후 다시 시도해 주십시오."
                          );
                          logOut();
                          navigate(staticServerUrl + "/login");
                          // 사용자 정보가 유실(header의 autorization)시
                          // /login 페이지로 이동
                          // 엉뚱한 상품 데이터가 들어왔을 경우 404 페이지
                        },
                        onSuccess: (res) => {
                          const id = res.data.response.id;
                          alert("주문이 완료되었습니다.");
                          navigate(staticServerUrl + `/order/complete/${id}`);
                        },
                      });
                    }}
                  >
                    <span className="font-bold text-xl">
                      {comma(totalPrice)}원 결제하기
                    </span>
                  </button>
                </div>
              )}
              <hr />
            </div>
          </div>
        );
      };
export default OrderTemplate;