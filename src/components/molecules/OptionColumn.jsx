import { useState, } from 'react'
import { styled } from 'styled-components'
import OptionList from '../atoms/OptionList'
import Title from '../atoms/Title'
import { comma } from '../../utils/convert'
import { useMutation } from 'react-query'
import { addCart } from '../../services/cart'
import Counter from '../atoms/Counter'

function OptionColumn({ product }) {
  const [selectedOptions, setSelectedOptions] = useState([])

  const handleOnClickOption = (option) => {
    // 동일한 옵션 클릭을 방지해주어야 하는 코드
    const findOption = selectedOptions.find((el) => {
      return el.optionId === option.id
    })
    // 동일한 옵션을 클릭 했을 때
    if(findOption){
      alert("이미 선택된 옵션입니다")
      //Toast로 이미 선택된 옵션이라고 알려주기
      return
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

  const handleOnCounterClick = (count, optionId) => {
    console.log(selectedOptions)
    setSelectedOptions((prev) => {
      return prev.map((ele)=>{
        if(ele.optionId === optionId){
          return {
            ...ele,
            quantity: count,
          }
        }
        return ele
      })
    })
  }

  // 장바구니 담기 api 처리
  // post method
  const { mutate } = useMutation({
    mutationFn: addCart,
  })



  return (
    <Column>
      <h3>옵션 선택</h3>
      {/* 옵션 담기를 할 수 있는 영역 */}
      <OptionList 
        options={product.options}
        // 사용자가 선택한 option 
        onClick={handleOnClickOption}
          // 장바구니 담기 api
          // optionId, quantity
      />
      <hr />
      {/* 담긴 옵션이 표기 */}
      {/* ui에서 필요한 정보: 옵션 이름, 옵션 가격 옵션 수량, 옵션 총 가격 */}
      {selectedOptions.map((option) => (
        <ol key={option.optionId}>
          <li>
            <Counter
              onIncrease={(count) => handleOnCounterClick(count,option.optionId)}
              onDecrease={(count) => handleOnCounterClick(count,option.optionId)}
            />
            <span>{option.name}</span>
            <span>{comma(option.price)}</span>
          </li>
        </ol>
      ))}
      <hr/>
      
      <Title>
        <span>총 수량: {
            selectedOptions.reduce((acc, cur)=>{
              return acc + cur.quantity 
            }, 0)+'개 '}</span>
        <span> 총 상품금액: {
            comma(selectedOptions.reduce((acc, cur)=>{
              return acc + cur.quantity*cur.price
            }, 0))+'원'}</span>
      </Title>

      <ButtonGroup>
        {/* 장바구니 담기 버튼 위치: 장바구니 담기만 구현 */}
        {/* 톡딜가 구현은 안함 */}
        <button onClick={() => {
          mutate(
            selectedOptions.map((ele)=>{
            return{
              optionId: ele.optionId,
              quantity: ele.quantity,
            }
            }),{
              onSuccess: () => {
              alert("장바구니에 담겼습니다.")
            },
              onError: () => {
              alert("장바구니 담기 실패 했습니다.")
            },
              }
            )
          }
        }>장바구니 담기</button>
      </ButtonGroup>
    </Column>

  )
}

export default OptionColumn

const ButtonGroup = styled.div`

`

const Column = styled.div`

`