import React, { useEffect, useState } from 'react'
import OptionContainer from '../atoms/option/OptionContainer'
import OptionListBox from 'components/atoms/option/OptionListBox'
import OptionItem from 'components/molecules/OptionItem'
import SubmitButton from 'components/atoms/SubmitButton'
import TotalPrice from 'components/atoms/option/TotalPrice'
import OptionSelected from 'components/molecules/OptionSelected'
import strPrice from 'utils/price'

const DetailOption = (props) => {
  const initialList = props.options.map((item) => { 
    return {id:item.id, quantity: 0, optionName: item.optionName, price: item.price} 
  })

  const [quantity, setQuantity] = useState(initialList)
  const [open, setOpen] = useState(false)
  const [totalPrice, setTotalPrice] = useState(0)

  const selectOption = (id) => {
    const newList = quantity.map((obj) => (
      obj.id === id && obj.quantity === 0
      ? {...obj, quantity: obj.quantity + 1}
      : {...obj} 
    ))
    setQuantity(prev => newList)
  }

  const changeQuantity = (id, newQuntity) => {
    console.log(id, newQuntity)
    const newList = quantity.map((obj) => (
      obj.id === id
      ? {...obj, quantity: newQuntity}
      : {...obj} 
    ))
    setQuantity(prev => newList)
  }

  useEffect(()=>{
    let total = 0;
    for (const item of quantity) {
      if (item.quantity > 0) {
        total += item.quantity * item.price
      }
    }
    setTotalPrice(prev => total)
  }, [quantity])

  return (
    <OptionContainer>
      <OptionListBox open={open}>
        <OptionItem summary={true} onClick={()=>setOpen(prev=>!prev)}> 선택하기 </OptionItem>
        {open 
          ? props.options?.map((item)=>(
            <OptionItem 
              key={item.optionName}
              optionPrice={item.price}
              onClick={() => selectOption(item.id)}
            >
              {item.optionName}
            </OptionItem>
            ))
          : null
        }
        
      </OptionListBox>
      {quantity.map((item) => {
          if (item.quantity > 0) {
            return <OptionSelected 
              key={item.optionName} 
              optionName={item.optionName} 
              quantity={item.quantity}
              price={item.quantity * item.price}
              subDisabled={item.quantity === 1}
              subOnClick={() => changeQuantity(item.id, item.quantity - 1)}
              addOnClick={() => changeQuantity(item.id, item.quantity + 1)}
              clearOnClick={() => changeQuantity(item.id, 0)}
              onChange={(event) => changeQuantity(item.id, parseInt(event.target.value))}
              />
          }
        })}
      <TotalPrice price={strPrice(totalPrice)} />

      <div className='grid grid-cols-2 gap-5'>
        <SubmitButton>장바구니</SubmitButton>
        <SubmitButton>구매하기</SubmitButton>
      </div>
    </OptionContainer>
  )
}

export default DetailOption