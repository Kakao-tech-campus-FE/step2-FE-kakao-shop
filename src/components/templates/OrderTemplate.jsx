import React from 'react';
import { getCart } from '../../services/cart';
import {useQuery,useMutation} from '@tanstack/react-query';
import {useNavigate} from 'react-router-dom'
// import { comma } from '../../utils/convert';
import { order } from '../../services/order';
import routes from '../../routes/routes';
import { useState } from 'react';
import { useRef } from 'react';
import OptionList from '../atoms/OptionList';
import Button from '../atoms/Button';
const staticServerUri = process.env.REACT_APP_PATH || "";
const OrderTemplate = ({ data }) => {
    console.log(data)

    const [allAgree,setAllagree]=useState(false)
    const [agreePolicy,setAgreePolicy]=useState(false);
    const [agreePayment,setAgreePayment]=useState(false);
    // const [agree,setAllAgree]=useState(false);

    const allAgreeRef = useRef(null);
    const agreePaymentRef = useRef(null);
    const agreePolicyRef =useRef(null)

    const handleAllAgree=(e)=>{
        const value= e.target.checked;
        setAgreePolicy(value)
        setAgreePayment(value)
    }
    const handleAgreement=(e)=>{
        const {name,checked}=e.target;
        if(name==='payment-agree'){
            setAgreePayment(checked)
        }else if(name==='policy-agree'){
            setAgreePayment(checked)
        }
        if(!checked){
            setAllagree(false)
        }
    }


    const products=data?.data?.response?.products;
    const totalPrice = data.data.response.totalPrice;

    const navigate=useNavigate();
    const {mutate}=useMutation({
        mutationFn:order,
        //queryFn:order,
    })
    const {data:Data, error }= useQuery(getCart);

    const OrderItems=()=>{
        let renderComponent=[];
        console.log(products)
        if(Array.isArray(products)===false) return;

        products.forEach((item)=>{
            renderComponent.push(
                item.carts.map((cart)=>{
                    return(
                        <div key={cart.id} className='p-4 border-t'>
                            <div className='product-name'>
                                <span>{`${item.productName}-${cart.option.optionName}`}</span>
                            </div>
                            <div className='quantity'>
                                <span>{cart.quantity}개</span>
                            </div>
                            <div className='price'>
                                <span>{cart.price*cart.quantity}원</span>
                            </div>
                        </div>

                    )
                })
            )
        })
        return renderComponent
    }
    return (
        <div className='py-20'>
            <div className='block mx-auto max-w-[1024px] w-[100%]'>
                <div className='border py-4'>
                    <h1 className='text-sm font-bold'> 주문하기</h1>
                </div>
                <div className='border py-4'>
                    <h2 className='text-sm font-bold'> 배송</h2>
                </div>
                <div className='border py-4'>
                    <div className='flex items-center gap-4'>
                    <span>홍길동</span>
                   <span className='text-blue-400 bg-blue-100 rounded-md text-xs p-1'>기본배송지</span>
                    </div>
                <div className='border py-4'>
                     <span>010-2341-2341</span>
                </div>
                <div className='border py-4'>
                    <span>서울특별시 강남구 도곡동</span>
                </div>
                <div className='border py-4'>
                    <h2>주문상품 정보</h2>
                </div>
                {/*각 주문의 정보 */ }
                
                <OrderItems/>
                <div className='border p-4 flex items-center justify-between'></div>
                    <h3>총 주문 금액</h3>
                    <span className='price'>{totalPrice}원</span>
                </div>

                {/* 결제 동의 */}

                <div className='border py-4 flex flex-direction:reverse-column'>
                    <div className='flex'>
                        <input type="checkbox" id='all-agree'
                         ref={allAgreeRef}
                         checked={agreePayment&&agreePolicy}
                         onChange={handleAllAgree}/>
                        
                        <label htmlFor='all-agree' className='text-xl font-bold'>전체동의</label>
                        {/* 체크표시니까 굳이 검색엔진 생각할 필요없음. */}
                    </div>
                    <div className='flex'>
                        <input type="checkbox" id='agree'
                                ref={agreePaymentRef}
                                checked={agreePayment}
                                onChange={handleAgreement}/>

                        <label htmlFor='agree' className='text-sm'>구매조건 확인 및 결제 진행 동의</label>
                        {/* 체크표시니까 굳이 검색엔진 생각할 필요없음. */}
                    </div>
                    <div className='flex'>
                        <input type="checkbox" 
                        id='policy'
                        ref={agreePolicyRef}
                        checked={agreePolicy}
                        onChange={handleAgreement}/>
                        <label htmlFor='policy' className='text-sm'>개인정보 제 3자 동의</label>
                        {/* 체크표시니까 굳이 검색엔진 생각할 필요없음. */}
                    </div>
                </div>

            </div>
            <Button className='bg-yellow-500 w-full p-4 font-medium'
             onClick={() => {
                if (!agreePayment || !agreePolicy) {
                  alert("모든 항목에 동의가 필요합니다.");
                  return;
                }
  
                mutate(null, {
                  onError: (err) => {
                    // 사용자 정보가 유실된 경우 로그인 페이지로 리다이렉트
                    alert("로그인이 필요합니다.");
                    navigate(staticServerUri+"/login");
                  },
                  onSuccess: (res) => {
                    const id = res.data.response.id;
                    navigate(`${staticServerUri}/orders/complete/${id}`);
                  },
                });
              }}> 결제하기
           {/* { mutation.mutate(null,{
                onError:()=>{
                    alert('주문 실패!');
                },
                onSuccess:(res)=>{
                    const id =res.response.id
                    alert('주문이 완료되었습니다');
                    navigate(`${routes.orderComplete}/${id}`)
                }
            })} */}
            </Button>
            
        </div>
    );
};

export default OrderTemplate;