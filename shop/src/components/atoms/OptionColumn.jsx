import { useState } from "react"
import OptionList from "./OptionList"
import { comma } from "../../utils/convert"
import Counter from "./Counter"

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

    // 이미 선택된 옵션이면 수량 증가
    // if(isOptionSelected){
      setSeletectOptions((prev)=>
        prev.map((el)=>
          el.optionId === option.id
            ?{ ...el, quantity: el.quantity +1 }
            : el)
      )
    // }

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
  return (
    <div className="option-column">
      <h3>옵션 선택</h3>
      {/* 옵션 선택 가능 */}
      <OptionList 
      options={product.options} 
      onClick={handleOnClickOption}/>
      <hr/>
      <div className="total-price">
        <span>총 상품금액</span>
      </div>
      {/* 담긴 옵션 표기 */}
      {/* ui에서 필요한 정보: 옵션이름, 옵션가격, 옵션 수량, 옵션 총 가격 */}
      {selectedOptions.map((option)=>(
        <ol key={option.id} className="selected-option-list">
          <li className="selected-option">
            {/* 수량 변경 가능 */}
            <Counter 
              onIncrease = {(count) => handleOnChange(count, option.id)}
              onDecrease={(count) => handleOnChange(count, option.id)}
            />
            <span className="name">{option.name}</span>
            <span className="price">{comma(option.price)}원</span> 
          </li>
          
        </ol>
      ))}
      <div className="button-group">
        {/* 장바구니 담기 버튼 */}
      </div>
    </div>
  )
}

export default OptionColumn