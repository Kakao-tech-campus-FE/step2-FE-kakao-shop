import { useState, } from 'react'
import { styled } from 'styled-components'
import OptionList from '../atoms/OptionList'
import Title from '../atoms/Title'
import { comma } from '../../utils/convert'
import { useMutation } from 'react-query'
import { addCart } from '../../services/cart'
import Counter from '../atoms/Counter'
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
    if(count<0){
      return;
    }

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

  function handleOnClickCart() {
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
        onError: (error) => {
          alert(error.data.error.message + '\n장바구니 담기 실패하였습니다')
        },
      }
    )
  }



  return (
    <Column className='relative w-[360px] bg-white'>
      <div className='absolute py-[30px] pl-[30px] min-h-[350px]'>
        <div className='overflow-y-auto max-h-[450px]'>
          <div>
            <h3 className='overflow-hidden pb-[10px] pl-[3px] text-base leading-8 text-black font-bold'>옵션 선택</h3>
            {/* 옵션 담기를 할 수 있는 영역 */}
            <OptionList 
              options={product.options}
              // 사용자가 선택한 option 
              onClick={handleOnClickOption}
                // 장바구니 담기 api
                // optionId, quantity
            />
          </div>
  
          {/* 담긴 옵션이 표기 */}
          {/* ui에서 필요한 정보: 옵션 이름, 옵션 가격 옵션 수량, 옵션 총 가격 */}
          <div>


          </div>
          {selectedOptions.map((option) => (
            <ol key={option.optionId}>
              <li className='mt-[10px] px-[17px] py-[20px] bg-gray-50'>
                <div className='pr-[38px] text-sm'>{option.name}</div>
                <div className='flex pt-[11px]'>
                  <Counter
                   initialCount={option.quantity}
                   onIncrease={(count) => handleOnCounterClick(count,option.optionId)}
                   onDecrease={(count) => handleOnCounterClick(count,option.optionId)}
                  />
                  <span className='ml-auto'>{comma(option.price * option.quantity)}원</span>
                </div>
              </li>
            </ol>
          ))}
          <hr/>
        </div>
     
      <div className='flex py-[22px] pr-[3px] border-t-[1px] border-solid border-gray-300 mt-[50px]'>
        <div className='text-lg'>총 수량: 
          <span className='font-semibold pl-[5px]'> 
            {
            selectedOptions.reduce((acc, cur)=>{
              return acc + cur.quantity 
            }, 0)+'개 '}
          </span>          
        </div>
        <div className='ml-auto leading-7 font-semibold'> 총 상품금액: 
          <span className='text-xl text-rose-600 pl-[5px]'>
            {
            comma(selectedOptions.reduce((acc, cur)=>{
              return acc + cur.quantity*cur.price
            }, 0))+'원'}
          </span>
        </div>
      </div>

      <ButtonGroup>
        {/* 장바구니 담기 버튼 위치: 장바구니 담기만 구현 */}
        {/* 톡딜가 구현은 안함 */}
        <button>
        <FontAwesomeIcon icon={faCartShopping} size='2x' onClick={handleOnClickCart}/>
        </button>   
      </ButtonGroup>
      </div>
    </Column>
  )
}

export default OptionColumn

const ButtonGroup = styled.div`

`

const Column = styled.div`

`