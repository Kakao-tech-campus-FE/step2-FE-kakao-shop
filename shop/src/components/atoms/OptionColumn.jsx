import { useState } from "react"
import OptionList from "./OptionList"
import { comma } from "../../utils/convert"
import Counter from "./Counter"
import { useMutation } from "react-query"
import {addCart} from "../../services/cart"
import Button from "./Button"
import Photo from "./Photo"

const OptionColumn = ({product}) => {
  const [selectedOptions, setSeletectOptions] = useState([{
    optionId: 1,
    quantity: 1,
    name: "옵션 이름",
    price: 1000
  }])
  
  // 장바구니 담기 api에서 요청한 정보: optionId, quantity
  const handleOnClickOption = (option) =>{
    // 동일한 옵션 클릭 방지
    const isOptionSelected = selectedOptions.find(
      (el) => el.optionId === option.id
    )

    //이미 선택된 옵션이면 수량 증가
    if(isOptionSelected){
      setSeletectOptions((prev)=>
        prev.map((el)=>
          el.optionId === option.id
            ?{ ...el, quantity: el.quantity +1 }
            : el)
      )
    }

    setSeletectOptions((prev)=>[
      ...prev,
      {
        optionId: option.id,
        quantity: 1,
        price: option.price,
        name: option.optionName
      }
    ])
  }

  const handleOnChange = (count, optionId) =>{
      setSeletectOptions((prev)=>{
        return prev.map((el)=>{
          if(el.optionId === optionId){
            return {
              ...el,
              quantity: count
            }
          }
          return el
        })
      })
    }
  
  // 장바구니 담기 api 처리
  const {mutate} = useMutation({
    mutationFn: addCart
  })

  return (
    <div className="relative mt-20 left-20 pb-8 pt-5 ring-1 ring-gray-900/5 sm:mx-auto sm:rounded-lg sm:px-12">
      <h3 className="space-y-6 py-8 text-2xl font-bold">옵션 선택</h3>
      {/* 옵션 선택 가능 */}
      <OptionList 
        options={product.options} 
        onClick={handleOnClickOption}
      />
      {/* 담긴 옵션 표기 */}
      {/* ui에서 필요한 정보: 옵션이름, 옵션가격, 옵션 수량, 옵션 총 가격 */}
      {selectedOptions.map((option)=>(
        <ol key={option.id} className="selected-option-list">
          <li className="selected-option text-xl mb-3">
            {/* 수량 변경 가능 */}
            <span className="mr-2">{option.name}</span>
            <span className="price font-semibold">{comma(option.price)}원</span> 
            <Counter 
              onIncrease = {(count) => handleOnChange(count, option.id)}
              onDecrease={(count) => handleOnChange(count, option.id)}
            />
          </li>
        </ol>
      ))}
      <hr className="my-8"/>
      <div className="text-xl font-semibold mb-8">
        <span className="mr-32">
          총 수량:
          {comma(selectedOptions.reduce((acc, cur)=>{
            return acc+cur.quantity
          }, 0))}개
        </span>
        <span>
        총 상품금액:
          <span style={{color: "red"}}>
            {comma(selectedOptions.reduce((acc, cur)=>{
              return acc+cur.quantity * cur.price
            }, 0))} 
          </span>
          원
        </span>
      </div>
      <div className="button-group">
        {/* 장바구니 담기 버튼 */}
        <Button
          className="relative top-8 left-2"
          onClick={()=>{
            mutate(
              selectedOptions.map(el=>{
                return {
                  optionId: el.optionId,
                  quantity: el.quantity
                }
              }),{
                onSuccess:()=>{
                  alert("장바구니에 담겼습니다.")
                },
                onError:()=>{
                  alert("장바구니 담기에 실패했습니다.")
                }
              }
            )
          }}><Photo src="/cart.png" alt="장바구니"/></Button>
          <Button className="relative left-20 bottom-4 btn-primary text-2xl px-20 py-8">바로구매</Button>
      </div>
    </div>
  )
}

export default OptionColumn