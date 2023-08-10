import { comma } from '../../utils/convert'
import { styled } from 'styled-components'



function OptionItems( { items }) {
  return (
    <>
      {items.map((item, idx) => {
        return (
          <Conatainor key={item.id} className='flex flex-col gap-2 '>
          <div className='font-bold text-sm'>옵션 {idx + 1}.</div>
          <p className='text-lg text-gray-400'>{item.optionName}</p>
          <div className='font-bold text-sm'onLabel>구매수량</div>
          <p className='text-lg text-gray-400'>{item.quantity}</p>
          <div className='font-bold text-sm'>금액(옵션 금액 * 수량)</div>
          <p className='text-lg text-gray-400'>{comma(item.price * item.quantity)}</p>
        </Conatainor>
        )
      })}
    </>
  )
}

export default OptionItems

const Conatainor = styled.div`
  & > .label {
    font-size: 0.8rem;
    font-weight: bold;
  }
  
  p {
    font-size: 12.rem;
    line-height: 1.5;
  }
`;

