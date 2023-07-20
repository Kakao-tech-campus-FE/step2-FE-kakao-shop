import React, { useEffect, useState } from 'react'
import OptionContainer from '../atoms/option/OptionContainer'
import OptionListBox from 'components/atoms/option/OptionListBox'
import OptionItem from 'components/molecules/OptionItem'
import SubmitButton from 'components/atoms/SubmitButton'
import TotalPrice from 'components/atoms/option/TotalPrice'
import OptionSelected from 'components/molecules/OptionSelected'
import strPrice from 'utils/price'
import { RiArrowDownSLine, RiArrowUpSLine } from "react-icons/ri";
import { useDispatch, useSelector } from 'react-redux';
import addToCart from 'api/addToCart'
import SelectedItemBox from 'components/atoms/option/SelectedItemBox'
import getCarts from 'api/getCarts'
import instance from 'api/instance'

const DetailOption = (props) => {
  const initialList = props.options.map((item) => { 
    return {id:item.id, quantity: 0, optionName: item.optionName, price: item.price} 
  })

  const [quantity, setQuantity] = useState(initialList)
  const [open, setOpen] = useState(false)
  const [totalPrice, setTotalPrice] = useState(0)
  const [totalQuantity, setTotalQuantity] = useState(0)
  const [duplicate, setDuplicate] = useState(false)

  const selectOption = (id) => {
    setOpen(prev => false)
    const newList = quantity.map((obj) => (
      obj.id === id && (obj.quantity === 0 || obj.quantity === NaN)
      ? {...obj, quantity: 1}
      : {...obj} 
    ))
    setQuantity(prev => newList)
  }

  const changeQuantity = (id, newQuntity) => {
    if (newQuntity === 0 || Number.isNaN(newQuntity)) {
      return
    }
    if (newQuntity === -1) {
      newQuntity = 0
    }
    const newList = quantity.map((obj) => (
      obj.id === id
      ? {...obj, quantity: newQuntity}
      : {...obj} 
    ))
    setQuantity(prev => newList)
  }

  useEffect(()=>{
    console.log(quantity)
    let p = 0;
    let q = 0
    for (const item of quantity) {
      if (item.quantity > 0) {
        p += item.quantity * item.price
        q += item.quantity
      }
    }
    setTotalPrice(prev => p)
    setTotalQuantity(prev => q)
  }, [quantity])

  const loginState = useSelector((state) => state.login)

  const test = () => {
    return instance.post("/carts/add", 
      [ {
        "optionId" : 1,
        "quantity" : 5
      }, {
        "optionId" : 2,
        "quantity" : 5
      } ]
    );
  }

  const submitHandler = () => {
    if (totalQuantity === 0) {
      alert("옵션을 선택해주세요")
      return
    }
    
    // 저장

    if (!loginState.islogin) {
      alert("로그인 해주세요")
      return
    }
    
    addToCart(quantity)

  }

  return (
    <OptionContainer>
      <OptionListBox open={open}>
        <OptionItem title={true} onClick={()=>setOpen(prev=>!prev)}> 
          <span className="flex"> 
            선택하기 
            {open 
              ? <RiArrowUpSLine className='w-5 h-5 ml-auto'/>
              : <RiArrowDownSLine className='w-5 h-5 ml-auto'/>
            }
          </span>
        </OptionItem>

        {open 
          ? props.options?.map((item)=>(
            <OptionItem 
              key={item.optionName}
              optionPrice={strPrice(item.price)}
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
          return (
            <SelectedItemBox>
              <OptionSelected 
                key={item.optionName} 
                optionName={item.optionName} 
                price={strPrice(item.quantity * item.price)}
                quantity={item.quantity}
                sub={() => changeQuantity(item.id, item.quantity - 1)}
                add={() => changeQuantity(item.id, item.quantity + 1)}
                clear={() => changeQuantity(item.id, -1)}
                change={(event) => changeQuantity(item.id, parseInt(event.target.value))}
                />
            </SelectedItemBox> 
          )} 
        })
      }

      <TotalPrice price={strPrice(totalPrice)} quantity={totalQuantity}/>

      <div className='grid grid-cols-2 gap-4'>
        <SubmitButton 
          color="white" 
          border="1px solid orange"
          onClick={submitHandler}
        >
          장바구니
        </SubmitButton>
        <SubmitButton>
          구매하기
        </SubmitButton>
      </div>
    </OptionContainer>
  )
}

export default DetailOption